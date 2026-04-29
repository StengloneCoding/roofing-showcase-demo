"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
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
  const stepsRef = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="prozess"
      className="w-full bg-[radial-gradient(circle_at_12%_0%,rgba(239,49,45,0.18),transparent_38%),linear-gradient(180deg,#11151a,#171d23)] py-16 sm:py-20"
    >
      <SectionShell className="py-0">
        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          description={description}
          align="left"
          tone="light"
        />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div ref={stepsRef} className="space-y-4 animate-stagger">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="flex gap-5 rounded-3xl border border-white/20 bg-white/8 p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-secondary)] text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-secondary)]">
                    Schritt {index + 1}
                  </p>
                  <h3 className="mt-2 [font-family:var(--font-heading)] text-2xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/80">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-3xl border border-white/16 bg-white/8 p-8 backdrop-blur-sm">
            <div className="border-l-4 border-[color:var(--color-secondary)] pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-secondary)]">
                Verlässlich organisiert
              </p>
              <p className="mt-4 [font-family:var(--font-heading)] text-2xl font-semibold leading-tight text-white">
                Von der ersten Beratung bis zur finalen Abstimmung arbeiten wir strukturiert,
                erreichbar und mit klaren nächsten Schritten.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/74">
                Keine Show-Effekte, sondern ein handwerklich sauberer Ablauf mit klaren Verantwortlichkeiten.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
