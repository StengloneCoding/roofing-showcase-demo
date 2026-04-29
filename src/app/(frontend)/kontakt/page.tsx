import type { Metadata } from "next";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { RenderSection } from "@/components/page-sections";
import { StructuredData } from "@/components/seo/structured-data";
import { PageHero } from "@/components/sections/page-hero";
import { getPageContent, getSiteSettings } from "@/lib/cms";
import { buildBreadcrumbSchema, buildContactPageSchema, buildFaqSchema, buildPageMetadata, buildWebPageSchema, getFaqItemsFromSections } from "@/lib/seo";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageContent("kontakt");

  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: "/kontakt",
    keywords: ["Kontakt Dachdecker Demo", "Anfrage Dachsanierung", "Handwerk Kontaktseite"],
  });
}

export default async function ContactPage() {
  const [page, siteSettings] = await Promise.all([
    getPageContent("kontakt"),
    getSiteSettings(),
  ]);
  const faqItems = getFaqItemsFromSections(page.sections);

  return (
    <>
      <StructuredData
        data={[
          buildWebPageSchema({ title: page.title, description: page.metaDescription, path: "/kontakt", type: "ContactPage" }),
          buildContactPageSchema(siteSettings),
          buildBreadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Kontakt", path: "/kontakt" },
          ]),
          ...(faqItems.length > 0 ? [buildFaqSchema(faqItems)] : []),
        ]}
      />
      <PageHero compact hero={page.hero} pageSlug="kontakt" />
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
