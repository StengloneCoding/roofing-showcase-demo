import type { TextColumn } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";
import { FramedCard } from "@/components/ui/framed-card";
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
    <SectionShell id={id} className="border-y border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-low)]">
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {columns.map((column) => (
          <FramedCard
            key={column.title}
            className="bg-white p-6"
          >
            <h3 className="[font-family:var(--font-heading)] text-2xl font-semibold tracking-tight text-[color:var(--color-on-surface)]">
              {column.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[color:var(--color-on-surface-variant)]">
              {column.body}
            </p>
          </FramedCard>
        ))}
      </div>
    </SectionShell>
  );
}
