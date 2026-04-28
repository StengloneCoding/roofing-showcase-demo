import type { FaqItem } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";

type FaqSectionProps = {
  description?: string;
  eyebrow?: string;
  heading: string;
  items: FaqItem[];
};

export function FaqSection({
  description,
  eyebrow,
  heading,
  items,
}: FaqSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
      <div className="mt-10 grid gap-4">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-[1.5rem] border border-black/8 bg-white/84 p-6 shadow-[0_16px_40px_rgba(40,26,18,0.06)]"
          >
            <summary className="cursor-pointer list-none font-display text-2xl uppercase tracking-[0.05em] text-[color:var(--color-ink)]">
              {item.question}
            </summary>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[color:var(--color-muted)]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
