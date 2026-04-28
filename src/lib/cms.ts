import type {
  GalleryProject,
  PageContent,
  SiteSettingsContent,
} from "@/lib/content";
import {
  fallbackGalleryProjects,
  fallbackPages,
  fallbackSiteSettings,
} from "@/lib/fallback-content";
import { getPayloadClient } from "@/lib/payload";

const normalizeTags = (tags?: Array<{ text?: string } | string> | null) =>
  (tags || [])
    .map((tag) => (typeof tag === "string" ? tag : tag?.text))
    .filter((tag): tag is string => Boolean(tag));

export async function getSiteSettings(): Promise<SiteSettingsContent> {
  try {
    const payload = await getPayloadClient();
    const settings = (await payload.findGlobal({
      slug: "site-settings",
    })) as Partial<SiteSettingsContent>;

    return {
      ...fallbackSiteSettings,
      ...settings,
      navigation:
        settings.navigation && settings.navigation.length > 0
          ? settings.navigation
          : fallbackSiteSettings.navigation,
    };
  } catch {
    return fallbackSiteSettings;
  }
}

export async function getPageContent(slug: string): Promise<PageContent> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "pages",
      depth: 1,
      limit: 1,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    });

    const page = result.docs[0] as PageContent | undefined;

    if (page?.hero?.title && Array.isArray(page.sections) && page.sections.length > 0) {
      return page;
    }
  } catch {
    // Fall through to defaults while the CMS is still being populated.
  }

  return fallbackPages[slug] || fallbackPages.start;
}

export async function getGalleryProjects(limit?: number): Promise<GalleryProject[]> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "gallery-items",
      depth: 1,
      limit: limit || 12,
      sort: "-updatedAt",
    });

    if (result.docs.length > 0) {
      return result.docs.map((project) => ({
        completionYear:
          typeof project.completionYear === "number"
            ? project.completionYear
            : undefined,
        location: typeof project.location === "string" ? project.location : undefined,
        result: typeof project.result === "string" ? project.result : undefined,
        serviceType: project.serviceType,
        slug: project.slug,
        summary: project.summary,
        tags: normalizeTags(project.tags as Array<{ text?: string }>),
        title: project.title,
      }));
    }
  } catch {
    // Fall through to defaults while the CMS is still being populated.
  }

  return typeof limit === "number"
    ? fallbackGalleryProjects.slice(0, limit)
    : fallbackGalleryProjects;
}
