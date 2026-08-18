import BeatDivider from "./BeatDivider";
import type { EventSettings } from "../../sanity/lib/types";

type LocationProps = {
  location?: EventSettings["location"];
};

export default function Location({ location }: LocationProps) {
  return (
    <section id="location" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl mb-6">Location</h2>
        {location?.name ? <p className="font-display text-2xl mb-1">{location.name}</p> : null}
        {location?.address ? <p className="font-body text-paper/80">{location.address}</p> : null}
        {location?.city ? <p className="font-body text-paper/80">{location.city}</p> : null}
      </div>
      <BeatDivider tone="onInk" />
    </section>
  );
}