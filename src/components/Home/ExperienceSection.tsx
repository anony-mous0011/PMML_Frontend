"use client";

import React, { useState, useEffect } from 'react';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const EXHIBITS = [
  {
    id: 'unity-chain',
    title: 'Unity Chain',
    description: 'Explore the historic integration of Indian states led by Sardar Vallabhbhai Patel.',
    image: '/unity.png',
    link: '/pm-sangrahalaya/anubhuti-zone',
  },
  {
    id: 'nuclear-test',
    title: 'Nuclear Test',
    description: 'Step inside the historic Pokhran nuclear tests and witness India\'s rise as a nuclear power.',
    image: '/nuclear test.jpg',
    link: '/pm-sangrahalaya/special-shows',
  },
  {
    id: 'shatabdi-sankalp',
    title: 'Shatabdi Sankalp',
    description: 'Delve into the inspiring speeches, writings, and vision of India\'s Prime Ministers.',
    image: '/thoughts.png',
    link: '/pm-sangrahalaya/anubhuti-zone',
  },
  {
    id: 'lal-qile-ki-prachir-se',
    title: 'Lal Qile Ki Prachir Se',
    description: 'Interact with life-like 3D holographic representations of India\'s leaders.',
    image: '/hologram.jpeg',
    link: '/pm-sangrahalaya/anubhuti-zone',
  },
  {
    id: 'handwriting-robot',
    title: 'Letter from Prime Minister',
    description: 'Watch the incredible robotic system write and sign personalized souvenirs in real-time.',
    image: '/robotic.png',
    link: '/pm-sangrahalaya/anubhuti-zone',
  },
  {
    id: 'holobox',
    title: 'Ask The Visionary',
    description: 'Interactive holographic conversations with archival reconstructions of visionary leaders.',
    image: '/ai-holobox.png',
    link: '/pm-sangrahalaya/anubhuti-zone',
  },
  {
    id: 'bhavishya',
    title: 'Bhavishya ki Jhalkiyan',
    description: 'Witness the future visions of India through digital immersion and interactive spaces.',
    image: '/bhavishya.png',
    link: '/pm-sangrahalaya/anubhuti-zone',
  },
  {
    id: 'nuclear-journey',
    title: 'Nuclear Journey to Dream Reality',
    description: 'Experience the historical journey through virtual reality time travel and cosmic visual storytelling.',
    image: '/time-machine.png',
    link: '/pm-sangrahalaya/special-shows',
  },
  {
    id: 'light-sound',
    title: 'Light & Sound Show',
    description: 'A spectacular audio-visual journey narration of India\'s legacy and democratic heritage.',
    image: '/light-sound.png',
    link: '/pm-sangrahalaya/special-shows',
  }
];

export default function ExperienceSection() {
  const [activeIdx, setActiveIdx] = useState(5); // Default to AI Powered Holobox (index 5)
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [cardDims, setCardDims] = useState({ width: '440px', height: '380px' });

  // Monitor screen size for responsive 3D translations and card sizes
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setIsMobile(true);
        setCardDims({ width: '290px', height: '280px' });
      } else if (width < 1024) {
        setIsMobile(false);
        setCardDims({ width: '360px', height: '300px' });
      } else {
        setIsMobile(false);
        setCardDims({ width: '440px', height: '380px' });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay functionality: switch slides every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % EXHIBITS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + EXHIBITS.length) % EXHIBITS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % EXHIBITS.length);
  };

  const handleCardClick = (idx: number) => {
    if (idx === activeIdx) return;

    let diff = idx - activeIdx;
    const half = Math.floor(EXHIBITS.length / 2);
    if (diff > half) diff -= EXHIBITS.length;
    if (diff < -half) diff += EXHIBITS.length;

    if (diff === -1 || diff === 1) {
      setActiveIdx(idx);
    }
  };

  const getCardStyle = (index: number) => {
    let diff = index - activeIdx;

    // Circular array wrapping calculation
    const half = Math.floor(EXHIBITS.length / 2);
    if (diff > half) diff -= EXHIBITS.length;
    if (diff < -half) diff += EXHIBITS.length;

    const isActive = diff === 0;
    const isLeft = diff === -1;
    const isRight = diff === 1;

    let transform = 'translate(-50%, -50%) scale(0.65)';
    let opacity = 0;
    let zIndex = 0;
    let pointerEvents: 'auto' | 'none' = 'none';
    let filter = 'brightness(0.4)';
    let visibility: 'visible' | 'hidden' = 'hidden';

    if (isActive) {
      transform = 'translate(-50%, -50%) scale(1)';
      opacity = 1;
      zIndex = 30;
      pointerEvents = 'auto';
      filter = 'brightness(1)';
      visibility = 'visible';
    } else if (isLeft) {
      const translateX = isMobile ? '-102%' : '-105%';
      const scale = isMobile ? 'scale(0.82)' : 'scale(0.88)';
      transform = `translate(${translateX}, -50%) ${scale}`;
      opacity = isMobile ? 0 : 0.75;
      zIndex = 20;
      pointerEvents = isMobile ? 'none' : 'auto';
      filter = 'brightness(1)';
      visibility = isMobile ? 'hidden' : 'visible';
    } else if (isRight) {
      const translateX = isMobile ? '2%' : '5%';
      const scale = isMobile ? 'scale(0.82)' : 'scale(0.88)';
      transform = `translate(${translateX}, -50%) ${scale}`;
      opacity = isMobile ? 0 : 0.75;
      zIndex = 20;
      pointerEvents = isMobile ? 'none' : 'auto';
      filter = 'brightness(1)';
      visibility = isMobile ? 'hidden' : 'visible';
    }

    return {
      transform,
      opacity,
      zIndex,
      pointerEvents,
      filter,
      visibility,
      transition: 'all 650ms cubic-bezier(0.25, 1, 0.5, 1), visibility 650ms cubic-bezier(0.25, 1, 0.5, 1)',
    };
  };

  return (
    <section 
      className="w-full pt-16 pb-12 text-[#0a1835] overflow-hidden relative select-none"
      style={{
        backgroundColor: '#ffffff', // White base color
      }}
      onMouseEnter={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Grid Pattern with White Stroke */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/image%2022.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">

        {/* Title Header Section */}
        <div className="w-full text-left mb-6">
          <div className="w-12 h-1 bg-[#f37021] mb-3"></div>
          <h2 className={`${spectral.className} text-3xl md:text-[36px] font-semibold text-[#0a1835] leading-tight`}>
            Pradhanmantri Sangrahalaya
          </h2>
        </div>

        {/* 3D Carousel Stage */}
        <div className="relative w-full h-[320px] sm:h-[300px] md:h-[400px] max-w-full flex items-center justify-center">

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-[#f37021] bg-white/95 hover:bg-[#f37021] hover:text-white w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all z-40 border border-[#f37021]/30 shadow-md active:scale-90"
            aria-label="Previous exhibit"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-[#f37021] bg-white/95 hover:bg-[#f37021] hover:text-white w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all z-40 border border-[#f37021]/30 shadow-md active:scale-90"
            aria-label="Next exhibit"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Anchor Point */}
          <div className="relative w-full h-full flex items-center justify-center">
            {EXHIBITS.map((exhibit, idx) => {
              const isActive = idx === activeIdx;
              const cardStyle = getCardStyle(idx);

              let diff = idx - activeIdx;
              if (diff > 2) diff -= EXHIBITS.length;
              if (diff < -2) diff += EXHIBITS.length;

              const isLeft = diff === -1;
              const isRight = diff === 1;

              return (
                <div
                  key={exhibit.id}
                  onClick={() => handleCardClick(idx)}
                  className={`absolute left-1/2 top-1/2 rounded-2xl overflow-hidden border shadow-2xl flex flex-col cursor-pointer transition-all duration-[650ms] ease-in-out ${
                    isActive ? 'border-[#f37021]/20 shadow-[#0c214c]/20' : 'border-black/5 hover:scale-[0.84]'
                  }`}
                  style={{
                    width: cardDims.width,
                    height: cardDims.height,
                    ...cardStyle,
                  }}
                >
                  {/* Card Main Image + side label overlay */}
                  <div className="relative w-full h-full overflow-hidden bg-[#040a17]">
                    <img
                      src={exhibit.image}
                      alt={exhibit.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                    />

                    {/* Side card labels — always rendered, covers both left and right */}
                    {!isActive && (isLeft || isRight) && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '16px',
                          paddingTop: '40px',
                          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                          display: 'flex',
                          alignItems: 'flex-end',
                          justifyContent: isLeft ? 'flex-end' : 'flex-start',
                          zIndex: 99,
                        }}
                      >
                        <h3
                          className={spectral.className}
                          style={{
                            color: '#ffffff',
                            fontWeight: 600,
                            fontSize: '14px',
                            lineHeight: '1.3',
                            margin: 0,
                            textAlign: isLeft ? 'right' : 'left',
                            textShadow: '0 2px 8px rgba(0,0,0,1)',
                          }}
                        >
                          {exhibit.title}
                        </h3>
                      </div>
                    )}
                  </div>

                  {/* Glassmorphic Footer Overlay — active card only */}
                  {isActive ? (
                    <div
                      className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-between border-t border-white/10"
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      style={{
                        background: 'rgba(13, 42, 92, 0.75)',
                        backdropFilter: 'blur(14px)',
                        height: '135px',
                        animation: 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                      }}
                    >
                      <div className="flex-1 flex flex-col justify-center text-left">
                        <h3 className={`${spectral.className} text-white font-semibold text-[16px] sm:text-[18px] tracking-wide leading-tight mb-1`}>
                          {exhibit.title}
                        </h3>
                        <p className="text-[10px] sm:text-[11.5px] text-gray-300 font-light leading-snug line-clamp-2">
                          {exhibit.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                        <a
                          href={exhibit.link}
                          className="text-[#f37021] hover:text-[#d85c15] font-bold text-xs sm:text-sm flex items-center gap-1 transition-colors"
                        >
                          Explore
                        </a>
                        <a
                          href={exhibit.link}
                          className="bg-[#f37021] hover:bg-[#d85c15] text-[#0d2a5c] w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 rounded-full flex items-center justify-center transition-all btn-premium-pop shadow-md"
                          aria-label={`Explore ${exhibit.title}`}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Global CSS Keyframe for Slide Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </section>
  );
}
