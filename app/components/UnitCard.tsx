"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type UnitPhoto = {
  src: string;
  alt: string;
};

export type UnitDetails = {
  title: string;
  view: string;
  maxGuests: string;
  amenities: string[];
  checkIn: string;
  checkOut: string;
  photos: UnitPhoto[];
};

export default function UnitCard({ unit }: { unit: UnitDetails }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const goPrev = () => setActive((i) => (i - 1 + unit.photos.length) % unit.photos.length);
  const goNext = () => setActive((i) => (i + 1) % unit.photos.length);

  const openModal = () => {
    setActive(0);
    setOpen(true);
  };

  return (
    <div className="rounded-2xl border border-ink/10 bg-cream-card p-4 sm:p-5 flex flex-col">
      {/* Hero image — the only photo shown on the card itself */}
      <button
        type="button"
        onClick={openModal}
        aria-label={`View details and photos for ${unit.title}`}
        className="relative block w-full aspect-[4/3] rounded-xl overflow-hidden border border-ink/10 bg-cream-card group"
      >
        <Image
          src={unit.photos[0].src}
          alt={unit.photos[0].alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
        <span className="absolute bottom-2 right-2 rounded-full bg-ink/70 text-sand-light text-[11px] font-semibold px-2.5 py-1">
          {unit.photos.length} photos
        </span>
      </button>

      <div className="mt-5 flex-1 flex flex-col">
        <h2 className="font-display text-2xl text-ink">{unit.title}</h2>
        <p className="text-sm font-semibold text-clay-deep mt-1">{unit.view}</p>
        <p className="mt-3 text-sm text-ink-soft">
          <span className="font-semibold text-ink">Max guests:</span> {unit.maxGuests}
        </p>

        <button
          type="button"
          onClick={openModal}
          className="mt-6 inline-block text-center rounded-full bg-clay-deep text-sand-light px-6 py-3 text-sm font-semibold hover:bg-ink transition-colors"
        >
          View details &amp; photos
        </button>
      </div>

      {/* Details modal: full inclusions breakdown + full photo gallery */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-ink/90 flex items-center justify-center px-4 py-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-sand-light"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close details"
              className="absolute top-3 right-3 z-10 w-9 h-9 inline-flex items-center justify-center rounded-full bg-ink/70 text-sand-light hover:bg-ink text-lg"
            >
              ✕
            </button>

            {/* Photo gallery */}
            <div className="relative w-full aspect-[4/3] bg-ink/5">
              <Image
                src={unit.photos[active].src}
                alt={unit.photos[active].alt}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
              {unit.photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous photo"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 inline-flex items-center justify-center rounded-full bg-ink/60 text-sand-light hover:bg-ink text-lg"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next photo"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 inline-flex items-center justify-center rounded-full bg-ink/60 text-sand-light hover:bg-ink text-lg"
                  >
                    ›
                  </button>
                  <span className="absolute bottom-2 right-2 rounded-full bg-ink/70 text-sand-light text-[11px] font-semibold px-2.5 py-1">
                    {active + 1} / {unit.photos.length}
                  </span>
                </>
              )}
            </div>

            {unit.photos.length > 1 && (
              <div className="flex gap-1.5 p-3 overflow-x-auto">
                {unit.photos.map((p, i) => (
                  <button
                    key={p.src}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`View photo ${i + 1} of ${unit.title}`}
                    className={`relative shrink-0 w-14 h-14 rounded-md overflow-hidden border transition-colors ${
                      i === active ? "border-clay-deep ring-1 ring-clay-deep" : "border-ink/10"
                    }`}
                  >
                    <Image src={p.src} alt={p.alt} fill sizes="56px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Inclusions breakdown */}
            <div className="p-5 sm:p-6">
              <h3 className="font-display text-2xl text-ink">{unit.title}</h3>
              <p className="text-sm font-semibold text-clay-deep mt-1">{unit.view}</p>

              <p className="mt-4 text-sm text-ink-soft">
                <span className="font-semibold text-ink">Max guests:</span> {unit.maxGuests}
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                <span className="font-semibold text-ink">Check-in:</span> {unit.checkIn}
                &nbsp;|&nbsp;
                <span className="font-semibold text-ink">Check-out:</span> {unit.checkOut}
              </p>

              <p className="mt-4 text-sm font-semibold text-ink">Inclusions</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {unit.amenities.map((a) => (
                  <span
                    key={a}
                    className="text-xs font-medium text-sage-deep bg-sage/10 border border-sage/20 rounded-full px-2.5 py-1"
                  >
                    {a}
                  </span>
                ))}
              </div>

              <Link
                href="/#contact"
                className="mt-6 inline-block text-center rounded-full bg-clay-deep text-sand-light px-6 py-3 text-sm font-semibold hover:bg-ink transition-colors"
              >
                Inquire about this unit
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

