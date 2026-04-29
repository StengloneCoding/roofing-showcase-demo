"use client";

import { Clock3, Mail, MapPinned, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import type { ContactCard } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type ContactCardsSectionProps = {
  description?: string;
  eyebrow?: string;
  heading: string;
  items: ContactCard[];
};

const icons = {
  clock: Clock3,
  mail: Mail,
  map: MapPinned,
  phone: Phone,
};

export function ContactCardsSection({
  description,
  eyebrow,
  heading,
  items,
}: ContactCardsSectionProps) {
  const cardsRef = useScrollReveal({ threshold: 0.15 });

  return (
    <SectionShell>
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
      <div ref={cardsRef} className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4 animate-stagger">
        {items.map((item) => {
          const Icon = icons[item.icon];

          return (
            <article
              key={item.title}
              className="rounded-[28px] bg-white p-6 shadow-[0_16px_34px_rgba(23,23,23,0.05)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-surface-muted)] text-[color:var(--color-primary)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)]">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[color:var(--color-muted)]">{item.body}</p>
              {item.label ? (
                item.href ? (
                  <a
                    href={item.href}
                    className="mt-4 inline-flex text-sm font-semibold text-[color:var(--color-primary)]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <p className="mt-4 text-sm font-semibold text-[color:var(--color-primary)]">
                    {item.label}
                  </p>
                )
              ) : null}
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
