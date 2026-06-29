"use client";

import React, { useState } from "react";
import { Spectral } from "next/font/google";
import Link from "next/link";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface NewsItem {
  day: string;
  month: string;
  title: string;
  href: string;
  category: "SANGRAHALAYA" | "PMML";
}

const NEWS_ITEMS: NewsItem[] = [
  {
    day: "20",
    month: "May",
    title: "Interactive Exhibition: The Freedom Struggle",
    href: "#freedom-struggle",
    category: "SANGRAHALAYA",
  },
  {
    day: "20",
    month: "May",
    title: "Interactive Exhibition: The Freedom Struggle",
    href: "#freedom-struggle-2",
    category: "SANGRAHALAYA",
  },
  {
    day: "20",
    month: "May",
    title: "Interactive Exhibition: The Freedom Struggle",
    href: "#freedom-struggle-3",
    category: "SANGRAHALAYA",
  },
  {
    day: "15",
    month: "Jun",
    title: "Annual Lecture Series: Modern Indian History Archives",
    href: "#lecture-series",
    category: "PMML",
  },
  {
    day: "10",
    month: "Jun",
    title: "CCS Fellowship Program Applications for 2026-27",
    href: "#fellowship-apps",
    category: "PMML",
  },
  {
    day: "05",
    month: "Jun",
    title: "New Manuscript Conservation Workshop at Library",
    href: "#conservation-workshop",
    category: "PMML",
  },
];

export default function WelcomeSection() {
  const [activeTab, setActiveTab] = useState<"SANGRAHALAYA" | "PMML">("SANGRAHALAYA");
  const filteredNews = NEWS_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section className="w-full py-10 lg:py-12 bg-[#f4f4f4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">

          {/* LEFT: Welcome to PMML Info (Col span 7) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Top orange accent line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
              Welcome to PMML
            </h2>

            <p className="max-w-[620px] text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed mb-4 text-justify">
              The Prime Ministers Museum and Library is housed in the sprawling Thirty Acre historic Teen Murti campus located south of Rashtrapati Bhavan in New Delhi.
              Designed by Robert Tor Russell and built in 1929-30 as part of Edwin Lutyens' imperial capital, Teen Murti House was originally built as the official residence
              of the British Commander-in-Chief in India
            </p>

            {/* Supporting detail */}
            <p className="max-w-[620px] text-sm sm:text-[15px] lg:text-[16px] text-gray-500 leading-relaxed font-medium mb-6 text-justify">
              In August 1948, after the departure of the last British Commander-in-Chief, Teen Murti House became the official residence of independent India's first Prime Minister, Jawaharlal Nehru, who lived here for...
            </p>

            {/* CTA Button */}
            <Link
              href="/about-pmml"
              className="group inline-flex items-center justify-center bg-[#f37021] hover:bg-[#d85c15] text-white font-bold text-sm sm:text-[15px] px-6.5 py-2.5 rounded-lg shadow-[0_4px_14px_rgba(243,112,33,0.25)] hover:shadow-[0_6px_20px_rgba(243,112,33,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:scale-98 w-fit select-none cursor-pointer"
            >
              <span>Read More</span>
              <svg 
                className="w-4 h-4 ml-2 stroke-current transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* RIGHT: What's New Card (Col span 5) */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full bg-white p-5 sm:p-6 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-2 border-[#F4F4F4] flex flex-col text-left">

              {/* Header Title with Pulsing Orange Dot */}
              <h3 className={`${spectral.className} text-lg sm:text-xl font-medium text-[#0a1b3a] leading-none flex items-center mb-4`}>
                What&apos;s New?
                <span className="relative flex h-2 w-2 ml-1.5 translate-y-[-6px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f37021] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f37021]"></span>
                </span>
              </h3>

              {/* Interactive Tabs under What's New */}
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => setActiveTab("SANGRAHALAYA")}
                  className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded transition-all select-none border-none cursor-pointer ${
                    activeTab === "SANGRAHALAYA"
                      ? "bg-[#FEEAE6] text-[#f37021]"
                      : "text-gray-400 bg-transparent hover:text-gray-600"
                  }`}
                >
                  SANGRAHALAYA
                </button>
                <button
                  onClick={() => setActiveTab("PMML")}
                  className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded transition-all select-none border-none cursor-pointer ${
                    activeTab === "PMML"
                      ? "bg-[#FEEAE6] text-[#f37021]"
                      : "text-gray-400 bg-transparent hover:text-gray-600"
                  }`}
                >
                  PMML
                </button>
              </div>

              {/* News List */}
              <div className="flex flex-col w-full mb-5">
                {filteredNews.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0 group select-none cursor-pointer"
                  >
                    {/* Date Box */}
                    <div className="w-10 h-10 flex-shrink-0 flex flex-col items-center justify-center bg-[#f5f5f5] rounded group-hover:bg-[#FFE6D5] transition-colors duration-300">
                      <span className="text-sm font-bold text-[#052356] group-hover:text-[#f37021] leading-none mb-0.5">
                        {item.day}
                      </span>
                      <span className="text-[8px] font-bold tracking-wider text-gray-500 uppercase leading-none">
                        {item.month}
                      </span>
                    </div>

                    {/* Title Text */}
                    <span className="text-xs sm:text-[13px] font-semibold text-gray-700 group-hover:text-[#f37021] transition-colors leading-snug">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>

              {/* Card Footer: View All & Arrow Button */}
              <div className="flex items-center justify-between pt-1">
                <Link
                  href="/media/news"
                  className="text-[11px] sm:text-xs font-bold text-[#052356] hover:text-[#f37021] transition-colors uppercase tracking-wider select-none"
                >
                  View All
                </Link>

                {/* Orange Circular Accent Arrow Button */}
                <Link
                  href="/media/news"
                  aria-label="View all news"
                  className="w-8 h-8 rounded-full bg-[#f37021] hover:bg-[#d85c15] text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-[0_2px_6px_rgba(243,112,33,0.3)] hover:shadow-[0_4px_12px_rgba(243,112,33,0.5)]"
                >
                  <svg
                    className="w-3.5 h-3.5 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
