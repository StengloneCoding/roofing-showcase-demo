import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { GalleryShowcase } from "@/components/sections/gallery-showcase";
import { RenderSection } from "@/components/page-sections";
import { getGalleryProjects, getPageContent, getSiteSettings } from "@/lib/cms";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Referenzen | Grimm & Lechner",
  description:
    "Projektbeispiele von Grimm & Lechner rund um Dachsanierung, Blechdetails und Wartung.",
};

export default async function ReferencesPage() {
  const [page, projects, siteSettings] = await Promise.all([
    getPageContent("referenzen"),
    getGalleryProjects(),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageHero hero={page.hero} siteSettings={siteSettings} />
      <GalleryShowcase projects={projects} />
      {page.sections.map((section, index) => (
        <RenderSection key={`${section.blockType}-${index}`} section={section} />
      ))}
    </>
  );
}
