import type { Metadata } from "next";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { RenderSection } from "@/components/page-sections";
import { PageHero } from "@/components/sections/page-hero";
import { JobListingsSection } from "@/components/sections/job-listings-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { getPageContent, getSiteSettings } from "@/lib/cms";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Karriere | Grimm & Lechner",
  description:
    "Karriere bei Grimm & Lechner: Dachdeckerhandwerk mit Haltung, Struktur und Perspektive im Raum Bamberg.",
};

const currentJobs = [
  {
    title: "Dachdeckerhelfer",
    type: "Helfertätigkeit" as const,
    description:
      "Wer handwerklich zupacken kann und sich in ein eingespieltes Team einbringen möchte, ist bei uns willkommen.",
    location: "Bamberg und Umgebung",
  },
  {
    title: "Quereinsteiger",
    type: "Vollzeit" as const,
    description:
      "Auch ohne klassischen Dachdecker-Lebenslauf ist ein Einstieg möglich, wenn Motivation und Verlässlichkeit stimmen.",
    location: "Bamberg und Umgebung",
  },
  {
    title: "Dachdeckergesellen",
    type: "Vollzeit" as const,
    description:
      "Fachliche Erfahrung ist natürlich willkommen – besonders dann, wenn Sie sauber arbeiten und Verantwortung übernehmen möchten.",
    location: "Bamberg und Umgebung",
  },
];

export default async function CareerPage() {
  const [page, siteSettings] = await Promise.all([
    getPageContent("karriere"),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageHero compact hero={page.hero} pageSlug="karriere" siteSettings={siteSettings} />
      <JobListingsSection
        eyebrow="Aktuelle Stellen"
        heading="Wir suchen dich!"
        description="Drei Positionen für motivierte Menschen, die mit uns Dachdeckerhandwerk mit Haltung ausüben wollen."
        jobs={currentJobs}
      />
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
