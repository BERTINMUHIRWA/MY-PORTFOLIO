import { projects } from "@/lib/data";
import { ArrowUpRight } from "./Icons";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <Reveal>
          <span className="pill">Selected Work</span>
          <h2 className="display">
            My <strong>Portfolio</strong>
          </h2>
        </Reveal>

        <div className="projects">
          {projects.map((p, i) => {
            const Tag = p.href ? "a" : "div";
            const linkProps = p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {};
            return (
              <Reveal key={p.title} delay={(i % 2) * 90}>
                <Tag className="project" {...linkProps}>
                  <div className="project__art" aria-hidden>
                    <span className="project__index">{String(i + 1).padStart(2, "0")}</span>
                    <span className="project__glyph">{p.title.charAt(0)}</span>
                  </div>
                  <div className="project__meta">
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <div className="project__head">
                    <h3>{p.title}</h3>
                    <span className="icon-btn">
                      <ArrowUpRight />
                    </span>
                  </div>
                  <p>{p.description}</p>
                  <div className="tag-row">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </Tag>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
