import { SectionHeading } from "@/components/sections/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type JobHighlightsSectionProps = {
  description?: string;
  eyebrow?: string;
  heading: string;
  items: string[];
  note?: string;
};

export function JobHighlightsSection({
  description,
  eyebrow,
  heading,
  items,
  note,
}: JobHighlightsSectionProps) {
  return (
    <SectionShell>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-[24px] bg-white px-5 py-5 text-base leading-7 text-[color:var(--color-foreground)] shadow-[0_12px_30px_rgba(23,23,23,0.05)]"
            >
              {item}
            </div>
          ))}
          {note ? (
            <p className="rounded-[24px] bg-[color:var(--color-surface-muted)] px-5 py-5 text-sm leading-7 text-[color:var(--color-muted)]">
              {note}
            </p>
          ) : null}
        </div>
      </div>
    </SectionShell>
  );
}
