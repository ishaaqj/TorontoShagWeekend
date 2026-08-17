import { location } from "@/lib/content";
import BeatDivider from "./BeatDivider";

export default function Location() {
  return (
    <section id="location" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl mb-6">Location</h2>
        <p className="font-display text-2xl mb-1">{location.name}</p>
        <p className="font-body text-paper/80">{location.address}</p>
        <p className="font-body text-paper/80">{location.city}</p>
      </div>
      <BeatDivider tone="onInk" />
    </section>
  );
}
