import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_URL } from "../../lib/site";
import { CONTACT } from "../../lib/links";

export const metadata = {
  title: "Food Offers & Catering — Party Trays, Bagnet, Meal Packages | Azure Staycation by Siaos",
  description:
    "Add food to your Azure Staycation celebration: 2-pax meal packages from ₱1,899, bagnet & party trays from ₱1,200, food bundles from ₱2,799, plus custom cakes and toasting wines.",
  alternates: { canonical: `${SITE_URL}/food-offers` },
  openGraph: {
    title: "Food Offers & Catering — Azure Staycation by Siaos",
    description:
      "2-pax meal packages, bagnet & party trays, food bundles, custom cakes, and toasting wines for your Azure Staycation celebration.",
    url: `${SITE_URL}/food-offers`,
    images: [
      {
        url: "/images/food-offers/food-offers-hero.jpg",
        width: 2048,
        height: 768,
        alt: "Azure Staycation by Siaos — Food Packages, celebration and proposal setups",
      },
    ],
  },
};

// ---- Menu data -------------------------------------------------------
// Prices reflect the most recently updated Bagnet Specials / Vegetables
// listing in the source menu (a few items were revised on the same page).

const TWO_PAX = {
  price: "₱1,899",
  note: "Good for 2 pax. Both options include free soda and water.",
  options: [
    { label: "Option A", body: "1 pasta, 1 main, and 2 rice servings" },
    { label: "Option B", body: "2 main entrees, and 4 rice servings" },
  ],
  mains: ["Pork steak", "Beef caldereta", "Pork sisig", "Buttered shrimp", "Beef broccoli"],
  pasta: [
    "Tuna Carbonara",
    "Mushroom Carbonara",
    "Pancit Canton",
    "Pancit Guisado",
    "No Bake BakedMac",
    "No Bake Lasagna",
  ],
};

const BAGNET_SPECIALS = [
  { name: "Crispy Kare-Kare", serves: "Good for 10 pax", price: "₱1,499" },
  { name: "Crispy Binagoongan", serves: "Good for 10 pax", price: "₱1,499" },
  { name: "Sisig Bagnet", serves: "Good for 10 pax", price: "₱1,499" },
];

const VEGETABLE_TRAYS = [
  { name: "Party Tray — Laing", serves: "Good for 8–10 pax", price: "₱1,499" },
  { name: "Party Tray — Chopsuey", serves: "Good for 8–10 pax", price: "₱1,449" },
  { name: "Party Tray — Shanghai", serves: "Good for 8–10 pax", price: "₱1,449" },
];

const CHICKEN_TRAYS = [
  { name: "Korean Style or Buttered Chicken", serves: "Good for 8–10 pax", price: "₱1,699" },
  { name: "Chicken Fingers", serves: "Good for 8–10 pax", price: "₱1,599" },
];

const BILAO_OPTIONS = [
  { name: "Spaghetti", serves: "Good for 8–10 pax", price: "₱1,499" },
  { name: "Pancit Guisado", serves: "Good for 8–10 pax", price: "₱1,299" },
  { name: "Pancit Canton", serves: "Good for 8–10 pax", price: "₱1,200" },
  { name: "Mix Bihon/Canton", serves: "Good for 8–10 pax", price: "₱1,200" },
];

const BUNDLES = [
  {
    name: "Crispy Bagnet Kare-Kare and Sisig Bagnet",
    price: "₱2,799",
    img: "/images/food-offers/bagnet-karekare.jpg",
  },
  {
    name: "Crispy Bagnet Kare-Kare and Korean Style Chicken or Buttered Chicken",
    price: "₱2,999",
    img: "/images/food-offers/korean-fried-chicken.jpg",
    featured: true,
  },
  {
    name: "Crispy Bagnet Kare-Kare and Lumpiang Shanghai",
    price: "₱2,799",
    img: "/images/food-offers/lumpiang-shanghai.jpg",
  },
];

// ---- JSON-LD -----------------------------------------------------------
// schema.org Menu markup so search engines and AI answer engines can read
// prices and menu items directly, without inferring them from prose.

function buildMenuJsonLd() {
  const toItems = (arr: { name: string; price: string }[]) =>
    arr.map((i) => ({
      "@type": "MenuItem",
      name: i.name,
      offers: { "@type": "Offer", price: i.price.replace(/[^\d]/g, ""), priceCurrency: "PHP" },
    }));

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Azure Staycation by Siaos — Food Offers",
    url: `${SITE_URL}/food-offers`,
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Good for 2 pax",
        description: TWO_PAX.note,
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "2-Pax Meal Package (Option A or B)",
            offers: { "@type": "Offer", price: "1899", priceCurrency: "PHP" },
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Bagnet Specials (party trays, good for 10 pax)",
        hasMenuItem: toItems(BAGNET_SPECIALS),
      },
      {
        "@type": "MenuSection",
        name: "Vegetable Party Trays (good for 8–10 pax)",
        hasMenuItem: toItems(VEGETABLE_TRAYS),
      },
      {
        "@type": "MenuSection",
        name: "Chicken Party Trays (good for 8–10 pax)",
        hasMenuItem: toItems(CHICKEN_TRAYS),
      },
      {
        "@type": "MenuSection",
        name: "Bilao Options — Pasta/Noodles (good for 8–10 pax)",
        hasMenuItem: toItems(BILAO_OPTIONS),
      },
      {
        "@type": "MenuSection",
        name: "Food Bundle Options",
        hasMenuItem: toItems(BUNDLES),
      },
    ],
  };
}

export default function FoodOffersPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative">
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px]">
          <Image
            src="/images/food-offers/food-offers-hero.jpg"
            alt="Azure Staycation by Siaos — Food Packages, celebration and proposal setups"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/20 flex items-end justify-center pb-4 sm:pb-6">
            <p className="font-display italic text-sand-light text-xl sm:text-2xl md:text-3xl tracking-wide drop-shadow-md text-center px-4">
              Complete Your Staycation + Celebration with Our Food Offers
            </p>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-6 pt-16 pb-24">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Azure Staycation by Siaos
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-4">Food Offers &amp; Catering</h1>
        <p className="text-ink-soft leading-relaxed mb-6 max-w-2xl">
          Skip the restaurant wait times and split bills that never quite add
          up. Add a meal package, party tray, or bundle to your staycation
          booking and let everyone just enjoy the celebration.
        </p>
        <p className="text-xs text-ink-soft/80 mb-14 max-w-2xl border-l-2 border-clay-deep/40 pl-3">
          Kindly note that all food options are subject to availability. Prices
          shown are current as of this listing and may change without prior
          notice — confirm the latest price when you inquire.
        </p>

        {/* ---- Good for 2 pax ---- */}
        <section className="mb-20" id="two-pax">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
            <h2 className="font-display text-3xl text-ink">Good for 2 Pax</h2>
            <p className="font-display text-3xl text-clay-deep">{TWO_PAX.price}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-ink-soft text-sm leading-relaxed mb-4">Choose from:</p>
              <ul className="space-y-3 mb-4">
                {TWO_PAX.options.map((o) => (
                  <li key={o.label} className="flex gap-2.5">
                    <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
                    <p className="text-ink-soft text-sm leading-relaxed">
                      <span className="text-ink font-medium">{o.label}:</span> {o.body}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-ink-soft italic">{TWO_PAX.note}</p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-ink/10">
              <div className="relative aspect-square">
                <Image
                  src="/images/food-offers/two-pax-table-setting.jpg"
                  alt="2-pax romantic dinner table setting with candles, wine glasses, and food trays"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-ink/10 bg-sand-light p-6">
              <h3 className="font-display text-lg text-ink mb-3">Main entree options</h3>
              <ul className="space-y-2">
                {TWO_PAX.mains.map((m) => (
                  <li key={m} className="flex gap-2.5">
                    <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
                    <p className="text-ink-soft text-sm leading-relaxed">{m}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-sand-light p-6">
              <h3 className="font-display text-lg text-ink mb-3">Pasta options</h3>
              <ul className="space-y-2">
                {TWO_PAX.pasta.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
                    <p className="text-ink-soft text-sm leading-relaxed">{p}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---- Party trays for big groups ---- */}
        <section className="mb-20" id="party-trays">
          <h2 className="font-display text-3xl text-ink mb-2">Food Offers for Big Groups</h2>
          <p className="text-ink-soft leading-relaxed mb-8 max-w-2xl text-sm">
            Get everyone together, order one of our group packages, and just
            enjoy — big flavors, easy getaway, and enough food to keep
            everyone happy.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              { img: "/images/food-offers/bagnet-karekare.jpg", label: "Crispy Bagnet Kare-Kare" },
              { img: "/images/food-offers/sisig-bagnet.jpg", label: "Sisig Bagnet with relish" },
              { img: "/images/food-offers/mixed-party-tray.jpg", label: "Mixed party tray spread" },
              { img: "/images/food-offers/lumpiang-shanghai.jpg", label: "Lumpiang Shanghai platter" },
              { img: "/images/food-offers/pancit-bilao.jpg", label: "Pancit bilao" },
              { img: "/images/food-offers/beef-caldereta-tray.jpg", label: "Beef caldereta party tray" },
            ].map((g) => (
              <div key={g.img} className="rounded-2xl overflow-hidden border border-ink/10 bg-sand-light">
                <div className="relative aspect-square">
                  <Image src={g.img} alt={g.label} fill sizes="(max-width: 768px) 33vw, 220px" className="object-cover" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
            <div>
              <h3 className="font-display text-xl text-ink mb-1">Bagnet Specials</h3>
              <p className="text-xs text-ink-soft/70 mb-4">Good for 10 pax</p>
              <PriceTable items={BAGNET_SPECIALS} />
            </div>
            <div>
              <h3 className="font-display text-xl text-ink mb-1">Vegetables</h3>
              <p className="text-xs text-ink-soft/70 mb-4">Good for 8–10 pax</p>
              <PriceTable items={VEGETABLE_TRAYS} />
            </div>
          </div>
        </section>

        {/* ---- Good for 8-10 pax: Chicken + Bilao ---- */}
        <section className="mb-20" id="chicken-bilao">
          <h2 className="font-display text-3xl text-ink mb-8">Chicken &amp; Bilao Options</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              { img: "/images/food-offers/korean-fried-chicken.jpg", label: "Korean-style fried chicken tray" },
              { img: "/images/food-offers/pancit-bilao.jpg", label: "Pancit bilao" },
              { img: "/images/food-offers/lumpiang-shanghai.jpg", label: "Lumpiang Shanghai platter" },
            ].map((g) => (
              <div key={g.img} className="rounded-2xl overflow-hidden border border-ink/10 bg-sand-light">
                <div className="relative aspect-square">
                  <Image src={g.img} alt={g.label} fill sizes="(max-width: 768px) 33vw, 300px" className="object-cover" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
            <div>
              <h3 className="font-display text-xl text-ink mb-1">Chicken</h3>
              <p className="text-xs text-ink-soft/70 mb-4">Good for 8–10 pax</p>
              <PriceTable items={CHICKEN_TRAYS} />
            </div>
            <div>
              <h3 className="font-display text-xl text-ink mb-1">Bilao Options — Pasta/Noodles</h3>
              <p className="text-xs text-ink-soft/70 mb-4">Good for 8–10 pax</p>
              <PriceTable items={BILAO_OPTIONS} />
            </div>
          </div>
        </section>

        {/* ---- Food Bundles ---- */}
        <section className="mb-20" id="bundles">
          <h2 className="font-display text-3xl text-ink mb-8">Food Bundle Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {BUNDLES.map((b) => (
              <div
                key={b.name}
                className={`rounded-3xl overflow-hidden border flex flex-col ${
                  b.featured ? "bg-ink text-sand-light border-ink" : "bg-cream-card text-ink border-ink/10"
                }`}
              >
                <div className="relative aspect-square">
                  <Image src={b.img} alt={b.name} fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  {b.featured && (
                    <span className="text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                      Most requested
                    </span>
                  )}
                  <p className={`text-sm leading-relaxed mb-4 flex-1 ${b.featured ? "text-sand-light/80" : "text-ink-soft"}`}>
                    {b.name}
                  </p>
                  <p className="font-display text-3xl">{b.price}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-ink-soft mt-6 max-w-2xl">
            We can customize a food bundle for you — just let us know which
            dishes you prefer, and we&rsquo;ll provide the best price.
          </p>
        </section>

        {/* ---- Cakes & Wine ---- */}
        <section className="mb-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl text-ink mb-3">Celebratory Cakes</h2>
            <p className="text-ink-soft text-sm leading-relaxed mb-5">
              Celebrate your intimate staycation event with a cake ordered
              through GrabFood depending on your budget, or order a custom
              cake made just for you. Share your peg in advance and
              we&rsquo;ll confirm availability and pricing.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-ink/10 relative aspect-square">
                <Image
                  src="/images/food-offers/celebratory-cake-birthday.jpg"
                  alt="Custom birthday cake for an Azure Staycation celebration"
                  fill
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-ink/10 relative aspect-square">
                <Image
                  src="/images/food-offers/celebratory-cake-giftbox.jpg"
                  alt="Custom cake in a gift box for a staycation celebration"
                  fill
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink mb-3">Toasting Wines</h2>
            <p className="text-ink-soft text-sm leading-relaxed mb-5">
              Add a special touch to your intimate staycation celebration
              with a bottle of toasting wine. Simply let us know in advance
              and we&rsquo;ll confirm the available options and pricing.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-ink/10 relative aspect-square">
                <Image
                  src="/images/food-offers/toasting-wine-charcuterie.jpg"
                  alt="Toasting wine with a charcuterie board set up"
                  fill
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-ink/10 relative aspect-square">
                <Image
                  src="/images/food-offers/anniversary-celebration-setup.jpg"
                  alt="Toasting wine and flowers set up for an anniversary celebration"
                  fill
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---- Payment & CTA ---- */}
        <section className="rounded-2xl bg-cream-card border border-ink/10 p-8 mb-4">
          <h2 className="font-display text-xl text-ink mb-2">Ready to add food to your booking?</h2>
          <p className="text-ink-soft text-sm leading-relaxed mb-5 max-w-xl">
            Let us know your preferred food package when you inquire, and
            we&rsquo;ll include it in your staycation quote. See our accepted{" "}
            <Link href="/payment-channels" className="text-clay-deep underline">
              payment channels
            </Link>{" "}
            for GCash, Maya, Vybe, and BPI details.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-ink text-sand-light px-6 py-3 text-sm font-semibold hover:bg-clay-deep transition-colors"
          >
            Send an inquiry
          </Link>
        </section>

        <p className="text-sm text-ink-soft mt-10 pt-6 border-t border-ink/10">
          Questions about food offers? Contact us at{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-clay-deep underline">
            {CONTACT.email}
          </a>{" "}
          or{" "}
          <a href="tel:+639209701226" className="text-clay-deep underline">
            {CONTACT.phone}
          </a>
          .
        </p>
      </article>

      <Footer />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildMenuJsonLd()) }}
      />
    </div>
  );
}

function PriceTable({ items }: { items: { name: string; serves: string; price: string }[] }) {
  return (
    <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
      {items.map((item) => (
        <div key={item.name} className="flex items-center justify-between gap-4 py-3">
          <p className="text-ink-soft text-sm leading-snug">{item.name}</p>
          <p className="text-ink font-semibold text-sm whitespace-nowrap">{item.price}</p>
        </div>
      ))}
    </div>
  );
}
