import { essentials } from "@/lib/content";

const rows: { label: string; value: string }[] = [
  { label: "What", value: essentials.what },
  { label: "Who", value: essentials.who },
  { label: "Where", value: essentials.where },
  { label: "When", value: essentials.when },
  { label: "How much", value: essentials.howMuch },
];

export default function Essentials() {
  return (
    <section id="info" className="bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl mb-10">The essentials</h2>
        <dl className="grid gap-8 sm:grid-cols-2">
          {rows.map((row) => (
            <div key={row.label} className="border-t border-ink/15 pt-4">
              <dt className="font-data text-xs tracking-[0.2em] uppercase text-wine mb-2">
                {row.label}
              </dt>
              <dd className="font-body text-base leading-relaxed text-ink/85">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
