"use client";

import React, { useState, useEffect } from 'react';
// 1. Ministry of Culture Logo (Official representation using Ashok Stambh emblem image)
const MinistryOfCultureLogo = () => (
  <div className="flex items-center gap-2 h-10 select-none">
    <img
      src="/ashok-stambh.png"
      alt="National Emblem of India"
      className="h-9 w-auto object-contain flex-shrink-0"
    />
    <div className="flex flex-col justify-center items-start text-left leading-tight">
      <span className="text-[10px] font-bold text-[#052356] font-sans">संस्कृति मंत्रालय</span>
      <span className="text-[10.5px] font-bold text-[#052356] font-sans tracking-wide">Ministry of Culture</span>
      <span className="text-[7.5px] font-semibold text-gray-500 font-sans tracking-wider">GOVERNMENT OF INDIA</span>
    </div>
  </div>
);

// 2. Swachh Bharat Logo using user image
const SwachhBharatLogo = () => (
  <img src="/swach bharat.jpeg" alt="Swachh Bharat" className="h-10 w-auto object-contain flex-shrink-0" />
);

// 4. Digital India Logo using user image
const DigitalIndiaLogo = () => (
  <img src="/digitalindia.jpeg" alt="Digital India" className="h-10 w-auto object-contain flex-shrink-0" />
);

// 5. MyGov Logo using user image with Ashok Stambh emblem and divider line
const MyGovLogo = () => (
  <div className="flex items-center gap-1.5 h-10 select-none">
    <img
      src="/ashok-stambh.png"
      alt="National Emblem of India"
      className="h-9 w-auto object-contain flex-shrink-0"
    />
    <div className="h-6 w-[1px] bg-gray-300 mx-0.5 flex-shrink-0" />
    <img
      src="/mygov.jpeg"
      alt="MyGov"
      className="h-10 w-auto object-contain flex-shrink-0"
    />
  </div>
);

// 6. India.gov.in Logo using user image
const IndiaGovLogo = () => (
  <img src="/india.gov.in.jpeg" alt="National Portal of India" className="h-10 w-auto object-contain flex-shrink-0" />
);

// 7. Data.gov.in Logo using user image
const DataGovLogo = () => (
  <img src="/data.gov.in.jpeg" alt="Open Government Data Platform" className="h-10 w-auto object-contain flex-shrink-0" />
);


const PORTALS = [
    {
    id: 'ministry-culture',
    name: 'Ministry of Culture',
    logo: MinistryOfCultureLogo,
    url: 'https://www.indiaculture.gov.in/'
  },
  {
    id: 'swachh-bharat',
    name: 'Swachh Bharat',
    logo: SwachhBharatLogo,
    url: 'https://swachhbharatmission.gov.in/'
  },
  {
    id: 'digital-india',
    name: 'Digital India',
    logo: DigitalIndiaLogo,
    url: 'https://www.digitalindia.gov.in/'
  },
  {
    id: 'mygov',
    name: 'MyGov',
    logo: MyGovLogo,
    url: 'https://www.mygov.in/'
  },
  {
    id: 'india-gov',
    name: 'National Portal of India',
    logo: IndiaGovLogo,
    url: 'https://www.india.gov.in/'
  },
  {
    id: 'data-gov',
    name: 'Open Government Data Platform',
    logo: DataGovLogo,
    url: 'https://data.gov.in/'
  },
  
];

export default function GovernmentPortalsSection() {
  const [currentIndex, setCurrentIndex] = useState(PORTALS.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setCardsToShow(1);
      } else if (width < 768) {
        setCardsToShow(2);
      } else if (width < 1024) {
        setCardsToShow(3);
      } else {
        setCardsToShow(5); // Always show max 5 on desktop to keep arrows visible
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide effect to move the carousel step-by-step
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000); // Transitions every 3 seconds
    return () => clearInterval(timer);
  }, [currentIndex, cardsToShow, isTransitioning]);

  // Re-enable transition after resetting index
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= PORTALS.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - PORTALS.length);
    } else if (currentIndex < PORTALS.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + PORTALS.length);
    }
  };

  const extendedPortals = [...PORTALS, ...PORTALS, ...PORTALS];

  return (
    <section className="w-full py-8 md:py-10 bg-white relative border-t border-gray-100 flex flex-col items-center select-none overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Carousel Container */}
        <div className="relative w-full max-w-[1200px] flex items-center px-10 sm:px-12 md:px-16">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-1 sm:left-2 z-10 w-8 h-8 rounded-full border border-[#f37021] text-[#f37021] hover:bg-[#f37021] hover:text-white active:scale-95 flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Previous portals"
          >
            <svg className="w-4.5 h-4.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-1 sm:right-2 z-10 w-8 h-8 rounded-full border border-[#f37021] text-[#f37021] hover:bg-[#f37021] hover:text-white active:scale-95 flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Next portals"
          >
            <svg className="w-4.5 h-4.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider viewport */}
          <div className="w-full overflow-hidden">
            <div 
              className={`flex items-center ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedPortals.map((portal, index) => {
                const LogoComponent = portal.logo;
                return (
                  <a
                    key={`${portal.id}-${index}`}
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex justify-center items-center hover:scale-105 transition-transform duration-300 px-4 cursor-pointer"
                    style={{ width: `${100 / cardsToShow}%` }}
                    title={`Visit ${portal.name}`}
                  >
                    <LogoComponent />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

