import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const PACKAGES = [
  {
    name: "Signature Proposal Setup",
    price: "₱10,999",
    tagline: "For the moment you get down on one knee.",
    inclusions: [
      "One-area themed decoration (balloon arch, petals, fairy lights)",
      "\"Marry Me\" signage",
      "LED candles and ambient lighting",
      "Bluetooth speaker for your playlist or speech backing track",
      "2 hours of private, uninterrupted access to the setup",
    ],
  },
  {
    name: "Happily Ever After Setup",
    price: "₱14,999",
    tagline: "Full-room transformation, built for the whole story — not just the ask.",
    inclusions: [
      "Everything in the Signature Setup",
      "Full-room decoration, not just one area",
      "Private candlelit dinner setup for two",
      "Rose petal pathway from the door to the proposal spot",
      "Dessert or cake spread on request",
      "Priority scheduling for golden-hour timing",
    ],
    featured: true,
  },
];

const TRUST_POINTS = [
  {
    title: "We've done this before",
    body: "Every setup is pre-tested — timing, lighting, and flow are already worked out from real proposals we've run, not a first attempt.",
  },
  {
    title: "Discretion, handled",
    body: "Our team briefs on your exact timing so there are no interruptions, no staff walking in at the wrong second, no giveaways.",
  },
  {
    title: "Verifiable, not anonymous",
    body: "We're a real, ID-verified operator with an active transaction history and a name behind the business — check our legitimacy proof before you book.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-4">
              Azure Urban Resort Residences · Parañaque
            </p>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-ink">
              The room where <em className="italic text-clay-deep">she says yes.</em>
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-md">
              A modern boho 1-bedroom staycation, built for up to 4 guests and
              one very important question. Proposal setups, anniversaries, and
              quiet celebrations, within the metro.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#packages"
                className="rounded-full bg-clay-deep text-sand-light px-7 py-3 font-semibold hover:bg-ink transition-colors"
              >
                See proposal packages
              </a>
              <a
                href="#contact"
                className="rounded-full border border-ink/20 px-7 py-3 font-semibold text-ink hover:border-ink transition-colors"
              >
                Ask us anything
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="arch aspect-[3/4] bg-gradient-to-b from-clay/40 via-sage/30 to-gold/30 flex items-center justify-center border border-ink/10">
              <span className="font-display italic text-ink-soft/60 text-sm px-8 text-center">
                Replace with a real photo of your best proposal setup — the
                arch frame is part of the page&rsquo;s design.
              </span>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-cream-card border border-ink/10 rounded-2xl px-5 py-4 shadow-sm">
              <p className="font-display text-2xl text-clay-deep">40+</p>
              <p className="text-xs text-ink-soft">Proposals hosted since 2023</p>
            </div>
          </div>
        </div>
      </section>

      <section id="trust" className="bg-cream-card border-y border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-3 mb-10">
            <span className="divider-arch text-clay-deep" aria-hidden="true" />
            <h2 className="font-display text-3xl text-ink">Why couples trust this room</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TRUST_POINTS.map((point) => (
              <div key={point.title}>
                <h3 className="font-display text-xl text-clay-deep mb-2">{point.title}</h3>
                <p className="text-ink-soft leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-center gap-3 mb-4">
          <span className="divider-arch text-clay-deep" aria-hidden="true" />
          <h2 className="font-display text-3xl text-ink">Proposal packages</h2>
        </div>
        <p className="text-ink-soft max-w-xl mb-12">
          Two setups, both proposal-tested. Pick the one that fits the moment
          you want to create.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-8 border flex flex-col ${
                pkg.featured
                  ? "bg-ink text-sand-light border-ink"
                  : "bg-cream-card text-ink border-ink/10"
              }`}
            >
              {pkg.featured && (
                <span className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">
                  Most booked
                </span>
              )}
              <h3 className="font-display text-2xl mb-1">{pkg.name}</h3>
              <p
                className={`text-sm mb-4 ${
                  pkg.featured ? "text-sand-light/70" : "text-ink-soft"
                }`}
              >
                {pkg.tagline}
              </p>
              <p className="font-display text-4xl mb-6">{pkg.price}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <span
                      className={`mt-1 ${pkg.featured ? "text-gold" : "text-sage-deep"}`}
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center rounded-full px-6 py-3 font-semibold transition-colors ${
                  pkg.featured
                    ? "bg-sand-light text-ink hover:bg-gold hover:text-ink"
                    : "bg-ink text-sand-light hover:bg-clay-deep"
                }`}
              >
                Reserve this setup
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-cream-card border-y border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-center gap-3 mb-10">
            <span className="divider-arch text-clay-deep" aria-hidden="true" />
            <h2 className="font-display text-3xl text-ink">Setup gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["One-area setup", "Full-room decor", "Candlelit dinner", "The room by day"].map(
              (label) => (
                <div
                  key={label}
                  className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-sage/30 via-sand to-clay/30 border border-ink/10 flex items-end p-4"
                >
                  <span className="text-xs font-medium text-ink-soft">{label}</span>
                </div>
              )
            )}
          </div>
          <p className="text-xs text-ink-soft/70 mt-4">
            Swap these four blocks for real photos of past setups — this grid
            is where your Canva samples become actual indexable images.
          </p>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-center gap-3 mb-10">
          <span className="divider-arch text-clay-deep" aria-hidden="true" />
          <h2 className="font-display text-3xl text-ink">What guests say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-cream-card border border-ink/10 rounded-2xl p-6">
              <p className="text-ink-soft text-sm leading-relaxed mb-4">
                Placeholder — replace with a real guest review, written out in
                full text so it can actually be indexed by Google.
              </p>
              <p className="font-display text-clay-deep">— Guest name, Month Year</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-ink text-sand-light">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl mb-4">Tell us your love story.</h2>
            <p className="text-sand-light/70 max-w-sm">
              We&rsquo;ll design the moment around it. Fill this out and
              we&rsquo;ll reply with availability and next steps — usually
              within a few hours.
            </p>
            <div className="mt-10 space-y-2 text-sm text-sand-light/70">
              <p>15th floor Santorini Tower, Km. 16, West Service Road, Bicutan, Parañaque City</p>
              <p>
                <Link href="https://www.facebook.com/profile.php?id=61552788271481" className="underline hover:text-gold">
                  Facebook
                </Link>
                {" · "}
                <Link href="https://www.instagram.com/azurestaycationbysiaos/" className="underline hover:text-gold">
                  Instagram
                </Link>
                {" · "}
                <Link href="https://www.tiktok.com/@azure.staycation2" className="underline hover:text-gold">
                  TikTok
                </Link>
              </p>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-sand-light/70">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg bg-sand-light/10 border border-sand-light/20 px-4 py-3 text-sand-light placeholder:text-sand-light/40 focus:outline-none focus:border-gold"
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div>
              <label htmlFor="date" className="text-sm text-sand-light/70">
                Preferred date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                className="mt-1 w-full rounded-lg bg-sand-light/10 border border-sand-light/20 px-4 py-3 text-sand-light focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="package" className="text-sm text-sand-light/70">
                Package
              </label>
              <select
                id="package"
                name="package"
                className="mt-1 w-full rounded-lg bg-sand-light/10 border border-sand-light/20 px-4 py-3 text-sand-light focus:outline-none focus:border-gold"
              >
                <option className="text-ink">Signature Proposal Setup — ₱10,999</option>
                <option className="text-ink">Happily Ever After Setup — ₱14,999</option>
                <option className="text-ink">Not sure yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-sand-light/70">
                Tell us about the two of you
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="mt-1 w-full rounded-lg bg-sand-light/10 border border-sand-light/20 px-4 py-3 text-sand-light placeholder:text-sand-light/40 focus:outline-none focus:border-gold"
                placeholder="How you met, what she loves, anything we should know"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gold text-ink font-semibold px-6 py-3 hover:bg-sand-light transition-colors"
            >
              Send inquiry
            </button>
            <p className="text-xs text-sand-light/50">
              This form needs to be connected to an email service before it
              goes live — it&rsquo;s wired up visually but not yet sending
              anywhere.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
