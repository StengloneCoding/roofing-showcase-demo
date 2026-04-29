import Image from "next/image";

import { SectionShell } from "@/components/ui/section-shell";

const partners = [
  { alt: "VELUX Logo", name: "VELUX", src: "/partners/velux.svg" },
  { alt: "BRAAS Logo", name: "BRAAS", src: "/partners/braas.svg" },
  { alt: "FAKRO Logo", name: "FAKRO", src: "/partners/fakro.svg" },
  { alt: "ISOVER Logo", name: "ISOVER", src: "/partners/isover.svg" },
  { alt: "Nelskamp Logo", name: "Nelskamp", src: "/partners/nelskamp.svg" },
];

const marqueePartners = [...partners, ...partners];

export function PartnerStrip() {
  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(241,244,246,0.94),rgba(224,227,229,0.9))] py-12 sm:py-14">
      <SectionShell className="py-0">
        <div className="space-y-8 overflow-hidden rounded-[30px] border border-[color:var(--color-outline-variant)]/65 bg-white/65 px-0 py-12 shadow-[0_22px_44px_rgba(20,25,31,0.06)] sm:py-14">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-secondary)]">
              Starke Partner für starke Arbeit
            </p>
            <h2 className="mt-3 [font-family:var(--font-heading)] text-3xl font-semibold tracking-tight text-[color:var(--color-on-surface)] sm:text-4xl">
              Materialien und Marken, auf die wir uns auf dem Dach verlassen.
            </h2>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#eff2f4] to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#eff2f4] to-transparent sm:w-24" />

            <div className="overflow-hidden">
              <div className="animate-[partner-marquee_24s_linear_infinite] flex w-max items-center gap-5 px-6 sm:gap-6 sm:px-10">
                {marqueePartners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex h-24 w-[220px] shrink-0 items-center justify-center rounded-2xl border border-[color:var(--color-outline-variant)]/70 bg-white px-5 opacity-70 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
                  >
                    <Image src={partner.src} alt={partner.alt} width={220} height={88} className="h-auto w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
