import type { Metadata } from "next";

import { StructuredData } from "@/components/seo/structured-data";
import { SectionShell } from "@/components/ui/section-shell";
import { getSiteSettings } from "@/lib/cms";
import { DEMO_REGION, DEMO_WEBSITE } from "@/lib/demo-placeholders";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = buildPageMetadata({
  title: "Fakten für {Deine Firma} | Unternehmensprofil",
  description:
    "Strukturierte Grounding-Page zu Leistungen, Kontakt, Region und Unternehmensprofil für {Deine Firma}.",
  path: "/fakten",
  keywords: ["Dachdeckerbetrieb Profil", "Dachdecker Leistungen", "Unternehmensprofil Handwerk"],
});

export default async function FaktenPage() {
  const siteSettings = await getSiteSettings();
  const faqItems = [
    {
      question: `Was zeigt ${siteSettings.companyName} auf dieser Seite?`,
      answer: `${siteSettings.companyName} zeigt hier einen kompakten Überblick zu Leistungen, Einsatzgebiet, Kontakt und typischen Schwerpunkten rund ums Dach.`,
    },
    {
      question: `Wo ist ${siteSettings.companyName} aktiv?`,
      answer: `${siteSettings.companyName} arbeitet in ${DEMO_REGION}. Die genaue Adresse kann im Platzhalterbereich frei ersetzt werden.`,
    },
    {
      question: `Wie erreiche ich ${siteSettings.companyName}?`,
      answer: `Aktuell sind ${siteSettings.phone} und ${siteSettings.email} als Platzhalter hinterlegt. Diese Angaben werden vor dem Livegang durch die finalen Kontaktdaten ersetzt.`,
    },
    {
      question: `Wofür eignet sich diese Fakten-Seite?`,
      answer: "Sie dient als Grounding-Page, die Leistungen, Einsatzgebiet und Unternehmensdaten strukturiert bündelt und so die Auffindbarkeit in KI-Systemen verbessert.",
    },
  ];

  return (
    <div className="bg-[radial-gradient(circle_at_12%_0%,rgba(239,49,45,0.18),transparent_38%),linear-gradient(180deg,#11151a,#171d23)]">
      <StructuredData
        data={[
          buildWebPageSchema({
            title: "Fakten für {Deine Firma} | Unternehmensprofil",
            description:
              "Strukturierte Grounding-Page zu Leistungen, Kontakt, Region und Unternehmensprofil für {Deine Firma}.",
            path: "/fakten",
            type: "AboutPage",
          }),
          buildBreadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Fakten", path: "/fakten" },
          ]),
          buildFaqSchema(faqItems),
        ]}
      />
      <SectionShell className="pb-16 pt-28 sm:pt-32 lg:pt-36">
        <div className="space-y-16 rounded-[36px] border border-white/14 bg-white px-6 py-8 shadow-[0_22px_50px_rgba(8,12,16,0.24)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <section className="space-y-6">
            <h1 className="[font-family:var(--font-heading)] text-4xl font-bold tracking-tight text-[color:var(--color-on-surface)]">
              {siteSettings.companyName}
            </h1>
            <div className="space-y-4 text-base leading-7 text-[color:var(--color-on-surface-variant)]">
              <p>
                <strong>{siteSettings.companyName}</strong> ist in dieser Version als vorbereitete Grounding-Page angelegt. Sie bündelt Leistungen, Einsatzgebiet, Kontakt und Unternehmenssignale so, dass KI-Systeme den Betrieb sauberer einordnen und in Antworten besser berücksichtigen können.
              </p>
              <p>
                Die Inhalte decken typische Leistungen, Kontaktwege, Karriere-Bausteine und Vertrauenselemente ab und können gezielt auf den jeweiligen Betrieb angepasst werden, bis daraus eine klare und suchstarke Unternehmensseite entsteht.
              </p>
            </div>
          </section>

          <section className="space-y-6 border-t border-[color:var(--color-outline-variant)] pt-12">
            <h2 className="[font-family:var(--font-heading)] text-2xl font-semibold text-[color:var(--color-on-surface)]">
              Eckdaten
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">Unternehmensart</span>
                <span className="text-[color:var(--color-on-surface-variant)]">Dachdeckerbetrieb</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">Name</span>
                <span className="text-[color:var(--color-on-surface-variant)]">{siteSettings.companyName}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">Rechtlicher Name</span>
                <span className="text-[color:var(--color-on-surface-variant)]">{siteSettings.legalName}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">Einsatzgebiet</span>
                <span className="text-[color:var(--color-on-surface-variant)]">{DEMO_REGION}</span>
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
                <span className="text-[color:var(--color-on-surface-variant)]">{DEMO_WEBSITE}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="font-semibold text-[color:var(--color-on-surface)] sm:w-40">Status</span>
                <span className="text-[color:var(--color-on-surface-variant)]">Vorabversion</span>
              </div>
            </div>
          </section>

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
                  Umfassende Sanierungen von bestehenden Dächern, einschließlich Struktur, Dämmung und Anschlussdetails.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--color-on-surface)]">Reparaturen</h3>
                <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                  Schnelle Reparaturen bei Beschädigungen, Undichtigkeiten und einzelnen Schadstellen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--color-on-surface)]">Blecharbeiten</h3>
                <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                  Saubere Blechlösungen für Dachrinnen, Anschlüsse, Abdeckungen und individuelle Details.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[color:var(--color-on-surface)]">Dachfenster</h3>
                <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                  Montage, Austausch und Einbindung von Dachfenstern in bestehende oder neue Dachaufbauten.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6 border-t border-[color:var(--color-outline-variant)] pt-12">
            <h2 className="[font-family:var(--font-heading)] text-2xl font-semibold text-[color:var(--color-on-surface)]">
              Aktueller Stand
            </h2>
            <ul className="space-y-3 text-sm text-[color:var(--color-on-surface-variant)]">
              <li className="flex gap-3">
                <span className="text-[color:var(--color-secondary)]">✓</span>
                <span><strong>Platzhalter aktiv:</strong> Name, Adresse, Telefonnummer, E-Mail und Rechtstexte sind aktuell noch neutral gehalten.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--color-secondary)]">✓</span>
                <span><strong>Grounding-Page:</strong> Leistungen, Region und Unternehmensdaten werden strukturiert gebündelt, damit KI-Systeme den Betrieb klarer einordnen können.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--color-secondary)]">✓</span>
                <span><strong>Anpassbar:</strong> Alle Platzhalter können später zentral gegen die finalen Firmendaten ersetzt werden.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-6 border-t border-[color:var(--color-outline-variant)] pt-12">
            <h2 className="[font-family:var(--font-heading)] text-2xl font-semibold text-[color:var(--color-on-surface)]">
              Häufige Fragen
            </h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold text-[color:var(--color-on-surface)]">{item.question}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </SectionShell>
    </div>
  );
}
