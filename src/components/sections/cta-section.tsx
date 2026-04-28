import Link from "next/link";

import type { LinkItem } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";

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
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[linear-gradient(135deg,var(--color-brand),var(--color-brand-dark))] px-6 py-10 text-white shadow-[0_24px_70px_rgba(109,28,26,0.3)] sm:px-10">
        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          description={description}
          tone="light"
        />
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={primaryCta.href}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-brand)] transition hover:bg-[color:var(--color-background-soft)]"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
