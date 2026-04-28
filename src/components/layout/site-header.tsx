"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

import type { LinkItem, SiteSettingsContent } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";

type SiteHeaderProps = {
  siteSettings: SiteSettingsContent;
};

const buildNavigation = (navigation: LinkItem[]) => [
  { href: "/", label: "Startseite" },
  ...navigation,
];

export function SiteHeader({ siteSettings }: SiteHeaderProps) {
  const navigation = buildNavigation(siteSettings.navigation);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-white/96 backdrop-blur-md">
      <div className="grid w-full grid-cols-[auto_1fr] items-center gap-6 px-3 py-5 sm:px-5 lg:grid-cols-[auto_1fr_auto] lg:px-8 xl:px-12 2xl:px-16">
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {navigation.map((item, index) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className={`text-[15px] font-semibold transition ${index === 0
                ? "text-[color:var(--color-primary)]"
                : "text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-foreground)]"
          >
            <Phone className="h-4 w-4 text-[color:var(--color-primary)]" />
            {siteSettings.phone}
          </a>
          <ButtonLink href="/#kontaktformular" className="px-4">
            Projekt anfragen
          </ButtonLink>
        </div>

        {/* Burger Icon für mobile */}
        <button
          className="ml-auto flex items-center justify-center rounded-md p-2 lg:hidden"
          aria-label="Menü öffnen"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-7 w-7 text-[color:var(--color-foreground)]" />
        </button>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] flex flex-col bg-white/98 backdrop-blur-md transition-all animate-fade-in">
          <div className="flex items-center justify-between px-5 py-5 border-b border-[color:var(--color-border)]">
            <Link href="/" className="flex min-w-0 items-center" onClick={() => setMenuOpen(false)}>
              <div className="relative h-12 w-[120px] shrink-0">
                <Image
                  src="/logo.webp"
                  alt={siteSettings.companyName}
                  fill
                  className="object-contain object-left"
                  sizes="120px"
                  priority
                />
              </div>
            </Link>
            <button
              className="flex items-center justify-center rounded-md p-2"
              aria-label="Menü schließen"
              onClick={() => setMenuOpen(false)}
            >
              <X className="h-7 w-7 text-[color:var(--color-foreground)]" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navigation.map((item, index) => (
              <Link
                key={`${item.href}-${item.label}-mobile-overlay`}
                href={item.href}
                className={`text-2xl font-bold transition ${index === 0
                  ? "text-[color:var(--color-primary)]"
                  : "text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]"
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 text-lg font-semibold text-[color:var(--color-foreground)] mt-8"
              onClick={() => setMenuOpen(false)}
            >
              <Phone className="h-5 w-5 text-[color:var(--color-primary)]" />
              {siteSettings.phone}
            </a>
            <ButtonLink href="/#kontaktformular" className="w-full max-w-xs mt-4 py-4 text-lg flex justify-center" showArrow={false}>
              Projekt anfragen
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
