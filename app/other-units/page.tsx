import Header from "../components/Header";
import Footer from "../components/Footer";
import UnitGallery, { UnitPhoto } from "../components/UnitGallery";
import RoomInclusionsButton from "../components/RoomInclusionsButton";
import Link from "next/link";
import { SITE_NAME } from "../../lib/site";

export const metadata = {
  title: `Other Units at Azure Urban Resort Residences — Partner Units | ${SITE_NAME}`,
  description:
    "Our Modern Boho 1-Bedroom unit fully booked? Browse our partner units at Azure Urban Resort Residences — 1BR and 2BR Santorini units with beach and city views, still available for your staycation or celebration.",
};

type Unit = {
  slug: string;
  title: string;
  view: string;
  floor: string;
  maxGuests: string;
  amenities: string[];
  inclusions: string[];
  honestyStoreNote?: string;
  checkIn: string;
  checkOut: string;
  photos: UnitPhoto[];
  // Optional: extra photos shown only in the Room Inclusions modal gallery,
  // beyond what's shown in the front-card gallery. Falls back to `photos` if omitted.
  modalPhotos?: UnitPhoto[];
};

const UNITS: Unit[] = [
  {
    slug: "1br-2nd-floor",
    title: "1 BR Santorini, 2nd Floor",
    view: "Beach view",
    floor: "2nd Floor",
    maxGuests: "4 adults + 1 infant/baby/kid (strictly below 3 feet)",
    amenities: ["PS4", "Bluetooth karaoke", "Billiard table", "YouTube", "Netflix", "Bath towels", "Cookingwares", "Diningwares"],
    inclusions: [
      "22 hours accommodation",
      "50\" Smart TV with Netflix and YouTube",
      "WiFi connection",
      "Electric fan",
      "Full body mirror",
      "Billiards",
      "Playstation 4",
      "Board games and card games",
      "Mini videoke with 2 mics",
      "Induction stove",
      "Refrigerator",
      "Microwave oven",
      "Rice cooker",
      "Electric kettle",
      "Dining and kitchenware for light cooking",
      "2 bath towels",
      "Hot and cold shower",
      "Dental kit",
      "Hair blower",
    ],
    checkIn: "2 PM",
    checkOut: "12 NN",
    photos: [1, 2, 3, 4, 5].map((n) => ({
      src: `/images/other-units/unit-2nd-floor-${n}.jpg`,
      alt: `1 BR Santorini 2nd floor beach view unit photo ${n}`,
    })),
  },
  {
    slug: "1br-14th-floor",
    title: "1 BR Santorini, 14th Floor",
    view: "Beach view",
    floor: "14th Floor",
    maxGuests: "4 adults + 1 infant/baby/kid (strictly below 3 feet)",
    amenities: ["PS4", "YouTube", "Netflix", "Bath towels", "Cookingwares", "Diningwares"],
    inclusions: [
      "PS4 + 6 CDs",
      "Fully airconditioned room",
      "FREE use of unlimited WiFi",
      "Unli karaoke (Magic Sing)",
      "Smart TV with Netflix, YouTube",
      "Premium queen size bed and sofabed",
      "Induction stove, refrigerator, microwave, rice cooker, and electric kettle",
      "Pans and other basic kitchen utensils",
      "Fresh bedding, towels, and blankets",
      "Guest kits (toothbrush, toothpaste, soap, and shampoo)",
    ],
    checkIn: "2 PM",
    checkOut: "12 NN",
    photos: [1, 2, 3, 4, 5].map((n) => ({
      src: `/images/other-units/unit-14th-floor-${n}.jpg`,
      alt: `1 BR Santorini 14th floor beach view unit photo ${n}`,
    })),
  },
  {
    slug: "1br-8th-floor",
    title: "1 BR Santorini, 8th Floor",
    view: "Beach view",
    floor: "8th Floor",
    maxGuests: "4 adults + 1 infant/baby/kid (strictly below 3 feet)",
    amenities: ["YouTube", "Netflix", "Bath towels", "Cookingwares", "Diningwares"],
    inclusions: [
      "Fully airconditioned room",
      "FREE use of unlimited WiFi",
      "Karaoke (Magic Sing)",
      "Smart TV with Netflix and YouTube",
      "Premium queen size bed and sofabed",
      "Induction stove",
      "Refrigerator",
      "Microwave",
      "Rice cooker",
      "Electric kettle",
      "Pans and other basic kitchen utensils",
      "Fresh bedding, towels, and blankets",
      "Guest kits (toothbrush, toothpaste, soap, and shampoo)",
    ],
    checkIn: "2 PM",
    checkOut: "12 NN",
    photos: [1, 2, 3, 4, 5].map((n) => ({
      src: `/images/other-units/unit-8th-floor-${n}.jpg`,
      alt: `1 BR Santorini 8th floor beach view unit photo ${n}`,
    })),
  },
  {
    slug: "2br-15th-floor",
    title: "2 BR Santorini, 15th Floor",
    view: "Beach view",
    floor: "15th Floor",
    maxGuests: "6 adults + 1 infant/baby/kid (strictly below 3 feet)",
    amenities: ["YouTube", "Netflix", "4 bath towels", "Cookingwares", "Diningwares"],
    inclusions: [
      "Air-conditioned rooms",
      "55\" Smart TV (Netflix ready)",
      "Bluetooth speaker",
      "Mini karaoke",
      "Wi-Fi",
      "Cookwares",
      "Dining set",
      "Stove (light cooking only)",
      "Air fryer",
      "Microwave oven",
      "Refrigerator",
      "Electric kettle",
      "Rice cooker",
      "Electric fans",
      "2 double-size beds",
      "2-seater sofa bed",
      "Water heater",
      "Toiletries",
      "4 bath towels",
      "Hair blower",
      "Iron/steamer",
    ],
    checkIn: "2 PM",
    checkOut: "12 NN",
    photos: [1, 2, 3, 4, 5].map((n) => ({
      src: `/images/other-units/unit-2br-15th-floor-${n}.jpg`,
      alt: `2 BR Santorini 15th floor beach view unit photo ${n}`,
    })),
    modalPhotos: [1, 2, 3, 4, 5].map((n) => ({
      src: `/images/other-units/unit-2br-15th-floor-${n}.jpg`,
      alt: `2 BR Santorini 15th floor beach view unit photo ${n}`,
    })),
  },
  {
    slug: "2br-14th-floor",
    title: "2 BR Santorini, 14th Floor",
    view: "Beach and pool view",
    floor: "14th Floor",
    maxGuests: "6 adults + 1 infant/baby/kid (strictly below 3 feet)",
    amenities: ["PS4", "Billiards", "Karaoke/Videoke", "YouTube", "Netflix", "Guest kit for 4", "Cookingwares", "Diningwares"],
    inclusions: [
      "2 Smart TVs with Netflix and YouTube",
      "Karaoke/videoke with 2 wireless microphones",
      "High speed WiFi",
      "Airconditioned bedroom",
      "PS4 and board and card games",
      "Billiards",
      "Aesthetic mirrors",
      "Queen size bed",
      "Single size bed with pullouts",
      "Extra mattress",
      "2 sofa beds",
      "Balcony (beach/pool view)",
      "Dining set and cookware set",
      "Induction cooker (light cooking only)",
      "Rice cooker",
      "Electric kettle",
      "Microwave",
      "Refrigerator",
      "Bathroom with hot/cold shower",
      "Guest kit for 4 (toothbrush, toothpaste, shampoo, and soap)",
      "Towels and tissue for 4",
    ],
    checkIn: "2 PM",
    checkOut: "12 NN",
    photos: [1, 2, 3, 4, 5].map((n) => ({
      src: `/images/other-units/unit-2br-deluxe-14th-floor-${n}.jpg`,
      alt: `2 BR Deluxe Santorini 14th floor beach and pool view unit photo ${n}`,
    })),
    modalPhotos: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
      src: `/images/other-units/unit-2br-deluxe-14th-floor-${n}.jpg`,
      alt: `2 BR Deluxe Santorini 14th floor beach and pool view unit photo ${n}`,
    })),
  },
  {
    slug: "2br-14th-floor-beachview",
    title: "2 BR Santorini, 14th Floor (Beach View)",
    view: "Beach view",
    floor: "14th Floor",
    maxGuests: "6 adults + 1 infant/baby/kid (strictly below 3 feet)",
    amenities: ["PS4", "Billiards", "Karaoke/Videoke", "YouTube", "Netflix", "Guest kit for 4", "Cookingwares", "Diningwares"],
    inclusions: [
      "Smart TV with Netflix and YouTube",
      "Karaoke/Videoke with 2 wireless microphones",
      "High speed WiFi",
      "Airconditioned bedroom",
      "PS4 and board and card games",
      "Billiards",
      "Aesthetic mirrors",
      "Queen size bed with queen size extra mattress",
      "Balcony (beach/pool view)",
      "Dining set and cookware set",
      "Induction cooker (light cooking only)",
      "Rice cooker",
      "Electric kettle",
      "Microwave",
      "Refrigerator",
      "Bathroom with hot/cold shower",
      "Guest kit for 4 (toothbrush, toothpaste, shampoo, and soap)",
      "Towels and tissue for 4",
    ],
    checkIn: "2 PM",
    checkOut: "12 NN",
    photos: [1, 2, 3, 4, 5].map((n) => ({
      src: `/images/other-units/unit-2br-14th-floor-beachview-${n}.jpg`,
      alt: `2 BR Santorini 14th floor beach view unit photo ${n}`,
    })),
    modalPhotos: [1, 2, 3, 4, 5, 6].map((n) => ({
      src: `/images/other-units/unit-2br-14th-floor-beachview-${n}.jpg`,
      alt: `2 BR Santorini 14th floor beach view unit photo ${n}`,
    })),
  },
  {
    slug: "2br-2nd-floor",
    title: "2 BR Santorini, 2nd Floor",
    view: "Beach view",
    floor: "2nd Floor",
    maxGuests: "6 adults + 1 infant/baby/kid (strictly below 3 feet)",
    amenities: ["Karaoke", "YouTube", "Netflix", "Guest kit for 2", "Equipped kitchen"],
    inclusions: [
      "WiFi",
      "Netflix",
      "YouTube",
      "Karaoke",
      "55-inch TV",
      "Game boards",
      "Equipped kitchen",
      "Refrigerator",
      "Coffee maker",
      "Guest kit for 2",
      "Alarm clock",
      "Cooler fan",
      "All-in-one cooking pot",
      "All hotel basic stuff are provided",
    ],
    checkIn: "2 PM",
    checkOut: "12 NN",
    photos: [1, 2, 3, 4, 5].map((n) => ({
      src: `/images/other-units/unit-2br-2nd-floor-${n}.jpg`,
      alt: `2 BR Santorini 2nd floor beach view unit photo ${n}`,
    })),
    modalPhotos: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
      src: `/images/other-units/unit-2br-2nd-floor-${n}.jpg`,
      alt: `2 BR Santorini 2nd floor beach view unit photo ${n}`,
    })),
  },
  {
    slug: "2br-deluxe-16th-floor",
    title: "2 BR Deluxe Santorini, 16th Floor",
    view: "Beach and city view",
    floor: "16th Floor",
    maxGuests: "8 adults + 1 infant/baby/kid (strictly below 3 feet)",
    amenities: ["PS4", "Billiards", "Bluetooth karaoke", "YouTube", "Netflix", "4 bath towels", "Cookingwares", "Diningwares"],
    inclusions: [
      "Fully furnished unit with 2 rooms and a balcony",
      "Room 1: queen-size bed + extra mattress",
      "Room 2: single bed + extra mattress",
      "Fully airconditioned rooms",
      "UNLI WiFi, Netflix, and YouTube",
      "Mini bluetooth karaoke",
      "Gaming cards, boards, and many more games",
      "PS4",
      "Billiards",
      "Study table",
      "Hair blower",
      "55-inch smart TV",
      "Free use of 4 towels",
      "Sofa",
      "Dining table, refrigerator, microwave, rice cooker, kettle, induction cooker, and basic kitchen utensils",
      "4 bath towels",
      "Room slippers",
      "Free use of shampoo, bath wash, and hand soap",
      "Hot and cold shower",
    ],
    honestyStoreNote:
      "Mini honesty store in the unit. Prices are on the inventory list in the kitchen drawer. Charges are deducted from your security deposit; if the deposit can't cover all expenses (e.g. grocery items and penalties incurred), an additional payment will be required.",
    // Front-card gallery stays at 5 photos (main + 4 thumbnails = one row); the modal gets 9 via modalPhotos below.
    checkIn: "3 PM",
    checkOut: "1 PM",
    photos: [1, 2, 3, 4, 5].map((n) => ({
      src: `/images/other-units/unit-2br-deluxe-16th-floor-${n}.jpg`,
      alt: `2 BR Deluxe Santorini 16th floor beach and city view unit photo ${n}`,
    })),
    modalPhotos: [
      ...[1, 2, 3, 4, 5].map((n) => ({
        src: `/images/other-units/unit-2br-deluxe-16th-floor-${n}.jpg`,
        alt: `2 BR Deluxe Santorini 16th floor beach and city view unit photo ${n}`,
      })),
      ...[6, 7, 8, 9].map((n) => ({
        src: `/images/other-units/unit-2br-deluxe-16th-floor-${n}.png`,
        alt: `2 BR Deluxe Santorini 16th floor beach and city view unit photo ${n}`,
      })),
    ],
  },
  {
    slug: "2br-deluxe-17th-floor",
    title: "2 BR Deluxe Santorini, 17th Floor",
    view: "Beach and city view",
    floor: "17th Floor",
    maxGuests: "8 adults + 1 infant/baby/kid (strictly below 3 feet)",
    amenities: ["PS4", "Billiards", "Bluetooth karaoke", "YouTube", "Netflix", "4 bath towels", "Cookingwares", "Diningwares"],
    inclusions: [
      "Fully furnished unit with 2 rooms and a balcony",
      "Room 1: double-size bed + extra mattress",
      "Room 2: single bed + extra mattress",
      "Fully airconditioned rooms",
      "UNLI WiFi, Netflix, and YouTube",
      "Mini bluetooth karaoke",
      "Gaming cards, boards, and many more games",
      "PS4",
      "Mini billiards",
      "Full body mirror",
      "43-inch smart TV",
      "Free use of 4 towels",
      "Sofa",
      "Kitchen basic utensils, dining table, refrigerator, microwave, rice cooker, kettle, induction cooker",
      "Room slippers",
      "Free use of shampoo, bath wash, and hand soap",
      "Hot and cold shower",
    ],
    honestyStoreNote:
      "Mini honesty store in the unit. Prices are on the inventory list in the kitchen drawer. Charges are deducted from your security deposit; if the deposit can't cover all expenses (e.g. grocery items and penalties incurred), an additional payment will be required.",
    // Front-card gallery stays at 5 photos (main + 4 thumbnails = one row); the modal gets 9 via modalPhotos below.
    checkIn: "2 PM",
    checkOut: "12 NN",
    photos: [1, 2, 3, 4, 5].map((n) => ({
      src: `/images/other-units/unit-2br-deluxe-17th-floor-${n}.jpg`,
      alt: `2 BR Deluxe Santorini 17th floor beach and city view unit photo ${n}`,
    })),
    modalPhotos: [
      ...[1, 2, 3, 4, 5].map((n) => ({
        src: `/images/other-units/unit-2br-deluxe-17th-floor-${n}.jpg`,
        alt: `2 BR Deluxe Santorini 17th floor beach and city view unit photo ${n}`,
      })),
      ...[6, 7, 8, 9].map((n) => ({
        src: `/images/other-units/unit-2br-deluxe-17th-floor-${n}.png`,
        alt: `2 BR Deluxe Santorini 17th floor beach and city view unit photo ${n}`,
      })),
    ],
  },
];

export default function OtherUnitsPage() {
  return (
    <div className="flex flex-col">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 text-center">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-4">
          Other Units
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink leading-[1.05] max-w-3xl mx-auto">
          Partner Units at{" "}
          <em className="italic text-clay-deep">Azure Urban Resort Residences</em>
        </h1>
        <p className="mt-6 text-lg text-ink-soft max-w-2xl mx-auto">
          Sometimes our Modern Boho-themed 1-Bedroom Staycation Unit gets
          fully booked. But don&rsquo;t worry — we&rsquo;ve partnered with
          trusted units within the same property so we can still accommodate
          your special celebration, or even a simple getaway with no
          decorations.
        </p>
        <p className="mt-4 text-sm text-ink-soft/80 italic max-w-2xl mx-auto">
          Disclaimer: our partner units are still subject to availability.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 grid gap-10 sm:grid-cols-2">
        {UNITS.map((unit) => (
          <div
            key={unit.slug}
            id={unit.slug}
            className="rounded-2xl border border-ink/10 bg-cream-card p-4 sm:p-5 flex flex-col"
          >
            <UnitGallery photos={unit.photos} title={unit.title} />

            <div className="mt-5 flex-1 flex flex-col">
              <h2 className="font-display text-2xl text-ink">{unit.title}</h2>
              <p className="text-sm font-semibold text-clay-deep mt-1">{unit.view}</p>

              <p className="mt-3 text-sm text-ink-soft">
                <span className="font-semibold text-ink">Max guests:</span>{" "}
                {unit.maxGuests}
              </p>

              <p className="mt-2 text-sm text-ink-soft">
                <span className="font-semibold text-ink">Check-in:</span>{" "}
                {unit.checkIn} &nbsp;|&nbsp;{" "}
                <span className="font-semibold text-ink">Check-out:</span>{" "}
                {unit.checkOut}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {unit.amenities.map((a) => (
                  <span
                    key={a}
                    className="text-xs font-medium text-sage-deep bg-sage/10 border border-sage/20 rounded-full px-2.5 py-1"
                  >
                    {a}
                  </span>
                ))}
              </div>

              <RoomInclusionsButton unit={unit} />
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <h2 className="font-display text-2xl text-ink mb-3">
          Want the full Azure Staycation by Siaos experience?
        </h2>
        <p className="text-ink-soft mb-6">
          Our own Modern Boho-themed 1-Bedroom unit comes with our
          celebration-ready room decoration packages. Check availability
          first before browsing our partner units above.
        </p>
        <Link
          href="/#contact"
          className="inline-block rounded-full bg-ink text-sand-light px-6 py-3 text-sm font-semibold hover:bg-clay-deep transition-colors"
        >
          Check our main unit&rsquo;s availability
        </Link>
      </section>

      <Footer />
    </div>
  );
}
