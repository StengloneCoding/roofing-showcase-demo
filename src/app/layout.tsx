import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { StructuredData } from "@/components/seo/structured-data";
import { getSiteSettings } from "@/lib/cms";
import { DEMO_COMPANY_NAME } from "@/lib/demo-placeholders";
import { buildLocalBusinessSchema, buildWebsiteSchema, SITE_URL } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${DEMO_COMPANY_NAME} Dachdeckermeister`,
    template: `%s | ${DEMO_COMPANY_NAME}`,
  },
  description:
    "Generische Demo-Website für Dachdecker: Sanierung, Blecharbeiten, Dachfenster und Wartung.",
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await getSiteSettings();

  return (
    <html lang="de" className="h-full scroll-smooth antialiased">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} min-h-full bg-[radial-gradient(circle_at_14%_0%,rgba(224,227,229,0.7),transparent_44%),linear-gradient(180deg,#f7fafc,#f1f4f6)] [font-family:var(--font-body)] text-[color:var(--color-foreground)]`}
      >
        <StructuredData data={[buildWebsiteSchema(), buildLocalBusinessSchema(siteSettings)]} />
        {children}
      </body>
    </html>
  );
}
