import { InquiryForm } from "@/components/forms/inquiry-form";
import { RenderSection } from "@/components/page-sections";
import { GalleryShowcase } from "@/components/sections/gallery-showcase";
import { PageHero } from "@/components/sections/page-hero";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { getGalleryProjects, getPageContent, getSiteSettings } from "@/lib/cms";

export const revalidate = 3600;

export default async function Home() {
  const [page, projects, siteSettings] = await Promise.all([
    getPageContent("start"),
    getGalleryProjects(3),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageHero hero={page.hero} siteSettings={siteSettings} />
      {page.sections.map((section, index) => {
        const key = `${section.blockType}-${index}`;

        if (section.blockType === "process") {
          return (
            <div key={key}>
              <RenderSection section={section} />
              <ReviewsSection />
              <GalleryShowcase projects={projects} />
            </div>
          );
        }

        return <RenderSection key={key} section={section} />;
      })}
      <InquiryForm
        sourcePage="startseite"
        submitLabel="Projekt anfragen"
        title="Kurz schildern, was ansteht"
        interestOptions={[
          "Dachsanierung",
          "Spenglerarbeiten",
          "Dachfenster",
          "Wartung / Reparatur",
          "Sonstiges Projekt",
        ]}
      />
    </>
  );
}
