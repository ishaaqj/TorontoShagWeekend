import { workshops } from "@/lib/content";

export default function Workshops() {
  return (
    <section id="workshops" className="bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl mb-3">Workshops</h2>
        <p className="font-body text-ink/70 max-w-xl mb-10">
          Limited space per workshop — sign up below to secure your spot.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {workshops.map((workshop) => (
            <article
              key={workshop.id}
              className="border border-ink/15 rounded-sm p-6 bg-paper-soft/60 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl leading-tight">{workshop.title}</h3>
                <span className="font-data text-sm text-wine whitespace-nowrap pt-1">
                  {workshop.price}
                </span>
              </div>
              <p className="font-body text-sm text-ink/70">
                With {workshop.instructors.join(" & ")}
              </p>
              <p className="font-data text-xs tracking-wide uppercase text-ink/60">
                {workshop.time} · {workshop.location} · {workshop.level}
              </p>
              <p className="font-body text-base leading-relaxed text-ink/85 mt-1">
                {workshop.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
