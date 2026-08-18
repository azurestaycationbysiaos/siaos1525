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
    a: "Parking (motorcycle ₱250–₱280, car ₱300–₱350 depending on duration) and wave pool access (₱250 per head per shift) are excluded and paid directly to Azure Urban Resort Residences, not to Azure Staycation by Siaos. For more information, visit our exclusions page.",
    aNode: (
      <>
        Parking (motorcycle ₱250–₱280, car ₱300–₱350 depending on duration)
        and wave pool access (₱250 per head per shift) are excluded and paid
        directly to Azure Urban Resort Residences, not to Azure Staycation by
              Siaos. For more information, visit our{" "}
-        
+        
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
