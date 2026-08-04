import type { MetadataRoute } from "next";
import { SITE_NAME } from "../lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Azure Staycation",
    description:
      "Staycation, celebration, and proposal packages at Azure Urban Resort Residences, Parañaque.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4EFE4",
    theme_color: "#9C5C46",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
