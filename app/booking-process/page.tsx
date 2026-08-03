import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Booking Process — Azure Staycation by Siaos",
  description:
    "How to book your staycation with Azure Staycation by Siaos — reservation, guest registration, parking, and check-in process.",
};

export default function BookingProcessPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <article className="mx-auto max-w-2xl px-6 pt-16 pb-24">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Azure Staycation by Siaos
        </p>
        <h1 className="font-display text-4xl text-ink mb-6">Booking Process</h1>
        <p className="text-ink-soft leading-relaxed mb-10">
          Please make sure you&rsquo;ve gone through our{" "}
          <a href="/house-rules" className="text-clay-deep underline">
            house rules
          </a>{" "}
          and Azure management policies to avoid extra charges and penalties.
        </p>

        <div className="space-y-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink [&_h2]:mb-3 [&_p]:text-ink-soft [&_p]:leading-relaxed [&_p]:mb-3">
          <div>
            <h2>1. Send the reservation fee</h2>
            <p>QR codes are available on our Payment Channels page. You can pay via:</p>
            <ul className="list-disc pl-5 text-ink-soft space-y-1 mb-3">
              <li>GCash — 0920 970 1226</li>
              <li>Maya — 0920 970 1226</li>
              <li>Vybe — 0920 970 1226</li>
              <li>BPI — available upon request</li>
            </ul>
            <p>All accounts are under Lyryque Lysl Camylle Siaotong. Once done, please send us your payment proof for verification.</p>
          </div>

          <div>
            <h2>2. Fill out our guest registration form</h2>
            <p>
              Please include valid IDs for all occupants for guest
              registration. Provide copies of government-issued IDs for all
              occupants aged 18 and above. If the ID doesn&rsquo;t show an
              age, please include it on the form. For foreign nationals,
              please send their IDs as well.
            </p>
          </div>

          <div>
            <h2>3. QR code issuance</h2>
            <p>
              Your entry QR code will be issued a day before check-in or on
              the check-in day itself. We process guest registrations one at
              a time, as other guests may have booked before you — rest
              assured you&rsquo;ll receive it a day before or on the day of
              your check-in.
            </p>
          </div>

          <div>
            <h2>4. Parking (optional)</h2>
            <p>
              Please let us know ahead of time if you&rsquo;ll need a
              parking slot. With pre-arranged parking, you won&rsquo;t need
              to line up before parking and exiting — you&rsquo;ll still
              need to line up at the verification booth on arrival, but
              afterward you&rsquo;ll be issued a parking pass with a
              designated slot you can enter and exit multiple times during
              your stay. Just inform security at the parking entrance/exit.
            </p>
          </div>
        </div>

        <p className="text-sm text-ink-soft mt-10 pt-6 border-t border-ink/10">
          Questions about the booking process? Contact us at{" "}
          <a href="mailto:staycationnearme2023@gmail.com" className="text-clay-deep underline">
            staycationnearme2023@gmail.com
          </a>{" "}
          or{" "}
          <a href="tel:+639209701226" className="text-clay-deep underline">
            +63 920 970 1226
          </a>
          .
        </p>
      </article>
      <Footer />
    </div>
  );
}
