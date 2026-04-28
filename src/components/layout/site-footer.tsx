import Link from "next/link";

import type { SiteSettingsContent } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";

type SiteFooterProps = {
  siteSettings: SiteSettingsContent;
};

export function SiteFooter({ siteSettings }: SiteFooterProps) {
  return (
    <footer className="pb-10">
      <SectionShell className="pb-0">
        <div className="overflow-hidden rounded-[36px] bg-[color:var(--color-primary)] text-white">
          <div className="grid gap-8 border-b border-white/15 px-6 py-8 sm:px-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-sm font-medium text-white/72">Bereit fürs neue Dach?</p>
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
                {siteSettings.companyName} begleitet Ihr Projekt vom ersten Gespräch bis zur sauberen Ausführung.
              </h2>
              <p className="max-w-xl text-base leading-7 text-white/82">{siteSettings.footerText}</p>
              <ButtonLink href="/#kontaktformular" variant="light">
                Projekt anfragen
              </ButtonLink>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="space-y-3 text-sm text-white/88">
                <p className="font-semibold text-white">Adresse</p>
                <p className="whitespace-pre-line">{siteSettings.address}</p>
              </div>
              <div className="space-y-3 text-sm text-white/88">
                <p className="font-semibold text-white">Kontakt</p>
                <a href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`}>{siteSettings.phone}</a>
                <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
              </div>
              <div className="space-y-3 text-sm text-white/88">
                <p className="font-semibold text-white">Navigation</p>
                <div className="flex flex-col gap-2">
                  {siteSettings.navigation.map((item) => (
                    <Link key={item.href} href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-6 py-5 text-sm text-white/82 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <p>Alle Rechte vorbehalten. © 2026</p>
            <div className="flex items-center gap-4">
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </div>
          </div>
        </div>
      </SectionShell>
    </footer>
  );
}
