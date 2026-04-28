import type { TextColumn } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type TextColumnsSectionProps = {
  columns: TextColumn[];
  description?: string;
  eyebrow?: string;
  heading: string;
  id?: string;
};

export function TextColumnsSection({
  columns,
  description,
  eyebrow,
  heading,
  id,
}: TextColumnsSectionProps) {
  return (
    <SectionShell id={id}>
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {columns.map((column) => (
          <article
            key={column.title}
            className="rounded-[28px] bg-white p-6 shadow-[0_16px_34px_rgba(23,23,23,0.05)]"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)]">
              {column.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[color:var(--color-muted)]">
              {column.body}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
