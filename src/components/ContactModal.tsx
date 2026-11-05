"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";
import { Close, Mail, MessageCircle, Phone } from "./Icons";

// Any element with the attribute  data-open-contact  opens this popup.
const SUBJECT = "Project inquiry from your portfolio";
const BODY = "Hello Bertin,\n\nI found your portfolio and I would like to talk about...\n\n";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  // Open when any [data-open-contact] element is clicked (works for buttons placed anywhere).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-open-contact]");
      if (!el) return;
      e.preventDefault();
      lastFocus.current = el;
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Esc to close, keep Tab inside the popup, lock page scroll, restore focus on close.
  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("modal-open");
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>("a,button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab" || !dialog) return;
      const items = Array.from(dialog.querySelectorAll<HTMLElement>("a[href],button"));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("modal-open");
      lastFocus.current?.focus?.();
    };
  }, [open, close]);

  if (!open) return null;

  const whatsapp = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    "Hello Bertin, I found your portfolio and I would like to talk about a project."
  )}`;
  // Opens Gmail's "compose" window in the browser with your address, subject and message already filled in.
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(
    SUBJECT
  )}&body=${encodeURIComponent(BODY)}`;
  // Fallback for visitors who use another mail app (Outlook, Apple Mail, phone mail app…).
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

  return (
    <div className="cm" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="cm__dialog" role="dialog" aria-modal="true" aria-labelledby="cm-title" ref={dialogRef}>
        <button type="button" className="cm__close icon-btn" onClick={close} aria-label="Close">
          <Close size={20} />
        </button>

        <h2 id="cm-title" className="cm__title">
          Let&apos;s <strong>talk</strong>
        </h2>
        <p className="cm__sub">Choose the way that suits you best — I usually reply fast.</p>

        <div className="cm__cards">
          <section className="cm__card">
            <span className="cm__icon">
              <Phone size={26} />
            </span>
            <h3>WhatsApp &amp; Call</h3>
            <p>The fastest way to reach me — send a short brief, a voice note, or just say hello.</p>
            <div className="cm__links">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="cm__link">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
              <a href={`tel:${profile.phoneIntl}`} className="cm__link cm__link--soft">
                <Phone size={18} /> Call {profile.phoneDisplay}
              </a>
            </div>
          </section>

          <section className="cm__card">
            <span className="cm__icon">
              <Mail size={26} />
            </span>
            <h3>Send an Email</h3>
            <p>Share documents, a brief, or anything that needs more detail than a chat.</p>
            <div className="cm__links">
              <a href={gmail} target="_blank" rel="noreferrer" className="cm__link">
                <Mail size={18} /> Open Gmail
              </a>
              <a href={mailto} className="cm__link cm__link--soft">
                {profile.email}
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
