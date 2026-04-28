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
        align="center"
      />
      <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          {steps.map((step, index) => (
            <article key={step.title} className="flex gap-5 rounded-[24px] bg-white p-5 shadow-[0_12px_30px_rgba(23,23,23,0.05)]">
              <div className="mt-1 h-20 w-1 rounded-full bg-[color:var(--color-primary)]/85" />
              <div>
                <p className="text-sm font-medium text-[color:var(--color-primary)]">
                  Schritt {index + 1}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[color:var(--color-muted)]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-[32px] bg-[linear-gradient(135deg,#f3efe8,#ddd3c3)] p-5 shadow-[0_18px_40px_rgba(23,23,23,0.07)]">
          <div className="flex h-[420px] items-end rounded-[24px] bg-[linear-gradient(145deg,#b49b84,#e9dfd2_45%,#8f8f8f)] p-6">
            <div className="max-w-sm rounded-[24px] bg-black/45 p-5 text-white backdrop-blur">
              <p className="text-sm text-white/72">Verlässlich organisiert</p>
              <p className="mt-2 text-xl font-semibold">
                Von der ersten Beratung bis zur finalen Abstimmung arbeiten wir strukturiert, erreichbar und mit klaren nächsten Schritten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
