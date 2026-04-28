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
    <SectionShell>
      <div className="grid overflow-hidden rounded-[36px] bg-[color:var(--color-primary)] text-white lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6 p-8 sm:p-10">
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
              <ButtonLink href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
        <div className="min-h-[320px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(0,0,0,0.2))]" />
      </div>
    </SectionShell>
  );
}
