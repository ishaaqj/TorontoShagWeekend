import Image from "next/image";
import { event } from "@/lib/content";
import BeatDivider from "./BeatDivider";

export default function Hero() {
  return (
    <section id="top" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-8 sm:pt-28 sm:pb-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-data text-xs tracking-[0.25em] uppercase text-brass-bright mb-6">
            {event.dates} · {event.city}
          </p>
          <h1 className="font-display text-5xl sm:text-7xl leading-[1.02] max-w-3xl">
            {event.name}
          </h1>
          <p className="font-body text-lg sm:text-xl text-paper/80 max-w-xl mt-6">
            {event.tagline}
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#tickets"
              className="font-body font-semibold bg-brass text-ink px-6 py-3 rounded-sm hover:bg-brass-bright transition-colors"
            >
              Get tickets
            </a>
            <a
              href="#workshops"
              className="font-body font-semibold border border-paper/30 text-paper px-6 py-3 rounded-sm hover:border-brass-bright hover:text-brass-bright transition-colors"
            >
              See workshops
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 border border-brass/40 rounded-sm hidden sm:block" />
          <Image
            src="/images/hero-placeholder.jpg"
            alt="The Toronto shag community — swap this for event branding or a hero photo when ready"
            width={1200}
            height={1200}
            priority
            className="relative w-full h-auto rounded-sm object-cover"
          />
        </div>
      </div>
      <BeatDivider tone="onInk" />
    </section>
  );
}
