import Link from "next/link";
import type { ReactNode } from "react";

import { SectionShell } from "@/components/ui/section-shell";

type LegalSection = {
  body: ReactNode[];
  title: string;
};

type LegalPageProps = {
  eyebrow: string;
  intro: ReactNode[];
  sections: LegalSection[];
  title: string;
};

export function LegalPage({ eyebrow, intro, sections, title }: LegalPageProps) {
  return (
    <SectionShell className="py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-14">
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="space-y-4 rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(23,23,23,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-primary)]">
              {eyebrow}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--color-foreground)] sm:text-5xl">
              {title}
            </h1>
            <div className="space-y-4 text-base leading-7 text-[color:var(--color-muted)]">
              {intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)] p-6">
            <p className="text-sm font-semibold text-[color:var(--color-foreground)]">
              Zurück zur Startseite
            </p>
            <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
              Rechtliches bleibt erreichbar, das Hauptprojekt finden Sie aber weiterhin auf der Startseite.
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex rounded-full bg-[color:var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)]"
            >
              Startseite öffnen
            </Link>
          </div>
        </aside>

        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(23,23,23,0.06)] sm:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)]">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-7 text-[color:var(--color-muted)]">
                {section.body.map((paragraph, index) => (
                  <div key={index}>{paragraph}</div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
