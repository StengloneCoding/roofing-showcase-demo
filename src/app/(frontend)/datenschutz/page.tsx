import type { Metadata } from "next";

import { StructuredData } from "@/components/seo/structured-data";
import { LegalPage } from "@/components/legal/legal-page";
import { datenschutzContent } from "@/lib/legal-content";
import { buildBreadcrumbSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Datenschutz",
  description: "Datenschutzhinweise von Grimm & Lechner in Bamberg.",
  path: "/datenschutz",
  noIndex: true,
});

export default function DatenschutzPage() {
  return (
    <>
      <StructuredData
        data={[
          buildWebPageSchema({ title: "Datenschutz", description: "Datenschutzhinweise von Grimm & Lechner in Bamberg.", path: "/datenschutz" }),
          buildBreadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Datenschutz", path: "/datenschutz" },
          ]),
        ]}
      />
      <LegalPage {...datenschutzContent} />
    </>
  );
}
