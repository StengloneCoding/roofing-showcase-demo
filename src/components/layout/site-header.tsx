"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import type { LinkItem, SiteSettingsContent } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";

type SiteHeaderProps = {
  siteSettings: SiteSettingsContent;
};

const buildNavigation = (navigation: LinkItem[]) => [...navigation];

export function SiteHeader({ siteSettings }: SiteHeaderProps) {
  const navigation = buildNavigation(siteSettings.navigation);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--color-outline-variant)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1280px] items-center gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center">
          <div className="relative h-14 w-[150px] shrink-0 sm:h-16 sm:w-[188px]">
            <Image
              src="/logo.webp"
              alt={siteSettings.companyName}
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 150px, 188px"
              priority
            />
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navigation.map((item, index) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className={`pb-1 text-sm font-semibold uppercase tracking-[0.05em] transition ${
                index === 0
                  ? "text-[color:var(--color-primary)]"
                  : "text-[color:var(--color-on-surface-variant)] hover:text-[color:var(--color-secondary)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-on-surface)]"
          >
            <Phone className="h-4 w-4 text-[color:var(--color-secondary)]" />
            {siteSettings.phone}
          </a>
          <ButtonLink href="/kontakt" className="px-4">
            Kontakt
          </ButtonLink>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center border border-[color:var(--color-outline-variant)] bg-white text-[color:var(--color-on-surface)] lg:hidden"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <nav className="border-t border-[color:var(--color-outline-variant)] bg-white lg:hidden">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col px-4 py-4 sm:px-6">
            {navigation.map((item) => (
              <Link
                key={`${item.href}-${item.label}-mobile`}
                href={item.href}
                className="border-b border-[color:var(--color-outline-variant)] py-3 text-sm font-semibold uppercase tracking-[0.05em] text-[color:var(--color-on-surface)] last:border-b-0"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <ButtonLink href="/#kontaktformular" className="w-full justify-center" showArrow={false}>
                Projekt anfragen
              </ButtonLink>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
