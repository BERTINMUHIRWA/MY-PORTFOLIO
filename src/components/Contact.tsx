"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";
import { ArrowUpRight, Mail, MapPin } from "./Icons";
import Reveal from "./Reveal";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "ok"; message: string } | { kind: "error"; message: string };

export default function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string; error?: string };
      if (!res.ok || !json.ok) {
        setStatus({ kind: "error", message: json.error ?? "Something went wrong. Please try again." });
        return;
      }
      form.reset();
      setStatus({ kind: "ok", message: json.message ?? "Thanks — your message has been sent." });
    } catch {
      setStatus({ kind: "error", message: "Network error. Please check your connection and try again." });
    }
  }

  const sending = status.kind === "sending";

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <Reveal className="contact__copy">
          <span className="pill">Contact</span>
          <h2 className="display">
            Let&apos;s build something <strong>great</strong> together.
          </h2>
          <p className="lead">
            Have a project, an idea or a role in mind? Send a message and I&apos;ll get back to you as soon as I can.
          </p>
          <ul className="contact__details">
            <li>
              <Mail />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <MapPin />
              <span>{profile.location}</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="form__row">
              <label>
                <span>Name</span>
                <input name="name" type="text" required minLength={2} maxLength={80} autoComplete="name" placeholder="Your name" />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" required maxLength={120} autoComplete="email" placeholder="you@example.com" />
              </label>
            </div>
            <label>
              <span>Subject</span>
              <input name="subject" type="text" maxLength={120} placeholder="What is this about?" />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" required minLength={10} maxLength={4000} rows={6} placeholder="Tell me about your project…" />
            </label>
            {/* Honeypot: real visitors never see or fill this. */}
            <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hp" aria-hidden />

            <button type="submit" className="btn btn--solid btn--lg form__submit" disabled={sending}>
              {sending ? "Sending…" : "Send message"} <ArrowUpRight size={16} />
            </button>

            <p className={`form__status ${status.kind === "ok" ? "is-ok" : ""} ${status.kind === "error" ? "is-error" : ""}`} role="status" aria-live="polite">
              {status.kind === "ok" || status.kind === "error" ? status.message : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
