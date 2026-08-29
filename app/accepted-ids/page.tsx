import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_NAME } from "../../lib/site";
import { CONTACT } from "../../lib/links";

export const metadata = {
  title: "Accepted Valid IDs — Azure Staycation by Siaos",
  description:
    "List of accepted government-issued IDs for check-in at Azure Urban Resort Residences, Parañaque, per the Property Management Office's official ID requirements.",
};

const ACCEPTED_IDS = [
  "Philippine Identification (PhilID / ePhilID)",
  "Passport",
  "Driver's License",
  "SSS ID",
  "Unified Multi-Purpose ID (UMID)",
  "PhilHealth ID",
  "Professional Regulation Commission (PRC) ID",
  "Voter's ID",
  "Postal ID",
  "Senior Citizen ID",
  "Persons with Disability (PWD) ID",
];

export default function AcceptedIdsPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <section className="max-w-3xl px-6 pt-16 pb-10 mr-auto">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          {SITE_NAME}
        </p>
        <h1 className="font-display text-5xl text-ink leading-[1.05] max-w-2xl">
          Accepted <em className="italic text-clay-deep">Valid IDs</em>
        </h1>
        <p className="text-ink-soft text-sm leading-relaxed mt-4 max-w-xl">
          Per Azure Urban Resort Residences&rsquo; Property Management
          Office, all occupants above 18 years old must present one of the
          following primary government-issued IDs at check-in.
        </p>
      </section>

      <section className="max-w-3xl px-6 pb-10 mr-auto">
        <ul className="divide-y divide-ink/10 border-t border-b border-ink/10">
          {ACCEPTED_IDS.map((id) => (
            <li key={id} className="py-3 text-ink text-sm">
              ✦ &nbsp; {id}
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-3xl px-6 pb-20 mr-auto">
        <div className="border border-clay-deep/30 rounded-2xl p-6 bg-[#f4ece1]">
          <p className="text-ink text-sm font-semibold mb-2">
            Company IDs are no longer accepted.
          </p>
          <p className="text-ink-soft text-sm leading-relaxed">
            As of October 13, 2025, Azure&rsquo;s Property Management Office
            no longer accepts Company Identification Cards for guests or
            long-term tenants, following incidents involving fake or tampered
            company IDs used to secure booking approvals. Please bring one of
            the primary government-issued IDs listed above.
          </p>
        </div>

        <p className="text-ink-soft text-sm leading-relaxed mt-6">
          Foreign long-term tenants are additionally required to submit a
          valid Alien Certificate of Registration Identification Card (ACR
          I-Card) prior to move-in approval. This requirement applies to
          long-term tenancy and is separate from short-term staycation
          check-in.
        </p>

        <p className="text-sm text-ink-soft mt-10">
          Questions about ID requirements? Contact us at{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-clay-deep underline">
            {CONTACT.email}
          </a>{" "}
          or see our{" "}
          <Link href="/faq" className="text-clay-deep underline">
            FAQ
