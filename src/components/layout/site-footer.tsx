import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import type { SiteSettingsContent } from "@/lib/content";
import { DEMO_REGION } from "@/lib/demo-placeholders";
import { BrandMark } from "@/components/layout/brand-mark";

type SiteFooterProps = {
  siteSettings: SiteSettingsContent;
};

export function SiteFooter({ siteSettings }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden border-t-4 border-[color:var(--color-secondary)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-foreground-inverse)]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 py-14 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <div className="inline-flex rounded-2xl bg-white/96 px-3 py-2 shadow-[0_14px_34px_rgba(15,19,24,0.16)] ring-1 ring-black/6 backdrop-blur-sm">
              <BrandMark companyName={siteSettings.companyName} />
            </div>
            <p className="text-sm leading-7 text-white/75">{siteSettings.footerText}</p>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-white/62">Kontakt</p>
            <div className="flex flex-col gap-4 text-sm text-white/78">
              <a
                href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-3"
              >
                <Phone className="h-4 w-4 text-[color:var(--color-secondary)]" />
                {siteSettings.phone}
              </a>
              <a
                href={`mailto:${siteSettings.email}`}
                className="inline-flex items-center gap-3"
              >
                <ArrowUpRight className="h-4 w-4 text-[color:var(--color-secondary)]" />
                {siteSettings.email}
              </a>
              <p className="inline-flex items-start gap-3 whitespace-pre-line leading-7">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-secondary)]" />
                <span>{siteSettings.address}</span>
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-white/62">Unternehmen</p>
            <div className="flex flex-col gap-3 text-sm text-white/78">
              <a href="/karriere" className="transition hover:text-white">Karriere</a>
              <a href="/fakten" className="transition hover:text-white">Fakten</a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-white/62">Standort</p>
            <p className="text-sm leading-7 text-white/78">{DEMO_REGION}</p>
            <p className="mt-4 text-sm leading-7 text-white/78">Vorabversion zur Abstimmung von Inhalten, Struktur und Außendarstellung.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-5 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {siteSettings.legalName}.</p>
          <p className="flex items-center gap-1">
            Erstellt von{" "}
            <a href="https://www.stenglone.de" target="_blank" rel="noopener noreferrer" className="text-white/78 transition hover:text-white">
              stenglone.de
            </a>
          </p>
          <p>Rechtstexte werden vor der Veröffentlichung ergänzt.</p>
        </div>
      </div>
    </footer>
  );
}
