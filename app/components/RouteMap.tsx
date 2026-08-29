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
  const [status, setStatus] =
