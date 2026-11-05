"use client";

import { useState } from "react";
import { expertise } from "@/lib/data";
import { ArrowUpRight, ChevronRight } from "./Icons";
import Reveal from "./Reveal";

export default function Expertise() {
  const [active, setActive] = useState(0);

  return (
    <section id="expertise" className="section">
      <div className="container">
        <Reveal>
          <span className="pill">My Expertise</span>
          <h2 className="display display--thin expertise__title">
            I build solutions — but first, I identify the problem.
          </h2>
        </Reveal>

        <ul className="expertise__list">
          {expertise.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 80}>
              <div
                className={`row ${active === i ? "row--active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
              >
                <span className="row__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="row__title">{item.title}</h3>
                <div className="row__body">
                  <p>{item.description}</p>
                  <div className="tag-row">
                    {item.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row__action">
                  {active === i ? (
                    <>
                      <a href="#contact" data-open-contact className="btn btn--solid">
                        Let&apos;s Talk
                      </a>
                      <a href="#contact" data-open-contact className="icon-btn icon-btn--solid" aria-label={`Talk about ${item.title}`}>
                        <ArrowUpRight />
                      </a>
                    </>
                  ) : (
                    <span className="icon-btn" aria-hidden>
                      <ChevronRight />
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
