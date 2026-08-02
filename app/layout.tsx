import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azure Staycation by Siaos — Proposal Staycation in Parañaque",
  description:
    "A modern boho 1-bedroom staycation at Azure Urban Resort Residences, Parañaque — built for the moment you get down on one knee. Proposal setups, anniversaries, and intimate celebrations, good for up to 4 guests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
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
