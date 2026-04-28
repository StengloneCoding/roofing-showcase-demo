import type { ServiceItem } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";

const cardAccents = [
  "from-slate-900 via-slate-700 to-slate-500",
  "from-zinc-900 via-zinc-700 to-zinc-500",
  "from-stone-900 via-stone-700 to-stone-500",
];

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
    <SectionShell id="leistungen">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-[28px] bg-[color:var(--color-surface)] shadow-[0_20px_45px_rgba(23,23,23,0.07)]"
          >
            <div
              className={`flex min-h-48 items-end bg-gradient-to-br ${cardAccents[index % cardAccents.length]} p-6 text-white`}
            >
              <div>
                <p className="text-sm text-white/72">Leistung</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight">{item.title}</h3>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <p className="text-base leading-7 text-[color:var(--color-muted)]">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
