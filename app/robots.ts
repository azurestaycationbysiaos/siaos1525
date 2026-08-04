import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

// This site wants to be found — by traditional search engines and by AI
// assistants people ask things like "where can I book a proposal setup in
// Parañaque". So the default here is permissive: allow everyone, and only
// keep the CMS admin route out of the index.
//
// A couple of notes for future maintenance:
// - Google-Extended / Applebot-Extended control AI *training* use only —
//   blocking them would NOT remove the site from Google Search or Siri
//   results, only from being used to train future models. Left allowed
//   here since there's no reason a small local business needs to opt out.
// - Some crawlers (e.g. Bytespider) have a documented history of ignoring
//   robots.txt entirely. This file is a polite, standard request — it is
//   not a security control.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/outstatic/", "/api/outstatic/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
