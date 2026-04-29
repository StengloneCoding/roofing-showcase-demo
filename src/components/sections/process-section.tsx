import type { ProcessStep } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

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
    <SectionShell>
      <SectionHeading
        eyebrow={eyebrow}
        heading={heading}
        description={description}
        align="left"
      />
      <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="flex gap-5 border border-[color:var(--color-outline-variant)] bg-white p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[color:var(--color-secondary)] text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-secondary)]">
                  Schritt {index + 1}
                </p>
                <h3 className="mt-2 [font-family:var(--font-heading)] text-2xl font-semibold tracking-tight text-[color:var(--color-on-surface)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[color:var(--color-on-surface-variant)]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-low)] p-8">
          <div className="border-l-4 border-[color:var(--color-secondary)] pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-secondary)]">
              Verlässlich organisiert
            </p>
            <p className="mt-4 [font-family:var(--font-heading)] text-2xl font-semibold leading-tight text-[color:var(--color-on-surface)]">
              Von der ersten Beratung bis zur finalen Abstimmung arbeiten wir strukturiert,
              erreichbar und mit klaren nächsten Schritten.
            </p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--color-on-surface-variant)]">
              Keine Show-Effekte, sondern ein handwerklich sauberer Ablauf mit klaren Verantwortlichkeiten.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
