"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Spectral } from 'next/font/google';
import HeroSection from '@/components/Home/HeroSection';
import { Cpu, PenTool, ShieldAlert, Globe, Compass, ArrowRight, ChevronLeft, ChevronRight, Mail, User2, Camera, ShieldCheck } from 'lucide-react';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const SPECIAL_FEATURES = [
  {
    title: 'AI Holobox',
    description: 'Have interactive conversations with 3D holographic projections of former Prime Ministers, powered by real-time AI technology.',
    image: '/anubhuti/ai holoboxxx.jpg',
    icon: Cpu,
    exploreUrl: '/pm-sangrahalaya/anubhuti-zone',
  },
  {
    title: 'Letter from Prime Minister',
    description: 'Receive a personalized letter handwritten in the style of India\'s great Prime Ministers - a unique and inspirational keepsake crafted through precision robotic replication technology.',
    image: '/anubhuti/roboticalligraphy.jpg',
    icon: Mail,
    exploreUrl: '/pm-sangrahalaya/anubhuti-zone',
  },
  {
    title: 'Walk with Prime Minister',
    description: 'Walk alongside holographic projections of India\'s Prime Ministers in an immersive corridor experience, reliving landmark moments in the nation\'s democratic journey.',
    image: '/anubhuti/walk with pm.jpg',
    icon: User2,
    exploreUrl: '/pm-sangrahalaya/anubhuti-zone',
  },
  {
    title: 'Selfie with Prime Minister',
    description: 'Step into an augmented reality booth and capture a virtual selfie alongside your favourite Prime Minister — a fun and memorable interactive experience.',
    image: '/anubhuti/selfiewithpm.jpg',
    icon: Camera,
    exploreUrl: '/pm-sangrahalaya/anubhuti-zone',
  },
  {
    title: 'Lal Qile Ki Prachir Se',
    description: 'An immersive 360-degree experience that transports you to the ramparts of the Red Fort, where Prime Ministers have addressed the nation. Witness historical Independence Day speeches, understand the significance of the occasion, and feel the weight of the moment through state-of-the-art audio-visual technology.',
    image: '/anubhuti/hologram.jpeg',
    icon: ShieldCheck,
    exploreUrl: '/pm-sangrahalaya/anubhuti-zone',
  },
  {
    title: 'Bhavishya ki Jhalkiyan',
    description: 'A futuristic showcase of India\'s developmental roadmap, scientific, space, and economic achievements.',
    image: '/special shows/bhavishya.jpg',
    icon: Globe,
    exploreUrl: '/pm-sangrahalaya/special-shows',
  },
  {
    title: 'Nuclear Journey to Dream Reality',
    description: 'A virtual reality flight simulation showcasing the modern developmental milestones of India from an aerial view.',
    image: '/special shows/timemachine.jpg',
    icon: Compass,
    exploreUrl: '/pm-sangrahalaya/special-shows',
  },
];

const SPECIAL_SHOWS = [
  {
    title: 'Light & Sound Show',
    description: 'The museum comes alive as night falls with our flagship Light & Sound Show (Son-et-Lumiere). Using state-of-the-art projection mapping technology onto the facade of Building 2, the show narrates the history of Indian democracy, space programs, and the accomplishments of our Prime Ministers. Shows are held daily in both Hindi and English.',
    image: '/special shows/light and sound show.jpg',
    exploreUrl: '/pm-sangrahalaya/special-shows',
  },
  {
    title: 'Suraksha',
    description: 'An interactive exhibit dedicated to India\'s security and defence achievements, showcasing the strategic decisions and sacrifices that have safeguarded the nation.',
    image: '/nuclear test.jpg',
    exploreUrl: '/pm-sangrahalaya/special-shows',
  },
  {
    title: 'Pokhran',
    description: 'Relive India\'s historic Pokhran nuclear tests under the leadership of Prime Minister Shri Atal Bihari Vajpayee : an immersive control room simulation with dramatic audiovisuals.',
    image: '/nuclear test.jpg',
    exploreUrl: '/pm-sangrahalaya/special-shows',
  },
];

export default function PmSangrahalayaAboutContent() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeShow, setActiveShow] = useState(0);

  // Auto-play feature slideshow: changes every 5 seconds (5000ms)
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % SPECIAL_FEATURES.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero Banner Section */}
      <HeroSection />

      {/* ── THE INSPIRATION SECTION ── */}
      <section className="w-full pt-10 pb-5 lg:pt-12 lg:pb-6 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
              <Image
                src="/pms img-1.png"
                alt="Pradhanmantri Sangrahalaya Building - The Inspiration"
                fill
                sizes="(max-w-1024px) 100vw, 550px"
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Right Column: Title and Content */}
            <div className="lg:col-span-6 flex flex-col text-left justify-center">
              {/* Top orange accent line */}
              <div className="w-12 h-1 bg-[#f37021] mb-4" />
              
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                The Inspiration
              </h2>
              
              <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed mb-4 text-justify">
                The Pradhanmantri Sangrahalaya is a tribute to every Prime Minister of India since Independence, and a narrative record of how each one has contributed to the development of our nation over the last 75 years. It is a history of collective effort, and powerful evidence of the creative success of India's democracy. Our Prime Ministers came from every class and tier of society, for the gates of democracy were equally open to all. Each one left an important footprint on the journey of development, social harmony and economic empowerment that has enabled India to give true meaning to freedom. We inherited an impoverished land from the debris of British colonialism, and together gave it a new life, lifting our country from famished deprivation to food-surplus status, and creating infrastructure over barren territory for the benefit of the people.
              </p>

              <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                The Teen Murti Estate, home to India's first Prime Minister Shri Jawaharlal Nehru for 16 years, was the natural environment for Pradhanmantri Sangrahalaya, because this is a story of continuity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── THE SANGRAHALAYA BLEND SECTION ── */}
      <section className="w-full pt-5 pb-5 lg:pt-6 lg:pb-6 bg-white text-left border-t border-slate-100/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Title and Content */}
            <div className="lg:col-span-7 flex flex-col text-left justify-center">
              <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed mb-4 text-justify">
                The Sangrahalaya is a seamless blend which begins at the renovated and refurbished Nehru Museum building, now completely updated and technologically advanced displays on the life and contribution of Shri Jawaharlal Nehru. The new panorama includes a section which exhibits a large number of rare gifts received by him from all over the world but never put on display.
              </p>

              <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                .The saga of modern India starts with the freedom struggle and the making of a great Constitution. The Sangrahalaya goes on to tell the story of how our Prime Ministers navigated the nation through various challenges and ensured the all-round progress of the country. Within this story is a message for the younger generation: there are greater horizons to conquer as we transform India into New India.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-[300px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
              <Image
                src="/pms img-2.png"
                alt="Pradhanmantri Sangrahalaya Ceiling Display"
                fill
                sizes="(max-w-1024px) 100vw, 500px"
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── THE SOURCES & ARCHIVES SECTION ── */}
      <section className="w-full pt-5 pb-5 lg:pt-6 lg:pb-6 bg-white text-left border-t border-slate-100/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 w-full">
            
            {/* Landscape Image */}
            <div className="relative w-full aspect-[16/6] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50">
              <Image
                src="/pms img-3.png"
                alt="Pradhanmantri Sangrahalaya Exhibition Hall"
                fill
                sizes="(max-w-1024px) 100vw, 1100px"
                className="object-cover hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>

            {/* Content Text */}
            <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
              Information collected through resources / repositories with institutions such as Prasar Bharti, Doordarshan, Film Division, Sansad TV, Ministry of Defence, Media Houses (Indian and foreign), Foreign News Agencies, etc. was used to develop content. Appropriate use of archives (private paper collections, collected works and other literary works, important correspondences), some personal effects, gifts &amp; memorabilia (felicitations, honours, medals, commemorative stamps, coins, etc.) and speeches of Prime Ministers have been used to depict the different aspects of their lives in a thematic format.
            </p>

          </div>
        </div>
      </section>

      {/* ── INTERACTIVE & SPECIAL FEATURES SECTION ── */}
      <section
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="w-full pt-5 pb-10 lg:pt-6 lg:pb-12 bg-white text-left border-t border-slate-100/60"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col items-start justify-start text-left mb-8 w-full">
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-3`}>
              Anubhuti Zone
            </h2>
            <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-4xl">
              Experience the museum's cutting-edge technologies that bring history, leadership, and national milestones to life. Click on the features below to learn more about each engagement zone.
            </p>
          </div>

          {/* Grid Layout: Left Buttons, Right Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: 6 Stacked Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              {SPECIAL_FEATURES.map((feature, idx) => {
                const isActive = activeFeature === idx;
                return (
                  <button
                    key={feature.title}
                    onClick={() => {
                      setActiveFeature(idx);
                      setIsPaused(true);
                    }}
                    className={`flex items-center justify-between py-3 px-5 rounded-xl border transition-all duration-300 cursor-pointer text-left w-full ${
                      isActive
                        ? 'bg-[#052356] border-[#052356] text-white shadow-sm'
                        : 'bg-white border-slate-200/80 text-[#052356] hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <span className="font-semibold text-sm">{feature.title}</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? 'text-white translate-x-0.5' : 'text-[#052356]/40'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Preview Card */}
            <div className="lg:col-span-7 relative h-[320px] sm:h-[360px] lg:h-auto overflow-hidden rounded-2xl py-1">
              
              {/* Center Active Image Container */}
              <div className="absolute left-0 right-[12%] top-0 bottom-0 rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-100 z-20">
                <Image
                  src={SPECIAL_FEATURES[activeFeature].image}
                  alt={SPECIAL_FEATURES[activeFeature].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-all duration-500"
                  priority
                />
                
                {/* Blurred Overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/50 py-2.5 px-4 flex flex-col items-start gap-1.5 border-t border-white/10 z-20">
                  <p className="text-white text-xs sm:text-sm leading-relaxed max-w-xl font-medium text-justify">
                    {SPECIAL_FEATURES[activeFeature].description}
                  </p>
                  <Link
                    href={SPECIAL_FEATURES[activeFeature].exploreUrl}
                    className="flex items-center gap-2 text-[#f37021] hover:text-white font-bold text-xs sm:text-sm tracking-wide transition-colors group cursor-pointer whitespace-nowrap mt-0.5"
                  >
                    <span>Explore</span>
                    <div className="bg-[#f37021] group-hover:bg-white w-6.5 h-6.5 rounded-full flex items-center justify-center transition-all shadow-sm active:scale-95">
                      <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Navigation Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveFeature((prev) => (prev + 1) % SPECIAL_FEATURES.length);
                  setIsPaused(true);
                }}
                className="absolute right-[2%] top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white border border-[#f37021] text-[#f37021] flex items-center justify-center hover:bg-[#f37021] hover:text-white transition-colors duration-300 shadow-md cursor-pointer"
                aria-label="Next feature"
              >
                <ChevronRight className="w-4.5 h-4.5 stroke-[2.5]" />
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* ── SPECIAL SHOWS SECTION ── */}
      <section className="w-full pt-5 pb-4 lg:pt-6 lg:pb-6 bg-white text-left border-t border-slate-100/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-[300px] min-h-[260px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
              <Image
                src={SPECIAL_SHOWS[activeShow].image}
                alt={SPECIAL_SHOWS[activeShow].title}
                fill
                sizes="(max-w-1024px) 100vw, 500px"
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Right Column: Title and Content */}
            <div className="lg:col-span-7 flex flex-col text-left justify-center">
              {/* Top orange accent line */}
              <div className="w-12 h-1 bg-[#f37021] mb-4" />
              
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-4`}>
                Special Shows
              </h2>

              {/* Tabs for Special Shows */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {SPECIAL_SHOWS.map((show, idx) => (
                  <button
                    key={show.title}
                    onClick={() => setActiveShow(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                      activeShow === idx
                        ? 'bg-[#f37021] text-white shadow-sm scale-105'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {show.title}
                  </button>
                ))}
              </div>
              
              <div className="min-h-[140px] flex flex-col justify-between">
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify mb-4">
                  {SPECIAL_SHOWS[activeShow].description}
                </p>

                {/* Explore Button CTA */}
                <div className="flex justify-start relative z-20 mt-4">
                  <Link
                    href={SPECIAL_SHOWS[activeShow].exploreUrl}
                    className="flex items-center gap-3 text-[#052356] hover:text-[#f37021] font-bold text-sm tracking-wide transition-colors group cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold">Explore</span>
                    <div className="bg-[#f37021] group-hover:bg-[#d85c15] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95">
                      <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── TAKE A VIRTUAL TOUR SECTION ── */}
      <section className="w-full py-5 lg:py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left: Accent + Heading + Description */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="w-10 h-1 bg-[#f37021] mb-4 rounded-full" />
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight leading-tight mb-4`}>
                Take a Virtual Tour
              </h2>
              <p className="text-sm sm:text-[15px] text-gray-500 leading-relaxed">
                Can't visit us in person? Experience the stunning architecture, galleries, and interactive halls of Pradhanmantri Sangrahalaya from anywhere in the world with our interactive 360-degree Virtual Tour.
              </p>
            </div>

            {/* Right: Two text boxes side by side */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Box 1: 360° Walkthrough */}
              <div className="bg-[#f8f9fb] border border-slate-200 rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#fff4ec] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#f37021]" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <h3 className={`${spectral.className} text-lg font-bold text-[#052356]`}>
                    Start 360° Walkthrough
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Immerse yourself in a full digital walkthrough of Building 1 and Building 2, with information points explaining each gallery and exhibit.
                  </p>
                </div>
                <a
                  href="/pm-sangrahalaya/virtual-tour"
                  className="inline-flex items-center justify-center gap-2 bg-[#052356] hover:bg-[#0a3880] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors duration-300 mt-auto"
                >
                  Launch Virtual Tour
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

              {/* Box 2: Book Tickets */}
              <div className="bg-[#f8f9fb] border border-slate-200 rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#eef2ff] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#052356]" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <h3 className={`${spectral.className} text-lg font-bold text-[#052356]`}>
                    Book Tickets Online
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Plan your visit to Teen Murti Estate today. Pre-book your entry passes, light and sound show tickets, and helicopter ride slots online to avoid long queues.
                  </p>
                </div>
                <a
                  href="https://www.pmsangrahalaya.gov.in/book-now"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#f37021] hover:bg-[#d85c15] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors duration-300 mt-auto"
                >
                  Plan a Visit
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
