import type { StatItem } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";

type StatsSectionProps = {
  eyebrow?: string;
  heading: string;
  items: StatItem[];
};

export function StatsSection({ eyebrow, heading, items }: StatsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[color:var(--color-ink)] px-6 py-10 text-white shadow-[0_28px_80px_rgba(24,17,15,0.18)] sm:px-10">
        <SectionHeading eyebrow={eyebrow} heading={heading} tone="light" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="font-display text-5xl uppercase tracking-[0.08em] text-[color:var(--color-accent)]">
                {item.value}
              </p>
              <p className="mt-4 text-base font-semibold text-white">{item.label}</p>
              {item.description ? (
                <p className="mt-2 text-sm leading-7 text-white/70">{item.description}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
