import Link from "next/link";
import TopBanner from "./TopBanner";

export default function Header() {
  return (
    <>
      <TopBanner />
      <header className="sticky top-0 z-40 bg-sand-light/90 backdrop-blur border-b border-ink/10">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-display text-lg tracking-wide text-ink">
            Azure Staycation <span className="italic text-clay-deep">by Siaos</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-soft">
            <Link href="/" className="hover:text-clay-deep transition-colors">
              Home
            </Link>
            <Link href="/packages" className="hover:text-clay-deep transition-colors">
              Room Decorations
            </Link>
            <Link href="/proposals" className="hover:text-clay-deep transition-colors">
              Proposal Packages
            </Link>
            <Link href="/blog" className="hover:text-clay-deep transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="hover:text-clay-deep transition-colors">
              Contact
            </Link>
          </div>
          <Link
            href="/proposals#book"
            className="rounded-full bg-ink text-sand-light px-5 py-2 text-sm font-semibold hover:bg-clay-deep transition-colors"
          >
            Book a date
          </Link>
        </nav>
      </header>
    </>
  );
}
