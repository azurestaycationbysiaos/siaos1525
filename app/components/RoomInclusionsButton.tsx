"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { UnitPhoto } from "./UnitGallery";

export type InclusionUnit = {
  title: string;
  view: string;
  maxGuests: string;
  checkIn: string;
  checkOut: string;
  amenities: string[];
  inclusions: string[];
  honestyStoreNote?: string;
  photos: UnitPhoto[];
  // Optional: extra photos shown only in this modal's gallery. Falls back to `photos` if omitted.
  modalPhotos?: UnitPhoto[];
};

export default function RoomInclusionsButton({ unit }: { unit: InclusionUnit }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const galleryPhotos = unit.modalPhotos ?? unit.photos;

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeIndex !== null) setActiveIndex(null);
        else setOpen(false);
      }
      if (activeIndex !== null && e.key === "ArrowLeft" && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
      if (
        activeIndex !== null &&
        e.key === "ArrowRight" &&
        activeIndex < galleryPhotos.length - 1
      ) {
        setActiveIndex(activeIndex + 1);
      }
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, activeIndex, galleryPhotos.length]);

  return (
    <>
      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-block text-center rounded-full bg-clay-deep text-sand-light px-6 py-3 text-sm font-semibold hover:bg-ink transition-colors"
        >
          Room inclusions
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 px-4 py-8"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-cream-card p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full w-9 h-9 flex items-center justify-center text-ink hover:bg-ink/10 transition-colors"
            >
              ✕
            </button>

            <h3 className="font-display text-2xl text-ink pr-8">{unit.title}</h3>
            <p className="text-sm font-semibold text-clay-deep mt-1">{unit.view}</p>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {galleryPhotos.map((photo, i) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg border border-ink/10"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 33vw, 50vw"
                  />
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-2 text-sm text-ink-soft">
              <p>
                <span className="font-semibold text-ink">Max guests:</span>{" "}
                {unit.maxGuests}
              </p>
              <p>
                <span className="font-semibold text-ink">Check-in:</span>{" "}
                {unit.checkIn} &nbsp;|&nbsp;{" "}
                <span className="font-semibold text-ink">Check-out:</span>{" "}
                {unit.checkOut}
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-display text-lg text-ink mb-2">Room Inclusions</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-ink-soft list-disc list-inside">
                {unit.inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {unit.honestyStoreNote && (
              <p className="mt-5 text-xs text-ink-soft/80 italic border-t border-ink/10 pt-4">
                {unit.honestyStoreNote}
              </p>
            )}
          </div>

          {activeIndex !== null && (
            <div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 px-4"
              onClick={() => setActiveIndex(null)}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close photo"
                className="absolute right-4 top-4 rounded-full w-9 h-9 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                ✕
              </button>

              {activeIndex > 0 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((i) => (i === null ? i : i - 1));
                  }}
                  aria-label="Previous photo"
                  className="absolute left-4 sm:left-8 rounded-full w-10 h-10 flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition-colors"
                >
                  ‹
                </button>
              )}

              {activeIndex < galleryPhotos.length - 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((i) => (i === null ? i : i + 1));
                  }}
                  aria-label="Next photo"
                  className="absolute right-4 sm:right-8 rounded-full w-10 h-10 flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition-colors"
                >
                  ›
                </button>
              )}

              <div
                className="relative w-full max-w-4xl aspect-[4/3]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryPhotos[activeIndex].src}
                  alt={galleryPhotos[activeIndex].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
