import { nav, profile } from "@/lib/data";
import { Github, Instagram, Linkedin } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <nav aria-label="Footer" className="footer__links">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="socials">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn icon-btn--sm">
            <Github size={16} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn icon-btn--sm">
            <Linkedin size={16} />
          </a>
          <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="icon-btn icon-btn--sm">
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
