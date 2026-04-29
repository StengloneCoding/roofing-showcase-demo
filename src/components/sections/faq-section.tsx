"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const faqRef = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <SectionShell id="faq">
      <SectionHeading
        eyebrow={eyebrow}
        heading={heading}
        description={description}
        align="center"
      />
      <div ref={faqRef} className="mx-auto mt-10 max-w-4xl space-y-3 animate-stagger">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={item.question}
              className="overflow-hidden rounded-3xl border border-[color:var(--color-outline-variant)]/70 bg-white shadow-[0_14px_30px_rgba(20,25,31,0.05)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                className="flex w-full items-start justify-between gap-4 px-6 py-6 text-left transition-colors hover:bg-[color:var(--color-surface-container-low)]/80"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-semibold text-[color:var(--color-on-surface)]">
                  {item.question}
                </span>
                <span
                  className={`rounded-xl bg-[color:var(--color-surface-container)] p-2 text-[color:var(--color-on-surface)] transition ${
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
                  <p className="px-6 pb-6 pr-8 text-base leading-7 text-[color:var(--color-on-surface-variant)]">
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
