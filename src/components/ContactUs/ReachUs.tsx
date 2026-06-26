"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Load map component dynamically to avoid server-side Leaflet rendering errors
const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[320px] sm:h-[380px] bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-150 shadow-inner">
      <div className="text-gray-400 text-xs sm:text-sm font-semibold flex items-center gap-2 select-none">
        <svg className="animate-spin w-5 h-5 text-[#f37021]" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Loading Map Directory...</span>
      </div>
    </div>
  ),
});

export default function ReachUs() {
  return (
    <div className="w-full h-full flex flex-col gap-6 text-left">
      
      {/* Label and Address info */}
      <div className="flex flex-col gap-2">
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-gray-500 uppercase">
          HOW TO REACH
        </span>
        <h3 className={`${spectral.className} text-lg sm:text-xl font-bold text-[#052356] leading-snug`}>
          Prime Ministers Museum & Library<br />
          Teen Murti Marg, New Delhi - 110011
        </h3>
      </div>

      {/* Circle outline action buttons */}
      <div className="flex items-center gap-3">
        {/* Map Pin Link */}
        <a
          href="https://maps.google.com/?q=Prime+Ministers+Museum+and+Library+Teen+Murti+House+New+Delhi"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border-2 border-[#052356] text-[#052356] bg-transparent flex items-center justify-center transition-all duration-300 hover:bg-[#052356] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Find on Google Maps"
          title="Open Google Maps Location"
        >
          <svg className="w-4.5 h-4.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
          </svg>
        </a>

        {/* Telephone Link */}
        <a
          href="tel:011-21410360"
          className="w-10 h-10 rounded-full border-2 border-[#052356] text-[#052356] bg-transparent flex items-center justify-center transition-all duration-300 hover:bg-[#052356] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Call Teen Murti House"
          title="Call 011-21410360 "
        >
          <svg className="w-4.5 h-4.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.017 12.017 0 01-4.81-4.81c-.149-.42-.032-.9.384-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        </a>

        {/* Mail Envelope Link */}
        <a
          href="mailto:museum.pmml@gov.in"
          className="w-10 h-10 rounded-full border-2 border-[#052356] text-[#052356] bg-transparent flex items-center justify-center transition-all duration-300 hover:bg-[#052356] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Email PMML Museum"
          title="Email museum.pmml@gov.in"
        >
          <svg className="w-4.5 h-4.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </a>
      </div>

      {/* Embedded interactive Leaflet.js map */}
      <div className="w-full flex-grow pt-2">
        <LeafletMap />
      </div>

    </div>
  );
}
