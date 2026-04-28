import { SectionShell } from "@/components/ui/section-shell";

const partners = ["VELUX", "BRAAS", "FAKRO", "ISOVER", "Nelskamp", "Schiefer", "Blech"];

export function PartnerStrip() {
  return (
    <SectionShell className="py-10">
      <div className="space-y-6 rounded-[32px] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-6 py-8 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-[color:var(--color-muted)]">
            Starke Partner für starke Arbeit
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--color-foreground)] sm:text-4xl">
            Materialien und Marken, auf die wir uns auf dem Dach verlassen.
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {partners.map((partner) => (
            <span
              key={partner}
              className="rounded-full bg-[color:var(--color-surface-muted)] px-5 py-2 text-sm font-semibold text-[color:var(--color-foreground)]"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
