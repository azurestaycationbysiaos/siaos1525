import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SOCIAL_LINKS, CANVA_LINKS, CONTACT } from "../lib/links";

const AMENITIES = [
  { img: "/images/amenity-entertainment.jpg", label: "Entertainment for couples, groups of four, and families" },
  { img: "/images/amenity-dining.jpg", label: "Romantic dining setup + optional meal service (additional fee for meals)" },
  { img: "/images/amenity-kitchen.jpg", label: "Fully equipped kitchen with complete cookware and dining ware" },
  { img: "/images/amenity-projector.jpg", label: "Projector and portable karaoke" },
  { img: "/images/amenity-ps4games.jpg", label: "PS4 games for kids and kids at heart" },
  { img: "/images/amenity-ps4console.jpg", label: "PS4 console for entertainment" },
  { img: "/images/amenity-karaoke.jpg", label: "Platinum karaoke with 2 microphones" },
  { img: "/images/amenity-netflix.jpg", label: "Netflix and Disney+ access" },
  { img: "/images/amenity-cards.jpg", label: "Card and board games" },
];

const SUNSET_VIEWS = [
  { img: "/images/sunset-1.jpg", label: "Pink and purple skies" },
  { img: "/images/sunset-2.jpg", label: "Sunset view" },
  { img: "/images/sunset-3.jpg", label: "See planes taking off" },
];

const SOCIAL_PROOFS = [
  { label: "Official Facebook Page", href: SOCIAL_LINKS.facebookPage },
  { label: "Official TikTok Account", href: SOCIAL_LINKS.tiktokOfficial },
  { label: "Instagram Account", href: SOCIAL_LINKS.instagram },
  { label: "Owner's TikTok Account", href: SOCIAL_LINKS.tiktokOwner },
  { label: "Closed Deals Proof", href: SOCIAL_LINKS.closedDealsAlbum },
];

const READY_TO_BOOK = [
  { label: "House Rules", href: CANVA_LINKS.houseRules },
  { label: "Booking Process", href: CANVA_LINKS.bookingProcess },
  { label: "Payment Channels", href: CANVA_LINKS.paymentChannels },
  { label: "Terms and Conditions", href: CANVA_LINKS.termsAndConditions },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero banner strip */}
      <section className="relative">
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px]">
          <Image
            src="/images/hero-banner.jpg"
            alt="Azure Staycation by Siaos proposal setups"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/20 flex items-end justify-center pb-4 sm:pb-6">
            <p className="font-display italic text-sand-light text-sm sm:text-lg md:text-xl tracking-wide drop-shadow-md text-center px-4">
              Trusted with Intimate Events since 2023
            </p>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-4">
              Azure Urban Resort Residences · Parañaque
            </p>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-ink">
              Staycation <em className="italic text-clay-deep">&amp; Celebration</em>
            </h1>
            <p className="mt-4 font-display text-xl text-ink-soft italic">
              Welcome to your luxurious home away from home
            </p>
            <p className="mt-6 text-lg text-ink-soft max-w-md">
              Enjoy a modern boho-themed 1-bedroom staycation unit at Azure Urban
              Resort Residences, perfect for up to 4 guests. Ideal for intimate
              occasions like anniversaries, birthdays, proposals, and more.
              Surprise your loved one with a relaxing getaway within the metro.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={CANVA_LINKS.inclusionsAndPhotos}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-clay-deep text-sand-light px-7 py-3 font-semibold hover:bg-ink transition-colors"
              >
                Inclusions and other photos
              </a>
              <a
                href={CANVA_LINKS.exclusions}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink/20 px-7 py-3 font-semibold text-ink hover:border-ink transition-colors"
              >
                Exclusions: motor and pool access
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-ink/10">
              <Image
                src="/images/unit-bedroom.jpg"
                alt="Azure Staycation by Siaos one-bedroom unit"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-cream-card border border-ink/10 rounded-2xl px-5 py-4 shadow-sm">
              <p className="font-display text-2xl text-clay-deep">Since 2023</p>
              <p className="text-xs text-ink-soft">Trusted with intimate events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Amenities */}
      <section id="amenities" className="bg-cream-card border-y border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-3 mb-10">
            <span className="divider-arch text-clay-deep" aria-hidden="true" />
            <h2 className="font-display text-3xl text-ink">Room Amenities</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {AMENITIES.map((a) => (
              <div key={a.label} className="rounded-2xl overflow-hidden border border-ink/10 bg-sand-light">
                <div className="relative aspect-square">
                  <Image src={a.img} alt={a.label} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                </div>
                <p className="p-3 text-xs text-ink-soft leading-snug">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City and Sunset View */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <span className="divider-arch text-clay-deep" aria-hidden="true" />
          <h2 className="font-display text-3xl text-ink">City and Sunset View</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {SUNSET_VIEWS.map((s) => (
            <div key={s.label} className="rounded-2xl overflow-hidden border border-ink/10">
              <div className="relative aspect-[4/3]">
                <Image src={s.img} alt={s.label} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <p className="p-3 text-xs text-ink-soft bg-cream-card">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guest Reviews */}
      <section id="reviews" className="bg-cream-card border-y border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="divider-arch text-clay-deep" aria-hidden="true" />
            <h2 className="font-display text-3xl text-ink">Guest&rsquo;s Ratings / Reviews</h2>
          </div>
          <p className="text-ink-soft max-w-lg mx-auto mb-10">
            See what real guests have said about their stay and celebration
            setups with us.
          </p>
          <div className="grid md:grid-cols-3 gap-5 mb-10 text-left">
            {["/images/review-1.jpg", "/images/review-2.jpg", "/images/review-3.jpg"].map((src) => (
              <div key={src} className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-ink/10">
                <Image src={src} alt="Guest review" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
          <a
            href={CANVA_LINKS.clientReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-ink text-sand-light px-7 py-3 font-semibold hover:bg-clay-deep transition-colors"
          >
            What our clients say about us
          </a>
        </div>
      </section>

      {/* Legitimacy Check */}
      <section id="legitimacy" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="divider-arch text-clay-deep" aria-hidden="true" />
              <h2 className="font-display text-3xl text-ink">Legitimacy Check</h2>
            </div>
            <p className="text-ink-soft leading-relaxed mb-6">
              Hi, I&rsquo;m Lyryque Lysl Camylle Siaotong, the owner of Azure
              Staycation by Siaos. You can check out our social proof,
              legitimate transactions, verification checks, my personal
              profiles, and our active social pages to do your own due
              diligence. We&rsquo;ve been in the staycation business since 2023.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={CANVA_LINKS.legitimacyCheck}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-clay-deep text-sand-light px-6 py-3 text-sm font-semibold hover:bg-ink transition-colors"
              >
                Check our legitimacy here
              </a>
              <a
                href={SOCIAL_LINKS.closedDealsAlbum}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-ink transition-colors"
              >
                Proof of transactions
              </a>
              <a
                href="#contact"
                className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-ink transition-colors"
              >
                Feel free to get in touch
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-ink/10">
            <Image
              src="/images/legitimacy-1.jpg"
              alt="Azure Staycation by Siaos owner"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Other Social Proofs */}
      <section className="bg-cream-card border-y border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-3 mb-10">
            <span className="divider-arch text-clay-deep" aria-hidden="true" />
            <h2 className="font-display text-3xl text-ink">Other Social Proofs</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SOCIAL_PROOFS.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-sand-light border border-ink/10 px-5 py-4 text-sm font-semibold text-ink hover:border-clay-deep hover:text-clay-deep transition-colors text-center"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Book */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="divider-arch text-clay-deep" aria-hidden="true" />
          <h2 className="font-display text-3xl text-ink">Ready to Book?</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {READY_TO_BOOK.map((r) => (
            <a
              key={r.label}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-ink/10 px-4 py-6 text-sm font-semibold text-ink hover:border-clay-deep hover:text-clay-deep transition-colors"
            >
              {r.label}
            </a>
          ))}
        </div>
        <Link
          href="/proposals#book"
          className="inline-block rounded-full bg-clay-deep text-sand-light px-8 py-4 font-semibold hover:bg-ink transition-colors"
        >
          Book your celebration
        </Link>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-ink text-sand-light">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-display text-3xl mb-2">Contact Information</h2>
          <p className="text-sand-light/70 mb-8">Azure Staycation by Siaos</p>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-sand-light/80">
            <div className="space-y-3">
              <p>{CONTACT.addressFull}</p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="underline hover:text-gold">
                  {CONTACT.email}
                </a>
              </p>
              <p>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="underline hover:text-gold">
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a
                  href={SOCIAL_LINKS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gold"
                >
                  View on Google Maps
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <a href={SOCIAL_LINKS.facebookPage} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">
                  Facebook
                </a>
                {" · "}
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">
                  Instagram
                </a>
                {" · "}
                <a href={SOCIAL_LINKS.tiktokOfficial} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">
                  TikTok
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
