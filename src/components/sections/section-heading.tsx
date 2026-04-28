type SectionHeadingProps = {
  align?: "center" | "left";
  description?: string;
  eyebrow?: string;
  heading: string;
  tone?: "dark" | "light";
};

export function SectionHeading({
  align = "left",
  description,
  eyebrow,
  heading,
  tone = "dark",
}: SectionHeadingProps) {
  const headingColor =
    tone === "light" ? "text-white" : "text-[color:var(--color-foreground)]";
  const descriptionColor =
    tone === "light" ? "text-white/74" : "text-[color:var(--color-muted)]";
  const eyebrowColor =
    tone === "light"
      ? "text-white/70"
      : "text-[color:var(--color-primary)]";
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl space-y-3 ${alignment}`}>
      {eyebrow ? (
        <p className={`text-sm font-medium ${eyebrowColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${headingColor}`}
      >
        {heading}
      </h2>
      {description ? (
        <p className={`text-base leading-7 sm:text-lg sm:leading-8 ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
