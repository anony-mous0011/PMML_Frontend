"use client";

import React from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface ExploreItem {
  label: string;
  blueIcon: string;
  orangeIcon: string;
  href: string;
}

const EXPLORE_ITEMS: ExploreItem[] = [
  {
    label: "Pradhanmantri Sangrahalaya",
    blueIcon: "/pms-blue.png",
    orangeIcon: "/museum-icon.png",
    href: "/pm-sangrahalaya",
  },
  {
    label: "Nehru Planetarium",
    blueIcon: "/planetarium-blue.png",
    orangeIcon: "/planetarium-icon-clean.png",
    href: "#planetarium",
  },
  {
    label: "Library",
    blueIcon: "/library-blue.png",
    orangeIcon: "/library-icon-clean.png",
    href: "/library",
  },
  {
    label: "The Archives",
    blueIcon: "/the-archives-blue.png",
    orangeIcon: "/archive-icon-clean.png",
    href: "/archives",
  },
  {
    label: "CCS",
    blueIcon: "/ccs-blue.png",
    orangeIcon: "/ccs-orange.png",
    href: "#ccs",
  },
  {
    label: "Reprography",
    blueIcon: "/reprography-blue.png",
    orangeIcon: "/reprography-icon-clean.png",
    href: "#reprography",
  },
  {
    label: "Oral History",
    blueIcon: "/oral-history-blue.png",
    orangeIcon: "/oral-history-icon-clean.png",
    href: "#oral-history",
  },
];

export default function Explore() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-6 lg:mb-8 text-left">
          {/* Top accent line */}
          <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
          <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
            Explore
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5">
          {EXPLORE_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex flex-col justify-between items-center bg-[#F4F4F4] hover:bg-[#EAEAEA] border border-transparent hover:border-[#f37021]/20 rounded-xl p-4 pb-5 text-center select-none cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(243,112,33,0.06)] aspect-[4.3/5] w-full"
            >
              {/* Icon Container */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.08] mt-2">
                {/* Blue (default) Icon */}
                <Image
                  src={item.blueIcon}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 8vw"
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Orange (hover) Icon */}
                <Image
                  src={item.orangeIcon}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 8vw"
                  className="object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              
              {/* Label */}
              <span className="mt-4 text-[13px] sm:text-[14px] font-semibold text-[#052356] group-hover:text-[#f37021] transition-colors tracking-wide leading-tight min-h-[38px] flex items-center justify-center">
                {item.label}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
