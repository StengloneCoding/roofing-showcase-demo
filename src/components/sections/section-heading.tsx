"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const ref = useScrollReveal({ threshold: 0.2 });

  const headingColor =
    tone === "light" ? "text-white" : "text-[color:var(--color-on-surface)]";
  const descriptionColor =
    tone === "light" ? "text-white/82" : "text-[color:var(--color-on-surface-variant)]";
  const eyebrowColor =
    tone === "light" ? "text-white/80" : "text-[color:var(--color-secondary)]";
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div ref={ref} className={`max-w-3xl space-y-3 animate-on-scroll ${alignment}`}>
      {eyebrow ? (
        <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`[font-family:var(--font-heading)] text-3xl font-semibold tracking-[-0.01em] sm:text-5xl ${headingColor}`}
      >
        {heading}
      </h2>
      {description ? (
        <p className={`text-base leading-7 sm:text-lg ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
