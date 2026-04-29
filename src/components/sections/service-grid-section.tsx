import type { ServiceItem } from "@/lib/content";
import {
  Wrench,
  Building2,
  House,
  Landmark,
  ThermometerSun,
  ShieldAlert,
  AppWindow,
  Hammer,
} from "lucide-react";

import { SectionHeading } from "@/components/sections/section-heading";
import { FramedCard } from "@/components/ui/framed-card";
import { SectionShell } from "@/components/ui/section-shell";

const serviceIcons = [
  House,
  Building2,
  Landmark,
  ThermometerSun,
  ShieldAlert,
  Wrench,
  AppWindow,
  Hammer,
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

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <FramedCard
            key={item.title}
            className="flex h-full flex-col p-8"
            hoverable
          >
            <div className="mb-6 text-[color:var(--color-secondary)]">
              {(() => {
                const Icon = serviceIcons[index % serviceIcons.length];

                return <Icon className="h-8 w-8" />;
              })()}
            </div>
            <h3 className="[font-family:var(--font-heading)] text-2xl font-semibold text-[color:var(--color-on-surface)]">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[color:var(--color-on-surface-variant)]">
              {item.description}
            </p>
          </FramedCard>
        ))}
      </div>
    </SectionShell>
  );
}
