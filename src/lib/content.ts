export type LinkItem = {
  href: string;
  label: string;
};

export type HeroContent = {
  description: string;
  eyebrow?: string;
  primaryCta: LinkItem;
  secondaryCta?: LinkItem;
  title: string;
};

export type StatItem = {
  description?: string;
  label: string;
  value: string;
};

export type ServiceItem = {
  bullets?: string[];
  description: string;
  title: string;
};

export type ProcessStep = {
  description: string;
  title: string;
};

export type TextColumn = {
  body: string;
  title: string;
};

export type FaqItem = {
  answer: string;
  question: string;
};

export type ContactCard = {
  body: string;
  href?: string;
  icon: "clock" | "mail" | "map" | "phone";
  label?: string;
  title: string;
};

export type PageSection =
  | {
      blockType: "stats";
      eyebrow?: string;
      heading: string;
      items: StatItem[];
    }
  | {
      blockType: "serviceGrid";
      description?: string;
      eyebrow?: string;
      heading: string;
      items: ServiceItem[];
    }
  | {
      blockType: "process";
      description?: string;
      eyebrow?: string;
      heading: string;
      steps: ProcessStep[];
    }
  | {
      blockType: "textColumns";
      columns: TextColumn[];
      description?: string;
      eyebrow?: string;
      heading: string;
    }
  | {
      blockType: "faq";
      description?: string;
      eyebrow?: string;
      heading: string;
      items: FaqItem[];
    }
  | {
      blockType: "cta";
      description: string;
      eyebrow?: string;
      heading: string;
      primaryCta: LinkItem;
      secondaryCta?: LinkItem;
    }
  | {
      blockType: "contactCards";
      description?: string;
      eyebrow?: string;
      heading: string;
      items: ContactCard[];
    }
  | {
      blockType: "jobHighlights";
      description?: string;
      eyebrow?: string;
      heading: string;
      items: string[];
      note?: string;
    };

export type PageContent = {
  hero: HeroContent;
  metaDescription: string;
  sections: PageSection[];
  slug: string;
  title: string;
};

export type GalleryProject = {
  completionYear?: number;
  location?: string;
  result?: string;
  slug: string;
  summary: string;
  tags: string[];
  title: string;
  serviceType: string;
};

export type SiteSettingsContent = {
  address: string;
  companyName: string;
  email: string;
  footerText: string;
  legalName: string;
  navigation: LinkItem[];
  phone: string;
  tagline: string;
};

export type GoogleReview = {
  authorName: string;
  publishedAt?: string;
  rating: number;
  text: string;
};

export type GoogleReviewsSnapshot = {
  placeName: string;
  rating: number;
  reviews: GoogleReview[];
  source: "fallback" | "google";
  totalReviews: number;
};
