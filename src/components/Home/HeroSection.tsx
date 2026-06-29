"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const SLIDES = [
  {
    src: "/hero section/h1.jpg",
    title: "Teen Murti House",
    subtitle: "The historic home of India's first Prime Minister, Jawaharlal Nehru",
    cta: { label: "Discover More", href: "/about-pmml" },
  },
  {
    src: "/hero section/Picture Museum copy.jpg",
    title: "Pradhanmantri Sangrahalaya",
    subtitle: "A tribute to every Prime Minister of India since independence",
    cta: { label: "Explore Museum", href: "/pm-sangrahalaya" },
  },
  {
    src: "/hero section/Library_Panorama1.jpg",
    title: "Teen Murti Library",
    subtitle: "One of the premier research libraries on modern Indian history and politics",
    cta: { label: "Visit Library", href: "/library" },
  },
  {
    src: "/hero section/DSC_0038.JPG",
    title: "Nehru Planetarium",
    subtitle: "Discover the wonders of astronomy and the celestial science dome",
    cta: { label: "Book a Show", href: "/about-pmml/nehru-planetarium" },
  },

  {
    src: "/hero section/DSC_4568.jpg",
    title: "Exhibition Galleries & Collections",
    subtitle: "Immersive multimedia exhibits depicting the journey of Indian democracy",
    cta: { label: "View Archives", href: "/archives" },
  },
];

const INTERVAL_MS = 3000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setPrev(current);
      setCurrent(index);
      setIsTransitioning(true);
      setTimeout(() => {
        setPrev(null);
        setIsTransitioning(false);
      }, 800);
    },
    [current, isTransitioning]
  );

  const goNext = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  // Auto-advance timer
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(goNext, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [goNext, paused, current]);

  // Scroll-to-explore handler
  const scrollDown = () => {
    const target = document.querySelector<HTMLElement>(
      "#explore-section, #government-portals, main > *:nth-child(4)"
    );
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden bg-slate-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero image carousel"
    >
      {/* ── Slide Layers ── */}
      {SLIDES.map((slide, i) => {
        const isActive = i === current;
        const isPrev = i === prev;

        return (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[800ms] ease-in-out"
            style={{
              opacity: isActive ? 1 : isPrev ? 0 : 0,
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
            }}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={i === 0 || i === 1}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        );
      })}





      {/* ── Navigation Dots — shifted to bottom-left to the right of Next.js logo ── */}
      <div className="absolute bottom-6 left-14 sm:left-16 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? "16px" : "6px",
              height: "6px",
              backgroundColor: i === current ? "#f37021" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>

      {/* ── Scroll To Explore (arrow in orange) ── */}
      <button
        onClick={scrollDown}
        aria-label="Scroll to explore"
        className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 hover:opacity-80 transition-opacity duration-200 group"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-medium text-white/70">
          Scroll to Explore
        </span>
        {/* Orange animated chevron */}
        <svg
          className="w-5 h-5 animate-bounce text-[#f37021]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </section>
  );
}
