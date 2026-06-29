"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const MILESTONES = [
  {
    year: '1929–30',
    heading: '1929–30 | Built by the British',
    body: "Designed by Robert Tor Russell and built in 1929–30 as part of Edwin Lutyens' imperial capital, Teen Murti House was originally built as the official residence of the British Commander-in-Chief in India.",
    image: '/hero section/Frount loan.jpg.jpeg',
    icon: '🏛️',
    accentColor: '#8B7355',
  },
  {
    year: '1948',
    heading: "1948 | Nehru's Residence",
    body: "In August 1948, after the departure of the last British Commander-in-Chief, Teen Murti House became the official residence of independent India's first Prime Minister, Jawaharlal Nehru, who lived here for sixteen years until his death on May 27, 1964. Soon thereafter, the Government of India decided that the Teen Murti House should be dedicated to him and house a museum and a library.",
    image: '/building 1/nehru gallery.jpg',
    icon: '🇮🇳',
    accentColor: '#f37021',
  },
  {
    year: '1964',
    heading: '1964 | A National Memorial',
    body: "On Jawaharlal Nehru's 75th birth anniversary on November 14, 1964 Dr. Sarvepalli Radhakrishnan, Hon'ble President of India, formally dedicated the Teen Murti House to the nation and inaugurated the Nehru Memorial Museum.",
    image: '/hero section/Block 11600x687 (a)260410103645445255000000.jpg',
    icon: '🕊️',
    accentColor: '#2d6a4f',
  },
  {
    year: '1966',
    heading: '1966 | NMML Society Founded',
    body: "On 1st April 1966, the Government set up the Nehru Memorial Museum and Library Society to manage the institution, which has emerged as a House of Democracy for the Indian masses on the one hand and as a premier research centre and forum for intellectual activity on the other.",
    image: '/research-publication.png',
    icon: '📜',
    accentColor: '#7b2d8b',
  },
  {
    year: '1974',
    heading: '1974 | New Library Building',
    body: "Initially, the Museum was set up in the eastern wing of the Teen Murti House and the Library in the western wing. With the rapid growth of research material in the Library over the years, there was a pressing need for more space. An exclusive Library building was constructed adjacent to the Teen Murti House and inaugurated by Shri V. V. Giri, President of India, in January 1974.",
    image: '/library.jpg',
    icon: '📚',
    accentColor: '#c05621',
  },
  {
    year: '1989–90',
    heading: '1989–90 | Centre for Contemporary Studies',
    body: "The steady increase in the volume of research material further necessitated the construction of an Annexe building, which was completed in 1989. The Centre for Contemporary Studies was set up as a new unit of PMML in this building in 1990.",
    image: '/DSC_4568.jpg',
    icon: '🔬',
    accentColor: '#0f4c75',
  },
  {
    year: '2016',
    heading: '2016 | Transformation Begins',
    body: "In 2016, it was decided to convert the Nehru Memorial Museum into a Prime Ministers Museum & Library by addition of a new landmark building and enhancing the mandate of the Museum to showcasing the lives, vision & contribution of all the Prime Ministers of the country since independence.",
    image: '/bhavishya.png',
    icon: '🏗️',
    accentColor: '#744210',
  },
  {
    year: '2022',
    heading: '2022 | PM Museum Inaugurated',
    body: "On April 14, 2022, Prime Minister Shri Narendra Modi inaugurated the vastly expanded Prime Ministers Museum & Library. The new PMS 2 block houses galleries for all Prime Ministers from Shri Lal Bahadur Shastri onwards, featuring state-of-the-art technology including AI-enabled conversations with stalwarts of the past.",
    image: '/pms.png',
    icon: '✨',
    accentColor: '#f37021',
  }
];

export default function PmmlTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSelectYear = (idx: number) => {
    if (idx === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setDisplayIndex(idx);
      setActiveIndex(idx);
      setIsTransitioning(false);
    }, 200); // 200ms transition time
  };

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      if (isTransitioning) return;
      const nextIndex = (activeIndex + 1) % MILESTONES.length;
      setIsTransitioning(true);
      setTimeout(() => {
        setDisplayIndex(nextIndex);
        setActiveIndex(nextIndex);
        setIsTransitioning(false);
      }, 200);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex, isHovered, isTransitioning]);

  const currentMilestone = MILESTONES[displayIndex];

  return (
    <section className="w-full pt-10 pb-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Left-Aligned Header System */}
        <div className="flex flex-col items-start justify-start text-left mb-12 w-full">
          {/* Standard Homepage Section Top Line Accent (Shorter square line matching 'Jou' width) */}
          <div className="w-12 h-1 bg-[#f37021] mb-4" />

          {/* Standard Homepage Font Metrics */}
          <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] mb-3 tracking-tight`}>
            Journey Through Time
          </h2>

          {/* Replaced Verbatim Text Payload */}
          <p className="text-gray-500 text-sm sm:text-[15px] lg:text-[16px] font-medium max-w-4xl leading-relaxed mt-1 text-left">
            The Prime Ministers Museum and Library is housed in the sprawling Thirty Acre historic Teen Murti campus located south of Rashtrapati Bhavan in New Delhi.
          </p>
        </div>

        {/* ── DESKTOP LAYOUT (2-Column split system) ── */}
        <div
          className="hidden lg:grid gap-8 items-stretch"
          style={{ gridTemplateColumns: '15fr 85fr' }}
        >
          {/* Column 1: Fixed Timeline Nav vertical sidebar tracker (Vertically centered) */}
          <div className="flex flex-col justify-center gap-4 h-full select-none">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#f37021]">Timeline</span>
            <div className="relative flex flex-col gap-3 pl-1">
              {/* Vertical connecting line inside side-dock */}
              <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gray-100" />

              {MILESTONES.map((m, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={m.year}
                    onClick={() => handleSelectYear(idx)}
                    className="group flex items-center gap-4 text-left transition-all duration-200 cursor-pointer"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 ${isActive
                          ? 'bg-[#f37021] border-[#f37021] scale-125 shadow-md shadow-orange-500/20'
                          : 'bg-white border-gray-300 group-hover:border-[#f37021]'
                        }`}
                    />
                    <span
                      className={`text-xs font-bold tracking-wide transition-all duration-200 ${isActive
                          ? 'text-[#052356] scale-105 font-extrabold'
                          : 'text-gray-400 group-hover:text-gray-600'
                        }`}
                    >
                      {m.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 2: Unified Merged Content and Image Card (Fixed size to prevent jumping) */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-[#f8f8f8] rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-row h-[340px] w-full"
          >
            {/* Left side: Text Content */}
            <div
              className={`w-[55%] p-6 sm:p-8 flex flex-col justify-center gap-4 transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
            >
              <h3 className={`${spectral.className} text-xl sm:text-2xl md:text-3xl font-bold text-[#052356] leading-tight`}>
                {currentMilestone.heading}
              </h3>

              <p className="text-gray-600 text-sm sm:text-[15px] lg:text-[16px] font-normal leading-relaxed text-justify">
                {currentMilestone.body}
              </p>
            </div>

            {/* Right side: Image Frame */}
            <div
              className={`w-[45%] relative bg-[#040a17] overflow-hidden transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 scale-[0.985]' : 'opacity-100 scale-100'
                }`}
            >
              <Image
                src={currentMilestone.image}
                alt={currentMilestone.heading}
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* ── MOBILE / TABLET LAYOUT (Stacked) ── */}
        <div className="flex flex-col lg:hidden gap-6">
          {/* Horizontal Year Selector */}
          <div
            className="w-full py-3 flex overflow-x-auto px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-2 mx-auto">
              {MILESTONES.map((m, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={m.year}
                    onClick={() => handleSelectYear(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${isActive
                        ? 'bg-[#f37021] text-white shadow-md scale-105'
                        : 'bg-white text-gray-500 border border-gray-100 hover:bg-gray-50'
                      }`}
                  >
                    <span className="mr-1.5">{m.icon}</span>
                    {m.year}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Unified Merged Content & Image Mobile Container */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-[#f8f8f8] rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col w-full"
          >
            {/* Mobile Text Content */}
            <div
              className={`p-6 flex flex-col gap-4 transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
            >
              <h3 className={`${spectral.className} text-lg sm:text-xl md:text-2xl font-bold text-[#052356] leading-tight`}>
                {currentMilestone.heading}
              </h3>

              <p className="text-gray-600 text-sm sm:text-[15px] lg:text-[16px] font-normal leading-relaxed text-justify">
                {currentMilestone.body}
              </p>
            </div>

            {/* Mobile Image */}
            <div
              className={`relative h-64 sm:h-80 w-full bg-[#040a17] overflow-hidden transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 scale-[0.985]' : 'opacity-100 scale-100'
                }`}
            >
              <Image
                src={currentMilestone.image}
                alt={currentMilestone.heading}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
