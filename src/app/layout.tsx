import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";

import { StructuredData } from "@/components/seo/structured-data";
import { getSiteSettings } from "@/lib/cms";
import { DEMO_COMPANY_NAME } from "@/lib/demo-placeholders";
import { buildLocalBusinessSchema, buildWebsiteSchema, SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
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
        className={`${inter.variable} ${workSans.variable} min-h-full bg-[radial-gradient(circle_at_14%_0%,rgba(224,227,229,0.7),transparent_44%),linear-gradient(180deg,#f7fafc,#f1f4f6)] [font-family:var(--font-inter)] text-[color:var(--color-foreground)]`}
      >
        <StructuredData data={[buildWebsiteSchema(), buildLocalBusinessSchema(siteSettings)]} />
        {children}
      </body>
    </html>
  );
}
