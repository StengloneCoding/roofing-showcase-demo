import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import type { SiteSettingsContent } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";

type SiteHeaderProps = {
  siteSettings: SiteSettingsContent;
};

export function SiteHeader({ siteSettings }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-white/92 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-[84px] overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
            <Image
              src="/logo.webp"
              alt={siteSettings.companyName}
              fill
              className="object-contain"
              sizes="84px"
              priority
            />
          </div>
          <div className="hidden min-[980px]:block">
            <p className="text-base font-semibold text-[color:var(--color-foreground)]">
              {siteSettings.companyName}
            </p>
            <p className="text-sm text-[color:var(--color-muted)]">{siteSettings.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--color-foreground)] md:flex">
          {siteSettings.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[color:var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-foreground)]"
          >
            <Phone className="h-4 w-4 text-[color:var(--color-primary)]" />
            {siteSettings.phone}
          </a>
          <ButtonLink href="/#kontaktformular">Projekt anfragen</ButtonLink>
        </div>
      </div>
    </header>
  );
}
