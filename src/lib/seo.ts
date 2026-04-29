import type { Metadata } from "next";

import type { FaqItem, PageSection, SiteSettingsContent } from "@/lib/content";

export const SITE_URL = "https://www.grimm-lechner.de";
const DEFAULT_OG_IMAGE = "/logo.webp";
const DEFAULT_KEYWORDS = [
  "Dachdecker Bamberg",
  "Dachsanierung Bamberg",
  "Blecharbeiten Bamberg",
  "Dachfenster Bamberg",
  "Dachdeckermeister",
  "Grimm und Lechner",
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
      siteName: "Grimm & Lechner",
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: absoluteUrl(DEFAULT_OG_IMAGE),
          width: 1200,
          height: 630,
          alt: `${title} | Grimm & Lechner`,
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
    name: "Grimm & Lechner",
    url: SITE_URL,
    inLanguage: "de-DE",
  };
}

export function buildLocalBusinessSchema(siteSettings: SiteSettingsContent) {
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
      streetAddress: siteSettings.address.split("\n")[0],
      postalCode: siteSettings.address.match(/\b\d{5}\b/)?.[0],
      addressLocality: "Bamberg",
      addressCountry: "DE",
    },
    areaServed: "Bamberg und Umgebung",
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

export function buildJobPostingSchema(jobs: Array<{ description: string; location: string; title: string; type: string }>) {
  return jobs.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    employmentType: job.type,
    hiringOrganization: {
      "@type": "Organization",
      name: "Grimm & Lechner",
      sameAs: SITE_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bamberg",
        addressRegion: "Bayern",
        addressCountry: "DE",
        streetAddress: job.location,
      },
    },
  }));
}
