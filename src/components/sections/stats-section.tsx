import type { StatItem } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";
import { FramedCard } from "@/components/ui/framed-card";
import { SectionShell } from "@/components/ui/section-shell";

type StatsSectionProps = {
  eyebrow?: string;
  heading: string;
  items: StatItem[];
};

export function StatsSection({ eyebrow, heading, items }: StatsSectionProps) {
  return (
    <SectionShell className="py-10">
      <div className="space-y-8 border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-lowest)] px-6 py-8 sm:px-8">
        <SectionHeading eyebrow={eyebrow} heading={heading} />
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <FramedCard
              key={item.label}
              className="bg-[color:var(--color-surface-container-low)] p-5"
            >
              <p className="[font-family:var(--font-heading)] text-4xl font-semibold tracking-tight text-[color:var(--color-primary)]">
                {item.value}
              </p>
              <p className="mt-3 text-base font-semibold text-[color:var(--color-on-surface)]">
                {item.label}
              </p>
              {item.description ? (
                <p className="mt-2 text-sm leading-7 text-[color:var(--color-on-surface-variant)]">
                  {item.description}
                </p>
              ) : null}
            </FramedCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
