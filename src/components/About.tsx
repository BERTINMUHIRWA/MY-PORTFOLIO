import Image from "next/image";
import { profile } from "@/lib/data";
import { ArrowUpRight, Github, Instagram, Linkedin } from "./Icons";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <Reveal className="about__photo-wrap">
          <div className="about__photo">
            <Image
              src={profile.photo}
              alt={`${profile.name}`}
              fill
              sizes="(max-width: 900px) 70vw, 380px"
              className="about__img"
            />
          </div>
          <div className="about__badge">
            <strong>{profile.yearsExperience}</strong> Years of Experience
          </div>
        </Reveal>

        <Reveal delay={100} className="about__copy">
          <h2 className="display">
            About <strong>Me</strong>
          </h2>
          {profile.about.map((p, i) => (
            <p key={i} className="lead">
              {p}
            </p>
          ))}

          <div className="about__actions">
            <a href="#contact" className="btn btn--solid btn--lg">
              Hire Me
            </a>
            <a href="#contact" className="icon-btn icon-btn--solid" aria-label="Hire me">
              <ArrowUpRight />
            </a>

            <span className="about__rule" aria-hidden />
            <span className="about__follow">Follow Me</span>
            <div className="socials">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn">
                <Github />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn">
                <Linkedin />
              </a>
              <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="icon-btn">
                <Instagram />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
