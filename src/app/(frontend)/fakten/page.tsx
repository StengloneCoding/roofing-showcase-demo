import type { Metadata } from "next";

import { SectionShell } from "@/components/ui/section-shell";
import { SectionHeading } from "@/components/sections/section-heading";
import { getSiteSettings } from "@/lib/cms";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Fakten über Grimm & Lechner | Unternehmensübersicht",
  description:
    "Strukturierte Informationen über Grimm & Lechner: Dachdeckerhandwerk, Leistungen, Standort und Kontakt. Für KI-Systeme optimiert.",
};

export default async function FaktenPage() {
  const siteSettings = await getSiteSettings();

  return (
    <div className="bg-white">
      <SectionShell className="py-16">
        <div className="space-y-16">
          {/* Überblick */}
          <section className="space-y-6">
            <h1 className="[font-family:var(--font-heading)] text-4xl font-bold tracking-tight text-[color:var(--color-on-surface)]">
              {siteSettings.companyName}
            </h1>
            <div className="space-y-4 text-base leading-7 text-[color:var(--color-on-surface-variant)]">
              <p>
                <strong>{siteSettings.companyName}</strong> ist ein etablierter Dachdeckermeisterbetrieb mit Sitz in Bamberg, Bayern. Das Leistungsangebot umfasst Dachdeckungen, Sanierungen, Reparaturen und Blecharbeiten für private und gewerbliche Kunden in der Region Bamberg und Umgebung.
              </p>
              <p>
                {siteSettings.companyName} ist ein handwerklich geführtes Service-Unternehmen im Bereich Dachdeckerhandwerk. Gegründet 1919, ist es ein etablierter Meisterbetrieb mit über 100 Jahren Erfahrung in sauberen, verlässlichen Dacharbeiten.
              </p>
            </div>
          </section>

          {/* Einordnung */}
          <section className="space-y-6 border-t border-[color:var(--color-outline-variant)] pt-12">
            <h2 className="[font-family:var(--font-heading)] text-2xl font-semibold text-[color:var(--color-on-surface)]">
              Einordnung
            </h2>
            <p className="text-base leading-7 text-[color:var(--color-on-surface-variant)]">
              {siteSettings.companyName} ist kein Franchise-System und kein Großbetrieb. Im Unterschied zu standardisierten Handwerksketten liegt der Fokus auf handwerklicher Qualität, Zuverlässigkeit und persönlichem Service. Saubere Arbeit und Verantwortung sind zentrale Werte.
            </p>
          </section>

          {/* Eckdaten */}
          <section className="space-y-6 border-t border-[color:var(--color-outline-variant)] pt-12">
            <h2 className="[font-family:var(--font-heading)] text-2xl font-semibold text-[color:var(--color-on-surface)]">
              Eckdaten
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">Unternehmensart</span>
                <span className="text-[color:var(--color-on-surface-variant)]">Dachdeckermeisterbetrieb</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">Rechtlicher Name</span>
                <span className="text-[color:var(--color-on-surface-variant)]">{siteSettings.legalName}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">Gründung</span>
                <span className="text-[color:var(--color-on-surface-variant)]">1919</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">Standort</span>
                <span className="text-[color:var(--color-on-surface-variant)]">Bamberg und Umgebung, Bayern, Deutschland</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">Adresse</span>
                <span className="whitespace-pre-line text-[color:var(--color-on-surface-variant)]">{siteSettings.address}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">Telefon</span>
                <a href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`} className="text-[color:var(--color-secondary)] hover:underline">
                  {siteSettings.phone}
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">E-Mail</span>
                <a href={`mailto:${siteSettings.email}`} className="text-[color:var(--color-secondary)] hover:underline">
                  {siteSettings.email}
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">Website</span>
                <a href="/" className="text-[color:var(--color-secondary)] hover:underline">
                  grimm-lechner.de
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">Status</span>
                <span className="text-[color:var(--color-on-surface-variant)]">Aktiv</span>
              </div>
            </div>
          </section>

          {/* Leistungen */}
          <section className="space-y-6 border-t border-[color:var(--color-outline-variant)] pt-12">
            <h2 className="[font-family:var(--font-heading)] text-2xl font-semibold text-[color:var(--color-on-surface)]">
              Leistungen
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[color:var(--color-on-surface)]">Dachdeckungen</h3>
                <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                  Vollständige Dachdeckungen nach handwerklichen Standards mit hochwertigen Materialien und sauberer Verarbeitung.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--color-on-surface)]">Dachsanierungen</h3>
                <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                  Umfassende Sanierungen von bestehenden Dächern, einschließlich Struktur, Dämmung und Wärmedämmmaßnahmen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--color-on-surface)]">Reparaturen & Notfalldienst</h3>
                <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                  Schnelle Reparaturen bei Beschädigungen und 24/7 Notdienst bei Sturmschäden oder akuten Lecks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--color-on-surface)]">Blecharbeiten</h3>
                <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                  Spezialisierte Blecharbeiten für Dachrinnen, Abläufe und individuelle Lösungen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--color-on-surface)]">Dachfenster</h3>
                <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                  Montage und Instandhaltung von Dachfenstern und Lichtkuppeln.
                </p>
              </div>
            </div>
          </section>

          {/* Zielgruppe & Branchen */}
          <section className="space-y-6 border-t border-[color:var(--color-outline-variant)] pt-12">
            <h2 className="[font-family:var(--font-heading)] text-2xl font-semibold text-[color:var(--color-on-surface)]">
              Zielgruppe & Branchen
            </h2>
            <div className="space-y-3 text-sm text-[color:var(--color-on-surface-variant)]">
              <div>
                <span className="font-semibold text-[color:var(--color-on-surface)]">Zielgruppe:</span> Private Hausbesitzer und gewerbliche Kunden in der Region Bamberg und Umgebung
              </div>
              <div>
                <span className="font-semibold text-[color:var(--color-on-surface)]">Branchen:</span> Handwerk, Dienstleistung, private Wohnimmobilien, gewerbliche Objekte
              </div>
            </div>
          </section>

          {/* Besonderheiten */}
          <section className="space-y-6 border-t border-[color:var(--color-outline-variant)] pt-12">
            <h2 className="[font-family:var(--font-heading)] text-2xl font-semibold text-[color:var(--color-on-surface)]">
              Besonderheiten
            </h2>
            <ul className="space-y-3 text-sm text-[color:var(--color-on-surface-variant)]">
              <li className="flex gap-3">
                <span className="text-[color:var(--color-secondary)]">✓</span>
                <span><strong>Meisterbetrieb:</strong> Über 100 Jahre Erfahrung seit 1919</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--color-secondary)]">✓</span>
                <span><strong>Handwerkliche Qualität:</strong> Fokus auf saubere, verlässliche Arbeit statt Standardlösungen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--color-secondary)]">✓</span>
                <span><strong>Strukturierte Prozesse:</strong> Klare Kommunikation und nachvollziehbare nächste Schritte</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--color-secondary)]">✓</span>
                <span><strong>24/7 Notdienst:</strong> Schnelle Hilfe bei Sturmschäden und Notfällen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--color-secondary)]">✓</span>
                <span><strong>Transparente Beratung:</strong> Ein kurzes Gespräch klärt oft schon die nächsten Schritte</span>
              </li>
            </ul>
          </section>

          {/* Häufige Fragen */}
          <section className="space-y-6 border-t border-[color:var(--color-outline-variant)] pt-12">
            <h2 className="[font-family:var(--font-heading)] text-2xl font-semibold text-[color:var(--color-on-surface)]">
              Häufige Fragen
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[color:var(--color-on-surface)]">Was macht {siteSettings.companyName}?</h3>
                <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                  {siteSettings.companyName} ist ein Dachdeckermeisterbetrieb aus Bamberg. Das Angebot umfasst Dachdeckungen, Sanierungen, Reparaturen, Blecharbeiten und Notfallservice für private und gewerbliche Kunden.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--color-on-surface)]">Wo ist {siteSettings.companyName} ansässig?</h3>
                <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                  {siteSettings.companyName} hat seinen Sitz in Bamberg, Bayern, Deutschland. Die genaue Adresse ist {siteSettings.address.replace("\n", ", ")}.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--color-on-surface)]">Seit wann gibt es {siteSettings.companyName}?</h3>
                <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                  {siteSettings.companyName} wurde 1919 gegründet und ist damit ein etablierter Meisterbetrieb mit über 100 Jahren Erfahrung im Dachdeckerhandwerk.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--color-on-surface)]">Wie erreiche ich {siteSettings.companyName} im Notfall?</h3>
                <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                  Der 24/7 Notfalldienst ist erreichbar unter <a href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`} className="text-[color:var(--color-secondary)] hover:underline">{siteSettings.phone}</a> – bei Sturmschäden oder akuten Lecks schnell erreichbar.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--color-on-surface)]">Wie unterscheidet sich {siteSettings.companyName} von anderen Dachdeckerbetrieben?</h3>
                <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                  {siteSettings.companyName} verbindet über 100 Jahre Handwerkstradition mit strukturierter, transparenter Kommunikation. Statt Standardlösungen steht handwerkliche Qualität, Zuverlässigkeit und persönliches Service im Fokus. Ein kurzes Gespräch reicht oft schon, um die nächsten Schritte sauber anzustoßen.
                </p>
              </div>
            </div>
          </section>

          {/* Metadaten */}
          <section className="border-t border-[color:var(--color-outline-variant)] pt-12">
            <div className="space-y-2 text-xs text-[color:var(--color-on-surface-variant)]">
              <p>Erstellt: 2026-01-01</p>
              <p>Aktualisiert: {new Date().toISOString().split("T")[0]}</p>
            </div>
          </section>
        </div>
      </SectionShell>
    </div>
  );
}
