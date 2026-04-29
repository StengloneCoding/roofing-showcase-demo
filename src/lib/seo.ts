import type { Metadata } from "next";

import type { FaqItem, PageSection, SiteSettingsContent } from "@/lib/content";
import {
  DEMO_CITY,
  DEMO_COMPANY_NAME,
  DEMO_REGION,
  DEMO_SITE_URL,
  DEMO_STATE,
} from "@/lib/demo-placeholders";

export const SITE_URL = DEMO_SITE_URL;
const DEFAULT_OG_IMAGE = "/logo-generic.svg";
const DEFAULT_KEYWORDS = [
  "Dachdecker Website Vorlage",
  "Dachsanierung Demo",
  "Blecharbeiten Demo",
  "Dachfenster Demo",
  "Dachdeckermeister",
  "Handwerk Website Demo",
];

type MetadataOptions = {
  description: string;
  keywords?: string[];
  noIndex?: boolean;
  path: string;
  title: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function buildPageMetadata({
  description,
  keywords = [],
  noIndex = false,
  path,
  title,
}: MetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const uniqueKeywords = [...new Set([...DEFAULT_KEYWORDS, ...keywords])];

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: uniqueKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: DEMO_COMPANY_NAME,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: absoluteUrl(DEFAULT_OG_IMAGE),
          width: 560,
          height: 160,
          alt: `${title} | ${DEMO_COMPANY_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function getFaqItemsFromSections(sections: PageSection[]): FaqItem[] {
  const faqSection = sections.find((section) => section.blockType === "faq");

  return faqSection?.blockType === "faq" ? faqSection.items : [];
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: DEMO_COMPANY_NAME,
    url: SITE_URL,
    inLanguage: "de-DE",
  };
}

export function buildLocalBusinessSchema(siteSettings: SiteSettingsContent) {
  const [streetAddress = "", cityLine = ""] = siteSettings.address.split("\n");
  const cityLineMatch = cityLine.match(/^(\d{5})\s+(.+)$/);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteSettings.companyName,
    legalName: siteSettings.legalName,
    url: SITE_URL,
    telephone: siteSettings.phone,
    email: siteSettings.email,
    description: siteSettings.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      postalCode: cityLineMatch?.[1],
      addressLocality: cityLineMatch?.[2] || DEMO_CITY,
      addressCountry: "DE",
    },
    areaServed: DEMO_REGION,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildWebPageSchema({
  description,
  path,
  title,
  type = "WebPage",
}: {
  description: string;
  path: string;
  title: string;
  type?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url: absoluteUrl(path),
    inLanguage: "de-DE",
  };
}

export function buildContactPageSchema(siteSettings: SiteSettingsContent) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Kontakt | ${siteSettings.companyName}`,
    url: absoluteUrl("/kontakt"),
    about: {
      "@type": "LocalBusiness",
      name: siteSettings.companyName,
      telephone: siteSettings.phone,
      email: siteSettings.email,
    },
  };
}

export function buildJobPostingSchema(
  siteSettings: SiteSettingsContent,
  jobs: Array<{ description: string; location: string; title: string; type: string }>,
) {
  return jobs.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    employmentType: job.type,
    hiringOrganization: {
      "@type": "Organization",
      name: siteSettings.companyName,
      sameAs: SITE_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: DEMO_CITY,
        addressRegion: DEMO_STATE,
        addressCountry: "DE",
        streetAddress: job.location,
      },
    },
  }));
}
