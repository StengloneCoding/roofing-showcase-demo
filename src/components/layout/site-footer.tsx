import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import type { SiteSettingsContent } from "@/lib/content";

type SiteFooterProps = {
  siteSettings: SiteSettingsContent;
};

export function SiteFooter({ siteSettings }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 overflow-hidden border-t-4 border-[color:var(--color-secondary)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-foreground-inverse)]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 py-14 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <p className="[font-family:var(--font-heading)] text-2xl font-bold uppercase tracking-[-0.02em] text-white">
              {siteSettings.companyName}
            </p>
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
              <a href="/" className="transition hover:text-white">Startseite</a>
              <a href="/karriere" className="transition hover:text-white">Karriere</a>
              <a href="/fakten" className="transition hover:text-white">Fakten</a>
              <a href="/impressum" className="transition hover:text-white">Impressum</a>
              <a href="/datenschutz" className="transition hover:text-white">Datenschutz</a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-white/62">Standort</p>
            <p className="text-sm leading-7 text-white/78">Bamberg und Umgebung</p>
            <p className="mt-4 text-sm leading-7 text-white/78">Meisterbetrieb seit 1919 mit Fokus auf saubere, verlässliche Dacharbeiten.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-5 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {siteSettings.legalName}. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
