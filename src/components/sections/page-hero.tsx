import type { HeroContent, SiteSettingsContent } from "@/lib/content";

import { ButtonLink } from "@/components/ui/button-link";

type PageHeroProps = {
  compact?: boolean;
  hero: HeroContent;
  pageSlug?: string;
  siteSettings: SiteSettingsContent;
};

export function PageHero({
  compact = false,
  hero,
  pageSlug = "start",
  siteSettings,
}: PageHeroProps) {
  const isHome = pageSlug === "start";

  return (
    <section
      className={`relative isolate overflow-hidden ${
        compact ? "min-h-[420px]" : "min-h-[calc(100vh-80px)]"
      } text-white`}
    >
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcQc_eMHGLhyPCAnfmvLHJTs1nuwikYMiunf91UbBWThFR2UjhzKzKhuBAfGIb5iitU0O0TrSDZpqyAt0v7taHJ3n3w5ShPAjSwWuLkxZfkYjMbqeMmhmsJLl3F3TXr0mYlrUpAj-mrIEva3kasKTUq4E79BgZO9SOu18SSsLPkpTF5X06nqCkKy3zOlk5dJoFSPKzWyS1dZVV-PoJZH2q5DE9Pi_51E-cVd2LPbkcwaogA8mAIIaMWw_IzVK4Q43sq4kD9yTz5vPN"
        alt="Bamberg Dächer in der Abendstimmung"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(17,20,23,0.82),rgba(17,20,23,0.58))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,22,25,0.66),rgba(20,22,25,0.25))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.35))]" />

      <div
        className={`relative mx-auto flex h-full w-full max-w-[1280px] items-end px-4 sm:px-6 lg:px-8 ${
          compact ? "py-18" : "py-24"
        }`}
      >
        <div className="max-w-4xl space-y-8">
          {hero.eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-secondary)]">
              {hero.eyebrow}
            </p>
          ) : null}
          <div className="space-y-5">
            <h1 className="max-w-4xl [font-family:var(--font-heading)] text-4xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
              {hero.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            {hero.secondaryCta ? (
              <ButtonLink
                href={hero.secondaryCta.href}
                variant={isHome ? "light" : "outline"}
                className={isHome ? "border border-white/30 bg-white/10 text-white hover:bg-white/20" : "!border-white !text-white hover:!border-white/80"}
              >
                {hero.secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>

          {isHome ? (
            <div className="grid max-w-2xl gap-4 pt-6 sm:grid-cols-3">
              <div className="border border-white/35 bg-black/25 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.08em] text-white/72">Standort</p>
                <p className="mt-2 text-sm font-semibold">Bamberg</p>
              </div>
              <div className="border border-white/35 bg-black/25 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.08em] text-white/72">Kontakt</p>
                <p className="mt-2 text-sm font-semibold">{siteSettings.phone}</p>
              </div>
              <div className="border border-white/35 bg-black/25 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.08em] text-white/72">Seit</p>
                <p className="mt-2 text-sm font-semibold">1919</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
