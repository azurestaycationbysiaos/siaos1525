import dynamic from "next/dynamic";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Location & Directions — Azure Staycation by Siaos",
  description:
    "Find Azure Staycation by Siaos at Santorini Tower, Azure Urban Resort Residences, Bicutan, Parañaque City — 15th floor, city and sunset view unit.",
};

// Leaflet touches window/document, so it can only render on the client.
const LocationMap = dynamic(() => import("../../components/LocationMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full rounded-2xl border border-ink/10 bg-sand-light animate-pulse" />
  ),
});

const ADDRESS = {
  building: "Santorini Tower, Azure Urban Resort Residences",
  floor: "15th floor",
  street: "Km. 16, West Service Road, Barangay Marcelo Green",
  city: "Bicutan, Parañaque City",
  country: "Philippines",
  lat: 14.48408,
  lng: 121.04341,
};

export default function LocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Azure Staycation by Siaos",
    description:
      "One-bedroom staycation unit at Azure Urban Resort Residences with city and sunset views, fully equipped for up to 4 guests.",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${ADDRESS.floor}, ${ADDRESS.building}, ${ADDRESS.street}`,
      addressLocality: "Parañaque City",
      addressRegion: "Metro Manila",
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ADDRESS.lat,
      longitude: ADDRESS.lng,
    },
    hasMap: `https://www.google.com/maps?q=${ADDRESS.lat},${ADDRESS.lng}`,
    url: "https://azurestaycationbysiaos.com/location",
  };

  return (
    <div className="flex flex-col">
      <Header />
      <article className="mx-auto max-w-4xl px-6 pt-16 pb-24">
        {/* Structured data: this is what search engines and AI crawlers actually read */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Azure Staycation by Siaos
        </p>
        <h1 className="font-display text-4xl text-ink mb-4">
          Location &amp; Directions
        </h1>
        <p className="text-ink-soft leading-relaxed mb-2 max-w-2xl">
          {ADDRESS.floor}, {ADDRESS.building}, {ADDRESS.street},{" "}
          {ADDRESS.city}
        </p>
        <p className="text-ink-soft leading-relaxed mb-10 max-w-2xl">
          City and Sunset View
        </p>

        <LocationMap />

        <p className="text-sm text-ink-soft mt-6">
          <a
            href={`https://www.google.com/maps?q=${ADDRESS.lat},${ADDRESS.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay-deep underline"
          >
            Open in Google Maps
          </a>
        </p>
      </article>
      <Footer />
    </div>
  );
}
