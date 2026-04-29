import { Phone } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";

export function NextStepsSection() {
  return (
    <section className="w-full border-t-4 border-[color:var(--color-secondary)] bg-[color:var(--color-surface-container-low)]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-secondary)]">
                Nächster Schritt
              </p>
              <h2 className="mt-3 [font-family:var(--font-heading)] text-3xl font-semibold tracking-tight text-[color:var(--color-on-surface)] sm:text-4xl">
                Jetzt kurz anfragen und den nächsten sinnvollen Schritt fürs Dachprojekt kennen.
              </h2>
            </div>
            <p className="text-base leading-7 text-[color:var(--color-on-surface-variant)]">
              Sie bekommen eine klare Ersteinschätzung ohne unnötigen Vertriebsdruck. Schnell, verständlich und mit echtem Handwerksfokus.
            </p>
            <ul className="grid gap-2 text-sm text-[color:var(--color-on-surface-variant)] sm:grid-cols-2">
              <li className="rounded-xl border border-[color:var(--color-outline-variant)]/70 bg-white/70 px-3 py-2">Antwort in der Regel innerhalb von 24h</li>
              <li className="rounded-xl border border-[color:var(--color-outline-variant)]/70 bg-white/70 px-3 py-2">Direkter Ansprechpartner statt Hotline-Kette</li>
              <li className="rounded-xl border border-[color:var(--color-outline-variant)]/70 bg-white/70 px-3 py-2">Unverbindliche Ersteinschätzung</li>
              <li className="rounded-xl border border-[color:var(--color-outline-variant)]/70 bg-white/70 px-3 py-2">Notdienst bei akuten Schäden</li>
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/kontakt">
                Jetzt Anfrage starten
              </ButtonLink>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[color:var(--color-outline-variant)]/70 bg-white p-8 shadow-[0_18px_34px_rgba(20,25,31,0.08)]">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-secondary)]">
                Notfall-Hotline
              </p>
              <div className="flex items-baseline gap-2">
                <Phone className="h-6 w-6 text-[color:var(--color-secondary)]" />
                <a
                  href="tel:+4995162840"
                  className="text-3xl font-bold text-[color:var(--color-primary)] transition hover:text-[color:var(--color-secondary)]"
                >
                  0951 62840
                </a>
              </div>
              <p className="mt-4 text-sm leading-6 text-[color:var(--color-on-surface-variant)]">
                Bei Sturmschaden oder akutem Leck schnell erreichbar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
