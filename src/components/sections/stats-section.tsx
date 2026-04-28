import type { StatItem } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type StatsSectionProps = {
  eyebrow?: string;
  heading: string;
  items: StatItem[];
};

export function StatsSection({ eyebrow, heading, items }: StatsSectionProps) {
  return (
    <SectionShell className="py-10">
      <div className="space-y-8 rounded-[32px] bg-[color:var(--color-surface)] px-6 py-8 shadow-[0_18px_40px_rgba(23,23,23,0.05)] sm:px-8">
        <SectionHeading eyebrow={eyebrow} heading={heading} />
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.label}
              className="rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)] p-5"
            >
              <p className="text-4xl font-semibold tracking-tight text-[color:var(--color-primary)]">
                {item.value}
              </p>
              <p className="mt-3 text-base font-semibold text-[color:var(--color-foreground)]">
                {item.label}
              </p>
              {item.description ? (
                <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
                  {item.description}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
