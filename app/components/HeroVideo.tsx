"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Setting muted only as a JSX prop doesn't always sync to the DOM
    // property before autoplay is evaluated, which can silently block
    // playback. Setting it directly here guarantees the browser sees
    // it as muted and allows autoplay.
    video.muted = true;
    video.play().catch(() => {
      // Autoplay was blocked for some other reason (extension, browser
      // setting). The poster image still shows, so this fails silently.
    });
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      src="/videos/azure-hero.mp4"
      poster="/images/azure-hero-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}

