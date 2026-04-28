import type { ServiceItem } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";

type ServiceGridSectionProps = {
  description?: string;
  eyebrow?: string;
  heading: string;
  items: ServiceItem[];
};

export function ServiceGridSection({
  description,
  eyebrow,
  heading,
  items,
}: ServiceGridSectionProps) {
  return (
    <section id="leistungen" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-black/8 bg-white/82 p-6 shadow-[0_18px_50px_rgba(40,26,18,0.08)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-brand)]">
              Leistung
            </p>
            <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.06em] text-[color:var(--color-ink)]">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)]">
              {item.description}
            </p>
            {item.bullets?.length ? (
              <ul className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-[color:var(--color-ink)]">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-full bg-[color:var(--color-background-soft)] px-4 py-2"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
