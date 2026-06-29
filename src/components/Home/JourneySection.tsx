"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const PM_DATA = [
  {
    id: 1,
    name: "Shri Narendra Modi",
    role: "14th Prime Minister",
    dates: "26 May 2014 – Present",
    image: "/leaders/modi.png",
    bio: "Shri Narendra Modi is the current and the longest-serving Prime Minister of India. He served as the Chief Minister of Gujarat for 14 years. As Prime Minister, he is known for campaigns like Swachh Bharat and Make in India."
  },
  {
    id: 2,
    name: "Dr. Manmohan Singh",
    role: "13th Prime Minister",
    dates: "22 May 2004 – 26 May 2014",
    image: "/leaders/manmohan.png",
    bio: "Dr. Manmohan Singh served as Prime Minister of India from 2004 to 2014. During his tenure, key acts like NREGA and the Right to Information Act were passed. He is widely credited for carrying out key economic reforms."
  },
  {
    id: 3,
    name: "Shri Atal Bihari Vajpayee",
    role: "10th Prime Minister",
    dates: "19 March 1998 – 10 May 2004",
    image: "/leaders/vajpayee.png",
    bio: "Shri Atal Bihari Vajpayee served as Prime Minister of India from 1998 to 2004, and briefly in 1996. He is known for his contribution to India's economic growth and for making India a nuclear power."
  },
  {
    id: 4,
    name: "Shri Inder Kumar Gujral",
    role: "12th Prime Minister",
    dates: "21 April 1997 – 19 March 1998",
    image: "/leaders/gujral.png",
    bio: "Shri Inder Kumar Gujral served as Prime Minister of India for slightly less than a year. He worked with various ministries and is known for the Gujral Doctrine, a milestone in India's foreign policy."
  },
  {
    id: 5,
    name: "Shri H. D. Deve Gowda",
    role: "11th Prime Minister",
    dates: "1 June 1996 – 21 April 1997",
    image: "/leaders/deve-gowda.png",
    bio: "Shri Haradanahalli Doddegowda Deve Gowda served as Prime Minister of India for slightly less than a year. He focused on farmers, is credited for kickstarting the Delhi Metro, and is called the 'son of the soil'."
  },
  
  {
    id: 6,
    name: "Shri P. V. Narasimha Rao",
    role: "9th Prime Minister",
    dates: "21 June 1991 – 16 May 1996",
    image: "/leaders/pvrao.png",
    bio: "Shri Pamulaparthi Venkata Narasimha Rao served as Prime Minister of India from 1991 to 1996. During his tenure, he carried out landmark economic reforms in the form of liberalisation and globalisation."
  },
  {
    id: 7,
    name: "Shri Chandra Shekhar",
    role: "8th Prime Minister",
    dates: "10 November 1990 – 21 June 1991",
    image: "/leaders/chandra-shekhar.png",
    bio: "Shri Chandra Shekhar served as Prime Minister of India from 1990 to 1991. He was instrumental in preventing India from defaulting on sovereign repayments and was often referred to as 'Young Turk'."
  },
  {
    id: 8,
    name: "Shri V. P. Singh",
    role: "7th Prime Minister",
    dates: "2 December 1989 – 10 November 1990",
    image: "/leaders/vp-singh.png",
    bio: "Shri Vishwanath Pratap Singh served as Prime Minister of India from 1989 to 1990. The Mandal Commission Report was implemented and the SC/ST Act of 1989 was passed during his tenure."
  },
  {
    id: 9,
    name: "Shri Rajiv Gandhi",
    role: "6th Prime Minister",
    dates: "31 October 1984 – 2 December 1989",
    image: "/leaders/rajiv.png",
    bio: "Shri Rajiv Gandhi was the youngest Prime Minister of India, serving from 1984 to 1989. During his tenure, he promoted science, technology, and ushered in a new era of higher education reforms."
  },
  {
    id: 10,
    name: "Chaudhary Charan Singh",
    role: "5th Prime Minister",
    dates: "28 July 1979 – 14 January 1980",
    image: "/leaders/charan-singh.png",
    bio: "Chaudhary Charan Singh served as Prime Minister of India for 170 days. Throughout his life he tried to improve the conditions of farmers. His birth anniversary, 23 December, is celebrated as Kisan Diwas."
  },
  {
    id: 11,
    name: "Shri Morarji Desai",
    role: "4th Prime Minister",
    dates: "24 March 1977 – 28 July 1979",
    image: "/leaders/desai.png",
    bio: "Shri Morarji Desai served as Prime Minister of India from 1977 to 1979. The Forty-fourth Amendment was enacted during his tenure. He passed away at the age of 99, making him the world's oldest former head of government."
  },
  {
    id: 12,
    name: "Smt. Indira Gandhi",
    role: "3rd Prime Minister",
    dates: "24 January 1966 – 24 March 1977 | 14 January 1980 – 31 October 1984",
    image: "/leaders/indira.png",
    bio: "Smt. Indira Gandhi was the first woman Prime Minister of India, serving two terms. During her tenure, India won the 1971 war resulting in the creation of Bangladesh. She imposed emergency from 1975 to 1977."
  },
  {
    id: 13,
    name: "Shri Lal Bahadur Shastri",
    role: "2nd Prime Minister",
    dates: "9 June 1964 – 11 January 1966",
    image: "/leaders/shastri.png",
    bio: "Shri Lal Bahadur Shastri was the third Prime Minister of India. He promoted the White and Green Revolutions, coined the slogan 'Jai Jawan, Jai Kisan', and led India in the 1965 war."
  },
  {
    id: 14,
    name: "Shri Gulzari Lal Nanda",
    role: "Interim Prime Minister",
    dates: "27 May 1964 – 9 June 1964 | 11 January 1966 – 24 January 1966",
    image: "/leaders/nanda.png",
    bio: "Shri Gulzarilal Nanda was the second Prime Minister of India, serving two brief terms. He was instrumental in organising the INTUC and was awarded the Bharat Ratna in 1997."
  },
  {
    id: 15,
    name: "Pt. Jawaharlal Nehru",
    role: "1st Prime Minister",
    dates: "15 August 1947 – 27 May 1964",
    image: "/leaders/nehru.png",
    bio: "Shri Jawaharlal Nehru served as Prime Minister for 17 years from 1947 to 1964. Regarded as a founder of modern India, he built industrial and technological foundations. His birth anniversary is celebrated as Children's Day."
  }
];

export default function JourneySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [displayIdx, setDisplayIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1024);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Responsive state handlers
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll detector: start rotation as soon as the Journey section enters the viewport
  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById('journey-section');
      if (!sectionElement) return;
      const rect = sectionElement.getBoundingClientRect();
      // In view when any part of the section is visible in the viewport
      const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
      setIsInView(isVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // check immediately on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Semicircular Layout Parameters
  const R = isMobile ? Math.min(190, (screenWidth - 40) / 2) : 300;
  const R_card = isMobile ? R - 50 : 205;

  // Staggered text fade out / update / fade in
  useEffect(() => {
    setIsFading(true);
    const timer = setTimeout(() => {
      setDisplayIdx(activeIdx);
      setIsFading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [activeIdx]);

  // Auto-Play: rotates every 3 seconds once the section enters the viewport, pauses on hover
  useEffect(() => {
    console.log("JourneySection auto-play state:", { isPaused, isInView });
    if (isPaused || !isInView) {
      console.log("JourneySection auto-play PAUSED/INACTIVE");
      return;
    }
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev - 1 + PM_DATA.length) % PM_DATA.length);
    }, 3000);
    return () => {
      console.log("JourneySection clearing auto-play interval");
      clearInterval(interval);
    };
  }, [isPaused, isInView]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + PM_DATA.length) % PM_DATA.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % PM_DATA.length);
  };

  const getPmSlug = (name: string) => {
    if (name.includes("Jawaharlal Nehru")) return "shri-jawaharlal-nehru";
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  };

  const currentPM = PM_DATA[displayIdx];

  // Midpoint dot offsets to place gold dots in the gaps between portraits
  const dotOffsets = isMobile ? [-42, -14, 14, 42] : [-70, -42, -14, 14, 42, 70];

  return (
    <section 
      id="journey-section"
      className="w-full pt-6 pb-10 md:pt-8 md:pb-14 bg-[#fdfdfd] border-t border-gray-100 flex flex-col items-center select-none"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Title Header (Left Aligned matching mockup) */}
        <div className="w-full text-left mb-0 self-start">
          <div className="w-12 h-1 bg-[#f37021] mb-2"></div>
          <h2 className={`${spectral.className} text-3xl md:text-4xl font-semibold text-[#0a1b3a] leading-tight`}>
            Journey Through Time
          </h2>
          <p className="mt-2 text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium max-w-xl">
            Lives and Contributions of India's Prime Ministers
          </p>
        </div>

        {/* Container */}
        <div className="relative w-full h-[360px] md:h-[410px] max-w-5xl overflow-hidden flex flex-col items-center mb-0">
          
          {/* Interactive Wheel & Card Wrapper */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-full max-w-[680px] h-full relative flex justify-center"
          >
            {/* Anchor at bottom:15px inside container */}
            <div className="absolute left-1/2 w-0 h-0 z-10" style={{ bottom: '15px' }}>
            
            {/* Outer dotted arc track — thicker gold dashed border */}
            <div 
              className="absolute rounded-full border-2 border-dashed z-0 pointer-events-none"
              style={{
                width: `${R * 2}px`,
                height: `${R * 2}px`,
                left: `-${R}px`,
                top: `-${R}px`,
                borderColor: 'rgba(200, 168, 75, 0.9)',
              }}
            />

            {/* Radial gradient grey fill */}
            <div 
              className="absolute rounded-full z-0 pointer-events-none"
              style={{
                width: `${(R - 10) * 2}px`,
                height: `${(R - 10) * 2}px`,
                left: `-${R - 10}px`,
                top: `-${R - 10}px`,
                background: `radial-gradient(circle at center, rgba(255,255,255,0) 45%, rgba(210,213,220,0.45) 80%, rgba(195,200,210,0.65) 100%)`,
              }}
            />

            {/* Second inner arc — gold solid ring */}
            <div 
              className="absolute rounded-full border-2 z-0 pointer-events-none"
              style={{
                width: `${(R - 30) * 2}px`,
                height: `${(R - 30) * 2}px`,
                left: `-${R - 30}px`,
                top: `-${R - 30}px`,
                borderColor: 'rgba(200, 168, 75, 0.5)',
              }}
            />

            {/* Outer subtle ring for depth */}
            <div 
              className="absolute rounded-full border border-gray-200/40 z-0 pointer-events-none"
              style={{
                width: `${(R + 20) * 2}px`,
                height: `${(R + 20) * 2}px`,
                left: `-${R + 20}px`,
                top: `-${R + 20}px`,
              }}
            />

            {/* Gold track dots */}
            {dotOffsets.map((offsetAngle, idx) => (
              <div
                key={`dot-${idx}`}
                className="absolute w-2.5 h-2.5 rounded-full z-0 pointer-events-none transition-transform duration-700 ease-out"
                style={{
                  left: 0,
                  top: 0,
                  backgroundColor: 'rgba(200, 168, 75, 1)',
                  transform: `rotate(${offsetAngle}deg) translateY(-${R}px) rotate(${-offsetAngle}deg) translate(-50%, -50%)`,
                }}
              />
            ))}

            {/* Semicircular Portraits Mapping */}
            {PM_DATA.map((pm, idx) => {
              let diff = idx - activeIdx;
              if (diff > 7) diff -= PM_DATA.length;
              if (diff < -7) diff += PM_DATA.length;

              const offsetAngle = diff * 28;
              const maxAngle = isMobile ? 60 : 90;
              const isVisible = offsetAngle >= -maxAngle && offsetAngle <= maxAngle;
              const isActive = idx === activeIdx;

              const portraitSize = isActive 
                ? (isMobile ? 90 : 118) 
                : (isMobile ? 68 : 88);

              return (
                <Link
                  key={pm.id}
                  href={`/pm-sangrahalaya/pms-of-india#${getPmSlug(pm.name)}`}
                  className={`absolute rounded-full cursor-pointer flex items-center justify-center transition-all duration-700 ease-out z-10 ${
                    isActive ? 'z-20' : 'hover:scale-105'
                  }`}
                  style={{
                    left: 0,
                    top: 0,
                    width: `${portraitSize}px`,
                    height: `${portraitSize}px`,
                    opacity: isVisible ? 1 : 0,
                    pointerEvents: isVisible ? 'auto' : 'none',
                    transform: `rotate(${offsetAngle}deg) translateY(-${R}px) rotate(${-offsetAngle}deg) translate(-50%, -50%)`,
                    transformOrigin: 'center center',
                  }}
                >
                  <div 
                    className={`w-full h-full rounded-full overflow-hidden flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? 'p-[3px] shadow-lg' 
                        : 'p-[2px] bg-white shadow-md hover:shadow-lg'
                    }`}
                    style={isActive ? {
                      background: 'linear-gradient(145deg, #f0a030, #e07010)',
                      boxShadow: '0 0 0 3px rgba(224, 144, 30, 0.25), 0 4px 12px rgba(0,0,0,0.15)',
                    } : {
                      border: '1.5px solid rgba(200,200,210,0.8)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 0 0 1px rgba(200,200,210,0.3)',
                    }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                      <img
                        src={pm.image}
                        alt={pm.name}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          isActive ? 'grayscale-0' : 'grayscale hover:grayscale-0'
                        }`}
                        style={{
                          transform: 'scale(0.82) translateY(5px)',
                          transformOrigin: 'center',
                          objectPosition: 'center 8%',
                        }}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Circular Description Panel */}
            <div 
              className="absolute rounded-full bg-white border-2 border-gray-100 flex flex-col items-center text-center shadow-md select-text z-10 transition-all duration-300"
              style={{
                width: `${R_card * 2}px`,
                height: `${R_card * 2}px`,
                left: `-${R_card}px`,
                top: `-${R_card}px`,
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="absolute inset-2 rounded-full border border-dashed border-[#dfc38f]/40 pointer-events-none" />
              <div className="absolute inset-4 rounded-full border border-gray-100/50 pointer-events-none" />

              <div className={`w-full px-6 md:px-10 pt-8 md:pt-10 flex flex-col items-center transition-all duration-300 transform ${
                isFading ? 'opacity-0 scale-[0.98] translate-y-2' : 'opacity-100 scale-100 translate-y-0'
              }`}>
                
                {/* PM Name */}
                <h3 className={`${spectral.className} text-sm sm:text-base md:text-lg font-bold text-[#0a1b3a] leading-tight mb-0.5 text-center`}>
                  {currentPM.name}
                </h3>

                {/* PM Role */}
                <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-[0.14em] text-[#f37021] leading-none mt-1">
                  {currentPM.role.toUpperCase().replace(/(\d+)(ST|ND|RD|TH)/g, (match, p1, p2) => p1 + p2.toLowerCase())}
                </span>

                {/* Divider */}
                <div className="flex items-center justify-center my-2 w-full">
                  <div className="w-8 md:w-12 h-[1px] bg-gray-200" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f37021] mx-2" />
                  <div className="w-8 md:w-12 h-[1px] bg-gray-200" />
                </div>

                {/* PM Service dates */}
                <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-[#0b4d8c] tracking-wide mb-2 leading-tight text-center block">
                  {currentPM.dates}
                </span>

                {/* PM Bio */}
                <p className="text-[10px] sm:text-[11px] text-gray-600 font-medium leading-relaxed text-center max-w-[160px] sm:max-w-[200px] md:max-w-[260px] max-h-[85px] sm:max-h-[105px] md:max-h-[140px] overflow-y-auto pr-1.5 custom-scrollbar">
                  {currentPM.bio}
                </p>

              </div>
            </div>

            {/* Arrow */}
            <div 
              className="absolute z-[15] pointer-events-none"
              style={{
                top: `-${R_card + 20}px`,
                left: '0px',
                transform: 'translate(-50%, 0)',
              }}
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L14 0L7 10Z" fill="#1e3a6e"/>
              </svg>
            </div>

          </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/95 border border-gray-100 hover:bg-orange-50 hover:border-orange-200 text-gray-400 hover:text-[#f37021] w-10 h-10 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-all z-20 cursor-pointer"
            aria-label="Previous Prime Minister"
          >
            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/95 border border-gray-100 hover:bg-orange-50 hover:border-orange-200 text-gray-400 hover:text-[#f37021] w-10 h-10 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-all z-20 cursor-pointer"
            aria-label="Next Prime Minister"
          >
            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
}
