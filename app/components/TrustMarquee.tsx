const MARQUEE_TEXT =
  "Trusted with Intimate Events since 2023 \u2022 Hosted over a thousand intimate events \u2022 100+ wedding proposals \u2022 Verified payments \u2022 Legit social proofs and guest reviews";

export default function TrustMarquee() {
  return (
    <div className="bg-clay-deep text-sand-light py-3 overflow-hidden whitespace-nowrap select-none">
      <div className="flex animate-marquee w-max">
        {[0, 1].map((i) => (
          <span
            key={i}
            aria-hidden={i === 1}
            className="flex items-center text-sm sm:text-base font-medium tracking-wide px-6"
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}

