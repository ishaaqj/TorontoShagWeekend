type BeatDividerProps = {
  tone?: "onPaper" | "onInk";
  label?: string;
};

// Shag is counted in 6s, with the kicks landing on beats 2 and 4.
// Rather than a decorative numbered marker, this divider is that literal
// count — it's used between every major section as a structural device
// that means something specific to the dance, not just a rule.
export default function BeatDivider({ tone = "onPaper", label }: BeatDividerProps) {
  const isOnInk = tone === "onInk";
  const tick = isOnInk ? "bg-paper/30" : "bg-ink/25";
  const accent = isOnInk ? "bg-brass-bright" : "bg-wine";
  const text = isOnInk ? "text-paper/60" : "text-ink/50";

  return (
    <div
      className="flex items-center justify-center gap-6 py-10"
      role="separator"
      aria-label={label ?? "section divider"}
    >
      <div className="flex items-end gap-[6px]" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => {
          const beat = i + 1;
          const emphasized = beat === 2 || beat === 4;
          return (
            <span
              key={beat}
              className={`w-[3px] rounded-full ${emphasized ? accent : tick} ${
                emphasized ? "h-5" : "h-2.5"
              }`}
            />
          );
        })}
      </div>
      {label ? (
        <span className={`font-data text-xs tracking-[0.2em] uppercase ${text}`}>
          {label}
        </span>
      ) : null}
    </div>
  );
}
