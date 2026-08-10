import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_URL, SITE_NAME } from "../../lib/site";
import { SOCIAL_LINKS } from "../../lib/links";

export const metadata = {
  title: "Guest Reviews — Azure Staycation by Siaos",
  description:
    "Real guest reviews for Azure Staycation by Siaos, Azure Urban Resort Residences, Parañaque.",
};

// Review text transcribed from the guest screenshots so it's readable to
// search engines and AI answer engines, not just visible in an image.
// Tagalog/Taglish quotes are kept as written, with a light English gloss.
const REVIEWS = [
  {
    src: "/images/reviews/review-a.jpg",
    author: "Verified guest",
    occasion: "6th anniversary celebration",
    quote: "Marami pong salamat sa magandang setup. Sobrang ganda po!",
    gloss: "\u201cThank you so much for the beautiful setup \u2014 it\u2019s so pretty!\u201d",
    rating: 5,
  },
  {
    src: "/images/reviews/review-b.jpg",
    author: "Verified guest (Facebook)",
    occasion: "Wedding proposal",
    quote:
      "Highly recommended! Mabait owner, napakaganda ng setup. Mabango unit, super nakarelax, napakaganda ng set up. Complete set, lahat sulit sa bayad. Dika maboring kasi may mga board game, card games, console, karaoke. Verry accommodating ng owner, thank you so much po sa pag-assist \u2014 succes ang proposal! Sure na babalik kami dito.",
    gloss:
      "\u201cKind owner, beautiful setup, fresh-smelling and relaxing unit, everything worth the price. You won\u2019t get bored \u2014 board games, card games, console, karaoke. Very accommodating owner who helped make the proposal a success. We\u2019ll definitely be back.\u201d",
    rating: 5,
    verified: true,
  },
  {
    src: "/images/reviews/review-c.jpg",
    author: "Hayato Soma",
    occasion: "Wedding proposal",
    quote: "Thank you Azure Staycation by Siaos. Highly recommended!",
    rating: 5,
  },
  {
    src: "/images/reviews/review-d.jpg",
    author: "Verified guest",
    occasion: "Wedding proposal",
    quote:
      "Eto po yung mga photo namen kahapon. Hindi paren ako maka-get-over, parang ang magical ng pagkaka-setup po, mas maganda pa don sa inspo photo na sinend ko.",
    gloss:
      "\u201cHere are our photos from yesterday \u2014 I still can\u2019t get over how magical the setup felt, even better than the inspo photo I sent.\u201d",
    rating: 5,
    date: "May 26, 2024",
  },
  {
    src: "/images/reviews/review-e.jpg",
    author: "Camille (guest)",
    occasion: "Birthday celebration",
    quote:
      "Hello ma'am Camille, thank you so much po sa pag-save ng life ko kahapon \u2014 life-threatening na po pala allergy ko. Super thankful po ako kase di niyo pinabayaan guest niyo. God bless po sa business niyo and more power.",
    gloss:
      "A guest thanked the owner for how attentively her allergic reaction was handled during her stay, and wished the business continued success.",
    rating: 5,
  },
  {
    src: "/images/reviews/review-f.jpg",
    author: "Verified guest",
    occasion: "Birthday & monthsary celebration",
    quote:
      "At first kinakabahan ako baka scam, pero napatunayan kong legit na legit po. Thank you so much! Hindi ko ma-imagine yung reaction ng partner ko nang makita niya ang room. She looked so happy and surprised. Sobrang ganda at romantic po. Naging extra special ang birthday at monthsary namin. Babalik po kami soon.",
    gloss:
      "\u201cAt first I was nervous it might be a scam, but I proved to myself it\u2019s completely legit. My partner was so happy and surprised when she saw the room \u2014 beautiful and romantic. It made our birthday and monthsary extra special. We\u2019ll be back soon.\u201d",
    rating: 5,
  },
];

function buildReviewsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(REVIEWS.length),
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
      },
      reviewBody: r.quote,
      ...(r.date ? { datePublished: new Date(r.date).toISOString().slice(0, 10) } : {}),
    })),
  };
}

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
          {REVIEWS.map((r) => (
            <div
              key={r.src}
              className="overflow-hidden rounded-2xl border border-ink/10 flex flex-col"
            >
              <div className="aspect-square">
                <img
                  src={r.src}
                  alt={`Guest review \u2014 ${r.occasion}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="p-5 bg-cream-card flex-1 flex flex-col gap-2">
                <p className="text-xs uppercase tracking-wide text-sage-deep font-semibold">
                  {"\u2605".repeat(r.rating)} &middot; {r.occasion}
                </p>
                <p className="text-sm text-ink-soft italic leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
                {r.gloss && <p className="text-xs text-ink-soft/70 leading-relaxed">{r.gloss}</p>}
                <p className="text-xs text-ink-soft/80 mt-auto pt-2">&mdash; {r.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 text-center">
        <h2 className="font-display text-2xl text-ink mb-3">
          See more reviews
        </h2>
        <p className="text-ink-soft max-w-md mx-auto mb-6">
          Read the full history of guest reviews on our Google Business
          listing and Facebook page.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={SOCIAL_LINKS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink text-sand-light px-6 py-3 text-sm font-semibold hover:bg-clay-deep transition-colors"
          >
            Read reviews on Google
          </a>
          <a
            href={SOCIAL_LINKS.facebookPage}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold hover:border-ink transition-colors"
          >
            Read reviews on Facebook
          </a>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildReviewsJsonLd()) }}
      />
    </div>
  );
}

