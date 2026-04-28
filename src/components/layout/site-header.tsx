import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

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

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {navigation.map((item, index) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className={`text-[15px] font-semibold transition ${
                index === 0
                  ? "text-[color:var(--color-primary)]"
                  : "text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

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
      </div>

      <div className="border-t border-[color:var(--color-border)] lg:hidden">
        <div className="flex w-full items-center gap-5 overflow-x-auto px-3 py-3 text-sm font-semibold text-[color:var(--color-foreground)] sm:px-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navigation.map((item, index) => (
            <Link
              key={`${item.href}-${item.label}-mobile`}
              href={item.href}
              className={`shrink-0 transition ${
                index === 0
                  ? "text-[color:var(--color-primary)]"
                  : "hover:text-[color:var(--color-primary)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
