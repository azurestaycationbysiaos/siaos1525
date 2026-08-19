import type { Metadata } from "next";
import { Fraunces, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "../lib/site";
import StructuredData from "./components/StructuredData";

// Self-hosted via next/font: inlines font-face CSS at build time and
// serves the font files from our own domain, instead of the old
// <link rel="stylesheet"> to fonts.googleapis.com, which was a
// render-blocking external request (~2s of blocking time per
// PageSpeed Insights). The `variable` names match the custom
// properties already defined in globals.css, so no other file needs
// to change.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteTitle =
  "Azure Staycation by Siaos — Staycation, Celebration & Proposal Packages in Parañaque";
const siteDescription =
  "A modern boho 1-bedroom staycation at Azure Urban Resort Residences, Parañaque. Book a romantic getaway, intimate celebration, or themed room decoration for anniversaries, birthdays, welcome-home celebrations, and wedding proposals — good for up to 4 guests.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteTitle,
  description: siteDescription,
  colorScheme: "light",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 2048,
        height: 768,
        alt: "Azure Staycation by Siaos — celebration and proposal setups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/hero-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${fraunces.variable} ${libreFranklin.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">
        <main className="flex flex-col flex-1">{children}</main>
      </body>
    </html>
  );
}
