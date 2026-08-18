import type { EventSettings } from "../../sanity/lib/types";

type TicketsProps = {
  pricing?: EventSettings["pricing"];
  links?: EventSettings["links"];
};

export default function Tickets({ pricing, links }: TicketsProps) {
  const priceRows: { label: string; value?: string }[] = [
    { label: "Full weekend pass", value: pricing?.fullPass },
    { label: "Single workshop", value: pricing?.singleWorkshop },
    { label: "Social only", value: pricing?.socialOnly },
  ];

  return (
    <section id="tickets" className="bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl mb-10">Tickets</h2>
        <div className="grid gap-10 sm:grid-cols-2 items-start">
          <dl className="divide-y divide-ink/15 border-y border-ink/15">
            {priceRows
              .filter((row) => row.value)
              .map((row) => (
                <div key={row.label} className="flex items-baseline justify-between py-4">
                  <dt className="font-body text-base text-ink/85">{row.label}</dt>
                  <dd className="font-data text-lg text-wine">{row.value}</dd>
                </div>
              ))}
          </dl>
          <div className="flex flex-col gap-4 items-start">
            <p className="font-body text-ink/70 leading-relaxed">
              Workshops have limited space — book ahead to guarantee your spot.
              Social-only tickets may also be available at the door.
            </p>
            {links?.eventbrite ? (
              <a
                href={links.eventbrite}
                className="font-body font-semibold bg-wine text-paper px-6 py-3 rounded-sm hover:bg-wine-soft transition-colors"
              >
                Get tickets on Eventbrite
              </a>
            ) : null}
            {links?.contactEmail ? (
              <a
                href={`mailto:${links.contactEmail}`}
                className="font-body text-sm text-ink/70 hover:text-wine transition-colors underline underline-offset-4"
              >
                Questions, or need another way to pay? Email us
              </a>
            ) : null}
          </div>
        </div>
      </div >
    </section >
  );
}