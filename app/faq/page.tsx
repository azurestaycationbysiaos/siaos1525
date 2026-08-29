import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_URL, SITE_NAME } from "../../lib/site";
import { CONTACT, CANVA_LINKS, SOCIAL_LINKS } from "../../lib/links";

export const metadata = {
  title: "Frequently Asked Questions — Azure Staycation by Siaos",
  description:
    "Answers to common questions about Azure Staycation by Siaos: legitimacy, location, pricing, guest limits, booking process, and house rules at Azure Urban Resort Residences, Parañaque.",
};

// Plain question/answer pairs. Kept as short, direct, self-contained
// statements on purpose — this is the format AI answer engines (and
// Google's FAQ rich results) extract most reliably, and it doubles as the
// FAQPage JSON-LD content below.
const FAQS: {
  q: string;
  a: string;
  aNode?: React.ReactNode;
}[] = [
  {
    q: "Is Azure Staycation by Siaos legit?",
    a: "Yes. Azure Staycation by Siaos has operated at Azure Urban Resort Residences, Parañaque since 2023, with verified Facebook, Instagram, and TikTok pages, closed-deal proof, and guest reviews. The owner, Lyryque Lysl Camylle Siaotong, shares social proof and verification checks directly on Facebook.",
    aNode: (
      <>
        Yes. Azure Staycation by Siaos has operated at Azure Urban Resort
        Residences, Parañaque since 2023, with verified Facebook, Instagram,
        and TikTok pages, closed-deal proof, and guest reviews. The owner,
        Lyryque Lysl Camylle Siaotong, shares social proof and{" "}
        <a
          href={CANVA_LINKS.legitimacyCheck}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay-deep underline"
        >
          verification checks
        </a>{" "}
        directly on Facebook.
      </>
    ),
  },
  {
    q: "Where is Azure Staycation by Siaos located?",
    a: "The unit is on the 15th Floor, Santorini Tower, Azure Urban Resort Residences, Parañaque — right at the SLEX Bicutan exit, about 1 minute from SM Bicutan and around 20–35 minutes from NAIA terminals.",
    aNode: (
      <>
        The unit is on the{" "}
        <a
          href={SOCIAL_LINKS.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay-deep underline"
        >
          15th Floor, Santorini Tower, Azure Urban Resort Residences,
          Parañaque
        </a>{" "}
        — right at the SLEX Bicutan exit, about 1 minute from SM Bicutan and
        around 20–35 minutes from NAIA terminals.
      </>
    ),
  },
  {
    q: "How many guests can stay in the unit?",
    a: "The 1-bedroom unit comfortably fits up to 4 guests.",
  },
  {
    q: "What's included in the staycation?",
    a: "Every stay includes the 1-bedroom unit, a fully equipped kitchen, Netflix access, a projector, PS4 with games, Platinum karaoke with 2 microphones, and card and board games. Parking fees and wave pool access are not included and are paid separately at the building.",
  },
  {
    q: "What is not included in the staycation price?",
    a: "Parking and wave pool access are excluded and paid directly to Azure Urban Resort Residences, not to Azure Staycation by Siaos. Wave pool access is ₱250 per head per shift. Parking can be pre-arranged with us (motorcycle ₱250–₱280, car ₱300–₱350), or paid at Azure's own booth, which charges ₱380 for overnight parking. For more information, visit our exclusions page.",
    aNode: (
      <>
        Parking and wave pool access are excluded and paid directly to Azure
        Urban Resort Residences, not to Azure Staycation by Siaos. Wave pool
        access is ₱250 per head per shift. Parking can be pre-arranged with
        us (motorcycle ₱250–₱280, car ₱300–₱350), or paid at Azure&rsquo;s
        own booth, which charges ₱380 for overnight parking. For more
        information, visit our{" "}
        <a
          href="https://azurestaycationbysiaos.com/exclusions"
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay-deep underline"
        >
          exclusions page
        </a>
        .
      </>
    ),
  },
  {
    q: "Can I add food to my booking?",
    a: "Yes. Food add-ons include a 2-pax meal package from ₱1,899, bagnet and party trays from ₱1,200, food bundles from ₱2,799, plus custom cakes and toasting wines. Full options are on the Food Offers page.",
    aNode: (
      <>
        Yes. Food add-ons include a 2-pax meal package from ₱1,899, bagnet
        and party trays from ₱1,200, food bundles from ₱2,799, plus custom
        cakes and toasting wines. Full options are on the{" "}
        <Link href="/food-offers" className="text-clay-deep underline">
          Food Offers page
        </Link>
        .
      </>
    ),
  },
  {
    q: "How do I book a date?",
    a: "Send the reservation fee through GCash, Maya, Vybe, or BPI, fill out the guest registration form with valid IDs for all occupants 18 and up, and you'll receive your entry QR code a day before or on your check-in day.",
  },
  {
    q: "What payment methods are accepted?",
    a: "GCash, Maya, Vybe, and BPI (upon request). All accounts are under Lyryque Lysl Camylle Siaotong — always ask for payment proof verification.",
  },
  {
    q: "Do I need to bring a valid ID?",
    a: "Yes. Azure Urban Resort Residences requires a valid, government-issued ID for all occupants above 18 years old as part of their check-in and security protocol.",
  },
  {
    q: "Can I enter via Grab, Angkas, or other ride-hailing apps?",
    a: "Yes. Simply present your QR code and ID, and remove any glasses or caps if applicable. Your driver will also be asked to present an ID upon entering the premises.",
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is at 2:00 PM and check-out is at 12:00 NN.",
  },
  {
    q: "Can I cook or bring my own food?",
    a: "Yes. Outside food and drinks are welcome with no corkage fee, and the unit has a full kitchen for light cooking such as reheating, boiling, and shallow frying. Grilling and slow-cooking methods aren't allowed. Full details are on our House Rules page.",
    aNode: (
      <>
        Yes. Outside food and drinks are welcome with no corkage fee, and the
        unit has a full kitchen for light cooking such as reheating, boiling,
        and shallow frying. Grilling and slow-cooking methods aren&rsquo;t
        allowed. Full details are on our{" "}
        <Link href="/house-rules" className="text-clay-deep underline">
          House Rules page
        </Link>
        .
      </>
    ),
  },
  {
    q: "Can I order food delivery to the unit?",
    a: "Yes, guests may order food, groceries, or other items via online delivery services. All deliveries must be picked up at the lobby or ground floor, not brought directly to the unit.",
  },
  {
    q: "Is there a pool I can use?",
    a: "Yes. Azure's wave pool and man-made beach are open Wednesday through Monday for a separate fee of ₱250 per head per shift, paid in cash directly to Azure. See our full Wave Pool Guide for schedules, dress code, and directions.",
    aNode: (
      <>
        Yes. Azure&rsquo;s wave pool and man-made beach are open Wednesday
        through Monday for a separate fee of ₱250 per head per shift, paid in
        cash directly to Azure. See our full{" "}
        <Link
          href="/blog/azure-wave-pool-guide"
          className="text-clay-deep underline"
        >
          Wave Pool Guide
        </Link>{" "}
        for schedules, dress code, and directions.
      </>
    ),
  },
  {
    q: "What's nearby the unit?",
    a: "SM Bicutan is about 1km away, along with convenience stores, restaurants, and cafes inside Azure Urban Resort Residences itself. See our guides to what's inside Azure and nearby places to eat for the full list.",
    aNode: (
      <>
        SM Bicutan is about 1km away, along with convenience stores,
        restaurants, and cafes inside Azure Urban Resort Residences itself.
        See our guides to{" "}
        <Link
          href="/blog/establishments-inside-azure"
          className="text-clay-deep underline"
        >
          what&rsquo;s inside Azure
        </Link>{" "}
        and{" "}
        <Link
          href="/blog/places-to-eat-near-azure-urban-resort-residences"
          className="text-clay-deep underline"
        >
          nearby places to eat
        </Link>
        {" "}for the full list.
      </>
    ),
  },
];

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-10">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          {SITE_NAME}
        </p>
        <h1 className="font-display text-5xl text-ink leading-[1.05] max-w-2xl">
          Frequently Asked <em className="italic text-clay-deep">Questions</em>
        </h1>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-display text-lg text-ink">
                {f.q}
                <span className="shrink-0 text-clay-deep group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-ink-soft text-sm leading-relaxed mt-3 pr-8">{f.aNode ?? f.a}</p>
            </details>
          ))}
        </div>

        <p className="text-sm text-ink-soft mt-10">
          Didn&rsquo;t find your answer? Reach us at{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-clay-deep underline">
            {CONTACT.email}
          </a>{" "}
          or see our{" "}
          <Link href="/booking-process" className="text-clay-deep underline">
            booking process
          </Link>{" "}
          and{" "}
          <Link href="/house-rules" className="text-clay-deep underline">
            house rules
          </Link>
          .
        </p>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
      />
    </div>
  );
}
