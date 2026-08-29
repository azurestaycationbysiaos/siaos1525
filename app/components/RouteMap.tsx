"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";

const DESTINATION = {
  lat: 14.48408,
  lng: 121.04341,
  name: "Azure Staycation by Siaos",
};

// Used only if the visitor denies/lacks geolocation — NAIA Terminal 3
const FALLBACK_ORIGIN = {
  lat: 14.5086,
  lng: 121.0198,
  name: "NAIA Terminal 3 (default)",
};

function createPin(L: any, color: string) {
  return new L.DivIcon({
    html: `<div style="
      width:18px;height:18px;border-radius:50%;
      background:${color};border:3px solid #f4ece1;
      box-shadow:0 2px 6px rgba(0,0,0,0.25);
    "></div>`,
    className: "",
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
}

export default function RouteMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const [status, setStatus] = useState<"locating" | "routing" | "ready" | "error">("locating");
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const L = (await import("leaflet")).default;
      await import("leaflet-ant-path");

      if (!mapContainerRef.current || mapRef.current) return;

      const map = L.map(mapContainerRef.current).setView([DESTINATION.lat, DESTINATION.lng], 12);
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      L.marker([DESTINATION.lat, DESTINATION.lng], { icon: createPin(L, "#8a5a44") })
        .addTo(map)
        .bindPopup(`<div style="font-family: serif; color:#2b2420;"><strong>${DESTINATION.name}</strong></div>`)
        .openPopup();

      const origin = await getOrigin();
      if (cancelled || !mapRef.current) return;
      setUsingFallback(origin.name === FALLBACK_ORIGIN.name);

      L.marker([origin.lat, origin.lng], { icon: createPin(L, "#7c8b6f") })
        .addTo(map)
        .bindPopup(origin.name);

      setStatus("routing");

      try {
        const coords = await fetchRoute(origin, DESTINATION);
        if (cancelled || !mapRef.current) return;

        const latlngs = coords.map(([lng, lat]) => [lat, lng]) as [number, number][];

        // @ts-expect-error - leaflet-ant-path augments L.polyline at runtime
        const antPath = L.polyline.antPath(latlngs, {
          delay: 800,
          dashArray: [10, 20],
          weight: 5,
          color: "#8a5a44",
          pulseColor: "#f4ece1",
        }).addTo(map);

        map.fitBounds(antPath.getBounds(), { padding: [40, 40] });
        setStatus("ready");
      } catch (err) {
        console.error("Routing failed, falling back to straight line:", err);
        const straight = L.polyline(
          [
            [origin.lat, origin.lng],
            [DESTINATION.lat, DESTINATION.lng],
          ],
          { color: "#8a5a44", weight: 4, dashArray: "8,10" }
        ).addTo(map);
        map.fitBounds(straight.getBounds(), { padding: [40, 40] });
        setStatus("error");
      }
    }

    init();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-ink/10">
      <div ref={mapContainerRef} className="w-full h-full" />
      {status === "locating" && (
        <div className="absolute top-3 left-3 bg-[#f4ece1] px-3 py-1.5 rounded-full text-xs text-[#2b2420]">
          Finding your location…
        </div>
      )}
      {status === "routing" && (
        <div className="absolute top-3 left-3 bg-[#f4ece1] px-3 py-1.5 rounded-full text-xs text-[#2b2420]">
          Drawing your route…
        </div>
      )}
      {usingFallback && status !== "locating" && (
        <div className="absolute bottom-3 left-3 bg-[#f4ece1] px-3 py-1.5 rounded-full text-xs text-[#2b2420]">
          Showing route from NAIA — enable location for a route from you
        </div>
      )}
    </div>
  );
}

function getOrigin(): Promise<{ lat: number; lng: number; name: string }> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(FALLBACK_ORIGIN);
      return;
