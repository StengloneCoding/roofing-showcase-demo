import type { Metadata } from "next";

import { StructuredData } from "@/components/seo/structured-data";
import { LegalPage } from "@/components/legal/legal-page";
import { impressumContent } from "@/lib/legal-content";
import { buildBreadcrumbSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Impressum",
  description: "Platzhalterseite für rechtliche Angaben in der Demo-Version.",
  path: "/impressum",
  noIndex: true,
});

export default function ImpressumPage() {
  return (
    <>
      <StructuredData
        data={[
          buildWebPageSchema({ title: "Impressum", description: "Platzhalterseite für rechtliche Angaben in der Demo-Version.", path: "/impressum" }),
          buildBreadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Impressum", path: "/impressum" },
          ]),
        ]}
      />
      <LegalPage {...impressumContent} />
    </>
  );
}
