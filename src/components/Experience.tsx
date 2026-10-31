import { experiences, profile } from "@/lib/data";
import { ArrowUpRight } from "./Icons";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container experience">
        <Reveal className="experience__intro">
          <h2 className="display">
            My <strong>Experiences</strong>
          </h2>
          <p className="lead">
            I&apos;ve had the pleasure of working with companies across a range of industries, and I&apos;m always open
            to new, challenging work.
          </p>
          <div className="about__actions">
            <a href={profile.cvUrl} className="btn btn--solid btn--lg" download>
              Download CV
            </a>
            <a href={profile.cvUrl} className="icon-btn icon-btn--solid" aria-label="Download CV" download>
              <ArrowUpRight />
            </a>
          </div>
        </Reveal>

        <ol className="timeline">
          {experiences.map((e, i) => (
            <Reveal as="li" key={`${e.company}-${i}`} delay={i * 90} className="timeline__item">
              <div className="timeline__period">
                {e.period}
                <span className="timeline__dot" />
              </div>
              <div>
                <h3 className="timeline__role">
                  {e.role} <span>: {e.company}</span>
                </h3>
                <p>{e.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
