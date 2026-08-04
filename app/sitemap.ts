import type { MetadataRoute } from "next";
import { getDocumentSlugs } from "outstatic/server";
import { SITE_URL } from "../lib/site";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/packages", priority: 0.9, changeFrequency: "weekly" },
  { path: "/packages/one-area-portfolio", priority: 0.7, changeFrequency: "monthly" },
  { path: "/packages/full-room-portfolio", priority: 0.7, changeFrequency: "monthly" },
  { path: "/packages/bridal-shower-portfolio", priority: 0.7, changeFrequency: "monthly" },
  { path: "/packages/pregnancy-gender-portfolio", priority: 0.7, changeFrequency: "monthly" },
  { path: "/proposals", priority: 0.9, changeFrequency: "weekly" },
  { path: "/proposals/signature-proposal-portfolio", priority: 0.7, changeFrequency: "monthly" },
  { path: "/proposals/happy-ever-after-portfolio", priority: 0.7, changeFrequency: "monthly" },
  { path: "/proposals/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
  { path: "/inclusions", priority: 0.6, changeFrequency: "monthly" },
  { path: "/exclusions", priority: 0.5, changeFrequency: "monthly" },
  { path: "/house-rules", priority: 0.5, changeFrequency: "monthly" },
  { path: "/booking-process", priority: 0.6, changeFrequency: "monthly" },
  { path: "/payment-channels", priority: 0.5, changeFrequency: "monthly" },
  { path: "/reviews", priority: 0.6, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const slugs = getDocumentSlugs("posts");
    blogEntries = slugs.map((slug: string) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    blogEntries = [];
  }

  return [...staticEntries, ...blogEntries];
}
