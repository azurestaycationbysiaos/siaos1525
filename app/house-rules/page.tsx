import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "House Rules — Azure Staycation by Siaos",
  description:
    "House rules for guests staying at Azure Staycation by Siaos, Azure Urban Resort Residences, Parañaque.",
};

const RULES = [
  {
    text: "No overcrowding. Unregistered guests are not allowed. Azure management can impose a ₱50,000 penalty if you're caught, with non-compliance leading to a 3-month suspension of our staycation business. Do not violate this rule.",
  },
  {
    text: "Strictly no smoking inside the unit.",
    penalty: "₱7,000",
  },
  {
    text: "Wear proper swimming attire if you take a dip in the wave pool, and do not enter the tower with wet clothes. Please also make sure to wear slippers.",
    penalty: "₱2,000",
  },
  {
    text: "Be cautious when you're drunk or unwell to avoid causing disturbances or acting inappropriately, as this behavior is penalized by Azure management accordingly.",
  },
  {
    text: "No vomiting in the kitchen sink. If you're feeling unwell or nauseous, please use the toilet bowl instead.",
    penalty: "₱2,000 and up, depending on the damage",
  },
  {
    text: "Please do not flush tissue or other trash in the toilet — it may cause clogging.",
  },
  {
    text: "Avoid creating loud noises or activities that might cause complaints. Azure implements a noise policy, and violations are charged accordingly.",
    penalty: "₱7,000",
  },
  {
    text: "You're welcome to use our videoke — please keep the volume to a minimum and use it only until 10 PM so we can avoid noise complaints with neighboring units.",
    penalty: "₱7,000",
  },
  {
    text: "No hanging of wet clothes on the balcony.",
    penalty: "₱2,000",
  },
  {
    text: "No unauthorized installation of decorations.",
    penalty: "₱2,000 and up, depending on the damage",
  },
  {
    text: "Our furry friends are not permitted at Azure during staycations.",
    penalty: "₱7,000",
  },
  {
    text: "Please ensure small children are properly supervised — they are not allowed on the balcony without an adult. The host is not responsible for accidents or illnesses on the premises. If you experience an emergency, please contact us immediately.",
  },
  {
    text: "Bringing outside food and drinks is allowed — no corkage fee applies. However, only light cooking is permitted (reheating, boiling water, shallow frying, brief simmering). Grilling and slow-cooking methods, including prolonged boiling of meat, are not allowed, and please avoid strong-smelling foods.",
  },
  {
    text: "No eating or drinking in the bedrooms.",
  },
  {
    text: "For tandem units: please avoid moving items between units, as each unit has different inclusions and is managed separately. Do not rearrange the furniture.",
  },
  {
    text: "Always turn off the breaker/A/C and unplug devices that could overheat or cause a fire hazard when leaving the unit.",
  },
  {
    text: "Stained bed linens and covers will be penalized.",
  },
  {
    text: "If you accidentally lock the unit, bedroom, or washroom, you'll be responsible for covering the cost of transporting the spare key or hiring a locksmith.",
  },
  {
    text: "Please treat this place with the same respect as your own home. Any incurred damages, missing items, stains, or leftover belongings will be charged accordingly.",
  },
  {
    text: "Kindly declare any loss, breakages, or damaged items — your honesty in reporting issues is greatly appreciated.",
  },
  {
    text: "Please respect all Azure employees and representatives, as they are only performing their duties.",
  },
];

export default function HouseRulesPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <article className="mx-auto max-w-2xl px-6 pt-16 pb-24">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Azure Staycation by Siaos
        </p>
        <h1 className="font-display text-4xl text-ink mb-10">House Rules</h1>

        <ul className="space-y-5">
          {RULES.map((rule, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-clay-deep mt-1" aria-hidden="true">✦</span>
              <p className="text-ink-soft leading-relaxed">
                {rule.text}
                {rule.penalty && (
                  <span className="text-clay-deep font-medium"> (Penalty: {rule.penalty})</span>
                )}
              </p>
            </li>
          ))}
        </ul>

        <p className="text-sm text-ink-soft mt-10 pt-6 border-t border-ink/10">
          Questions about these rules? Contact us at{" "}
          <a href="mailto:staycationnearme2023@gmail.com" className="text-clay-deep underline">
            staycationnearme2023@gmail.com
          </a>{" "}
          or{" "}
          <a href="tel:+639475042783" className="text-clay-deep underline">
            +639475042783
          </a>
          .
        </p>
      </article>
      <Footer />
    </div>
  );
}
