"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import type { FaqItem } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type FaqSectionProps = {
  description?: string;
  eyebrow?: string;
  heading: string;
  items: FaqItem[];
};

export function FaqSection({
  description,
  eyebrow,
  heading,
  items,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionShell>
      <SectionHeading
        eyebrow={eyebrow}
        heading={heading}
        description={description}
        align="center"
      />
      <div className="mx-auto mt-10 max-w-4xl space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={item.question}
              className="rounded-[24px] bg-white px-5 py-5 shadow-[0_12px_30px_rgba(23,23,23,0.05)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                className="flex w-full items-start justify-between gap-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-semibold text-[color:var(--color-foreground)]">
                  {item.question}
                </span>
                <span
                  className={`rounded-full bg-[color:var(--color-surface-muted)] p-2 text-[color:var(--color-foreground)] transition ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity,margin] duration-200 ease-out ${
                  isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pr-8 text-base leading-7 text-[color:var(--color-muted)]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
