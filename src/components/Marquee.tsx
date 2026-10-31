import { marquee } from "@/lib/data";
import { Sparkle } from "./Icons";

export default function Marquee() {
  const items = [...marquee, ...marquee, ...marquee, ...marquee];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div className="marquee__group" key={copy}>
            {items.map((item, i) => (
              <span className="marquee__item" key={`${copy}-${i}`}>
                {item}
                <Sparkle />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
