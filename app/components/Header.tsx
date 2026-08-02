import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-sand-light/90 backdrop-blur border-b border-ink/10">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-lg tracking-wide text-ink">
          Azure Staycation <span className="italic text-clay-deep">by Siaos</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
          <Link href="/#packages" className="hover:text-clay-deep transition-colors">
            Packages
          </Link>
          <Link href="/#gallery" className="hover:text-clay-deep transition-colors">
            Gallery
          </Link>
          <Link href="/#reviews" className="hover:text-clay-deep transition-colors">
            Reviews
          </Link>
          <Link href="/blog" className="hover:text-clay-deep transition-colors">
            Blog
          </Link>
          <Link href="/#contact" className="hover:text-clay-deep transition-colors">
            Contact
          </Link>
        </div>
        <Link
          href="/#contact"
          className="rounded-full bg-ink text-sand-light px-5 py-2 text-sm font-semibold hover:bg-clay-deep transition-colors"
        >
          Book a date
        </Link>
      </nav>
    </header>
  );
}
