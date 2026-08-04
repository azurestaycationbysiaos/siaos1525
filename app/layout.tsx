import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "../lib/site";
import StructuredData from "./components/StructuredData";

const siteTitle =
  "Azure Staycation by Siaos — Staycation, Celebration & Proposal Packages in Parañaque";
const siteDescription =
  "A modern boho 1-bedroom staycation at Azure Urban Resort Residences, Parañaque. Book a romantic getaway, intimate celebration, or themed room decoration for anniversaries, birthdays, welcome-home celebrations, and wedding proposals — good for up to 4 guests.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteTitle,
  description: siteDescription,
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
    <html lang="en" className="h-full antialiased">
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Libre+Franklin:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
