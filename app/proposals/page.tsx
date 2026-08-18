import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TikTokEmbed from "../components/TikTokEmbed";
import { SOCIAL_LINKS } from "../../lib/links";
import { SITE_URL } from "../../lib/site";

export const metadata = {
  title: "Wedding Proposal Packages in Manila | Azure Staycation by Siaos",
  description:
    "Wedding proposal setup and packages in Manila, Metro Manila (Parañaque). Signature Proposal Setup at ₱10,999 and Happily Ever After Setup at ₱14,999 — full-room decorated, proposal-tested.",
};

const PROPOSAL_FAQS: {
  q: string;
  a: string;
  aNode?: React.ReactNode;
}[] = [
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
    a: "Yes, we can accommodate bigger groups. Note that additional units must be booked to accommodate everyone, since we follow Azure's allowable number of guests per unit.",
  },
  {
    q: "What payment methods do you accept?",
    a: "GCash, Vybe, and bank transfer through BPI.",
  },
  {
    q: "Is parking available for me and my guests?",
    a: "Parking is available at Azure Urban Resort Residences but isn't included in the package — motorcycle parking runs ₱250–₱280 and car parking ₱300–₱350 depending on duration, paid directly to the building.",
    aNode: (
      <>
        Parking is available at Azure Urban Resort Residences but isn&rsquo;t
        included in the package — motorcycle parking runs ₱250–₱280 and car
        parking ₱300–₱350 depending on duration, paid directly to the
        building. See the full{" "}
        <Link href="/faq" className="text-clay-deep underline">
          FAQ page
        </Link>{" "}
        for more on what's included in a stay.
      </>
    ),
  },
  {
    q: "Is this a legitimate business?",
    a: "Yes — see the Legitimacy Check section on our homepage for verification details.",
    aNode: (
      <>
        Yes — see the{" "}
        <Link href="/#legitimacy" className="text-clay-deep underline">
          Legitimacy Check section
        </Link>{" "}
        on our homepage for verification details.
      </>
    ),
  },
];

function buildProposalFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PROPOSAL_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

const PACKAGES = [
  {
    name: "Signature Proposal Set Up",
    price: "₱10,999",
    body: "Delight your partner with our signature wedding proposal setup at Azure Urban Resort Residences, designed for an unforgettable \u201cYes!\u201d moment in an elegant, fully decorated room in Manila.",
    img: "/images/proposal-signature.jpg",
    portfolio: "/proposals/signature-proposal-portfolio",
    portfolioExternal: false,
  },
  {
    name: "Happily Ever After Set Up",
    price: "₱14,999",
    body: "Experience the ultimate staycation proposal with our full-room decorations at Azure Urban Resort Residences, designed to create the perfect \u201chappily ever after\u201d moment for the love of your life.",
    img: "/images/proposal-happyeverafter.jpg",
    portfolio: "/proposals/happy-ever-after-portfolio",
    portfolioExternal: false,
    featured: true,
  },
];

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
                </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto sm:mx-0">
            <div className="rounded-2xl overflow-hidden border border-ink/10 flex justify-center bg-ink p-2">
              <TikTokEmbed
                url="https://www.tiktok.com/@azure.staycation2/video/7663277706225716501"
                videoId="7663277706225716501"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-ink/10 flex justify-center bg-ink p-2">
              <TikTokEmbed
                url="https://www.tiktok.com/@azure.staycation2/video/7402220237451578641"
                videoId="7402220237451578641"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-ink/10 flex justify-center bg-ink p-2">
              <TikTokEmbed
                url="https://www.tiktok.com/@azure.staycation2/video/7545708408477879560"
                videoId="7545708408477879560"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tell us your love story + Calendar + Inquiry */}
      <section id="book" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl text-ink mb-4">Start Planning Your Proposal</h2>
            <p className="text-ink-soft max-w-sm mb-8">
              Fill out the inquiry form to check availability, choose the
              perfect proposal package, and personalize your proposal setup.
              We&rsquo;ll get back to you within a few hours.
            </p>
          </div>

          <form className="space-y-4 bg-cream-card border border-ink/10 rounded-2xl p-8">
            <h3 className="font-display text-xl text-ink mb-2">Send an inquiry</h3>
            <div>
              <label htmlFor="name" className="text-sm text-ink-soft">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg bg-sand-light border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="text-sm text-ink-soft">
                  Contact number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 w-full rounded-lg bg-sand-light border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
                  placeholder="09XX XXX XXXX"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-ink-soft">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg bg-sand-light border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="date" className="text-sm text-ink-soft">
                Preferred date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                className="mt-1 w-full rounded-lg bg-sand-light border border-ink/20 px-4 py-3 text-ink focus:outline-none focus:border-clay-deep"
              />
            </div>
            <div>
              <label htmlFor="package" className="text-sm text-ink-soft">
                Package
              </label>
              <select
                id="package"
                name="package"
                className="mt-1 w-full rounded-lg bg-sand-light border border-ink/20 px-4 py-3 text-ink focus:outline-none focus:border-clay-deep"
              >
                <option>Signature Proposal Set Up — ₱10,999</option>
                <option>Happily Ever After Set Up — ₱14,999</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-ink-soft">
                Personalize your proposal setup
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full rounded-lg bg-sand-light border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
                placeholder="How you met, what she loves, anything we should know"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-clay-deep text-sand-light font-semibold px-6 py-3 hover:bg-ink transition-colors"
            >
              Send inquiry
            </button>
            <p className="text-xs text-ink-soft/60">
              This form still needs to be connected to an email service before
              it goes live — it&rsquo;s wired up visually but not yet sending
              anywhere.
            </p>
          </form>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-6 py-20 border-t border-ink/10">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Common Questions
        </p>
        <h2 className="font-display text-4xl text-ink leading-[1.05] max-w-2xl mb-8">
          Proposal <em className="italic text-clay-deep">FAQs</em>
        </h2>
        <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
          {PROPOSAL_FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-display text-lg text-ink">
                {f.q}
                <span className="shrink-0 text-clay-deep group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-ink-soft text-sm leading-relaxed mt-3 pr-8">{f.aNode ?? f.a}</p>
            </details>
          ))}
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
