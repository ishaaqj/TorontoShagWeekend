import { teachers } from "@/lib/content";
import BeatDivider from "./BeatDivider";

export default function Teachers() {
  return (
    <section id="teachers" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl mb-10">Teachers</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="border-t border-paper/15 pt-5">
              <h3 className="font-display text-2xl mb-2">{teacher.name}</h3>
              <p className="font-body text-paper/80 leading-relaxed mb-3">{teacher.bio}</p>
              {teacher.instagram ? (
                <a
                  href={teacher.instagram}
                  className="font-data text-xs tracking-[0.15em] uppercase text-brass-bright hover:text-brass transition-colors"
                >
                  Instagram
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <BeatDivider tone="onInk" />
    </section>
  );
}
