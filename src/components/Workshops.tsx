import { workshops as fallbackWorkshops } from "@/lib/content";
import { client } from "../../sanity/lib/client";
import { workshopsQuery } from "../../sanity/lib/queries";
import type { Workshop } from "../../sanity/lib/types";


async function getWorkshops(): Promise<Workshop[]> {
  try {
    const workshops = await client.fetch<Workshop[]>(workshopsQuery);
    console.log("Raw workshops from Sanity:", JSON.stringify(workshops, null, 2));
    if (workshops && workshops.length > 0) {
      return workshops;
    }
  } catch (error) {
    console.error("Sanity fetch failed for workshops, using fallback content:", error);
  }

  return fallbackWorkshops;
}

export default async function Workshops() {
  const workshops = await getWorkshops();

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
              key={workshop._id}
              className="border border-ink/15 rounded-sm p-6 bg-paper-soft/60 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl leading-tight">{workshop.title}</h3>
                <span className="font-data text-sm text-wine whitespace-nowrap pt-1">
                  {workshop.price}
                </span>
              </div>
              {workshop.instructors && workshop.instructors.length > 0 ? (
                <p className="font-body text-sm text-ink/70">
                  With {workshop.instructors.join(" & ")}
                </p>
              ) : null}
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
