import type { Metadata } from "next";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { RenderSection } from "@/components/page-sections";
import { PageHero } from "@/components/sections/page-hero";
import { getPageContent, getSiteSettings } from "@/lib/cms";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Kontakt | Grimm & Lechner",
  description:
    "Kontakt zu Grimm & Lechner für Dachsanierung, Blecharbeiten und Wartung in Bamberg und Umgebung.",
};

export default async function ContactPage() {
  const [page, siteSettings] = await Promise.all([
    getPageContent("kontakt"),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageHero compact hero={page.hero} pageSlug="kontakt" siteSettings={siteSettings} />
      {page.sections.map((section, index) => (
        <RenderSection key={`${section.blockType}-${index}`} section={section} />
      ))}
      <InquiryForm
        id="anfrage"
        sourcePage="anfrage"
        submitLabel="Anfrage absenden"
        title="Projekt oder Frage kurz schildern"
        interestOptions={[
          "Dachsanierung",
          "Blecharbeiten",
          "Dachfenster",
          "Wärmedämmung",
          "Reparatur",
          "Allgemeine Anfrage",
        ]}
      />
    </>
  );
}
