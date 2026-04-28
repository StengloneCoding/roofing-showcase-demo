import type { Metadata } from "next";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { RenderSection } from "@/components/page-sections";
import { PageHero } from "@/components/sections/page-hero";
import { getPageContent, getSiteSettings } from "@/lib/cms";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Karriere | Grimm & Lechner",
  description:
    "Karriere bei Grimm & Lechner: Dachdeckerhandwerk mit Haltung, Struktur und Perspektive im Raum Bamberg.",
};

export default async function CareerPage() {
  const [page, siteSettings] = await Promise.all([
    getPageContent("karriere"),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageHero compact hero={page.hero} pageSlug="karriere" siteSettings={siteSettings} />
      {page.sections.map((section, index) => (
        <RenderSection key={`${section.blockType}-${index}`} section={section} />
      ))}
      <InquiryForm
        id="bewerbung"
        sourcePage="bewerbung"
        submitLabel="Bewerbung senden"
        title="Kurz vorstellen und unkompliziert melden"
        interestOptions={[
          "Dachdecker / Dachdeckerin",
          "Dachdeckerhelfer",
          "Ausbildung",
          "Initiativbewerbung",
        ]}
      />
    </>
  );
}
