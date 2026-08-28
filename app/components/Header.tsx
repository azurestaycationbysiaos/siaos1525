"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import TopBanner from "./TopBanner";

// Full list — used for the mobile menu, which shows everything as one
// flat, scrollable list.
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

// Desktop nav is split so the row never has to fit more than a handful of
// items next to the logo and the "Book a date" button. Secondary/reference
// pages live under "More" instead of competing for space in the main row.
const PRIMARY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Room Decorations" },
  { href: "/proposals", label: "Proposal Packages" },
  { href: "/other-units", label: "Other Units" },
  { href: "/blog", label: "Blog" },
];

const MORE_LINKS = [
  { href: "/location", label: "Location" },
  { href: "/amenities", label: "Amenities" },
  { href: "/food-offers", label: "Food Offers" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

function MoreDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1 hover:text-clay-deep transition-colors"
      >
        More
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
        >
          <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-ink/10 bg-sand-light shadow-lg py-2 z-50">
          {MORE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-ink-soft hover:text-clay-deep hover:bg-ink/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

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
        <nav className="mx-auto max-w-7xl pl-4 pr-6 py-4 flex items-center justify-between gap-4 lg:gap-6">
          <Link
            href="/"
            className="font-display text-lg tracking-wide text-ink shrink-0 whitespace-nowrap"
            onClick={() => setOpen(false)}
          >
            Azure Staycation <span className="italic text-clay-deep">by Siaos</span>
          </Link>

          {/* Desktop nav — only renders at lg+ so it never has to squeeze
              against the CTA button on medium/tablet widths. Below lg,
              everything (including these links) lives in the mobile menu. */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 text-sm font-medium text-ink-soft whitespace-nowrap shrink-0">
            {PRIMARY_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-clay-deep transition-colors">
                {link.label}
              </Link>
            ))}
            <MoreDropdown />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/proposals#book"
              className="hidden sm:inline-block shrink-0 whitespace-nowrap rounded-full bg-ink text-sand-light px-5 py-2 text-sm font-semibold hover:bg-clay-deep transition-colors"
            >
              Book a date
            </Link>

            {/* Hamburger button — visible below lg now, alongside tablet widths */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="lg:hidden relative z-[60] inline-flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full border border-ink/15 text-ink bg-sand-light shrink-0"
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

        {/* Mobile/tablet menu panel — portaled to <body> so it always renders
            above everything else (e.g. TopBanner), regardless of header's own
            stacking context. Shows below lg now. */}
        {render &&
          mounted &&
          createPortal(
            <div
              className={`lg:hidden fixed inset-0 z-[2000] bg-sand-light px-6 pt-6 pb-6 flex flex-col gap-1 overflow-y-auto transition-all duration-300 ease-out ${
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

