"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Leaflet's default marker icons break under Next.js bundling — point them at the CDN.
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const COORDS: [number, number] = [14.48408, 121.04341];

export default function LocationMap() {
  return (
    <div className="rounded-2xl overflow-hidden border border-ink/10">
      <MapContainer
        center={COORDS}
        zoom={16}
        scrollWheelZoom={false}
        className="h-[420px] w-full"
        aria-label="Map showing the location of Azure Staycation by Siaos"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={COORDS} icon={markerIcon}>
          <Popup>
            <span className="font-semibold">Azure Staycation by Siaos</span>
            <br />
            15th floor, Santorini Tower, Azure Urban Resort Residences
            <br />
            Barangay Marcelo Green, Km. 16, West Service Road, Bicutan,
            Parañaque City
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
