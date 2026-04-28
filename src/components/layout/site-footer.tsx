import Image from "next/image";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import type { SiteSettingsContent } from "@/lib/content";

type SiteFooterProps = {
  siteSettings: SiteSettingsContent;
};

export function SiteFooter({ siteSettings }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 overflow-hidden bg-[color:var(--color-surface-strong)] text-[color:var(--color-foreground-inverse)]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-white/10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:py-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-white/76">
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-primary)]" />
              Meisterbetrieb aus Bamberg
            </div>

            <div className="flex items-start gap-4">
              <div className="relative h-16 w-[112px] shrink-0 overflow-hidden rounded-[20px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <Image
                  src="/logo.webp"
                  alt={siteSettings.companyName}
                  fill
                  className="object-contain p-2"
                  sizes="112px"
                />
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {siteSettings.companyName}
                </p>
                <p className="max-w-2xl text-base leading-7 text-white/72">{siteSettings.footerText}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:items-start lg:pt-1">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/52">Kontakt</p>
            <div className="flex flex-col gap-4 text-sm text-white/78">
              <a
                href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-3"
              >
                <Phone className="h-4 w-4 text-[color:var(--color-primary)]" />
                {siteSettings.phone}
              </a>
              <a
                href={`mailto:${siteSettings.email}`}
                className="inline-flex items-center gap-3"
              >
                <ArrowUpRight className="h-4 w-4 text-[color:var(--color-primary)]" />
                {siteSettings.email}
              </a>
              <p className="inline-flex items-start gap-3 whitespace-pre-line leading-7">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-primary)]" />
                <span>{siteSettings.address}</span>
              </p>
            </div>
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
