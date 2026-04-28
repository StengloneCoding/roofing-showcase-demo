import Image from "next/image";
import Link from "next/link";

import type { SiteSettingsContent } from "@/lib/content";

type SiteHeaderProps = {
  siteSettings: SiteSettingsContent;
};

export function SiteHeader({ siteSettings }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:var(--color-background-soft)]/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-[165px] overflow-hidden rounded-sm bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <Image
              src="/logo.webp"
              alt={siteSettings.companyName}
              fill
              className="object-contain"
              sizes="165px"
              priority
            />
          </div>
          <div className="hidden min-[980px]:block">
            <p className="font-display text-xl uppercase tracking-[0.16em] text-[color:var(--color-ink)]">
              {siteSettings.companyName}
            </p>
            <p className="text-sm text-[color:var(--color-muted)]">{siteSettings.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-[color:var(--color-ink)] md:flex">
          {siteSettings.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[color:var(--color-brand)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakt"
          className="rounded-full bg-[color:var(--color-brand)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--color-brand-dark)]"
        >
          Anfrage starten
        </Link>
      </div>
    </header>
  );
}
