import type { LinkItem } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";

type CtaSectionProps = {
  description: string;
  eyebrow?: string;
  heading: string;
  primaryCta: LinkItem;
  secondaryCta?: LinkItem;
};

export function CtaSection({
  description,
  eyebrow,
  heading,
  primaryCta,
  secondaryCta,
}: CtaSectionProps) {
  return (
    <SectionShell className="bg-[color:var(--color-secondary)] text-white">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow={eyebrow}
            heading={heading}
            description={description}
            tone="light"
          />
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={primaryCta.href} variant="light">
              {primaryCta.label}
            </ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="ghost" className="text-white hover:text-white/90">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
        <div className="justify-self-end border border-white/35 bg-white/10 p-6 backdrop-blur-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/80">Notfall-Hotline</p>
          <p className="mt-3 [font-family:var(--font-heading)] text-3xl font-bold md:text-5xl">0951 62840</p>
          <p className="mt-3 text-sm text-white/85">Bei Sturmschaden oder akutem Leck schnell erreichbar.</p>
        </div>
      </div>
    </SectionShell>
  );
}
