import type { TextColumn } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";

type TextColumnsSectionProps = {
  columns: TextColumn[];
  description?: string;
  eyebrow?: string;
  heading: string;
};

export function TextColumnsSection({
  columns,
  description,
  eyebrow,
  heading,
}: TextColumnsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {columns.map((column) => (
          <article
            key={column.title}
            className="rounded-[1.75rem] border border-black/8 bg-[color:var(--color-background-soft)] p-6"
          >
            <h3 className="font-display text-3xl uppercase tracking-[0.05em] text-[color:var(--color-ink)]">
              {column.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)]">
              {column.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
