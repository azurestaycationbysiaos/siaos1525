import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Payment Channels — Azure Staycation by Siaos",
  description:
    "Accepted payment methods for Azure Staycation by Siaos: GCash, Maya, Vybe, and BPI bank transfer.",
};

const CHANNELS = [
  { name: "GCash", number: "0920 970 1226", qr: "/images/payment/qr-gcash.jpg" },
  { name: "Maya", number: "0947 504 2783", qr: "/images/payment/qr-maya.jpg" },
  { name: "Vybe", number: "0920 970 1226", qr: "/images/payment/qr-vybe.jpg" },
  { name: "BPI", number: "8159416654", qr: "/images/payment/qr-bpi.jpg" },
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
        <p className="text-ink-soft leading-relaxed mb-6 max-w-xl">
          All accounts are under Lyryque Lysl Camylle Siaotong. We do not
          accept cash payments — please ensure you can transfer online.
          Scan a QR code below, or send directly to the number listed.
        </p>
        <p className="text-ink-soft leading-relaxed mb-10 max-w-xl">
          If you have any questions, you may contact me through the following channels:
        </p>
        <ul className="text-ink-soft leading-relaxed mb-10 max-w-xl list-disc list-inside space-y-1">
          <li>Email: <a href="mailto:staycationnearme2023@gmail.com" className="underline">staycationnearme2023@gmail.com</a></li>
          <li>Phone: <a href="tel:+639475042783" className="underline">0947 504 2783</a></li>
          <li>Viber: 0920 970 1226</li>
          <li>WhatsApp: <a href="https://wa.me/639209701226" className="underline">+63 920 970 1226</a></li>
          <li>WhatsApp: <a href="https://wa.me/639919252497" className="underline">+63 991 925 2497</a></li>
        </ul>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {CHANNELS.map((c) => (
            <div key={c.name}>
             <div className="relative aspect-square w-64 mx-auto rounded-lg overflow-hidden">
  <Image src={c.qr} alt={`${c.name} QR code`} fill sizes="256px" className="object-contain bg-white" />
</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink-soft mt-2 pt-8 border-t border-ink/10">
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
