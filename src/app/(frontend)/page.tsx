import type { Metadata } from "next";
import type { PageSection } from "@/lib/content";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { StructuredData } from "@/components/seo/structured-data";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ServiceGridSection } from "@/components/sections/service-grid-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TextColumnsSection } from "@/components/sections/text-columns-section";
import { NextStepsSection } from "@/components/sections/next-steps-section";
import { getPageContent } from "@/lib/cms";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageMetadata, buildWebPageSchema, getFaqItemsFromSections } from "@/lib/seo";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageContent("start");

  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: "/",
    keywords: ["Dachreparatur Demo", "Dachdecker Website Vorlage", "Dachfenster Einbau"],
  });
}

function isSectionOfType<TType extends PageSection["blockType"]>(
  section: PageSection,
  blockType: TType,
): section is Extract<PageSection, { blockType: TType }> {
  return section.blockType === blockType;
}

export default async function Home() {
  const page = await getPageContent("start");

  const statsSection = page.sections.find((section) => isSectionOfType(section, "stats"));
  const serviceSection = page.sections.find((section) =>
    isSectionOfType(section, "serviceGrid"),
  );
  const processSection = page.sections.find((section) => isSectionOfType(section, "process"));
  const aboutSection = page.sections.find((section) => isSectionOfType(section, "textColumns"));
  const faqSection = page.sections.find((section) => isSectionOfType(section, "faq"));
  const faqItems = getFaqItemsFromSections(page.sections);

  return (
    <>
      <StructuredData
        data={[
          buildWebPageSchema({ title: page.title, description: page.metaDescription, path: "/" }),
          buildBreadcrumbSchema([{ name: "Startseite", path: "/" }]),
          ...(faqItems.length > 0 ? [buildFaqSchema(faqItems)] : []),
        ]}
      />
      <PageHero hero={page.hero} pageSlug="start" />
      {statsSection ? (
        <StatsSection
          eyebrow={statsSection.eyebrow}
          heading={statsSection.heading}
          items={statsSection.items}
        />
      ) : null}
      <ReviewsSection />
      {serviceSection ? (
        <ServiceGridSection
          description={serviceSection.description}
          eyebrow={serviceSection.eyebrow}
          heading={serviceSection.heading}
          items={serviceSection.items}
        />
      ) : null}
      <PartnerStrip />
      {processSection ? (
        <ProcessSection
          description={processSection.description}
          eyebrow={processSection.eyebrow}
          heading={processSection.heading}
          steps={processSection.steps}
        />
      ) : null}
      {aboutSection ? (
        <TextColumnsSection
          id="über-uns"
          columns={aboutSection.columns}
          description={aboutSection.description}
          eyebrow={aboutSection.eyebrow}
          heading={aboutSection.heading}
        />
      ) : null}
      {faqSection ? (
        <FaqSection
          description={faqSection.description}
          eyebrow={faqSection.eyebrow}
          heading={faqSection.heading}
          items={faqSection.items}
        />
      ) : null}
      <NextStepsSection />
      <InquiryForm
        id="kontaktformular"
        sourcePage="startseite"
        submitLabel="Anfrage senden"
        title="In 2 Minuten anfragen und eine ehrliche Ersteinschätzung bekommen"
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
