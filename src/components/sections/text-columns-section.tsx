import type { TextColumn } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";
import { FramedCard } from "@/components/ui/framed-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
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
    <section id={id} className="w-full bg-[linear-gradient(180deg,rgba(229,233,235,0.72),rgba(241,244,246,0.82))] py-16 sm:py-20">
      <SectionShell className="py-0">
        <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
        <ScrollReveal className="mt-10 grid gap-6 lg:grid-cols-3" stagger threshold={0.15}>
          {columns.map((column) => (
            <FramedCard
              key={column.title}
              className="bg-white p-7"
            >
              <h3 className="[font-family:var(--font-heading)] text-2xl font-semibold tracking-tight text-[color:var(--color-on-surface)]">
                {column.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--color-on-surface-variant)]">
                {column.body}
              </p>
            </FramedCard>
          ))}
        </ScrollReveal>
      </SectionShell>
    </section>
  );
}
