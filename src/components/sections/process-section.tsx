import type { ProcessStep } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";

type ProcessSectionProps = {
  description?: string;
  eyebrow?: string;
  heading: string;
  steps: ProcessStep[];
};

export function ProcessSection({
  description,
  eyebrow,
  heading,
  steps,
}: ProcessSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
        <div className="grid gap-5">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-4 rounded-[1.75rem] border border-black/8 bg-white/85 p-6 shadow-[0_16px_40px_rgba(40,26,18,0.07)] md:grid-cols-[auto_1fr]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--color-brand)] font-display text-2xl uppercase tracking-[0.08em] text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-3xl uppercase tracking-[0.05em] text-[color:var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-[color:var(--color-muted)]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
