import { SITE_URL, SITE_NAME } from "../../lib/site";
import { CONTACT, SOCIAL_LINKS } from "../../lib/links";

// Structured data (JSON-LD) describing the business using schema.org's
// LodgingBusiness vocabulary. This doesn't change anything visible on the
// page — it's a machine-readable summary that search engines (Google's
// rich results) and AI answer engines can read directly, instead of having
// to infer the same facts from prose on the page.
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_NAME,
    description:
      "A modern boho 1-bedroom staycation at Azure Urban Resort Residences, Parañaque, offering themed room decorations for birthdays, anniversaries, gender reveals, bridal showers, and wedding proposals.",
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-banner.jpg`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "₱₱",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.addressFull,
      addressLocality: "Parañaque City",
      addressRegion: "Metro Manila",
      addressCountry: "PH",
    },
    sameAs: [
      SOCIAL_LINKS.facebookPage,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.tiktokOfficial,
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
