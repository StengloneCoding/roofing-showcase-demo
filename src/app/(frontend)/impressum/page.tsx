import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { impressumContent } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Impressum | Grimm & Lechner",
  description: "Impressum von Grimm & Lechner in Bamberg.",
};

export default function ImpressumPage() {
  return <LegalPage {...impressumContent} />;
}
