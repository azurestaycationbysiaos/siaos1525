"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import TopBanner from "./TopBanner";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/location", label: "Location" },
  { href: "/amenities", label: "Amenities" },
  { href: "/packages", label: "Room Decorations" },
  { href: "/proposals", label: "Proposal Packages" },
  { href: "/other-units", label: "Other Units" },
  { href: "/food-offers", label: "Food Offers" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [render, setRender] = useState(false);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Drive the panel's mount/unmount and its enter transition, so opening
  // and closing both animate instead of snapping instantly (matches the
  // fade + slide feel of apple.com's mobile menu).
  useEffect(() => {
    if (open) {
      setRender(true);
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => setEnter(true));
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    } else {
      setEnter(false);
      const t = setTimeout(() => setRender(false), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (render) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [render]);

  return (
    <>
      <TopBanner />
      <header className="sticky top-0 z-40 bg-sand-light/90 backdrop-blur border-b border-ink/10">
        <nav className="mx-auto max-w-7xl pl-4 pr-6 py-4 flex items-center justify-between gap-6">
          <Link
            href="/"
            className="font-display text-lg tracking-wide text-ink shrink-0 whitespace-nowrap"
            onClick={() => setOpen(false)}
          >
            Azure Staycation <span className="italic text-clay-deep">by Siaos</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5 text-sm font-medium text-ink-soft whitespace-nowrap">
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
              className="md:hidden relative z-[60] inline-flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full border border-ink/15 text-ink bg-sand-light"
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

        {/* Mobile menu panel — portaled to <body> so it always renders above
            everything else (e.g. TopBanner), regardless of header's own
            stacking context */}
        {render &&
          mounted &&
          createPortal(
            <div
              className={`md:hidden fixed inset-0 z-[2000] bg-sand-light px-6 pt-6 pb-6 flex flex-col gap-1 overflow-y-auto transition-all duration-300 ease-out ${
                enter ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <div className="flex justify-end mb-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/15 text-ink"
                >
                  <span className="block h-0.5 w-5 bg-current rotate-45 relative">
                    <span className="block h-0.5 w-5 bg-current -rotate-90 absolute top-0" />
                  </span>
                </button>
              </div>
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
            </div>,
            document.body
          )}
      </header>
    </>
  );
}

