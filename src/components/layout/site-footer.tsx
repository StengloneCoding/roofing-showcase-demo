import Link from "next/link";

import type { SiteSettingsContent } from "@/lib/content";

type SiteFooterProps = {
  siteSettings: SiteSettingsContent;
};

export function SiteFooter({ siteSettings }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--color-ink)] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-display text-3xl uppercase tracking-[0.12em]">
            {siteSettings.companyName}
          </p>
          <p className="max-w-2xl text-sm leading-7 text-white/72">{siteSettings.footerText}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              Navigation
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/82">
              {siteSettings.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3 text-sm text-white/82">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              Kontakt
            </p>
            <a href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`}>{siteSettings.phone}</a>
            <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
            <p className="whitespace-pre-line">{siteSettings.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
