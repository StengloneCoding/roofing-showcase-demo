import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { datenschutzContent } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Datenschutz | Grimm & Lechner",
  description: "Datenschutzhinweise von Grimm & Lechner in Bamberg.",
};

export default function DatenschutzPage() {
  return <LegalPage {...datenschutzContent} />;
}
