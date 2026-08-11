"use client";

import { useState } from "react";
import Link from "next/link";
import TopBanner from "./TopBanner";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/location", label: "Location" },
  { href: "/amenities", label: "Amenities" },
  { href: "/packages", label: "Room Decorations" },
  { href: "/proposals", label: "Proposal Packages" },
  { href: "/food-offers", label: "Food Offers" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopBanner />
      <header className="sticky top-0 z-40 bg-sand-light/90 backdrop-blur border-b border-ink/10">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg tracking-wide text-ink"
            onClick={() => setOpen(false)}
          >
            Azure Staycation <span className="italic text-clay-deep">by Siaos</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-soft">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-clay-deep transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/proposals#book"
              className="hidden sm:inline-block rounded-full bg-ink text-sand-light px-5 py-2 text-sm font-semibold hover:bg-clay-deep transition-colors"
            >
              Book a date
            </Link>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden inline-flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full border border-ink/15 text-ink"
            >
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden border-t border-ink/10 bg-sand-light px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink border-b border-ink/5 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/proposals#book"
              onClick={() => setOpen(false)}
              className="mt-4 text-center rounded-full bg-ink text-sand-light px-5 py-3 text-sm font-semibold"
            >
              Book a date
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
