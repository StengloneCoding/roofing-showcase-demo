import type { PageSection } from "@/lib/content";

import { ContactCardsSection } from "@/components/sections/contact-cards-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { JobHighlightsSection } from "@/components/sections/job-highlights-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServiceGridSection } from "@/components/sections/service-grid-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TextColumnsSection } from "@/components/sections/text-columns-section";

type RenderSectionProps = {
  section: PageSection;
};

export function RenderSection({ section }: RenderSectionProps) {
  switch (section.blockType) {
    case "stats":
      return (
        <StatsSection
          eyebrow={section.eyebrow}
          heading={section.heading}
          items={section.items}
        />
      );
    case "serviceGrid":
      return (
        <ServiceGridSection
          description={section.description}
          eyebrow={section.eyebrow}
          heading={section.heading}
          items={section.items}
        />
      );
    case "process":
      return (
        <ProcessSection
          description={section.description}
          eyebrow={section.eyebrow}
          heading={section.heading}
          steps={section.steps}
        />
      );
    case "textColumns":
      return (
        <TextColumnsSection
          columns={section.columns}
          description={section.description}
          eyebrow={section.eyebrow}
          heading={section.heading}
        />
      );
    case "faq":
      return (
        <FaqSection
          description={section.description}
          eyebrow={section.eyebrow}
          heading={section.heading}
          items={section.items}
        />
      );
    case "cta":
      return (
        <CtaSection
          description={section.description}
          eyebrow={section.eyebrow}
          heading={section.heading}
          primaryCta={section.primaryCta}
          secondaryCta={section.secondaryCta}
        />
      );
    case "contactCards":
      return (
        <ContactCardsSection
          description={section.description}
          eyebrow={section.eyebrow}
          heading={section.heading}
          items={section.items}
        />
      );
    case "jobHighlights":
      return (
        <JobHighlightsSection
          description={section.description}
          eyebrow={section.eyebrow}
          heading={section.heading}
          items={section.items}
          note={section.note}
        />
      );
    default:
      return null;
  }
}
