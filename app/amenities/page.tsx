import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_NAME } from "../../lib/site";

export const metadata = {
  title: `Property Amenities at Azure Urban Resort Residences — ${SITE_NAME}`,
  description:
    "Everything staycation guests can access at Azure Urban Resort Residences — the man-made beach, wave pool, beach volleyball, Azure Clubhouse, and more, separate from your unit's own inclusions.",
};

const AMENITY_SECTIONS = [
  {
    title: "Azure Beach",
    img: "/images/blog/amenities/azure-beach-azure-urban-resort-residences.webp",
    description:
      "A man-made beach with fine white sand and a resort-inspired atmosphere — one of the property's most iconic attractions, perfect for relaxing, taking photos, or simply unwinding during your stay.",
  },
  {
    title: "Azure Wave Pool",
    img: "/images/blog/amenities/azure-wave-pool-azure-urban-resort-residences.webp",
    description:
      "Beach-like waves without leaving Metro Manila — one of the biggest highlights of staying at Azure Urban Resort Residences.",
  },
  {
    title: "Beach Bar",
    img: "/images/blog/amenities/azure-beach-bar-azure-urban-resort-residences.webp",
    description:
      "Located right beside Azure Beach, a relaxing spot to enjoy the resort ambiance while taking a break from swimming.",
  },
  {
    title: "The Sands",
    img: "/images/blog/amenities/the-sands-azure-urban-resort-residences.webp",
    description:
      "A beachfront-themed bistro and bar next to the wave pool, open until late in the evening — good for a casual meal or a nightcap without leaving the property.",
  },
  {
    title: "Children's Beach Playground",
    img: "/images/blog/amenities/childrens-beach-playground-azure-urban-resort-residences.webp",
    description:
      "A dedicated beach playground with water-friendly play structures for younger guests, ideal for families traveling with kids.",
  },
  {
    title: "Beach Volleyball Court",
    img: "/images/blog/amenities/beach-volleyball-azure-urban-resort-residences.webp",
    description:
      "An outdoor volleyball area that adds to the property's fun, tropical atmosphere. Bring your own ball.",
  },
];

const CLUBHOUSE_SECTIONS = [
  {
    title: "Café Elegante",
    img: "/images/blog/amenities/cafe-elegante-azure-clubhouse.webp",
    description:
      "A quick meal or refreshing drink, conveniently located inside the Azure Clubhouse and accessible to staycation guests.",
  },
  {
    title: "Lobby Lounge",
    img: "/images/blog/amenities/lobby-lounge-azure-clubhouse.webp",
    description:
      "A comfortable place to relax while waiting for companions or enjoying the clubhouse atmosphere.",
  },
  {
    title: "View Deck",
    img: "/images/blog/amenities/view-deck-azure-clubhouse.webp",
    description:
      "Views of the beautifully landscaped resort community from inside the Azure Clubhouse.",
  },
];

const RESTAURANTS_INSIDE_AZURE = [
  { name: "La Shish Mediterranean Meals", img: "/images/blog/restaurants-near-azure/la-shish-mediterranean-meals-azure.webp", description: "Mediterranean meals." },
  { name: "SAM'PEDRO Inasal and Cafe", img: "/images/blog/restaurants-near-azure/sampedro-inasal-and-cafe-azure.webp", description: "Filipino-style inasal, rice meals, and café offerings." },
  { name: "Mangosssip Azure", img: "/images/blog/restaurants-near-azure/mangosssip-azure.webp", description: "Drinks, snacks, and light food." },
  { name: "The Sands", img: "/images/blog/restaurants-near-azure/the-sands-bistro-azure.webp", description: "Beachside dining and bar around the Azure beach area." },
  { name: "Chow N Chill", img: "/images/blog/restaurants-near-azure/chow-n-chill-azure.webp", description: "Café and food option in the Azure retail area." },
  { name: "Café Elegante", img: "/images/blog/restaurants-near-azure/café-elegante-azure.webp", description: "Café option inside Azure Clubhouse." },
  { name: "Beryl Restaurant", img: "/images/blog/restaurants-near-azure/beryl-restaurant-azure.webp", description: "Sit-down restaurant option associated with Azure Residences." },
  { name: "Urban Bites Food Hub", img: "/images/blog/restaurants-near-azure/urban-bites-food-hub-azure.webp", description: "Food hub option in the Azure retail area." },
];

const FOOD_JUST_OUTSIDE_AZURE = [
  { name: "Andok's Azure Dine-in", img: "/images/blog/places-to-eat-near-azure/andoks-azure-dine-in-near-bahamas-tower.webp", description: "Casual Filipino roast chicken near Bahamas Tower, under 5 minutes on foot." },
  { name: "Andok's — Near Maui Tower", img: "/images/blog/places-to-eat-near-azure/andoks-near-maui-tower-azure.webp", description: "Take-out branch near Maui Tower for chicken and ready-to-eat meals." },
  { name: "Dunkin' — West Service Road", img: "/images/blog/places-to-eat-near-azure/dunkin-near-azure-west-service-road.webp", description: "Donuts, coffee and quick snacks off West Service Road." },
  { name: "Potato Corner — Azure", img: "/images/blog/places-to-eat-near-azure/potato-corner-azure-bahamas-tower.webp", description: "Flavored fries near the Azure gate and Bahamas Tower area." },
  { name: "Don Benito Cassava Cake & Pichi Pichi", img: "/images/blog/places-to-eat-near-azure/don-benito-cassava-bicutan.webp", description: "Classic Filipino kakanin — cassava cake and pichi-pichi." },
];

export default function AmenitiesPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <article className="mx-auto max-w-4xl px-6 pt-16 pb-24">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Azure Urban Resort Residences
        </p>
        <h1 className="font-display text-4xl text-ink mb-4">Property Amenities</h1>
        <p className="text-ink-soft leading-relaxed mb-2 max-w-2xl">
          Beyond your unit, Azure Urban Resort Residences offers several
          resort-style amenities that staycation guests can enjoy during
          their visit — the man-made beach, wave pool, and the Azure
          Clubhouse among them.
        </p>
        <p className="text-ink-soft leading-relaxed mb-12 max-w-2xl">
          These are separate from what&rsquo;s{" "}
          <a href="/inclusions" className="text-clay-deep underline">
            included inside your unit
          </a>
          . Pool access is paid directly at the property with a
          visitor&rsquo;s pass and is not part of the staycation rate.
        </p>

        <h2 className="font-display text-2xl text-ink mb-6">Beach &amp; Pool Area</h2>
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {AMENITY_SECTIONS.map((a) => (
            <div key={a.title} className="rounded-2xl overflow-hidden border border-ink/10 bg-cream-card">
              <div className="relative aspect-[3/2]">
                <Image src={a.img} alt={a.title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-ink mb-2">{a.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl text-ink mb-2">Azure Clubhouse</h2>
        <p className="text-ink-soft leading-relaxed mb-6 max-w-2xl">
          Guests may access selected areas inside the Azure Clubhouse on the
          ground floor:
        </p>
        <div className="rounded-2xl overflow-hidden border border-ink/10 bg-cream-card mb-8">
          <div className="relative aspect-[3/2]">
            <Image
              src="/images/blog/amenities/azure-clubhouse-azure-urban-resort-residences.webp"
              alt="Azure Clubhouse"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {CLUBHOUSE_SECTIONS.map((c) => (
            <div key={c.title} className="rounded-2xl overflow-hidden border border-ink/10 bg-cream-card">
              <div className="relative aspect-[3/2]">
                <Image src={c.img} alt={c.title} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-base text-ink mb-1.5">{c.title}</h3>
                <p className="text-ink-soft text-xs leading-relaxed">{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl text-ink mb-2">Restaurants Inside Azure</h2>
        <p className="text-ink-soft leading-relaxed mb-6 max-w-2xl">
          Dining options within the Azure community, without leaving the
          property. Tenants and hours can change — check current listings
          before heading out.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {RESTAURANTS_INSIDE_AZURE.map((r) => (
            <div key={r.name} className="rounded-xl overflow-hidden border border-ink/10 bg-cream-card">
              <div className="relative aspect-[3/2]">
                <Image src={r.img} alt={r.name} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="p-3">
                <h3 className="font-display text-sm text-ink mb-1">{r.name}</h3>
                <p className="text-ink-soft text-xs leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl text-ink mb-2">Food Options Just Outside Azure</h2>
        <p className="text-ink-soft leading-relaxed mb-6 max-w-2xl">
          A few reliable spots within a five-minute walk of the gate, for
          when leaving the property is simpler than heading into SM City
          Bicutan.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-16">
          {FOOD_JUST_OUTSIDE_AZURE.map((f) => (
            <div key={f.name} className="rounded-xl overflow-hidden border border-ink/10 bg-cream-card">
              <div className="relative aspect-[3/2]">
                <Image src={f.img} alt={f.name} fill sizes="(max-width: 640px) 50vw, 20vw" className="object-cover" />
              </div>
              <div className="p-3">
                <h3 className="font-display text-sm text-ink mb-1">{f.name}</h3>
                <p className="text-ink-soft text-xs leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl text-ink mb-4">ATM Locations</h2>
        <ul className="space-y-3 mb-16">
          <li className="flex gap-2.5">
            <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
            <p className="text-ink-soft text-sm leading-relaxed">ATM inside the Azure Clubhouse.</p>
          </li>
          <li className="flex gap-2.5">
            <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
            <p className="text-ink-soft text-sm leading-relaxed">ATM located between Positano Tower and Miami Tower.</p>
          </li>
          <li className="flex gap-2.5">
            <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
            <p className="text-ink-soft text-sm leading-relaxed">
              We recommend bringing enough cash before arriving, especially during weekends, holidays, or peak travel periods.
            </p>
          </li>
        </ul>

        <h2 className="font-display text-2xl text-ink mb-4">Good to Know</h2>
        <ul className="space-y-3 mb-14">
          <li className="flex gap-2.5">
            <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
            <p className="text-ink-soft text-sm leading-relaxed">
              Wave pool access is paid separately at Azure&rsquo;s pool cashier with a visitor&rsquo;s pass — it is not included in the staycation rate.
            </p>
          </li>
          <li className="flex gap-2.5">
            <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
            <p className="text-ink-soft text-sm leading-relaxed">
              The rooftop deck is accessible with security personnel supervision during certain hours only.
            </p>
          </li>
          <li className="flex gap-2.5">
            <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
            <p className="text-ink-soft text-sm leading-relaxed">
              Amenity access may change based on Azure Urban Resort Residences management policies, scheduled maintenance, or special events. Confirm pool schedules with your host before arrival.
            </p>
          </li>
        </ul>

        <p className="text-sm text-ink-soft pt-6 border-t border-ink/10">
          Questions about what&rsquo;s accessible during your stay? Contact us at{" "}
          <a href="mailto:staycationnearme2023@gmail.com" className="text-clay-deep underline">
            staycationnearme2023@gmail.com
          </a>{" "}
          or{" "}
          <a href="tel:+63947 504 2783" className="text-clay-deep underline">
            +63947 504 2783
          </a>
          .
        </p>
      </article>
      <Footer />
    </div>
  );
}
