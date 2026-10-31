import Image from "next/image";
import { profile, stack, stats } from "@/lib/data";
import { ArrowUpRight } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden />
      <div className="container hero__inner">
        <div className="hero__copy">
          <a href="#contact" className="pill-badge">
            <span className="pill-badge__dot" />
            {profile.availability}
            <span className="pill-badge__action">Let&apos;s talk</span>
          </a>

          <h1 className="hero__title">
            {profile.headline.map((line, i) => (
              <span key={i} className="hero__line" style={{ animationDelay: `${120 + i * 110}ms` }}>
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--solid btn--lg">
              Get Started
            </a>
            <a href="#portfolio" className="btn btn--ghost btn--lg">
              View Projects
            </a>
          </div>

          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stats__item">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual">
          <div className="hero__backplate" aria-hidden />
          <div className="hero__ring" aria-hidden />

          <div className="hero__photo">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 900px) 80vw, 480px"
              className="hero__img"
            />
            <div className="hero__photo-fade" aria-hidden />
          </div>

          <div className="chip chip--role">
            <span className="chip__dot" />
            Software Development
          </div>

          <div className="card card--stack">
            <span className="card__label">Stack</span>
            <div className="tag-row">
              {stack.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <a href="#contact" className="card card--open">
            <span className="card__open-title">UI/UX &amp; Graphic</span>
            <span className="card__open-sub">Design skills</span>
            <span className="btn btn--solid btn--block">
              Open to work <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
