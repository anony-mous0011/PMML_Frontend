"use client";

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function LeafletMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Position of Teen Murti Marg Estate: 28.602608, 77.198774
    const position: [number, number] = [28.602608, 77.198774];

    // Initialize map
    const map = L.map(mapContainerRef.current, {
      center: position,
      zoom: 15,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
    });

    mapRef.current = map;

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Create an elegant SVG pin marker icon
    const svgIcon = L.divIcon({
      html: `
        <div class="flex items-center justify-center">
          <svg class="w-9 h-9 text-[#f37021] drop-shadow-md" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      `,
      className: '', // Clear default styling class
      iconSize: [36, 36],
      iconAnchor: [18, 36],
    });

    // Add marker with popup
    const marker = L.marker(position, { icon: svgIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family: inherit; font-size: 13px; color: #052356; font-weight: bold; line-height: 1.4;">
        Prime Ministers Museum & Library<br>
        <span style="font-weight: normal; font-size: 11.5px; color: #555;">Teen Murti Marg, New Delhi - 110011</span>
      </div>
    `).openPopup();

    // Clean up map instance on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm z-10">
      {/* Map container element */}
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Floating maps redirection button */}
      <a
        href="https://maps.google.com/?q=Prime+Ministers+Museum+and+Library+Teen+Murti+House+New+Delhi"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 z-[1000] inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 hover:bg-[#f37021] text-[#052356] hover:text-white text-xs font-bold tracking-wide rounded-full shadow-md transition-all duration-200 select-none cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        <span>OPEN IN MAPS</span>
      </a>
    </div>
  );
}
