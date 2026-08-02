"use client";

import Script from "next/script";

export default function TikTokEmbed({
  url,
  videoId,
}: {
  url: string;
  videoId: string;
}) {
  return (
    <>
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={videoId}
        style={{ maxWidth: "325px", minWidth: "270px", margin: "0 auto" }}
      >
        <section />
      </blockquote>
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </>
  );
}
