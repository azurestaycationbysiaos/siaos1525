import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title:
    "Happily Ever After Set Up — Portfolio | Azure Staycation by Siaos",
  description:
    "Real photos from our Happily Ever After proposal setups — full-room decorations samples from actual client bookings.",
};

const IMAGE_COUNT = 54;
const IMAGES = Array.from({ length: IMAGE_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/images/proposals/happy-ever-after/${n}.jpg`;
});

export default function HappyEverAfterPortfolioPage() {
  return (
    <div className="flex flex-col">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Proposal Packages
        </p>
        <h1 className="font-display text-5xl text-ink leading-[1.05] max-w-2xl">
          Happily Ever After<br />
          <em className="italic text-clay-deep">Set Up Portfolio</em>
        </h1>
        <p className="text-ink-soft max-w-xl mt-4">
          A look at real Happily Ever After proposal setups from our past
          bookings — full-room decorations designed for the perfect
          &ldquo;yes&rdquo; moment.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/proposals"
            className="rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold hover:border-ink transition-colors"
          >
            ← Back to Proposal Packages
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {IMAGES.map((src, i) => (
            <div
              key={src}
              className="relative aspect-square rounded-2xl overflow-hidden border border-ink/10 bg-cream-card"
            >
              <Image
     src={src}
     alt={`Happily Ever After proposal set up — photo ${i + 1}`}
     fill
     sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
     className="object-cover"
     priority={i < 4}
   />
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
