import type { GoogleReviewsSnapshot } from "@/lib/content";
import { DEMO_COMPANY_NAME } from "@/lib/demo-placeholders";

const fallbackReviews: GoogleReviewsSnapshot = {
  placeName: DEMO_COMPANY_NAME,
  rating: 4.9,
  totalReviews: 12,
  source: "fallback",
  reviews: [
    {
      authorName: "Kundin A.",
      publishedAt: "Beispielbewertung",
      rating: 5,
      text: "Von der ersten Rückmeldung bis zur sauberen Ausführung war alles klar, freundlich und verlässlich. Genau so sollte eine Dachdecker-Website den Betrieb präsentieren.",
    },
    {
      authorName: "Kunde B.",
      publishedAt: "Beispielbewertung",
      rating: 5,
      text: "Die Demo zeigt gut, wie Leistungen, Vertrauen und Kontakt auf einen Blick verständlich aufgebaut sein können.",
    },
    {
      authorName: "Hausverwaltung C.",
      publishedAt: "Beispielbewertung",
      rating: 4,
      text: "Klare Struktur, direkte Sprache und ein Auftritt, der für einen Handwerksbetrieb sofort professionell wirkt.",
    },
  ],
};

export async function getGoogleReviews(): Promise<GoogleReviewsSnapshot> {
  return fallbackReviews;
}
