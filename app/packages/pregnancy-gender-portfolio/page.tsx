import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title:
    "Pregnancy Announcement & Gender Reveals — Portfolio | Azure Staycation by Siaos",
  description:
    "Real photos from our pregnancy announcement and gender reveal set ups — full-room decorations for intimate announcements and memorable reveal celebrations.",
};

const IMAGE_COUNT = 9;
const IMAGES = Array.from({ length: IMAGE_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/images/packages/pregnancy-gender-reveal/${n}.jpg`;
});

export default function PregnancyGenderPortfolioPage() {
  return (
    <div className="flex flex-col">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Room Decorations
        </p>
        <h1 className="font-display text-5xl text-ink leading-[1.05] max-w-2xl">
          Pregnancy Announcement<br />
          <em className="italic text-clay-deep">&amp; Gender Reveal Portfolio</em>
        </h1>
        <p className="text-ink-soft max-w-xl mt-4">
          A look at real pregnancy announcement and gender reveal set ups
          from our past bookings — styled for an intimate, joyful reveal.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/packages"
            className="rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold hover:border-ink transition-colors"
          >
            ← Back to Room Decorations
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {IMAGES.map((src, i) => (
            <div
              key={src}
              className="rounded-2xl overflow-hidden border border-ink/10 bg-cream-card"
            >
              <Image
                src={src}
                alt={`Pregnancy announcement / gender reveal set up — photo ${i + 1}`}
                width={600}
                height={600}
                unoptimized
                className="block w-full h-auto aspect-square object-cover"
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
