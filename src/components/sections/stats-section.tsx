import type { StatItem } from "@/lib/content";

import { AnimatedStatValue } from "@/components/sections/animated-stat-value";
import { SectionHeading } from "@/components/sections/section-heading";
import { FramedCard } from "@/components/ui/framed-card";
import { SectionShell } from "@/components/ui/section-shell";

type StatsSectionProps = {
  eyebrow?: string;
  heading: string;
  items: StatItem[];
};

export function StatsSection({ eyebrow, heading, items }: StatsSectionProps) {
  const renderValue = (item: StatItem) => {
    if (item.label === "Tradition im Handwerk") {
      return <AnimatedStatValue mode="down" target={1950} />;
    }

    if (item.label === "Leistungsbereiche") {
      return <AnimatedStatValue mode="up" target={7} />;
    }

    return (
      <p className="[font-family:var(--font-heading)] text-4xl font-semibold tracking-tight text-[color:var(--color-primary)]">
        {item.value}
      </p>
    );
  };

  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(241,244,246,0.72))] py-12 sm:py-14">
      <SectionShell className="py-0">
        <div className="space-y-8">
          <SectionHeading eyebrow={eyebrow} heading={heading} />
          <div className="grid gap-5 md:grid-cols-3">
            {items.map((item) => (
              <FramedCard
                key={item.label}
                className="bg-white/90 p-6"
              >
                {renderValue(item)}
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
    </section>
  );
}
