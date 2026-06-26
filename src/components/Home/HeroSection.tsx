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
    src: "/banner-1.jpg",
    title: "Citadel Of Democracy",
    subtitle: "Discover the World's Only Museum dedicated to India's legacy and leadership",
    cta: { label: "Explore", href: "#explore" },
  },
  {
    src: "/light-sound.png",
    title: "A Journey Through Time",
    subtitle: "Walk through the chronicles of India's Prime Ministers and their enduring impact",
    cta: { label: "Discover More", href: "#discover" },
  },
  {
    src: "/hero-slide-2.png",
    title: "Preserving Our Heritage",
    subtitle: "Explore rare archives, documents and artefacts from India's rich political history",
    cta: { label: "View Archives", href: "/archives" },
  },
  {
    src: "/hero-slide-3.png",
    title: "Nehru Planetarium",
    subtitle: "Experience the wonders of the cosmos at the iconic Nehru Planetarium",
    cta: { label: "Book a Show", href: "#planetarium" },
  },
  {
    src: "/hero-slide-4.png",
    title: "Light & Sound Show",
    subtitle: "A spectacular multimedia experience bringing India's history alive after dark",
    cta: { label: "Learn More", href: "#show" },
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
      className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden"
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
              className="object-cover object-center"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
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

      {/* ── Progress Bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-white/10">
        <div
          key={current + "_progress"}
          className="h-full bg-[#f37021] hero-progress"
          style={{
            animationDuration: `${INTERVAL_MS}ms`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
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
