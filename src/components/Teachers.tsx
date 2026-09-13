import { client } from "../../sanity/lib/client";
import { teachersQuery } from "../../sanity/lib/queries";
import type { Teacher } from "../../sanity/lib/types";
import { teachers as fallbackTeachers } from "@/lib/content";
import BeatDivider from "./BeatDivider";
import Image from "next/image";

async function getTeachers(): Promise<Teacher[]> {
  try {
    const teachers = await client.fetch<Teacher[]>(teachersQuery);
    if (teachers && teachers.length > 0) {
      return teachers;
    }
  } catch (error) {
    console.error("Sanity fetch failed for teachers, using fallback content:", error);
  }
  return fallbackTeachers;
}

export default async function Teachers() {
  const teachers = await getTeachers();
  const isSingle = teachers.length === 1;

  return (
    <section id="teachers" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl mb-10">Teachers</h2>
        <div className={isSingle ? "" : "grid gap-8 sm:grid-cols-2"}>
          {teachers.map((teacher) => (
            <div
              key={teacher._id}
              className={
                isSingle
                  ? "max-w-3xl flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12"
                  : "border-t border-paper/15 pt-5"
              }
            >
              {isSingle ? (
                <div className="relative shrink-0 mx-auto sm:mx-0">
                  <div className="absolute -inset-3 border border-brass/40 rounded-sm hidden sm:block" />
                  <Image
                    src="/images/shannon.avif"
                    alt={teacher.name}
                    width={242}
                    height={271}
                    className="relative w-[220px] rounded-sm object-cover"
                  />
                </div>
              ) : null}
              <div className={isSingle ? "max-w-xl" : ""}>
                {isSingle ? (
                  <p className="font-data text-xs tracking-[0.2em] uppercase text-brass-bright mb-2">
                    Meet your instructor
                  </p>
                ) : null}
                <h3 className="font-display text-2xl mb-3 pb-3 border-b border-brass/30 inline-block">
                  {teacher.name}
                </h3>
                <p className="font-body text-paper/85 leading-relaxed mb-4">{teacher.bio}</p>
                {teacher.instagram ? (
                  <a
                    href={teacher.instagram}
                    className="font-data text-xs tracking-[0.15em] uppercase text-brass-bright hover:text-brass transition-colors"
                  >
                    Instagram
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <BeatDivider tone="onInk" />
    </section>
  );
}
