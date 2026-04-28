import Link from "next/link";

import type { HeroContent, SiteSettingsContent } from "@/lib/content";

type PageHeroProps = {
  hero: HeroContent;
  siteSettings: SiteSettingsContent;
};

export function PageHero({ hero, siteSettings }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(176,45,39,0.2),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(196,140,45,0.22),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.76),rgba(243,235,225,0.94))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(18,15,14,0.08))]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-18 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <div className="space-y-8">
          {hero.eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-brand)]">
              {hero.eyebrow}
            </p>
          ) : null}
          <div className="space-y-5">
            <h1 className="max-w-4xl font-display text-6xl uppercase leading-[0.95] tracking-[0.05em] text-[color:var(--color-ink)] sm:text-7xl">
              {hero.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--color-muted)] sm:text-xl">
              {hero.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={hero.primaryCta.href}
              className="rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-brand-dark)]"
            >
              {hero.primaryCta.label}
            </Link>
            {hero.secondaryCta ? (
              <Link
                href={hero.secondaryCta.href}
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[color:var(--color-ink)] transition hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
              >
                {hero.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/55 bg-[color:var(--color-ink)] p-6 text-white shadow-[0_30px_80px_rgba(40,20,14,0.22)]">
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(176,45,39,0.18),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(196,140,45,0.22),transparent_36%)]" />
          <div className="relative space-y-8">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                Meisterbetrieb
              </p>
              <p className="font-display text-4xl uppercase tracking-[0.08em]">
                {siteSettings.companyName}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/55">Kontakt</p>
                <p className="mt-3 text-lg font-semibold">{siteSettings.phone}</p>
                <p className="text-sm text-white/70">{siteSettings.email}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/55">Einsatzgebiet</p>
                <p className="mt-3 text-lg font-semibold">Bamberg & Region</p>
                <p className="text-sm text-white/70">Sanierung, Dachdetails, Wartung</p>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Haltung statt Hektik
              </p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Wir planen ruhig, setzen sauber um und bleiben auch dann gut ansprechbar, wenn auf
                der Baustelle Entscheidungen getroffen werden muessen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
