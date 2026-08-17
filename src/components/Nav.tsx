import { navSections, event } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80 border-b border-paper/10">
      <nav
        className="mx-auto max-w-6xl flex items-center justify-between gap-4 px-6 py-4"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display text-lg text-paper tracking-tight whitespace-nowrap"
        >
          {event.name}
        </a>
        <ul className="hidden sm:flex items-center gap-7">
          {navSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="font-body text-sm text-paper/80 hover:text-brass-bright transition-colors"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#tickets"
          className="font-body text-sm font-semibold bg-brass text-ink px-4 py-2 rounded-sm hover:bg-brass-bright transition-colors whitespace-nowrap"
        >
          Get tickets
        </a>
      </nav>
    </header>
  );
}
