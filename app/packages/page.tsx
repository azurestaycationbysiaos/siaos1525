import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import { CANVA_LINKS } from "../../lib/links";

export const metadata = {
  title: "Room Decorations | Azure Staycation by Siaos",
  description:
    "Themed staycation room decoration packages for anniversaries, birthdays, welcome home celebrations, bridal showers, and gender reveals in Parañaque.",
};

const SAMPLES = [
  {
    title: "Staycation + 1 Area with Decorations",
    body: "Check out our sample setups for a single area, perfect for birthdays, anniversaries, and romantic surprises. Get your inspo for your next special celebration!",
    img: "/images/sample-1area.jpg",
    href: "/packages/one-area-portfolio",
    internal: true,
    aspect: "aspect-square",
  },
  {
    title: "Full Room Decorations / Themed Set Ups",
    body: "Explore our full-room decoration samples, perfect for birthdays, anniversaries, and special surprises. Transform your staycation into a magical celebration!",
    img: "/images/sample-fullroom.jpg",
    href: "/packages/full-room-portfolio",
    internal: true,
    aspect: "aspect-square",
  },
{
  title: "Will You Be My Girlfriend Set Ups",
  body: "Transform your staycation into a memorable moment with our romantic full-room decorations made for that special \"Will you be my girlfriend?\" ask.",
  img: "/images/sample-girlfriend.jpg",
  href: "/packages/girlfriend-portfolio",
  internal: true,
  aspect: "aspect-[3/4]",
},
  {
    title: "Bridal Shower Set Ups",
    body: "Celebrate the bride-to-be with our beautifully styled full-room bridal shower setup, designed to create a fun, elegant, and unforgettable pre-wedding celebration.",
    img: "/images/sample-bridalshower.jpg",
    href: "/packages/bridal-shower-portfolio",
    internal: true,
    aspect: "aspect-square",
  },
  {
    title: "Pregnancy Announcement & Gender Reveals",
    body: "Share your joyful news with a beautifully styled full-room setup, perfect for intimate pregnancy announcements and memorable gender reveal celebrations.",
    img: "/images/sample-pregnancy.jpg",
    aspect: "aspect-square",
    href: "/packages/pregnancy-gender-portfolio",
    internal: true,
  },
];

export default function PackagesPage() {
  return (
    <div className="flex flex-col">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-4">
          Room Decorations
        </p>
        <h1 className="font-display text-5xl text-ink leading-[1.05] max-w-2xl">
          Celebrate Any Occasion in{" "}
          <em className="italic text-clay-deep">One Beautiful Staycation</em>
        </h1>
        <p className="mt-6 text-lg text-ink-soft max-w-xl">
          Celebrate every milestone with beautifully decorated staycation
          packages for birthdays, anniversaries, wedding proposals,
          engagements, bridal showers, bachelor and bachelorette parties,
          baby showers, gender reveals, graduations, promotions, retirements,
          welcome-home celebrations, holidays, reunions, family gatherings,
          date nights, honeymoons, mini-moons, and other memorable occasions.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 space-y-16">
        {SAMPLES.map((s, i) => (
          <div
            key={s.title}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className={`relative ${s.aspect} rounded-2xl overflow-hidden border border-ink/10 bg-cream-card`}>
              <Image src={s.img} alt={s.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-2xl text-ink mb-3">{s.title}</h2>
              <p className="text-ink-soft leading-relaxed mb-6">{s.body}</p>
              {"internal" in s && s.internal ? (
                <Link
                  href={s.href}
                  className="inline-block rounded-full bg-clay-deep text-sand-light px-6 py-3 text-sm font-semibold hover:bg-ink transition-colors"
                >
                  View our portfolio here
                </Link>
              ) : (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-clay-deep text-sand-light px-6 py-3 text-sm font-semibold hover:bg-ink transition-colors"
                >
                  View our portfolio here
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      <BookingForm
        heading="Plan Your Staycation + Celebration"
        subtext="Share your celebration details, preferred date, number of guests, decoration theme, and special requests. We'll recommend the best staycation and room decoration package for your occasion."
        showDecorTheme
        requestLabel="Celebration details"
        requestPlaceholder="What are you celebrating, and anything else we should know"
      />

      <Footer />
    </div>
  );
}
