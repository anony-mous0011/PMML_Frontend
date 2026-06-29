"use client";

import React, { useState, useEffect } from 'react';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function PlanetariumSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is md breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      className="w-full bg-[#033a8c] md:bg-[#030812] relative overflow-hidden flex flex-col md:flex-row md:h-[380px] lg:h-[440px] select-none"
      style={isMobile ? {
        backgroundImage: "linear-gradient(135deg, rgba(3, 15, 60, 0.8) 0%, rgba(3, 58, 140, 0.5) 100%), url('/planet-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      
      {/* Desktop Planetarium Image on the Right */}
      <div className="hidden md:block absolute top-0 right-0 h-full w-[62%] z-0">
        <img 
          src="/planetarium-home.jpg" 
          alt="Nehru Planetarium Seating & Dome Screen" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop Slanted Blue Block Overlay */}
      <div 
        className="hidden md:block absolute top-0 left-0 h-full w-[50%] lg:w-[46%] z-10"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(3, 15, 60, 0.8) 0%, rgba(3, 58, 140, 0.5) 100%), url('/planet-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)',
          WebkitClipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)'
        }}
      />

      {/* Content Container (Constrained Width matching page grids) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center relative z-20 h-full">
        
        {/* Text content (Left side - overlays the blue background on mobile, slanted blue block on desktop) */}
        <div className="w-full md:w-[40%] py-12 md:py-0 text-left flex flex-col justify-center h-full relative z-30">
          <div className="w-12 h-1 bg-[#f37021] mb-3"></div>
          <h2 className={`${spectral.className} text-3xl md:text-[36px] font-semibold text-white leading-tight mb-4`}>
            Nehru Planetarium
          </h2>
          <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed mb-6 max-w-[420px]">
            Full-dome astronomy shows, school learning programmes, and public skywatching experiences right at Nehru Planetarium.
          </p>

          {/* View Shows Buttons */}
          <div className="flex items-center gap-3">
            <a 
              href="/about-pmml/nehru-planetarium"
              className="bg-[#1b253c] hover:bg-[#253252] text-white font-semibold px-5 py-2.5 rounded text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#1b253c]/35 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
            >
              View Shows
            </a>
            <a 
              href="/about-pmml/nehru-planetarium"
              className="group bg-[#f37021] hover:bg-[#d85c15] text-[#0a1835] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f37021]/35 hover:scale-[1.08] hover:-translate-y-0.5 active:scale-[0.95] cursor-pointer"
              aria-label="View Shows Arrow Link"
            >
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>

        {/* Empty space on desktop to let the image show */}
        <div className="hidden md:block md:w-[60%] h-full" />
      </div>

      {/* Mobile Image Container (Stacks below text) */}
      <div className="block md:hidden w-full aspect-[16/10] overflow-hidden">
        <img 
          src="/planetarium-home.jpg" 
          alt="Nehru Planetarium Seating & Dome Screen" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
