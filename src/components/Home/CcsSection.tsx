"use client";

import React, { useState } from 'react';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const IMAGES = [
  {
    src: '/DSC_4568.jpg',
    alt: 'Center for Contemporary Studies Building',
  },
  {
    src: '/ccs.png',
    alt: 'Center for Contemporary Studies Seminar',
  },
  {
    src: '/seminar.JPG',
    alt: 'Academic discourse at Center for Contemporary Studies',
  }
];

export default function CcsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % IMAGES.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  // Get index of the next image for the background layered card
  const nextIdx = (activeIdx + 1) % IMAGES.length;

  return (
    <section id="ccs" className="w-full pt-10 pb-12 bg-white relative flex flex-col items-center border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Two-column layout: Text/Stats Left | Image Slider Right */}
        <div className="w-full flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-between">
          
          {/* Left Side: Header, Content, CTA */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
            <div className="w-full flex flex-col items-center md:items-start mb-6">
              <div className="w-16 h-[5px] bg-[#f37021] mb-4"></div>
              <h2 className={`${spectral.className} text-3xl md:text-[40px] font-bold text-[#0a1835] leading-tight text-left md:text-left w-full`}>
                Center for Contemporary Studies
              </h2>
              <p className="text-sm md:text-[15px] text-gray-600 font-light leading-relaxed mt-4 max-w-[480px] text-justify">
                The Centre for Contemporary Studies functions as a constituent unit of the Division and focuses on research relating to contemporary India. It administers fellowship programmes including Junior Fellow, Fellow, Senior Fellow, Resident Fellowship, Atal Bihari Vajpayee Fellowship, and the NMML Fellowship in collaboration with the Ministry of Culture. The Centre also organizes seminars, lectures, and workshops to promote academic discourse.
              </p>
            </div>

            {/* Know More CTA */}
            <div className="flex justify-center md:justify-start mt-2">
              <a
                href="#ccs"
                className="flex items-center gap-3 text-[#0a1835] hover:text-[#f37021] font-bold text-sm tracking-wide transition-colors group cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-bold">Know More</span>
                <div className="bg-[#f37021] group-hover:bg-[#d85c15] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Layered Card Slider */}
          <div className="w-full md:w-[50%] flex-shrink-0 flex items-center justify-center py-6 px-10 sm:px-12 md:px-16">
            <div className="relative w-[280px] h-[180px] sm:w-[380px] sm:h-[220px] md:w-[440px] md:h-[250px] lg:w-[460px] lg:h-[260px]">
              
              {/* Back Card (Layered effect) */}
              <div 
                className="absolute inset-0 bg-gray-200 rounded-2xl overflow-hidden border border-gray-100 shadow-lg transition-all duration-500 ease-in-out transform translate-x-6 translate-y-0 scale-[0.94] opacity-40 z-0"
              >
                <img
                  src={IMAGES[nextIdx].src}
                  alt={IMAGES[nextIdx].alt}
                  className="w-full h-full object-cover filter blur-[0.5px]"
                />
              </div>

              {/* Front Card (Active Image) */}
              <div 
                className="absolute inset-0 bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xl transition-all duration-500 ease-in-out z-10 group/card"
              >
                <img
                  src={IMAGES[activeIdx].src}
                  alt={IMAGES[activeIdx].alt}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Slider Navigation Buttons */}
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-[-28px] sm:left-[-40px] md:left-[-64px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-[#f37021] text-[#f37021] hover:text-white flex items-center justify-center shadow-md border border-[#f37021]/30 transition-all duration-200 active:scale-90 hover:scale-105"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-[-28px] sm:right-[-40px] md:right-[-64px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-[#f37021] text-[#f37021] hover:text-white flex items-center justify-center shadow-md border border-[#f37021]/30 transition-all duration-200 active:scale-90 hover:scale-105"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
