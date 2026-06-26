"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface Offering {
  num: number;
  title: string;
  description: string;
}

const OFFERINGS: Offering[] = [
  {
    num: 1,
    title: "Full Dome Sky Theatre",
    description: "Experience immersive astronomy shows in a 15-metre 4K digital dome. High-quality 2D and 3D programmes present complex astronomical concepts in an accessible and visually engaging manner."
  },
  {
    num: 2,
    title: "Aryabhata Gallery",
    description: "Explore India's rich astronomical heritage and achievements in modern space science. Interactive exhibits and digital installations trace India's journey from ancient astronomical traditions to contemporary space missions."
  },
  {
    num: 3,
    title: "Astronomy Programmes",
    description: "Attend lectures, workshops, discussions, and teacher training programmes led by scientists, educators, scholars, and experts. Participate in monthly stargazing sessions and special observational programmes for celestial events."
  },
  {
    num: 4,
    title: "Educational Outreach",
    description: "Engage in astronomy and space science through interactive learning experiences. Programmes are designed to nurture scientific temper, curiosity, and a deeper understanding of the universe."
  },
  {
    num: 5,
    title: "Student Activities",
    description: "Take part in astronomy quizzes, astro-painting competitions, and other student-oriented programmes. Activities encourage curiosity, creativity, and scientific inquiry among young learners."
  }
];

const GALLERY_IMAGES = [
  { src: "/DSC_0038.JPG", alt: "Nehru Planetarium Exhibition Area" },
  { src: "/planetarium-home.jpg", alt: "Full Dome Sky Theatre" },
  { src: "/planetarium.png", alt: "Planetarium Building Exterior" },
  { src: "/light-sound.png", alt: "Light and Sound Show" },
  { src: "/bhavishya.png", alt: "Bhavishya Exhibition" }
];

export default function NehruPlanetariumDetails() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(3);

  const [visitors, setVisitors] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState("1");

  const increment = () => {
    setVisitors((prev) => prev + 1);
  };

  const decrement = () => {
    setVisitors((prev) => Math.max(1, prev - 1));
  };

  const handleNumberClick = () => {
    setTempValue(visitors.toString());
    setIsEditing(true);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    const parsed = parseInt(tempValue, 10);
    if (!isNaN(parsed) && parsed >= 1) {
      setVisitors(parsed);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow positive integers
    const val = e.target.value;
    if (val === "" || /^[0-9]+$/.test(val)) {
      setTempValue(val);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Offerings carousel
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);

      // Gallery carousel
      if (window.innerWidth < 640) setGalleryVisible(1);
      else if (window.innerWidth < 1024) setGalleryVisible(2);
      else setGalleryVisible(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    if (startIndex < OFFERINGS.length - visibleCount) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const fraction = visibleCount === 3 ? 3.2 : visibleCount === 2 ? 2.2 : 1.2;
  const gapSize = visibleCount === 1 ? 16 : 24;
  const transformX = `calc(-${startIndex} * ( (100% - ${(fraction - 1) * gapSize}px) / ${fraction} + ${gapSize}px ))`;

  const galleryGap = 20;
  const galleryTransformX = `calc(-${galleryIndex} * ( (100% - ${(galleryVisible - 1) * galleryGap}px) / ${galleryVisible} + ${galleryGap}px ))`;

  return (
    <section className="w-full py-10 lg:py-12 bg-white text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-10 lg:mb-12 w-full">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-md bg-gray-900 w-full">
            <Image
              src="/DSC_0038.JPG"
              alt="Nehru Planetarium Exhibition Area"
              fill
              sizes="(max-width: 1024px) 100vw, 550px"
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column: Title, Description, Stats */}
          <div className="lg:col-span-6 flex flex-col text-left justify-start">
            {/* Top orange accent line */}
            <div className="w-16 h-[5px] bg-[#f37021] mb-4" />
            
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
              Welcome to Nehru Planetarium
            </h2>
            
            <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed mb-4 text-justify">
              The Nehru Planetarium, New Delhi, is a premier centre for astronomy education and public engagement, dedicated to nurturing scientific temper and curiosity about the universe. Inaugurated on 6 February 1984, the Planetarium has played a significant role in popularising astronomy through immersive and engaging learning experiences for visitors of all ages. At the core of the Planetarium is its full-dome sky theatre, equipped with a 15-metre 4K digital dome capable of presenting high-quality 2D and 3D shows.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 w-full">
              {/* Card 1 */}
              <div className="flex flex-col items-center justify-center bg-white rounded-[11px] border-b-[4px] sm:border-b-[6px] border-[#E88B1D] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-[80px] sm:h-[90px] lg:h-[95px] px-2 text-center transition-all duration-200">
                <span className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#00184D] leading-none mb-1 sm:mb-1.5">1984</span>
                <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#444651] font-bold tracking-wider uppercase">ESTABLISHED</span>
              </div>
              
              {/* Card 2 */}
              <div className="flex flex-col items-center justify-center bg-white rounded-[11px] border-b-[4px] sm:border-b-[6px] border-[#E88B1D] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-[80px] sm:h-[90px] lg:h-[95px] px-2 text-center transition-all duration-200">
                <span className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#00184D] leading-none mb-1 sm:mb-1.5">4K</span>
                <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#444651] font-bold tracking-wider uppercase">DIGITAL DOME</span>
              </div>
              
              {/* Card 3 */}
              <div className="flex flex-col items-center justify-center bg-white rounded-[11px] border-b-[4px] sm:border-b-[6px] border-[#E88B1D] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-[80px] sm:h-[90px] lg:h-[95px] px-2 text-center transition-all duration-200">
                <span className="text-[16px] sm:text-lg lg:text-[22px] font-bold text-[#00184D] leading-none mb-1 sm:mb-1.5 whitespace-nowrap">2D & 3D</span>
                <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#444651] font-bold tracking-wider uppercase">SHOWS</span>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center justify-center bg-white rounded-[11px] border-b-[4px] sm:border-b-[6px] border-[#E88B1D] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-[80px] sm:h-[90px] lg:h-[95px] px-2 text-center transition-all duration-200">
                <span className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#00184D] leading-none mb-1 sm:mb-1.5">270</span>
                <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#444651] font-bold tracking-wider uppercase">SEATING CAPACITY</span>
              </div>
            </div>
          </div>

        </div>

        {/* Features Section */}
        <div className="w-full">
          {/* Header */}
          <div className="mb-10 text-left">
            <div className="w-16 h-[5px] bg-[#f37021] mb-4.5" />
            <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Features
            </h3>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative -mx-4 sm:-mx-10 lg:-mx-14 px-4 sm:px-10 lg:px-14">
            {/* Left Overlapping Arrow */}
            {startIndex > 0 && (
              <button
                onClick={prev}
                className="absolute left-1 sm:left-2 lg:left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center text-[#f37021] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous feature"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            )}

            {/* Right Overlapping Arrow */}
            {startIndex < OFFERINGS.length - visibleCount && (
              <button
                onClick={next}
                className="absolute right-1 sm:right-2 lg:right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center text-[#f37021] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Next feature"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            )}

            {/* Inner clipped area */}
            <div className="w-full overflow-hidden">
              {/* Offerings Flex Slider */}
              <div 
                className="flex transition-transform duration-300 ease-in-out w-full"
                style={{ 
                  transform: `translateX(${transformX})`,
                  gap: `${gapSize}px`
                }}
              >
                {OFFERINGS.map((offering) => (
                  <div
                    key={offering.num}
                    style={{
                      width: `calc((100% - ${(fraction - 1) * gapSize}px) / ${fraction})`
                    }}
                    className="flex-shrink-0 bg-[#f4f4f4] rounded-[18px] pt-5 pb-4 px-6 flex flex-col justify-start text-left transition-all duration-200 h-[300px]"
                  >
                    {/* Circle Number */}
                    <div className="w-10 h-10 rounded-full bg-[#d9d9d9] flex items-center justify-center text-black font-bold text-sm mb-3 flex-shrink-0">
                      {offering.num}
                    </div>
                    
                    {/* Title */}
                    <h4 className={`${spectral.className} text-lg sm:text-xl font-bold text-black leading-snug mb-2`}>
                      {offering.title}
                    </h4>

                    {/* Description */}
                    <p className="text-[#1d1d1f] text-sm sm:text-[15px] lg:text-[16px] leading-normal text-justify">
                      {offering.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events & Visit Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10 lg:mt-12 w-full items-stretch">
          
          {/* Left Column: Upcoming Events */}
          <div className="lg:col-span-7 flex flex-col text-left justify-between h-full">
            <div>
              <div className="w-16 h-[5px] bg-[#f37021] mb-4.5" />
              
              <div className="flex justify-between items-end mb-6 w-full">
                <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
                  Upcoming Events
                </h3>
                <a 
                  href="/events" 
                  className="text-xs sm:text-sm font-bold text-[#052356] hover:text-[#f37021] flex items-center gap-1.5 transition-colors font-semibold"
                >
                  <span>View Calender</span>
                  <svg className="w-4 h-4 text-[#f37021]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-left w-full">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-[#f4f4f4] rounded-[8px] px-5 py-3.5 flex flex-col text-left transition-all duration-200">
                  <span className="block text-[11px] font-semibold text-gray-400 pb-2 border-b border-gray-200/80">20 May 2026</span>
                  <h4 className="text-sm sm:text-base font-bold text-[#052356] py-2.5 border-b border-gray-200/80 hover:text-[#f37021] transition-colors cursor-pointer leading-snug">
                    Interactive Exhibition: The Freedom Struggle
                  </h4>
                  <div className="pt-2">
                    <a href="#" className="inline-block text-xs font-bold text-[#052356] hover:underline">
                      See more Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visit Information Card */}
          <div className="lg:col-span-5 flex flex-col text-left h-full">
            {/* Spacer to align with Left Column's orange accent line */}
            <div className="h-[5px] mb-4.5 invisible" />
            
            <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] mb-6 tracking-tight`}>
              Visit Information
            </h3>

            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6 text-left shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex-grow">
              {/* Open Status Bar */}
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#052356] bg-[#FFF8F4] border border-[#FFE0CE] rounded-xl px-4 py-3">
                <svg className="w-4 h-4 text-[#f37021] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Open: Tuesday to Sunday (Closed on Mondays)</span>
              </div>

              {/* Form Input fields */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Select Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-600 focus:outline-none focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] transition-all cursor-pointer font-semibold" 
                      defaultValue="2026-06-23" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">No. of Visitors</label>
                    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-2 py-1.5 w-full h-[38px] transition-all focus-within:border-[#f37021] focus-within:ring-1 focus-within:ring-[#f37021]">
                      <button
                        type="button"
                        onClick={decrement}
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 active:scale-90 transition-all font-bold text-base select-none"
                      >
                        -
                      </button>
                      
                      {isEditing ? (
                        <input
                          type="text"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          autoFocus
                          value={tempValue}
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                          onKeyDown={handleKeyDown}
                          className="w-12 text-center bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-xs font-semibold text-gray-600 p-0"
                        />
                      ) : (
                        <span
                          onClick={handleNumberClick}
                          className="w-12 text-center text-xs font-semibold text-gray-600 cursor-pointer hover:bg-gray-50 py-1 rounded transition-colors select-none"
                          title="Click to edit number of visitors"
                        >
                          {visitors}
                        </span>
                      )}
                      
                      <button
                        type="button"
                        onClick={increment}
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 active:scale-90 transition-all font-bold text-base select-none"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Show Type</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-600 focus:outline-none focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] transition-all appearance-none cursor-pointer font-semibold">
                      <option>3D Show - Hindi</option>
                      <option>3D Show - English</option>
                      <option>2D Show - Hindi</option>
                      <option>2D Show - English</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timings & Price summary details inside a grey strap */}
              <div className="bg-[#f4f4f4] rounded-[8px] p-4 space-y-2.5 w-full text-xs">
                <div className="flex justify-between items-center w-full">
                  <span className="font-bold text-gray-500 uppercase text-[10px] tracking-wider">Timings</span>
                  <span className="font-bold text-[#052356]">11:30 AM | 01:30 PM | 03:00 PM</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="font-bold text-gray-500 uppercase text-[10px] tracking-wider">Ticket Price</span>
                  <span className="font-bold text-[#052356]">₹100 (Adults) / ₹60 (Children)</span>
                </div>
              </div>

              {/* Booking CTA Button */}
              <a 
                href="/plan-a-visit#book-tickets" 
                className="w-full py-3 bg-[#E88B1D] hover:bg-[#d85c15] text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer select-none"
              >
                <span>Book Now</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Gallery Section */}
        <div className="mt-10 lg:mt-12 w-full">
          {/* Header */}
          <div className="mb-10 text-left">
            <div className="w-16 h-[5px] bg-[#f37021] mb-4.5" />
            <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Gallery
            </h3>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative -mx-4 sm:-mx-10 lg:-mx-14 px-4 sm:px-10 lg:px-14">
            {/* Left Overlapping Arrow */}
            {galleryIndex > 0 && (
              <button
                onClick={() => setGalleryIndex((prev) => prev - 1)}
                className="absolute left-1 sm:left-2 lg:left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center text-[#f37021] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            )}

            {/* Right Overlapping Arrow */}
            {galleryIndex < GALLERY_IMAGES.length - galleryVisible && (
              <button
                onClick={() => setGalleryIndex((prev) => prev + 1)}
                className="absolute right-1 sm:right-2 lg:right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center text-[#f37021] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            )}

            {/* Inner clipped area */}
            <div className="w-full overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out w-full"
                style={{ 
                  transform: `translateX(${galleryTransformX})`,
                  gap: `${galleryGap}px`
                }}
              >
                {GALLERY_IMAGES.map((img, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: `calc((100% - ${(galleryVisible - 1) * galleryGap}px) / ${galleryVisible})`
                    }}
                    className="flex-shrink-0 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
