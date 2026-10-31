import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
};

// Simple in-memory rate limit: 5 messages per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field — pretend success and drop it.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true, message: "Thanks — your message has been sent." });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many messages. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  const name = clean(body.name, 80);
  const email = clean(body.email, 120);
  const subject = clean(body.subject, 120) || "New portfolio message";
  const message = clean(body.message, 4000);

  if (name.length < 2) return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  if (!EMAIL_RE.test(email))
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  if (message.length < 10)
    return NextResponse.json({ ok: false, error: "Your message is a little short — please add more detail." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  // No email provider configured: keep the message in the server logs so nothing is lost.
  if (!apiKey || !to) {
    console.log("[contact] New message (email delivery not configured)", { name, email, subject, message });
    return NextResponse.json({ ok: true, message: "Thanks — your message has been received." });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${esc(name)} &lt;${esc(email)}&gt;</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });
    if (!res.ok) {
      console.error("[contact] Resend error", res.status, await res.text());
      return NextResponse.json(
        { ok: false, error: "Could not send your message right now. Please email me directly." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true, message: "Thanks — your message has been sent." });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your message right now. Please email me directly." },
      { status: 502 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405 });
}
