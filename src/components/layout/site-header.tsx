"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
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

/** Animated burger button — morphs into an X when open */
function BurgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  const barColor = open ? "bg-white" : "bg-[color:var(--color-foreground)]";
  return (
    <button
      className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg p-2 transition-colors hover:bg-[color:var(--color-border)] lg:hidden"
      aria-label={open ? "Menü schließen" : "Menü öffnen"}
      aria-expanded={open}
      onClick={onClick}
    >
      <span
        className={`block h-[2px] w-5 rounded-full transition-all duration-300 ease-in-out ${barColor}`}
        style={{
          transform: open ? "translateY(7px) rotate(45deg)" : "none",
        }}
      />
      <span
        className={`block h-[2px] w-5 rounded-full transition-all duration-300 ease-in-out ${barColor}`}
        style={{
          opacity: open ? 0 : 1,
          transform: open ? "scaleX(0)" : "scaleX(1)",
        }}
      />
      <span
        className={`block h-[2px] w-5 rounded-full transition-all duration-300 ease-in-out ${barColor}`}
        style={{
          transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
        }}
      />
    </button>
  );
}

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

        {/* Animated Burger Button (mobile + tablet) */}
        <BurgerButton open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      {/*
        We use a CSS-driven slide-in via data-open attribute so no extra
        animation library is needed. The overlay slides in from the right
        on phones and from the top on tablets (arbitrary choice — tweak to taste).
      */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[999] flex flex-col min-h-screen transition-all duration-300 ease-in-out lg:hidden ${menuOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0"
          }`}
      >
        {/* Hero-Style Background Gradients & Blur */}
        <div className="absolute inset-0 -z-10 bg-[#15181c]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(12,13,16,0.92),rgba(15,16,20,0.7))]" />
        <div className="absolute inset-0 -z-10 opacity-90">
          <div className="absolute left-[-5%] top-[10%] h-[52%] w-[36%] rotate-[-18deg] rounded-[36px] border border-white/18 bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
          <div className="absolute left-[18%] top-[18%] h-[44%] w-[22%] rotate-[-18deg] rounded-[28px] border border-white/16 bg-white/3" />
          <div className="absolute right-[10%] top-[8%] h-[58%] w-[28%] rotate-[18deg] rounded-[36px] border border-white/18 bg-white/4" />
          <div className="absolute right-[24%] top-[20%] h-[40%] w-[16%] rotate-[18deg] rounded-[28px] border border-white/14 bg-white/2" />
          <div className="absolute bottom-0 left-0 h-40 w-full bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.32))]" />
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(239,49,45,0.22),transparent_24%),radial-gradient(circle_at_85%_25%,rgba(255,255,255,0.08),transparent_28%)]" />
        {/* Blur & dunkler Layer für Lesbarkeit */}
        <div className="absolute inset-0 -z-10 backdrop-blur-md bg-black/10" />

        {/* Overlay header */}
        <div className="flex items-center justify-end border-b border-[color:var(--color-border)] px-5 py-5 text-white">
          {/* Close button reuses BurgerButton in open state */}
          <BurgerButton open={true} onClick={() => setMenuOpen(false)} />
        </div>

        {/* Nav links — staggered fade-in when menu is open */}
        <nav className="flex flex-1 flex-col items-center justify-center gap-6 px-6 drop-shadow-lg">
          {navigation.map((item, index) => (
            <Link
              key={`${item.href}-${item.label}-mobile-overlay`}
              href={item.href}
              className={`text-2xl text-white font-bold transition-all duration-200 ease-out ${menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
                } ${index === 0
                  ? "text-[color:var(--color-primary)]"
                  : "text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]"
                }`}
              style={{ transitionDelay: menuOpen ? `${index * 50 + 100}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}


          <div
            className={`w-full max-w-xs transition-all duration-200 ease-out ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            style={{
              transitionDelay: menuOpen
                ? `${navigation.length * 50 + 200}ms`
                : "0ms",
            }}
          >

          </div>
        </nav>
      </div>
    </header>
  );
}
