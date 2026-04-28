import { SectionHeading } from "@/components/sections/section-heading";

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
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-[1.75rem] border border-black/8 bg-white/84 px-5 py-5 text-base leading-8 text-[color:var(--color-ink)] shadow-[0_16px_40px_rgba(40,26,18,0.06)]"
            >
              {item}
            </div>
          ))}
          {note ? (
            <p className="rounded-[1.5rem] bg-[color:var(--color-background-soft)] px-5 py-5 text-sm leading-7 text-[color:var(--color-muted)]">
              {note}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
