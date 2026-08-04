// Single source of truth for the site's public URL.
//
// Right now this falls back to the Vercel URL. Once the custom domain is
// purchased and pointed at this project, set NEXT_PUBLIC_SITE_URL in your
// environment (e.g. https://azurestaycationbysiaos.com) and every canonical
// URL, Open Graph tag, sitemap entry, and robots.txt reference across the
// site will update automatically — no need to hunt through individual files.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://azurestaycationbysiaos.vercel.app";

export const SITE_NAME = "Azure Staycation by Siaos";
