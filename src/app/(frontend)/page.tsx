import type { PageSection } from "@/lib/content";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GalleryShowcase } from "@/components/sections/gallery-showcase";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ServiceGridSection } from "@/components/sections/service-grid-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TextColumnsSection } from "@/components/sections/text-columns-section";
import { getGalleryProjects, getPageContent, getSiteSettings } from "@/lib/cms";

export const revalidate = 3600;

function isSectionOfType<TType extends PageSection["blockType"]>(
  section: PageSection,
  blockType: TType,
): section is Extract<PageSection, { blockType: TType }> {
  return section.blockType === blockType;
}

export default async function Home() {
  const [page, projects, siteSettings] = await Promise.all([
    getPageContent("start"),
    getGalleryProjects(3),
    getSiteSettings(),
  ]);

  const statsSection = page.sections.find((section) => isSectionOfType(section, "stats"));
  const serviceSection = page.sections.find((section) =>
    isSectionOfType(section, "serviceGrid"),
  );
  const processSection = page.sections.find((section) => isSectionOfType(section, "process"));
  const aboutSection = page.sections.find((section) => isSectionOfType(section, "textColumns"));
  const faqSection = page.sections.find((section) => isSectionOfType(section, "faq"));
  const ctaSection = page.sections.find((section) => isSectionOfType(section, "cta"));

  return (
    <>
      <PageHero hero={page.hero} pageSlug="start" siteSettings={siteSettings} />
      <ReviewsSection />
      {statsSection ? (
        <StatsSection
          eyebrow={statsSection.eyebrow}
          heading={statsSection.heading}
          items={statsSection.items}
        />
      ) : null}
      {serviceSection ? (
        <ServiceGridSection
          description={serviceSection.description}
          eyebrow={serviceSection.eyebrow}
          heading={serviceSection.heading}
          items={serviceSection.items}
        />
      ) : null}
      <GalleryShowcase projects={projects} />
      {processSection ? (
        <ProcessSection
          description={processSection.description}
          eyebrow={processSection.eyebrow}
          heading={processSection.heading}
          steps={processSection.steps}
        />
      ) : null}
      <PartnerStrip />
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
      {ctaSection ? (
        <CtaSection
          description={ctaSection.description}
          eyebrow={ctaSection.eyebrow}
          heading={ctaSection.heading}
          primaryCta={ctaSection.primaryCta}
          secondaryCta={ctaSection.secondaryCta}
        />
      ) : null}
      <InquiryForm
        id="kontaktformular"
        sourcePage="startseite"
        submitLabel="Projekt anfragen"
        title="Ihr Dachprojekt startet hier mit einer kurzen Nachricht."
        interestOptions={[
          "Dachsanierung",
          "Blecharbeiten",
          "Wärmedämmung",
          "Dachfenster",
          "Reparatur",
          "Sonstiges Projekt",
        ]}
      />
    </>
  );
}
