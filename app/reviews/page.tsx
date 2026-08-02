import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Guest Reviews — Azure Staycation by Siaos",
  description:
    "Real guest reviews for Azure Staycation by Siaos, Azure Urban Resort Residences, Parañaque.",
};

const REVIEWS = [
  "/images/reviews/review-a.jpg",
  "/images/reviews/review-b.jpg",
  "/images/reviews/review-c.jpg",
  "/images/reviews/review-d.jpg",
  "/images/reviews/review-e.jpg",
  "/images/reviews/review-f.jpg",
];

export default function ReviewsPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          What Our Clients Say
        </p>
        <h1 className="font-display text-5xl text-ink leading-[1.05] max-w-2xl">
          Real guests, <em className="italic text-clay-deep">real reviews.</em>
        </h1>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {REVIEWS.map((src) => (
            <div key={src} className="relative aspect-square rounded-2xl overflow-hidden border border-ink/10">
              <Image src={src} alt="Guest review" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
