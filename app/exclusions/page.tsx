import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CONTACT } from "../../lib/links";

export const metadata = {
  title: "Exclusions: Parking Fee & Pool Access — Azure Staycation by Siaos",
  description:
    "Wave pool entrance fee and hours, and Azure parking rates — everything that is not included in your Azure Staycation by Siaos booking.",
};

const WAVE_SCHEDULE_AM = ["8:30 AM", "9:30 AM", "10:30 AM", "11:30 AM"];
const WAVE_SCHEDULE_PM = ["2:30 PM", "3:30 PM", "4:30 PM", "5:30 PM"];

const POOL_REMINDERS = [
  "Present your Visitor's Pass before queuing at the Registration Booth. A lost visitor pass is charged a ₱500 penalty.",
  "Only one (1) representative should fall in line to avoid a long queue.",
  "To avail of the PWD or Senior Citizen discount, a valid ID must be presented — no ID, no discount.",
  "Guests 3 ft. tall and below enter free.",
  "Pay ₱250.00 per shift at the Pool Cashier. Cash only — please pay the exact amount for a faster transaction.",
  "Payment is non-refundable.",
  "Double-check your swim band, visitor pass, receipt, and change before you leave.",
  "Ask the security guard for assistance putting on your swim band.",
  "Wet clothes are not allowed inside the tower.",
  "Wear proper swimwear and always follow pool rules and regulations.",
  "No smoking / vaping.",
  "Don't leave your child unattended.",
];

export default function ExclusionsPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <article className="mx-auto max-w-4xl px-6 pt-16 pb-24">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Azure Staycation by Siaos
        </p>
        <h1 className="font-display text-4xl text-ink mb-4">
          Exclusions: Parking Fee &amp; Pool Access
        </h1>
        <p className="text-ink-soft leading-relaxed mb-4 max-w-2xl">
          Azure does not offer free pool access — wave pool entry and parking
          are both paid separately from your staycation booking, straight to
          Azure&rsquo;s own cashier and parking staff. Please read the details
          below before you book.
        </p>

        {/* Hero: Azure does not offer free pool access */}
        <div className="rounded-2xl overflow-hidden border border-ink/10 mb-4">
          <div className="relative aspect-square">
            <Image
              src="/images/exclusion-no-free-pool-access.jpg"
              alt="Azure does not offer free pool access — pool access is subject to the applicable Wave Pool fee"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Wave pool fee & hours */}
        <section className="mb-14">
          <h2 className="font-display text-2xl text-ink mb-4">
            Wave Pool Entrance Fee &amp; Hours
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl border border-ink/10 bg-sand-light p-5">
              <p className="text-xs uppercase tracking-wide text-sage-deep font-semibold mb-1">
                Entrance fee
              </p>
              <p className="font-display text-3xl text-ink">₱250</p>
              <p className="text-sm text-ink-soft">per head, per shift</p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-sand-light p-5">
              <p className="text-xs uppercase tracking-wide text-sage-deep font-semibold mb-1">
                Pool maintenance
              </p>
              <p className="font-display text-3xl text-ink">Closed</p>
              <p className="text-sm text-ink-soft">every Tuesday</p>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            <li className="flex gap-2.5">
              <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
              <p className="text-ink-soft text-sm leading-relaxed">
                <span className="text-ink font-medium">AM shift:</span> 7:00 AM – 12:00 NN
              </p>
            </li>
            <li className="flex gap-2.5">
              <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
              <p className="text-ink-soft text-sm leading-relaxed">
                <span className="text-ink font-medium">PM shift:</span> 2:00 PM – 7:00 PM
              </p>
            </li>
            <li className="flex gap-2.5">
              <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
              <p className="text-ink-soft text-sm leading-relaxed">
                Swim bands can be purchased at the tent near the Azure Clubhouse.
              </p>
            </li>
          </ul>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-sage-deep font-semibold mb-2">
                Wave schedule — AM
              </p>
              <div className="flex flex-wrap gap-2">
                {WAVE_SCHEDULE_AM.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/15 px-3 py-1 text-sm text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-sage-deep font-semibold mb-2">
                Wave schedule — PM
              </p>
              <div className="flex flex-wrap gap-2">
                {WAVE_SCHEDULE_PM.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/15 px-3 py-1 text-sm text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-ink/10 mt-6">
            <div className="relative aspect-square">
              <Image
                src="/images/exclusion-wave-pool-guide.jpg"
                alt="Azure Wave Pool Guide — ₱250 entrance fee per head per shift"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pool registration reminders */}
        <section className="mb-14">
          <h2 className="font-display text-2xl text-ink mb-4">
            Pool Registration — Important Reminders
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
            {POOL_REMINDERS.map((item, i) => (
              <div key={item} className="flex gap-2.5">
                <span className="text-clay-deep font-display text-sm mt-0.5 shrink-0">
                  {i + 1}.
                </span>
                <p className="text-ink-soft text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Parking */}
        <section className="mb-14">
          <h2 className="font-display text-2xl text-ink mb-4">Parking Fee</h2>
          <p className="text-ink-soft leading-relaxed mb-6 max-w-2xl text-sm">
            You have two options for parking at Azure: booking{" "}
            <span className="text-ink font-medium">pre-arranged parking</span>{" "}
            through us ahead of time, or paying{" "}
            <span className="text-ink font-medium">direct parking</span> rates
            at Azure&rsquo;s own booth on the day.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-ink/10 bg-sand-light p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Pre-Arranged Parking
              </h3>
              <ul className="space-y-2 mb-4">
                <li className="flex gap-2.5">
                  <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
                  <p className="text-ink-soft text-sm leading-relaxed">Motor: ₱250–₱280</p>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
                  <p className="text-ink-soft text-sm leading-relaxed">Car: ₱300–₱350</p>
                </li>
              </ul>
              <p className="text-ink-soft text-xs leading-relaxed">
                Pros: you skip the initial parking line — though you&rsquo;ll
                still line up briefly at the verification booth on arrival.
                From there you can park right away and you&rsquo;ll be issued
                a parking pass (instead of a parking card) with a designated
                slot, letting you enter and exit multiple times during your
                stay — just let the security guard know at the entrance/exit.
                You&rsquo;ll also receive a parking authorization email from
                us once you book this option.
              </p>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-sand-light p-6">
              <h3 className="font-display text-lg text-ink mb-3">
                Direct Parking (Azure&rsquo;s guest parking)
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2.5">
                  <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
                  <p className="text-ink-soft text-sm leading-relaxed">
                    Car: first 3 hours ₱65, then ₱15/hour
                  </p>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
                  <p className="text-ink-soft text-sm leading-relaxed">
                    Motor: first 3 hours ₱50, then ₱10/hour
                  </p>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
                  <p className="text-ink-soft text-sm leading-relaxed">
                    Overnight charge: ₱380
                  </p>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-clay-deep mt-1 shrink-0" aria-hidden="true">✦</span>
                  <p className="text-ink-soft text-sm leading-relaxed">
                    Lost ticket charge: ₱300
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-ink/10">
            <div className="relative aspect-square">
              <Image
                src="/images/exclusion-parking-rates.jpg"
                alt="Azure Urban Resort Residences official parking rates card — for guests who prefer to park inside Azure"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
            <p className="p-3 text-xs text-ink-soft leading-snug">
              Azure&rsquo;s official parking rate card, for direct (walk-in) parking. Rates are collected by Azure and subject to change without prior notice.
            </p>
          </div>
        </section>

        <p className="text-sm text-ink-soft mt-4 pt-6 border-t border-ink/10">
          Questions about exclusions? Contact us at{" "}
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
    </div>
  );
}
