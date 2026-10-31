"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";
import { ArrowUpRight, Close, Menu } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="brand" aria-label={`${profile.name} — home`}>
          <span className="brand__mark">{profile.initial}</span>
          <span className="brand__name">{profile.shortName}</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? "is-active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta">
          <a href="#contact" className="btn btn--ghost">
            Let&apos;s Talk
          </a>
          <a href="#contact" className="icon-btn" aria-label="Contact me">
            <ArrowUpRight />
          </a>
        </div>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--solid" onClick={() => setOpen(false)}>
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}
