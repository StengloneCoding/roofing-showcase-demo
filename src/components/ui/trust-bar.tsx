import { Star } from "lucide-react";

type TrustBarProps = {
  description: string;
  heading: string;
  ratingLabel: string;
  score: string;
};

export function TrustBar({ description, heading, ratingLabel, score }: TrustBarProps) {
  return (
    <section className="border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-low)] p-6 md:p-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-1 text-[#f5b400]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" />
            ))}
            <span className="ml-2 text-sm font-semibold uppercase tracking-[0.05em] text-[color:var(--color-primary)]">
              {ratingLabel}
            </span>
          </div>
          <h2 className="text-balance [font-family:var(--font-heading)] text-3xl font-semibold leading-tight text-[color:var(--color-on-surface)] md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[color:var(--color-on-surface-variant)]">
            {description}
          </p>
        </div>

        <div className="text-center md:text-right">
          <p className="[font-family:var(--font-heading)] text-5xl font-bold text-[color:var(--color-primary)]">{score}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-on-surface-variant)]">
            Google Rating
          </p>
        </div>
      </div>
    </section>
  );
}
