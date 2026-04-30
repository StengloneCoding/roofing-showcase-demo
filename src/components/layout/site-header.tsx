"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { type MouseEvent, useEffect, useState } from "react";

import type { SiteSettingsContent } from "@/lib/content";
import { BrandMark } from "@/components/layout/brand-mark";
import { ButtonLink } from "@/components/ui/button-link";

type SiteHeaderProps = {
  siteSettings: SiteSettingsContent;
};

export function SiteHeader({ siteSettings }: SiteHeaderProps) {
  const navigation = siteSettings.navigation;
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navTextClassName = "text-white";
  const navMutedTextClassName = "text-white/78 hover:text-white";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined") {
      const shouldScrollTop = window.sessionStorage.getItem("scroll-to-top-on-home");

      if (shouldScrollTop === "1") {
        window.sessionStorage.removeItem("scroll-to-top-on-home");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [pathname]);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);

    if (pathname === "/") {
      event.preventDefault();
      // Remove hash from URL
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("scroll-to-top-on-home", "1");
    }
  };

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((currentValue) => !currentValue);
  const headerClassName = "absolute inset-x-0 top-0 z-[70] bg-transparent";
  const logoBadgeClassName =
    "rounded-2xl bg-white/96 px-3 py-2 shadow-[0_14px_34px_rgba(15,19,24,0.16)] ring-1 ring-black/6 backdrop-blur-sm";

  return (
    <header className={headerClassName}>
      <div className="mx-auto flex w-full max-w-[1280px] items-center gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center" onClick={handleLogoClick}>
          <div className={logoBadgeClassName}>
            <div className="shrink-0">
              <BrandMark companyName={siteSettings.companyName} />
            </div>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className={`pb-1 text-sm font-semibold uppercase tracking-[0.05em] transition ${navMutedTextClassName}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`}
            className={`inline-flex items-center gap-2 text-sm font-semibold ${navTextClassName}`}
          >
            <Phone className="h-4 w-4 text-white/85" />
            {siteSettings.phone}
          </a>
          <ButtonLink href="/kontakt" className="px-4">
            Kontakt
          </ButtonLink>
        </div>

        <button
          type="button"
          className={`ml-auto inline-flex h-10 w-10 items-center justify-center transition lg:hidden text-white hover:text-white/80"
          }`}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="relative block h-6 w-6">
            <Menu
              className={`absolute inset-0 h-6 w-6 transition duration-200 ${menuOpen ? "scale-75 opacity-0 -rotate-90" : "scale-100 opacity-100 rotate-0"
                }`}
            />
            <X
              className={`absolute inset-0 h-6 w-6 transition duration-200 ${menuOpen ? "scale-100 opacity-100 rotate-0" : "scale-75 opacity-0 rotate-90"
                }`}
            />
          </span>
        </button>
      </div>

      <nav
        className={`fixed inset-0 z-[80] bg-[radial-gradient(circle_at_12%_0%,rgba(239,49,45,0.18),transparent_38%),linear-gradient(180deg,#11151a,#171d23)] transition duration-250 ease-out lg:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`mx-auto flex h-full w-full max-w-[1280px] flex-col overflow-y-auto px-6 pb-10 pt-5 transition duration-300 ease-out sm:px-8 sm:pt-6 ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
            }`}
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <Link href="/" className="flex min-w-0 items-center" onClick={handleLogoClick}>
              <div className={logoBadgeClassName}>
                <div className="shrink-0">
                  <BrandMark companyName={siteSettings.companyName} />
                </div>
              </div>
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-white transition hover:text-white/80"
              aria-label="Menü schließen"
              onClick={closeMenu}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {navigation.map((item) => (
            <Link
              key={`${item.href}-${item.label}-mobile`}
              href={item.href}
              className={`border-b border-white/15 py-4 text-base font-semibold uppercase tracking-[0.06em] text-white transition duration-300 last:border-b-0 ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <div
            className={`mt-auto pt-6 transition duration-300 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
          >
            <ButtonLink href="/#kontaktformular" className="w-full justify-center" showArrow={false}>
              Projekt anfragen
            </ButtonLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
