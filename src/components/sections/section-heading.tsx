type SectionHeadingProps = {
  description?: string;
  eyebrow?: string;
  heading: string;
  tone?: "dark" | "light";
};

export function SectionHeading({
  description,
  eyebrow,
  heading,
  tone = "dark",
}: SectionHeadingProps) {
  const headingColor =
    tone === "light" ? "text-white" : "text-[color:var(--color-ink)]";
  const descriptionColor =
    tone === "light" ? "text-white/72" : "text-[color:var(--color-muted)]";
  const eyebrowColor =
    tone === "light"
      ? "text-[color:var(--color-accent)]"
      : "text-[color:var(--color-brand)]";

  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? (
        <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-4xl uppercase leading-none tracking-[0.06em] sm:text-5xl ${headingColor}`}
      >
        {heading}
      </h2>
      {description ? (
        <p className={`text-base leading-8 sm:text-lg ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
