import { whatIsShag } from "@/lib/content";
import BeatDivider from "./BeatDivider";

export default function WhatIsShag() {
  return (
    <section id="about" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl mb-8 max-w-xl">
          {whatIsShag.heading}
        </h2>
        <div className="max-w-2xl space-y-5">
          {whatIsShag.body.map((paragraph, i) => (
            <p key={i} className="font-body text-base sm:text-lg leading-relaxed text-paper/85">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <BeatDivider tone="onInk" />
    </section>
  );
}
