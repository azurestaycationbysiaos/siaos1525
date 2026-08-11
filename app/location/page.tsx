import Header from "../components/Header";
import Footer from "../components/Footer";
import RouteMap from "../components/RouteMap";
import StructuredData from "../components/StructuredData";
import { SITE_NAME } from "../../lib/site";
import { CONTACT } from "../../lib/links";

export const metadata = {
  title: `Location & Directions — ${SITE_NAME}`,
  description:
    "Azure Staycation by Siaos sits inside Azure Urban Resort Residences, Bicutan, Parañaque — right at the SLEX Bicutan exit, minutes from SM Bicutan, NAIA, and Makati CBD.",
};

const NEARBY = [
  { place: "SM Bicutan Shopping Mall", distance: "800 m - 1km", time: "6 - 8 minutes" }, 

  { place: "SLEX Bicutan Exit Southbound", distance: "1.1 km", time: "7 minutes" }, 

  { place: "Bicutan Market", distance: "1.1 km", time: "7 minutes" },

  { place: "Parañaque Doctors Hospital", distance: "2.4 km", time: "13 minutes" }, 

  { place: "Ayala Malls South Park", distance: "8.5 km", time: "24 minutes" }, 

  { place: "Parañaque City Hall", distance: "5 km", time: "23 minutes" }, 

  { place: "Alabang Town Center", distance: "12.2 km", time: "30 minutes" }, 

  { place: "Asian Hospital, Alabang", distance: "9.9 km", time: "23 minutes" }, 

  { place: "Festival Mall, Alabang", distance: "9.8 km", time: "21 minutes" }, 

  { place: "PITX (Parañaque Integrated Terminal Exchange)", distance: "15.9 km", time: "37 minutes" },

  { place: "SM Mall of Asia", distance: "12 km", time: "35 minutes" }, 

  { place: "NAIA Terminal 3", distance: "11 km", time: "20–25 minutes" },

  { place: "NAIA Terminal 4", distance: "11 km", time: "20–25 minutes" },

  { place: "NAIA Terminal 1", distance: "13 km", time: "30–35 minutes" },

  { place: "NAIA Terminal 2", distance: "13 km", time: "30–35 minutes" },

  { place: "One Ayala Terminal", distance: "9.8 km", time: "31 minutes" } 
];

export default function LocationPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <article className="mx-auto max-w-4xl px-6 pt-16 pb-24">
        <StructuredData />

        {/* Building context first */}
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Inside Azure Urban Resort Residences
        </p>
        <h1 className="font-display text-4xl text-ink mb-4">
          Location &amp; Directions
        </h1>
        <p className="text-ink-soft leading-relaxed mb-10 max-w-2xl">
          Right at the Bicutan exit of SLEX and Skyway, just off Doña
          Soledad Avenue, Azure Urban Resort Residences puts you minutes
          from SM Bicutan, major hospitals, and both NAIA terminals — with
          the convenience of Makati CBD about half an hour away.
        </p>

        {/* Their specific unit, second */}
        <div className="rounded-2xl border border-ink/10 bg-cream-card p-6 mb-12">
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-2">
            {SITE_NAME}
          </p>
          <p className="text-ink-soft leading-relaxed mb-1">
            {CONTACT.addressFull}
          </p>
          <p className="text-ink-soft leading-relaxed">City and Sunset View</p>
        </div>

        <RouteMap />

        <p className="text-sm text-ink-soft mt-6 mb-16">
          <a href="https://maps.app.goo.gl/8C2w1ajVUULNnc7v6" target="_blank" rel="noopener noreferrer" className="text-clay-deep underline">
            Open in Google Maps
          </a>
        </p>

        {/* Convenience list */}
        <h2 className="font-display text-2xl text-ink mb-6 text-center">
          Convenience Within Minutes
        </h2>
        <ul className="max-w-xl mx-auto space-y-4 mb-6">
          {NEARBY.map((n) => (
            <li key={n.place} className="text-center">
              <p className="text-ink">
                {n.place}
                {n.distance !== "—" ? ` — ${n.distance}` : ""}
              </p>
              <p className="text-ink-soft text-sm">{n.time}</p>
            </li>
          ))}
        </ul>
        <p className="text-xs text-ink-soft text-center">
          *Estimated travel time during light to moderate vehicular traffic flow.
        </p>
      </article>
      <Footer />
    </div>
  );
}
