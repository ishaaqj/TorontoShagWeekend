import { event, links } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-paper text-ink border-t border-ink/15">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
        <p className="font-body text-sm text-ink/70">
          {event.name} · {event.city}
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href={links.facebookEvent}
            className="font-body text-sm text-ink/80 hover:text-wine transition-colors underline underline-offset-4"
          >
            Facebook event
          </a>
          <a
            href={links.instagram}
            className="font-body text-sm text-ink/80 hover:text-wine transition-colors underline underline-offset-4"
          >
            Instagram
          </a>
          <a
            href={`mailto:${links.contactEmail}`}
            className="font-body text-sm text-ink/80 hover:text-wine transition-colors underline underline-offset-4"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
