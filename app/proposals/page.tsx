import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TikTokEmbed from "../components/TikTokEmbed";
import ProposalInquiryForm from "../components/ProposalInquiryForm";
import { SOCIAL_LINKS } from "../../lib/links";
import { SITE_URL } from "../../lib/site";

export const metadata = {
  title: "Wedding Proposal Packages in Manila (Parañaque) | Azure Staycation by Siaos",
  description:
    "Wedding proposal setup and packages in Manila, Metro Manila (Parañaque). Signature Proposal Setup at ₱10,999 and Happily Ever After Setup at ₱14,999 — full-room decorated, proposal-tested.",
};

const PACKAGES = [
  {
    name: "Signature Proposal Set Up",
    price: "₱10,999",
    body: "Delight your partner with our signature wedding proposal setup at Azure Urban Resort Residences, designed for an unforgettable \u201cYes!\u201d moment in an elegant, fully decorated room in Manila.",
    img: "/images/proposal-signature.jpg",
    portfolio: "/proposals/signature-proposal-portfolio",
    portfolioExternal: false,
    airbnb: "https://airbnb.com/h/signatureproposal",
  },
  {
    name: "Happily Ever After Set Up",
    price: "₱14,999",
    body: "Experience the ultimate staycation proposal with our full-room decorations at Azure Urban Resort Residences, designed to create the perfect \u201chappily ever after\u201d moment for the love of your life.",
    img: "/images/proposal-happyeverafter.jpg",
    portfolio: "/proposals/happy-ever-after-portfolio",
    portfolioExternal: false,
    featured: true,
    airbnb: "https://airbnb.com/h/proposalsbyazurestaycationbysiaos",
  },
];

const FAQS = [
  {
    q: "How far in advance should I book a proposal setup?",
    a: "We recommend booking at least 1 month in advance to guarantee your preferred date — especially for OFWs, seafarers, or guests coming from the province. Last-minute bookings can sometimes be accommodated depending on availability.",
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Standard check-in is 2PM and check-out is 12NN. Flexible check-in/out can be arranged as long as it doesn't clash with the prior or next day's booking.",
  },
  {
    q: "Is a deposit required?",
    a: "Yes, a 50% reservation fee is required to confirm your booking. The remaining balance is due right after the scheduled delivery and setup.",
  },
  {
    q: "Is the reservation fee refundable?",
    a: "No, the reservation fee is non-refundable — even if the person being proposed to declines. The full agreed amount still applies since setup and preparation are already committed.",
  },
  {
    q: "Can I reschedule if something comes up?",
    a: "Yes. Rescheduling is allowed with at least a week's notice before your original date, subject to availability. For medical emergencies or force majeure, rescheduling is available without the week's notice, within the same month.",
  },
  {
    q: "Can I add extra customization beyond what's listed in the packages?",
    a: "Yes — additional customization can be discussed and arranged via chat, Messenger, or email based on your specific request.",
  },
  {
    q: "Who's responsible if something in the decor gets damaged?",
    a: "You're responsible for ensuring your guests and any third parties follow the setup's safety guidelines. Damage caused by misuse may incur additional charges.",
  },
  {
    q: "Can I invite a group of people to witness the proposal?",
    a: "Yes, we can accommodate bigger groups. Note that additional units must be booked to accommodate everyone, since we follow Azure's allowable number of guests per unit, so please let us know the exact headcount when you inquire.",
  },
  {
    q: "Is this a legitimate business?",
    a: "Yes. Please see our Legitimacy Check section on the homepage for details.",
    linkHref: "/#legitimacy-check",
    linkLabel: "Legitimacy Check section",
  },
  {
    q: "Can I bring in food or drinks?",
    a: "Yes, there is no corkage fee, and you can also do light cooking. You can also order from Grab, FoodPanda, or any food delivery apps or vendors, provided that you pick up the food and drinks in the lobby. You can see the convenience stores and restaurants inside Azure in our blog and amenities pages.",
    extraLinks: [
      { href: "/blog", label: "Staycation, Celebration & Proposal Guides" },
      { href: "/amenities", label: "Property Amenities at Azure Urban Resort Residences" },
    ],
  },
  {
    q: "Can I bring my own photographer?",
    a: "Yes, you may bring your own photographer, provided that they're still within the number of allowable pax — the 1-bedroom unit is good for up to 4 pax. We will also ask for their ID so we can register the photographer as part of the guest list.",
  },
];

// ---- JSON-LD -------------------------------------------------------------
// FAQ schema so search engines and AI answer engines can read the Q&A
// content directly, instead of inferring it from prose.
function buildProposalFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

// ---- JSON-LD -------------------------------------------------------------
// Product + Offer schema so search engines and AI answer engines can read
// exact package prices directly, instead of inferring them from prose.
function buildProposalProductsJsonLd() {
  return PACKAGES.map((pkg) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: pkg.name,
    description: pkg.body,
    image: `${SITE_URL}${pkg.img}`,
    url: `${SITE_URL}/proposals`,
    brand: { "@type": "Brand", name: "Azure Staycation by Siaos" },
    offers: {
      "@type": "Offer",
      price: pkg.price.replace(/[^\d]/g, ""),
      priceCurrency: "PHP",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/proposals`,
    },
  }));
}

export default function ProposalsPage() {
  return (
    <div className="flex flex-col">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-4">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-4">
          Trusted with Intimate Events since 2023
        </p>
        <h1 className="font-display text-6xl text-ink leading-[1.05] max-w-2xl">
          Intimate Wedding<br />
          <em className="italic text-clay-deep">Proposal in Manila</em>
          <span className="block not-italic font-sans uppercase tracking-[0.2em] text-sm font-semibold text-clay-deep mt-3">
            Packages
          </span>
        </h1>
        <p className="text-ink-soft max-w-xl mt-6">
          Azure Staycation by Siaos is a wedding proposal and staycation
          proposal provider based at Azure Urban Resort Residences in
          Parañaque, Metro Manila — just minutes from NAIA and SM Bicutan.
          Whether you&rsquo;re planning a surprise proposal in Manila or a
          full staycation proposal setup, our proposal packages give you a
          private, ready-to-go space to pull it off.
        </p>
      </section>

      {/* Packages */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl overflow-hidden border flex flex-col ${
                pkg.featured ? "bg-ink text-sand-light border-ink" : "bg-cream-card text-ink border-ink/10"
              }`}
            >
              <div className="relative aspect-square bg-cream-card">
                <Image src={pkg.img} alt={pkg.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                {pkg.featured && (
                  <span className="text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                    Most booked
                  </span>
                )}
                <h2 className="font-display text-2xl mb-1">{pkg.name}</h2>
                <p className="font-display text-4xl mb-4">{pkg.price}</p>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${pkg.featured ? "text-sand-light/70" : "text-ink-soft"}`}>
                  {pkg.body}
                </p>
                <div className="flex flex-wrap gap-3">
                  {pkg.portfolioExternal ? (
                    <a
                      href={pkg.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                        pkg.featured ? "bg-sand-light text-ink hover:bg-gold" : "bg-ink text-sand-light hover:bg-clay-deep"
                      }`}
                    >
                      View our samples here
                    </a>
                  ) : (
                    <Link
                      href={pkg.portfolio}
                      className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                        pkg.featured ? "bg-sand-light text-ink hover:bg-gold" : "bg-ink text-sand-light hover:bg-clay-deep"
                      }`}
                    >
                      View our samples here
                    </Link>
                  )}
                  <a
                    href={SOCIAL_LINKS.tiktokOfficial}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
                      pkg.featured
                        ? "border-sand-light/30 hover:border-sand-light"
                        : "border-ink/20 hover:border-ink"
                    }`}
                  >
                    Official TikTok account
                  </a>
                  <a
                    href={pkg.airbnb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
                      pkg.featured
                        ? "border-sand-light/30 hover:border-sand-light"
                        : "border-ink/20 hover:border-ink"
                    }`}
                  >
                    Book on Airbnb
                  </a>
                </div>
                <p className={`text-xs mt-4 ${pkg.featured ? "text-sand-light/50" : "text-ink-soft/70"}`}>
                  Note: Airbnb prices may be slightly higher due to
                  Airbnb&rsquo;s commissions, fees, and taxes.
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink-soft mt-8">
          Please review our{" "}
          <Link href="/proposals/terms-and-conditions" className="text-clay-deep underline">
            terms and conditions
          </Link>{" "}
          for proposal setup delivery before booking.
        </p>
      </section>

      {/* Videos */}
      <section className="bg-cream-card border-y border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-display text-3xl text-ink">See it in action</h2>
          </div>
          <p className="text-ink-soft max-w-xl mb-8">
            Watch a real proposal reveal, and see more on our official TikTok.
          </p>

          <div className="rounded-2xl overflow-hidden border border-ink/10 shadow-lg mb-6">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/2Q6u-VzaCH8?si=ezziYnUg6kq5_upc"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <a
            href={SOCIAL_LINKS.tiktokOfficial}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-ink text-sand-light px-7 py-3 font-semibold hover:bg-clay-deep transition-colors mb-16"
          >
            Watch more on TikTok
          </a>

          {/* More reveals — portrait TikTok row */}
          <div className="flex items-center gap-3 mb-6">
            <h3 className="font-display text-2xl text-ink">More reveals from TikTok</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-[340px] max-w-full rounded-2xl border border-ink/10 flex justify-center bg-ink p-2">
              <TikTokEmbed
                url="https://www.tiktok.com/@azure.staycation2/video/7663277706225716501"
                videoId="7663277706225716501"
              />
            </div>
            <div className="w-[340px] max-w-full rounded-2xl border border-ink/10 flex justify-center bg-ink p-2">
              <TikTokEmbed
                url="https://www.tiktok.com/@azure.staycation2/video/7402220237451578641"
                videoId="7402220237451578641"
              />
            </div>
            <div className="w-[340px] max-w-full rounded-2xl border border-ink/10 flex justify-center bg-ink p-2">
              <TikTokEmbed
                url="https://www.tiktok.com/@azure.staycation2/video/7545708408477879560"
                videoId="7545708408477879560"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Azure Staycation by Siaos
        </p>
        <h2 className="font-display text-4xl text-ink mb-10">
          Frequently Asked <em className="italic text-clay-deep">Questions</em>
        </h2>
        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink">
                {item.q}
                <span className="shrink-0 text-ink-soft transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-ink-soft text-sm leading-relaxed mt-3 max-w-3xl">
                {item.a}
                {item.linkHref && (
                  <>
                    {" "}
                    <Link href={item.linkHref} className="text-clay-deep underline">
                      {item.linkLabel}
                    </Link>
                    .
                  </>
                )}
                {item.extraLinks && (
                  <>
                    {" "}
                    {item.extraLinks.map((link, i) => (
                      <span key={link.href}>
                        <Link href={link.href} className="text-clay-deep underline">
                          {link.label}
                        </Link>
                        {i < item.extraLinks.length - 1 ? " and " : "."}
                      </span>
                    ))}
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Tell us your love story + Calendar + Inquiry */}
      <section id="book" className="mx-auto max-w-6xl px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl text-ink mb-4">Start Planning Your Proposal</h2>
            <p className="text-ink-soft max-w-sm mb-8">
              Fill out the inquiry form to check availability, choose the
              perfect proposal package, and personalize your proposal setup.
              We&rsquo;ll get back to you within a few hours.
            </p>
          </div>

          <ProposalInquiryForm />
        </div>
      </section>

      <Footer />

      {buildProposalProductsJsonLd().map((product, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
        />
      ))}

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildProposalFaqJsonLd()) }}
      />
    </div>
  );
}
