import Image from "next/image";
import { Briefcase, Clock3, Hammer, Mail, Phone, ShieldCheck, Star, type LucideIcon } from "lucide-react";

import type { HeroContent } from "@/lib/content";
import { DEMO_PHONE, DEMO_PHONE_HREF } from "@/lib/demo-placeholders";
import { marqueeDemoLogos } from "@/lib/demo-logos";

import { ButtonLink } from "@/components/ui/button-link";

type PageHeroProps = {
  compact?: boolean;
  hero: HeroContent;
  pageSlug?: string;
};

type CompactHeroConfig = {
  chips: string[];
  panelActionHref: string;
  panelActionLabel: string;
  panelEyebrow: string;
  panelItems: Array<{
    icon: LucideIcon;
    label: string;
    value: string;
  }>;
  panelText: string;
  panelTitle: string;
};

const compactHeroConfigs: Record<string, CompactHeroConfig> = {
  kontakt: {
    chips: ["Antwort meist in 24h", "Kostenlose Ersteinschätzung", "Direkter Ansprechpartner"],
    panelEyebrow: "Schnell erreichbar",
    panelTitle: "Ohne Umwege zur ersten klaren Einschätzung",
    panelText: "Ob Reparatur, Sanierung oder akuter Schaden: Die Kontaktseite soll sofort ruhig, verlässlich und handwerklich wirken.",
    panelActionLabel: "Direkt anrufen",
    panelActionHref: `tel:${DEMO_PHONE_HREF}`,
    panelItems: [
      {
        icon: Phone,
        label: "Telefon",
        value: DEMO_PHONE,
      },
      {
        icon: Mail,
        label: "E-Mail",
        value: "info@deinefirma.de",
      },
      {
        icon: Clock3,
        label: "Service",
        value: "Kostenlose Ersteinschätzung",
      },
    ],
  },
  karriere: {
    chips: ["Quereinstieg möglich", "Faire Bezahlung", "Abwechslungsreiche Projekte"],
    panelEyebrow: "Jetzt bewerben",
    panelTitle: "Ein Einstieg, der direkt und unkompliziert wirkt",
    panelText: "Der Karriere-Hero soll nicht nach Konzern klingen, sondern nach Team, Handwerk und einer realistischen Chance auf einen guten Einstieg.",
    panelActionLabel: "Per E-Mail melden",
    panelActionHref: "mailto:karriere@deinefirma.de",
    panelItems: [
      {
        icon: Briefcase,
        label: "Positionen",
        value: "Helfer, Quereinsteiger, Gesellen",
      },
      {
        icon: Hammer,
        label: "Alltag",
        value: "Praxisnah, direkt und eingespielt",
      },
      {
        icon: ShieldCheck,
        label: "Rahmen",
        value: "Faire Bezahlung und klare Kommunikation",
      },
    ],
  },
};

export function PageHero({
  compact = false,
  hero,
  pageSlug = "start",
}: PageHeroProps) {
  const isHome = pageSlug === "start";
  const showInfoCard = isHome && !compact;
  const showLogoMarquee = isHome && !compact;
  const compactHeroConfig = compact ? compactHeroConfigs[pageSlug] : undefined;
  const showCompactPanel = Boolean(compactHeroConfig);
  const sectionHeightClass = "min-h-screen min-h-[100svh] md:h-screen md:h-[100svh] md:min-h-0";
  const contentAlignmentClass = compact ? "items-center" : "items-center";
  const contentPaddingClass = compact
    ? "pt-36 pb-24 sm:pt-40 sm:pb-28"
    : "pt-32 pb-6 sm:pt-36 sm:pb-8 lg:pt-36 lg:pb-0";
  const headingSizeClass = compact ? "text-4xl sm:text-5xl lg:text-6xl" : "text-4xl sm:text-5xl lg:text-6xl";
  const contentLayoutClass = showInfoCard || showCompactPanel
    ? "flex w-full flex-col gap-8 md:gap-12 xl:grid xl:grid-cols-[minmax(0,1fr)_360px] xl:items-center xl:gap-10"
    : "w-full";

  return (
    <section
      className={`relative isolate overflow-hidden ${sectionHeightClass} text-white`}
    >
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcQc_eMHGLhyPCAnfmvLHJTs1nuwikYMiunf91UbBWThFR2UjhzKzKhuBAfGIb5iitU0O0TrSDZpqyAt0v7taHJ3n3w5ShPAjSwWuLkxZfkYjMbqeMmhmsJLl3F3TXr0mYlrUpAj-mrIEva3kasKTUq4E79BgZO9SOu18SSsLPkpTF5X06nqCkKy3zOlk5dJoFSPKzWyS1dZVV-PoJZH2q5DE9Pi_51E-cVd2LPbkcwaogA8mAIIaMWw_IzVK4Q43sq4kD9yTz5vPN"
        alt="Dachlandschaft in der Abendstimmung"
        className={`absolute inset-0 h-full w-full object-cover ${compact ? "object-[center_32%]" : "object-center"}`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(17,20,23,0.82),rgba(17,20,23,0.58))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,22,25,0.66),rgba(20,22,25,0.25))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.35))]" />

      <div className={`relative z-10 mx-auto flex ${sectionHeightClass} w-full max-w-[1280px] flex-col justify-between px-4 sm:px-6 lg:px-8`}>
        <div className={`flex flex-1 min-h-0 w-full ${contentAlignmentClass} ${contentPaddingClass}`}>
          <div className={contentLayoutClass}>
            <div className="max-w-4xl space-y-5">
              {hero.eyebrow ? (
                <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/14 bg-black/16 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/78 backdrop-blur-sm shadow-[0_14px_28px_rgba(5,8,12,0.18)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--color-secondary)] shadow-[0_0_18px_rgba(239,49,45,0.7)]" />
                  <p className="text-[color:var(--color-secondary)]">
                    {hero.eyebrow}
                  </p>
                </div>
              ) : null}
              <div className="space-y-4">
                <h1 className={`max-w-[13ch] text-balance [font-family:var(--font-heading)] font-bold leading-[1.05] tracking-[-0.03em] text-white drop-shadow-[0_14px_28px_rgba(0,0,0,0.22)] ${headingSizeClass}`}>
                  {hero.title}
                </h1>
                <p className="max-w-[34rem] text-pretty [font-family:var(--font-heading)] text-lg font-medium leading-[1.55] tracking-[-0.012em] text-white/84 sm:text-[1.4rem] sm:leading-[1.6]">
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

              {compactHeroConfig?.chips?.length ? (
                <div className="flex flex-wrap gap-3 pt-2">
                  {compactHeroConfig.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white/88 backdrop-blur-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            {showInfoCard ? (
              <div className="w-full xl:max-w-none xl:justify-self-end">
                <div className="relative overflow-hidden rounded-[32px] border border-white/16 bg-white/10 p-6 shadow-[0_26px_60px_rgba(5,8,12,0.28)] backdrop-blur-md sm:p-7">
                  <div className="absolute -right-12 -top-10 h-28 w-28 rounded-full bg-[color:var(--color-secondary)]/30 blur-3xl" />
                  <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

                  <div className="relative space-y-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                          Ihr nächster Schritt
                        </p>
                        <h2 className="mt-2 [font-family:var(--font-heading)] text-2xl font-semibold tracking-tight text-white xl:text-3xl">
                          Kostenlose Erstberatung
                        </h2>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 xl:flex-col xl:gap-3">
                      <div className="rounded-2xl border border-white/10 bg-black/12 px-4 py-3 sm:flex-1 xl:flex-none">
                        <div className="flex items-start gap-3">
                          <ShieldCheck className="mt-0.5 h-5 w-5 text-[color:var(--color-secondary)]" />
                          <div>
                            <p className="text-sm font-semibold text-white">Kostenlose Ersteinschätzung</p>
                            <p className="mt-1 text-sm leading-6 text-white/72">
                              Schnell, unverbindlich und ohne Verkaufsdruck.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/12 px-4 py-3 sm:flex-1 xl:flex-none">
                        <div className="flex items-start gap-3">
                          <Star className="mt-0.5 h-5 w-5 fill-[color:var(--color-secondary)] text-[color:var(--color-secondary)]" />
                          <div>
                            <p className="text-sm font-semibold text-white">4.9/5 Beispielbewertungen</p>
                            <p className="mt-1 text-sm leading-6 text-white/72">
                              Platzhalter für Vertrauen, Referenzen und starke Erstwirkung.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {compactHeroConfig ? (
              <div className="w-full max-w-[360px] lg:justify-self-end">
                <div className="relative overflow-hidden rounded-[32px] border border-white/16 bg-white/10 p-6 shadow-[0_26px_60px_rgba(5,8,12,0.28)] backdrop-blur-md sm:p-7">
                  <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-[color:var(--color-secondary)]/28 blur-3xl" />
                  <div className="absolute left-0 top-1/2 h-20 w-20 -translate-x-6 rounded-full bg-white/10 blur-2xl" />

                  <div className="relative space-y-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                        {compactHeroConfig.panelEyebrow}
                      </p>
                      <h2 className="mt-3 [font-family:var(--font-heading)] text-2xl font-semibold leading-tight text-white">
                        {compactHeroConfig.panelTitle}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-white/74">
                        {compactHeroConfig.panelText}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {compactHeroConfig.panelItems.map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={`${item.label}-${item.value}`}
                            className="rounded-2xl border border-white/10 bg-black/12 px-4 py-3"
                          >
                            <div className="flex items-start gap-3">
                              <Icon className="mt-0.5 h-5 w-5 text-[color:var(--color-secondary)]" />
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/58">
                                  {item.label}
                                </p>
                                <p className="mt-1 text-sm font-semibold leading-6 text-white">
                                  {item.value}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-1">
                      <ButtonLink href={compactHeroConfig.panelActionHref} variant="light" className="w-full justify-center">
                        {compactHeroConfig.panelActionLabel}
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {showLogoMarquee ? (
          <div className="pointer-events-none relative z-10 shrink-0 overflow-hidden pb-4 sm:pb-5">
            <div className="relative overflow-hidden py-3">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[rgba(17,22,27,0.96)] via-[rgba(17,22,27,0.72)] to-transparent sm:w-24" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[rgba(17,22,27,0.96)] via-[rgba(17,22,27,0.72)] to-transparent sm:w-24" />

              <div className="animate-[partner-marquee_28s_linear_infinite] flex w-max items-center gap-9 px-3 sm:gap-11 sm:px-4">
                {marqueeDemoLogos.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex h-9 shrink-0 items-center px-1 py-1 text-white/76 sm:h-10"
                  >
                    <Image
                      src={item.src}
                      alt={`${item.name} Demo-Logo`}
                      width={item.width}
                      height={item.height}
                      className="h-6 w-auto opacity-80 brightness-0 invert sm:h-7"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
