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
        compact ? "min-h-[420px]" : "min-h-[calc(100vh-72px)]"
      } bg-[#15181c] text-white`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,13,16,0.92),rgba(15,16,20,0.7))]" />
      <div className="absolute inset-0 opacity-90">
        <div className="absolute left-[-5%] top-[10%] h-[52%] w-[36%] rotate-[-18deg] rounded-[36px] border border-white/18 bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
        <div className="absolute left-[18%] top-[18%] h-[44%] w-[22%] rotate-[-18deg] rounded-[28px] border border-white/16 bg-white/3" />
        <div className="absolute right-[10%] top-[8%] h-[58%] w-[28%] rotate-[18deg] rounded-[36px] border border-white/18 bg-white/4" />
        <div className="absolute right-[24%] top-[20%] h-[40%] w-[16%] rotate-[18deg] rounded-[28px] border border-white/14 bg-white/2" />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.32))]" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(239,49,45,0.22),transparent_24%),radial-gradient(circle_at_85%_25%,rgba(255,255,255,0.08),transparent_28%)]" />

      <div
        className={`relative mx-auto flex h-full w-full max-w-7xl items-end px-4 sm:px-6 lg:px-8 ${
          compact ? "py-18" : "py-24"
        }`}
      >
        <div className="max-w-3xl space-y-8">
          {hero.eyebrow ? (
            <p className="text-sm font-medium text-white/76">
              {hero.eyebrow}
            </p>
          ) : null}
          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {hero.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </ButtonLink>
            {hero.secondaryCta ? (
              <ButtonLink href={hero.secondaryCta.href} variant={isHome ? "light" : "outline"}>
                {hero.secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
          {isHome ? (
            <div className="grid max-w-2xl gap-4 pt-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/12 bg-white/8 p-4 backdrop-blur">
                <p className="text-xs text-white/60">Standort</p>
                <p className="mt-2 text-sm font-semibold">Bamberg</p>
              </div>
              <div className="rounded-3xl border border-white/12 bg-white/8 p-4 backdrop-blur">
                <p className="text-xs text-white/60">Kontakt</p>
                <p className="mt-2 text-sm font-semibold">{siteSettings.phone}</p>
              </div>
              <div className="rounded-3xl border border-white/12 bg-white/8 p-4 backdrop-blur">
                <p className="text-xs text-white/60">Seit</p>
                <p className="mt-2 text-sm font-semibold">1919</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
