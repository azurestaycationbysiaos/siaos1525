import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Room Inclusions & Photos — Azure Staycation by Siaos",
  description:
    "Everything included in your stay at Azure Staycation by Siaos — entertainment, sleeping essentials, kitchen and dining, bathroom amenities, and more.",
};

const INCLUSION_GROUPS = [
  {
    title: "Entertainment & Fun",
    items: [
      "PS4 (Games: NBA2K23, Tekken 7, It Takes Two, COD Black Ops, Uncharted, Grand Theft Auto V, Assassin's Creed IV, Resident Evil 6)",
      "Projector with projector screen",
      "40\" Google TV w/ JBL soundbar",
      "Bluetooth karaoke (with 2 microphones)",
      "Platinum karaoke with song book (with 2 microphones)",
      "Board games",
      "Card games",
      "Netflix | Basic YouTube and Spotify accounts",
      "Glam light",
    ],
  },
  {
    title: "Sleeping & Comfort",
    items: [
      "Full double-sized bed with queen and king-sized pillows",
      "3-seater sofa bed, extra mattresses and blankets",
      "Bladeless fan",
      "Air-condition",
      "Humidifier",
      "WIFI",
    ],
  },
  {
    title: "Kitchen & Dining",
    items: [
      "Dining and kitchenwares",
      "Rice cooker",
      "Multi-cooker",
      "Electric kettle",
      "Refrigerator and microwave oven",
      "Circular induction cooker",
    ],
  },
  {
    title: "Bathroom & Self-Care",
    items: [
      "Bathroom with hot & cold shower and bidet",
      "Free use of bath towels",
      "Free dental kits",
      "Full body mirror",
      "Free use of shampoo, body wash, and dishwashing liquid",
      "Free use of blower and hair iron",
      "Free use of indoor slippers",
    ],
  },
  {
    title: "Other Essentials",
    items: [
      "Basic condiments available (varies depending on availability)",
      "Emergency Kit | Emergency light",
    ],
  },
];

const GALLERY = [
  { img: "/images/unit-bedroom.jpg", label: "One-bedroom staycation unit" },
  { img: "/images/amenity-entertainment.jpg", label: "Entertainment area — PS4, karaoke, card and board games" },
  { img: "/images/amenity-dining.jpg", label: "Dining area with complete dining wares" },
  { img: "/images/amenity-kitchen.jpg", label: "Kitchen area with home-like convenience" },
  { img: "/images/amenity-projector.jpg", label: "Projector and portable karaoke" },
  { img: "/images/amenity-karaoke.jpg", label: "Platinum karaoke with 2 microphones" },
  { img: "/images/amenity-netflix.jpg", label: "Netflix access" },
  { img: "/images/amenity-ps4console.jpg", label: "PS4 console for entertainment" },
  { img: "/images/amenity-ps4games.jpg", label: "PS4 games for kids and kids at heart" },
  { img: "/images/amenity-cards.jpg", label: "Card and board games" },
  { img: "/images/sunset-1.jpg", label: "Pink and purple skies" },
  { img: "/images/sunset-2.jpg", label: "See planes taking off" },
];

export default function InclusionsPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <article className="mx-auto max-w-4xl px-6 pt-16 pb-24">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Azure Staycation by Siaos
        </p>
        <h1 className="font-display text-4xl text-ink mb-4">Room Inclusions &amp; Photos</h1>
        <p className="text-ink-soft leading-relaxed mb-2 max-w-2xl">
          Everything below is included in your one-bedroom staycation unit at
          Azure Urban Resort Residences, perfect for up to 4 guests.
        </p>
        <p className="text-ink-soft leading-relaxed mb-2 max-w-2xl">
          15th floor, Santorini Tower, Azure Urban Resort Residences, Barangay Marcelo Green, Km. 16, West Service Road, Bicutan, Paranaque City
        </p>
        <p className="text-ink-soft leading-relaxed mb-12 max-w-2xl">
          City and Sunset View
        </p>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 mb-20">
          {INCLUSION_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="font-display text-xl text-ink mb-4">{group.title}</h2>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
                    <p className="text-ink-soft text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl text-ink mb-6">Other Photos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {GALLERY.map((g) => (
            <div key={g.img} className="rounded-2xl overflow-hidden border border-ink/10 bg-sand-light">
              <div className="relative aspect-square">
                <Image src={g.img} alt={g.label} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
              </div>
              <p className="p-3 text-xs text-ink-soft leading-snug">{g.label}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-ink-soft mt-14 pt-6 border-t border-ink/10">
          Questions about what&rsquo;s included? Contact us at{" "}
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
