import type { MetadataRoute } from "next";

import { SITE_URL, absoluteUrl } from "@/lib/seo";

const routes = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/kontakt",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/karriere",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/fakten",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/impressum",
    changeFrequency: "yearly",
    priority: 0.2,
  },
  {
    path: "/datenschutz",
    changeFrequency: "yearly",
    priority: 0.2,
  },
] satisfies Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
