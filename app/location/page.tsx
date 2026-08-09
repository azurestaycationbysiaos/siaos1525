import Header from "../components/Header";
import Footer from "../components/Footer";
import RouteMap from "../components/RouteMap";
import StructuredData from "../components/StructuredData";
import { SITE_NAME } from "../../lib/site";
import { CONTACT } from "../../lib/links";

export const metadata = {
  title: `Location & Directions — ${SITE_NAME}`,
  description:
    "Find Azure Staycation by Siaos at Santorini Tower, Azure Urban Resort Residences, Parañaque — 15th floor, city and sunset view unit.",
};

export default function LocationPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <article className="mx-auto max-w-4xl px-6 pt-16 pb-24">
        <StructuredData />

        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          {SITE_NAME}
        </p>
        <h1 className="font-display text-4xl text-ink mb-4">
          Location &amp; Directions
        </h1>
        <p className="text-ink-soft leading-relaxed mb-2 max-w-2xl">
          {CONTACT.addressFull}
        </p>
        <p className="text-ink-soft leading-relaxed mb-10 max-w-2xl">
          City and Sunset View
        </p>

        <RouteMap />

        <p className="text-sm text-ink-soft mt-6">
          
            href="https://maps.app.goo.gl/8C2w1ajVUULNnc7v6"
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