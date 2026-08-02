import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms and Conditions — Azure Staycation by Siaos",
  description:
    "Terms and conditions for surprise wedding proposal setup delivery at Azure Staycation by Siaos, Parañaque.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <article className="mx-auto max-w-2xl px-6 pt-16 pb-24">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Wedding Proposal Delivery
        </p>
        <h1 className="font-display text-4xl text-ink mb-10">Terms and Conditions</h1>

        <div className="text-ink-soft leading-relaxed space-y-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-3">
          <p>
            Terms and conditions for surprise wedding proposal setup delivery
            provided by Azure Staycation by Siaos (&ldquo;Provider&rdquo;). By
            booking this service, the client (&ldquo;Guest&rdquo;) agrees to
            abide by these terms, as well as relevant Azure policies,
            staycation house rules, and Philippine laws.
          </p>

          <div>
            <h2>1. Booking and Payment</h2>
            <p>Bookings must be made 2-3 days prior to ensure availability and proper preparation. Spontaneous bookings can be accommodated depending on availability.</p>
            <p>A 50% reservation fee is required upon confirmation of the booking. The reservation fee is non-refundable. Any add-on to the availed package must be paid on top of the reservation fee, and full payment is required right after the scheduled delivery and setup.</p>
            <p>Payments are non-refundable — refunds cannot be issued due to accidental disclosure. Even if the person being proposed to declines, the Guest is still required to pay the full agreed amount as per the booking terms.</p>
          </div>

          <div>
            <h2>2. Delivery and Setup</h2>
            <p>The setup will be delivered and installed at Azure Staycation by Siaos unit at 15th floor, Santorini Tower, Azure Urban Resort Residences.</p>
          </div>

          <div>
            <h2>3. Usage and Liability</h2>
            <p>The setup is for decorative purposes only and should not be altered or used in a manner that may cause damage. The Guest is responsible for ensuring that all guests and third parties comply with safety precautions related to the setup, including following decoration guidelines to avoid short circuits or fire hazards.</p>
            <p>The Provider is not responsible for any accidents, injuries, or damages arising from misuse of the decorations. Any loss or damage to decorations or props caused by the Guest or third parties may incur additional charges.</p>
          </div>

          <div>
            <h2>4. Cancellation and Refund Policy</h2>
            <p>The reservation fee is strictly non-refundable, and cancellations will not be eligible for a refund. Rescheduling is allowed subject to availability and must be requested at least a week before the original booking date. For medical emergencies and force majeure, rescheduling of the setup only (not a refund) is available.</p>
          </div>

          <div>
            <h2>5. Force Majeure</h2>
            <p>The Provider shall not be held liable for any failure or delay in performing its obligations due to circumstances beyond its reasonable control, including but not limited to natural disasters, acts of government, pandemics, unforeseen travel restrictions, medical emergencies, or other extraordinary events preventing fulfillment of the service.</p>
            <p>In such cases, the Guest may request to reschedule the service within the same month, subject to availability, without additional charges.</p>
          </div>

          <div>
            <h2>6. Compliance and Governing Law</h2>
            <p>The Guest acknowledges that the service must comply with Azure policies, staycation house rules, and policies when availed within the property. Any legal disputes arising from the service shall be resolved under Philippine law, with the appropriate courts in the Philippines having jurisdiction.</p>
          </div>

          <div>
            <h2>7. Contact Information</h2>
            <p>
              For inquiries, customizations, or concerns, please contact
              Azure Staycation by Siaos at{" "}
              <a href="tel:+639209701226" className="text-clay-deep underline">
                +63 920 970 1226
              </a>
              .
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
