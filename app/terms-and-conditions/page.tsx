import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms and Conditions — Azure Staycation by Siaos",
  description:
    "Booking, payment, and cancellation terms and conditions for Azure Staycation by Siaos, Parañaque.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <article className="mx-auto max-w-2xl px-6 pt-16 pb-24">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Azure Staycation by Siaos
        </p>
        <h1 className="font-display text-4xl text-ink mb-10">Terms and Conditions</h1>

        <div className="text-ink-soft leading-relaxed space-y-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-3 [&_li]:mb-2">
          <p>
            By booking a staycation with Azure Staycation by Siaos
            (&ldquo;Provider&rdquo;), the guest (&ldquo;Guest&rdquo;) agrees
            to abide by these terms, as well as our house rules and relevant
            Azure Urban Resort Residences policies.
          </p>

          <div>
            <h2>1. Reservations</h2>
            <p>Reservations are on a first-come, first-served basis and subject to room availability.</p>
            <p>We reserve the right to set the reservation fee depending on your selected date.</p>
            <p>Peak dates, holidays, wedding proposals, engagement parties, stag parties, and bridal showers require a 50% reservation fee.</p>
          </div>

          <div>
            <h2>2. Payment</h2>
            <p>All accounts are under Lyryque Lysl Camylle Siaotong. We do not accept cash payments for bookings — please ensure you can transfer online via GCash, Maya, Vybe, or BPI bank transfer.</p>
            <p>The reservation fee is non-refundable.</p>
            <p>Please send a screenshot of your payment once completed. Any balance upon arrival must also be settled via GCash, Maya, Vybe, or BPI bank transfer only.</p>
          </div>

          <div>
            <h2>3. Cancellations and Rescheduling</h2>
            <p>The reservation fee is strictly non-refundable.</p>
            <p>For cancellations on peak dates or holidays, rescheduling is not allowed.</p>
          </div>

          <div>
            <h2>4. Compliance</h2>
            <p>
              Guests must comply with our{" "}
              <Link href="/house-rules" className="text-clay-deep underline">
                house rules
              </Link>{" "}
              and Azure Urban Resort Residences policies at all times during
              their stay.
            </p>
          </div>

          <div>
            <h2>5. Contact Information</h2>
            <p>
              For inquiries or concerns, please contact Azure Staycation by
              Siaos at{" "}
              <a href="tel:+639209701226" className="text-clay-deep underline">
                +63 920 970 1226
              </a>
              .
            </p>
          </div>
        </div>

        <p className="text-sm text-ink-soft mt-14 pt-6 border-t border-ink/10">
          Booking a wedding proposal setup?{" "}
          <Link href="/proposals/terms-and-conditions" className="text-clay-deep underline">
            View proposal delivery terms and conditions
          </Link>
          .
        </p>
      </article>
      <Footer />
    </div>
  );
}
