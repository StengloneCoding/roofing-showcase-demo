import { Clock3, Mail, MapPinned, Phone } from "lucide-react";

import type { ContactCard } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";

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
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = icons[item.icon];

          return (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-black/8 bg-white/84 p-6 shadow-[0_16px_40px_rgba(40,26,18,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-background-soft)] text-[color:var(--color-brand)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-3xl uppercase tracking-[0.05em] text-[color:var(--color-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-8 text-[color:var(--color-muted)]">{item.body}</p>
              {item.label ? (
                item.href ? (
                  <a
                    href={item.href}
                    className="mt-4 inline-flex text-sm font-semibold text-[color:var(--color-brand)] transition hover:text-[color:var(--color-brand-dark)]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <p className="mt-4 text-sm font-semibold text-[color:var(--color-brand)]">
                    {item.label}
                  </p>
                )
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
