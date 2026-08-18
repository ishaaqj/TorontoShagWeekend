import type { EventSettings } from "../../sanity/lib/types";

type FooterProps = {
  eventName?: string;
  links?: EventSettings["links"];
};

export default function Footer({ eventName, links }: FooterProps) {
  return (
    <footer className="bg-paper text-ink border-t border-ink/15">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
        <p className="font-body text-sm text-ink/70">
          {eventName ?? "Toronto Shag Weekend"}
        </p>
        <div className="flex flex-wrap gap-6">
          {links?.facebookEvent ? (
            <a
              href={links.facebookEvent}
              className="font-body text-sm text-ink/80 hover:text-wine transition-colors underline underline-offset-4"
            >
              Facebook event
            </a>
          ) : null}
          {links?.instagram ? (
            <a
              href={links.instagram}
              className="font-body text-sm text-ink/80 hover:text-wine transition-colors underline underline-offset-4"
            >
              Instagram
            </a>
          ) : null}
          {links?.contactEmail ? (
            <a
              href={`mailto:${links.contactEmail}`}
              className="font-body text-sm text-ink/80 hover:text-wine transition-colors underline underline-offset-4"
            >
              Email
            </a>
          ) : null
          }
        </div >
      </div >
    </footer >
  );
}