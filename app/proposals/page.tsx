import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TikTokEmbed from "../components/TikTokEmbed";
import { CANVA_LINKS, SOCIAL_LINKS } from "../../lib/links";

export const metadata = {
  title: "Proposal Packages — Signature & Happily Ever After Setups | Azure Staycation by Siaos",
  description:
    "Marriage proposal staycation packages in Parañaque. Signature Proposal Setup at ₱10,999 and Happily Ever After Setup at ₱14,999 — full-room decorated, proposal-tested.",
};

const PACKAGES = [
  {
    name: "Signature Proposal Set Up",
    price: "₱10,999",
    body: "Delight your partner with our signature wedding proposal setup, designed for an unforgettable \u201cYes!\u201d moment in an elegant, fully decorated room.",
    img: "/images/proposal-signature.jpg",
    portfolio: CANVA_LINKS.signatureProposalPortfolio,
  },
  {
    name: "Happily Ever After Set Up",
    price: "₱14,999",
    body: "Experience the ultimate proposal setup with our full-room decorations, designed to create the perfect \u201chappily ever after\u201d moment for the love of your life.",
    img: "/images/proposal-happyeverafter.jpg",
    portfolio: CANVA_LINKS.happyEverAfterPortfolio,
    featured: true,
  },
];

export default function ProposalsPage() {
  return (
    <div className="flex flex-col">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-4">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-4">
          Trusted with Intimate Events since 2023
        </p>
        <h1 className="font-display text-5xl text-ink leading-[1.05] max-w-2xl">
          Intimate Wedding<br />
          <em className="italic text-clay-deep">Proposal Packages</em>
        </h1>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-2xl">
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
          <p className="text-xs text-ink-soft/60 mt-4 max-w-md">
            Have another reveal video you&rsquo;d like added here? Send the
            embed code (TikTok: Share → Embed) and it&rsquo;ll be added
            alongside these.
          </p>
        </div>
      </section>

      {/* Tell us your love story + Calendar + Inquiry */}
      <section id="book" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl text-ink mb-4">Tell us your love story.</h2>
            <p className="text-ink-soft max-w-sm mb-8">
              We&rsquo;ll design the moment around it. Fill out the inquiry
              form and we&rsquo;ll get back to you with availability and next
              steps — usually within a few hours.
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
                Tell us your love story
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

      <Footer />
    </div>
  );
}
