import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Payment Channels — Azure Staycation by Siaos",
  description:
    "Accepted payment methods for Azure Staycation by Siaos: GCash, Maya, Vybe, and BPI bank transfer.",
};

const CHANNELS = [
  { name: "GCash", number: "0920 970 1226", qr: "/images/payment/qr-1.jpg" },
  { name: "Maya", number: "0920 970 1226", qr: "/images/payment/qr-2.jpg" },
  { name: "Vybe", number: "0920 970 1226", qr: "/images/payment/qr-3.jpg" },
  { name: "BPI", number: "Available upon request", qr: "/images/payment/qr-4.jpg" },
];

export default function PaymentChannelsPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <article className="mx-auto max-w-3xl px-6 pt-16 pb-24">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sage-deep mb-3">
          Azure Staycation by Siaos
        </p>
        <h1 className="font-display text-4xl text-ink mb-4">Payment Channels</h1>
        <p className="text-ink-soft leading-relaxed mb-10 max-w-xl">
          All accounts are under Lyryque Lysl Camylle Siaotong. We do not
          accept cash payments — please ensure you can transfer online.
          Scan a QR code below, or send directly to the number listed.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {CHANNELS.map((c) => (
            <div key={c.name} className="bg-cream-card border border-ink/10 rounded-2xl p-6 text-center">
              <h2 className="font-display text-xl text-ink mb-3">{c.name}</h2>
              <div className="relative aspect-square w-40 mx-auto mb-3 rounded-lg overflow-hidden border border-ink/10">
                <Image src={c.qr} alt={`${c.name} QR code`} fill sizes="160px" className="object-contain bg-white" />
              </div>
              <p className="text-sm text-ink-soft">{c.number}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3 text-ink-soft leading-relaxed border-t border-ink/10 pt-8">
          <h2 className="font-display text-xl text-ink mb-2">Good to know</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reservations are on a first-come, first-served basis and subject to room availability.</li>
            <li>The reservation fee is non-refundable.</li>
            <li>For cancellations on peak dates/holidays, rescheduling is not allowed. Peak dates, holidays, wedding proposals, engagement parties, stag parties, and bridal showers require a 50% reservation fee.</li>
            <li>We reserve the right to set the reservation fee depending on your selected date.</li>
            <li>Please send a screenshot of your payment once completed. Balance upon arrival must also be settled via GCash, Maya, Vybe, or BPI bank transfer only.</li>
          </ul>
        </div>

        <p className="text-sm text-ink-soft mt-10 pt-6 border-t border-ink/10">
          Please also review our{" "}
          <a href="/house-rules" className="text-clay-deep underline">
            house rules
          </a>{" "}
          and{" "}
          <a href="/terms-and-conditions" className="text-clay-deep underline">
            terms and conditions
          </a>{" "}
          to avoid any unnecessary charges.
        </p>
      </article>
      <Footer />
    </div>
  );
}
