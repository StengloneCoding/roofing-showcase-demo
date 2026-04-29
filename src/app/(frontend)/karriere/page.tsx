import type { Metadata } from "next";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { StructuredData } from "@/components/seo/structured-data";
import { PageHero } from "@/components/sections/page-hero";
import { JobListingsSection } from "@/components/sections/job-listings-section";
import { getPageContent, getSiteSettings } from "@/lib/cms";
import { DEMO_REGION } from "@/lib/demo-placeholders";
import { buildBreadcrumbSchema, buildJobPostingSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageContent("karriere");

  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: "/karriere",
    keywords: ["Dachdecker Jobs", "Karriere Dachdecker", "Quereinsteiger Handwerk"],
  });
}

const currentJobs = [
  {
    title: "Dachdeckerhelfer",
    type: "Helfertätigkeit" as const,
    description:
      "Wer handwerklich zupacken kann und sich in ein eingespieltes Team einbringen möchte, ist bei uns willkommen.",
    location: DEMO_REGION,
  },
  {
    title: "Quereinsteiger",
    type: "Vollzeit" as const,
    description:
      "Auch ohne klassischen Dachdecker-Lebenslauf ist ein Einstieg möglich, wenn Motivation und Verlässlichkeit stimmen.",
    location: DEMO_REGION,
  },
  {
    title: "Dachdeckergesellen",
    type: "Vollzeit" as const,
    description:
      "Fachliche Erfahrung ist natürlich willkommen – besonders dann, wenn Sie sauber arbeiten und Verantwortung übernehmen möchten.",
    location: DEMO_REGION,
  },
];

export default async function CareerPage() {
  const [page, siteSettings] = await Promise.all([
    getPageContent("karriere"),
    getSiteSettings(),
  ]);

  return (
    <>
      <StructuredData
        data={[
          buildWebPageSchema({ title: page.title, description: page.metaDescription, path: "/karriere", type: "CollectionPage" }),
          buildBreadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Karriere", path: "/karriere" },
          ]),
          ...buildJobPostingSchema(siteSettings, currentJobs),
        ]}
      />
      <PageHero compact hero={page.hero} pageSlug="karriere" />
      <JobListingsSection
        eyebrow="Aktuelle Stellen"
        heading="Wir suchen dich!"
        description="Drei Positionen für motivierte Menschen, die Dachdeckerhandwerk mit Haltung ausüben wollen."
        jobs={currentJobs}
      />
      <InquiryForm
        id="bewerbung"
        sourcePage="bewerbung"
        submitLabel="Bewerbung senden"
        title="Kurz vorstellen und unkompliziert melden"
        interestOptions={[
          "Dachdeckerhelfer",
          "Quereinsteiger",
          "Dachdeckergeselle",
          "Initiativ",
        ]}
      />
    </>
  );
}
