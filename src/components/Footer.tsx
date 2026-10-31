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
              <a href={profile.socials.github} target="https://www.github.com/BERTINMUHIRWA" rel="noreferrer" aria-label="GitHub" className="icon-btn">
                <Github />
              </a>
              <a href={profile.socials.linkedin} target="https://www.linkedin.com/in/bertin-muhirwa-10bab93ba" rel="noreferrer" aria-label="LinkedIn" className="icon-btn">
                <Linkedin />
              </a>
              <a href={profile.socials.instagram} target="https://www.instagram.com/bertincreatives" rel="noreferrer" aria-label="Instagram" className="icon-btn">
                <Instagram />
              </a>
            </div>
      </div>
    </footer>
  );
}
