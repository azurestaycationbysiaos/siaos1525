"use client";

import { useState } from "react";
import Image from "next/image";

export type UnitPhoto = {
  src: string;
  alt: string;
};

export default function UnitGallery({ photos, title }: { photos: UnitPhoto[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goPrev = () => setActive((i) => (i - 1 + photos.length) % photos.length);
  const goNext = () => setActive((i) => (i + 1) % photos.length);

  return (
    <div>
      {/* Main image */}
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        aria-label={`Open ${title} photo gallery`}
        className="relative block w-full aspect-[4/3] rounded-xl overflow-hidden border border-ink/10 bg-cream-card group"
      >
        <Image
          src={photos[active].src}
          alt={photos[active].alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
        <span className="absolute bottom-2 right-2 rounded-full bg-ink/70 text-sand-light text-[11px] font-semibold px-2.5 py-1">
          {active + 1} / {photos.length}
        </span>
      </button>

      {/* Thumbnail strip */}
      <div className="mt-2 grid grid-cols-5 gap-1.5">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View photo ${i + 1} of ${title}`}
            className={`relative aspect-square rounded-md overflow-hidden border transition-colors ${
              i === active ? "border-clay-deep ring-1 ring-clay-deep" : "border-ink/10"
            }`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center px-4 py-10"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close gallery"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 inline-flex items-center justify-center rounded-full bg-sand-light/10 text-sand-light hover:bg-sand-light/20 text-xl"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 w-10 h-10 inline-flex items-center justify-center rounded-full bg-sand-light/10 text-sand-light hover:bg-sand-light/20 text-xl"
          >
            ‹
          </button>

          <div
            className="relative w-full max-w-3xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[active].src}
              alt={photos[active].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 w-10 h-10 inline-flex items-center justify-center rounded-full bg-sand-light/10 text-sand-light hover:bg-sand-light/20 text-xl"
          >
            ›
          </button>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sand-light/80 text-sm">
            {title} — {active + 1} / {photos.length}
          </span>
        </div>
      )}
    </div>
  );
}

