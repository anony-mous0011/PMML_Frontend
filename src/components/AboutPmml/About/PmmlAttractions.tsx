"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Landmark, Sparkles, Globe, BookOpen, Mic2, Search } from 'lucide-react';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const BLOCK_1_ITEMS = [
  
  {
    title: 'Constitution Gallery',
    description: 'Witness the making of the constitution, democratic foundations, key amendments, and the translation of the constitution in different languages. Step into the historical debates and the democratic journey of modern India. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/building 1/constitutional amendments.jpg',
    alt: 'Constitution Gallery'
  },
  {
    title: 'Nehru Gallery-1',
    description: 'Step into Jawaharlal Nehru\'s early life, political journey, his bedroom, personal belongings, and a special exhibition on his Prime Ministership. Relive the early days of independent India through this dedicated collection. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/building 1/nehru gallery.jpg',
    alt: 'Nehru Gallery'
  },
  {
    title: 'Toshakhana',
    description: 'Exquisite artifacts, historical gifts, and treasures received by the Prime Ministers of India during international and domestic visits. Browse through these valuable tokens of diplomatic friendship and heritage. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/toshakhana.png',
    alt: 'Toshakhana'
  }
];

const BLOCK_2_ITEMS = [
  {
    title: 'Galleries',
    description: 'Explore the modern galleries of independent India since 1947. These spaces showcase the individual visions, major domestic policies, international relationships, and unique historical legacies of each of the country\'s Prime Ministers. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/building 2/prime ministers gallery.jpg',
    alt: 'Galleries'
  },
  {
    title: 'Prastuti',
    description: 'Witness the Nuclear Journey to Dream Reality, step inside a virtual reality time machine, and experience the cosmic visual storytelling of India\'s scientific breakthroughs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/building 2/prastuti conference room.jpg',
    alt: 'Prastuti Room'
  },
  {
    title: 'Anubhuti Zone',
    description: 'Engage in highly interactive zones: take a selfie with the Prime Minister, walk alongside leaders, view the Unity Chain, interact with the 3D holographic Lal Qile Ki Prachir Se representation, and converse with historical visionaries in the AI Holobox. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/building 2/anubhuti.jpg',
    alt: 'Anubhuti Zone'
  },
  {
    title: 'Ramps',
    description: 'Walk through the immersive transition tunnels. Tunnel 1 details the historic progression from 1947 to 1989, and Tunnel 2 chronicles modern leadership and milestones from 1991 to 2022. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/tunnel.jpg',
    alt: 'Tunnels'
  }
];

const NEHRU_PLANETARIUM_ITEMS = [
  {
    title: 'Aryabhata Gallery',
    description: 'Explore India\'s rich astronomical heritage and achievements in modern space science at the Aryabhata Gallery. Interactive exhibits and digital installations trace India\'s journey from ancient astronomical traditions to contemporary space missions, celebrating the legacy of great Indian astronomers.',
    image: '/dsc_0038.JPG',
    alt: 'Aryabhata Gallery'
  },
  {
    title: '2D & 3D Shows',
    description: 'Experience immersive astronomy shows under the 15-metre 4K digital dome at Nehru Planetarium. High-quality 2D and 3D programmes present complex astronomical concepts in an accessible and visually engaging manner, held daily for visitors of all ages.',
    image: '/planetarium-home.jpg',
    alt: '2D and 3D Dome Shows'
  },
];


const RESEARCH_TABS = [
  {
    title: 'Fellowship',
    description: 'PMML\'s Fellowship programme is regarded as highly prestigious in academic circles, offering a variety of Fellowships supporting research on modern and contemporary Indian history and society. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: '/research-publication.png',
    alt: 'Fellowship Program'
  },
  {
    title: 'Talks & Seminars',
    description: 'As a centre of academic excellence, PMML organizes regular academic talks, lectures, and seminars to showcase and debate elements of modern and contemporary Indian history. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: '/research-publication.png',
    alt: 'Talks and Seminars'
  },
  {
    title: 'Publications',
    description: 'PMML supports a robust publication programme, printing academic papers, journals, monograph series, and research volumes detailing modern and contemporary history. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/research-publication.png',
    alt: 'Publications'
  },
  {
    title: 'CCS',
    description: 'The Centre for Contemporary Studies (CCS) was set up as a new unit of PMML in 1990 to provide an active forum for fellowship research and contemporary historical studies. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: '/ccs.png',
    alt: 'Centre for Contemporary Studies'
  }
];

interface AttractionItem {
  tag: string;
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
  image: {
    src: string;
    alt: string;
    caption: string;
  };
  link: string;
  linkLabel?: string;
}

const attractions: AttractionItem[] = [
  {
    tag: 'Library',
    icon: <BookOpen className="w-4 h-4" />,
    title: 'Library',
    body: (
      <div className="flex flex-col gap-4">
        <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed text-justify">
          The PMML Library houses an exhaustive collection of published material on numerous aspects of modern and contemporary Indian history. Regularly updated and expanded, it serves as a premier academic destination for Indian and foreign scholars from diverse disciplines and fields of interest.
        </p>
        <div className="flex gap-6 pt-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#052356]">1L+</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Published Books</span>
          </div>
          <div className="w-px bg-slate-200" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#052356]">500+</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Journals & Periodicals</span>
          </div>
        </div>
      </div>
    ),
    image: { src: '/library.jpg', alt: 'PMML Library', caption: 'Library' },
    link: '/library'
  },
  {
    tag: 'Archives',
    icon: <BookOpen className="w-4 h-4" />,
    title: 'Archives',
    body: (
      <div className="flex flex-col gap-4">
        <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed text-justify">
          The PMML Archives possess an impressive and diverse archival holding — manuscripts, oral histories, official records, rare documents, private papers, and photographs. These holdings make the PMML a major research destination for scholars studying modern and contemporary Indian history.
        </p>
        <div className="flex gap-6 pt-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#052356]">2.5L+</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Archival Items</span>
          </div>
          <div className="w-px bg-slate-200" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#052356]">1.3K+</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Private Papers</span>
          </div>
        </div>
      </div>
    ),
    image: { src: '/NMM_2386.jpg', alt: 'PMML Archives', caption: 'Archives' },
    link: '/archives'
  },
];

export default function PmmlAttractions() {
  const [block1Idx, setBlock1Idx] = useState(0);
  const [isPaused1, setIsPaused1] = useState(false);

  const [block2Idx, setBlock2Idx] = useState(0);
  const [isPaused2, setIsPaused2] = useState(false);

  const [researchIdx, setResearchIdx] = useState(0);
  const [isPausedResearch, setIsPausedResearch] = useState(false);

  const [planetariumIdx, setPlanetariumIdx] = useState(0);

  // Gallery dropdown (click to open, click outside to close)
  const [galleryOpen, setGalleryOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (galleryRef.current && !galleryRef.current.contains(e.target as Node)) {
        setGalleryOpen(false);
      }
    };
    if (galleryOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [galleryOpen]);

  // Auto-play slideshow Block 1: change sub-gallery details every 5 seconds (5000ms)
  useEffect(() => {
    if (isPaused1) return;
    
    const interval = setInterval(() => {
      setBlock1Idx((prev) => (prev + 1) % BLOCK_1_ITEMS.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused1]);

  // Auto-play slideshow Block 2: change sub-gallery details every 5 seconds (5000ms)
  useEffect(() => {
    if (isPaused2) return;
    
    const interval = setInterval(() => {
      setBlock2Idx((prev) => (prev + 1) % BLOCK_2_ITEMS.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused2]);

  // Auto-play slideshow Research: change sub-gallery details every 5 seconds (5000ms)
  useEffect(() => {
    if (isPausedResearch) return;
    
    const interval = setInterval(() => {
      setResearchIdx((prev) => (prev + 1) % RESEARCH_TABS.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPausedResearch]);

  return (
    <section id="attractions" className="w-full pt-4 pb-12 md:pt-6 md:pb-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col gap-10">
        
        {/* Main section header */}
        <div className="flex flex-col items-start justify-start text-left mb-4 w-full">
          <div className="w-12 h-1 bg-[#f37021] mb-4" />
          <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] mb-3 tracking-tight`}>
            Key Attractions
          </h2>
          <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-4xl">
            Explore the unique facilities, research wings, space science venues, and reference collections that comprise the Prime Ministers Museum and Library campus.
          </p>
        </div>

        {/* ──── BLOCK 1 INTERACTIVE SLIDESHOW SECTION ──── */}
        <div
          onMouseEnter={() => setIsPaused1(true)}
          onMouseLeave={() => setIsPaused1(false)}
          className="bg-[#f8f8f8] rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row w-full transition-all duration-300 hover:shadow-md"
        >
          {/* Left Column: Interactive Navigation & Description */}
          <div className="w-full lg:w-[60%] p-6 sm:p-8 flex flex-col justify-start gap-4 text-left">
            {/* Title */}
            <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-[32px] font-bold text-[#052356] leading-tight`}>
              Block 1
            </h3>

            {/* Custom Interactive Tabs for Sub-Galleries */}
            <div className="flex flex-wrap gap-2.5 my-2">
              {BLOCK_1_ITEMS.map((item, idx) => (
                <button
                  key={item.title}
                  onClick={() => {
                    setBlock1Idx(idx);
                    setIsPaused1(true);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    block1Idx === idx
                      ? 'bg-[#f37021] text-white shadow-sm scale-105'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Carousel Item Details */}
            <div className="min-h-[140px] flex flex-col justify-between">
              <p className="text-gray-600 text-sm sm:text-[15px] leading-[1.75] text-justify transition-opacity duration-300">
                {BLOCK_1_ITEMS[block1Idx].description}
              </p>
              
              {/* Home-style Explore Button CTA */}
              <div className="flex justify-start relative z-20 mt-6">
                <a
                  href={
                    BLOCK_1_ITEMS[block1Idx].title === 'Nehru Gallery-1'
                      ? '/pm-sangrahalaya/pms-of-india#shri-jawaharlal-nehru'
                      : '/pm-sangrahalaya/key-galleries'
                  }
                  className="flex items-center gap-3 text-[#052356] hover:text-[#f37021] font-bold text-sm tracking-wide transition-colors group cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold">Explore</span>
                  <div className="bg-[#f37021] group-hover:bg-[#d85c15] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95">
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="black">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Frame with image crossfade */}
          <div className="w-full lg:w-[40%] relative min-h-[260px] lg:min-h-full overflow-hidden bg-[#040a17]">
            {BLOCK_1_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  block1Idx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ──── BLOCK 2 INTERACTIVE SLIDESHOW SECTION ──── */}
        <div
          onMouseEnter={() => setIsPaused2(true)}
          onMouseLeave={() => setIsPaused2(false)}
          className="bg-[#f8f8f8] rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row-reverse w-full transition-all duration-300 hover:shadow-md overflow-visible"
        >
          {/* Left Column: Interactive Navigation & Description */}
          <div className="w-full lg:w-[60%] p-6 sm:p-8 flex flex-col justify-start gap-4 text-left">
            {/* Title */}
            <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-[32px] font-bold text-[#052356] leading-tight`}>
              Block 2
            </h3>

            {/* Custom Interactive Tabs for Sub-Galleries */}
            <div className="flex flex-wrap gap-2.5 my-2">
              {BLOCK_2_ITEMS.map((item, idx) => (
                item.title === 'Galleries' ? (
                  // Galleries button — click to open dropdown, click outside to close
                  <div key={item.title} ref={galleryRef} className="relative">
                    <button
                      onClick={() => {
                        setBlock2Idx(idx);
                        setIsPaused2(true);
                        setGalleryOpen((prev) => !prev);
                      }}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                        block2Idx === idx
                          ? 'bg-[#f37021] text-white shadow-sm scale-105'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.title}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${galleryOpen ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Click-controlled Dropdown: Gallery-2 to Gallery-15 */}
                    {galleryOpen && (
                      <div className="absolute left-0 top-full mt-1.5 z-50 bg-white border border-gray-100 rounded-xl shadow-lg py-1.5 min-w-[140px] max-h-60 overflow-y-auto">
                        {Array.from({ length: 14 }, (_, i) => i + 2).map((num) => {
                          const pmMapping: Record<number, string> = {
                            2: 'shri-gulzari-lal-nanda',
                            3: 'shri-lal-bahadur-shastri',
                            4: 'smt-indira-gandhi',
                            5: 'shri-morarji-desai',
                            6: 'chaudhary-charan-singh',
                            7: 'shri-rajiv-gandhi',
                            8: 'shri-v-p-singh',
                            9: 'shri-chandra-shekhar',
                            10: 'shri-p-v-narasimha-rao',
                            11: 'shri-atal-bihari-vajpayee',
                            12: 'shri-h-d-deve-gowda',
                            13: 'shri-inder-kumar-gujral',
                            14: 'dr-manmohan-singh',
                            15: 'shri-narendra-modi',
                          };
                          return (
                            <Link
                              key={`gallery-${num}`}
                              href={`/pm-sangrahalaya/pms-of-india#${pmMapping[num]}`}
                              onClick={() => setGalleryOpen(false)}
                              className="block w-full text-left px-4 py-1.5 text-xs font-semibold text-slate-600 hover:bg-[#f37021]/10 hover:text-[#f37021] transition-colors"
                            >
                              Gallery-{num}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.title}
                    onClick={() => {
                      setBlock2Idx(idx);
                      setIsPaused2(true);
                      setGalleryOpen(false);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                      block2Idx === idx
                        ? 'bg-[#f37021] text-white shadow-sm scale-105'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.title}
                  </button>
                )
              ))}
            </div>

            {/* Carousel Item Details */}
            <div className="min-h-[140px] flex flex-col justify-between">
              <p className="text-gray-600 text-sm sm:text-[15px] leading-[1.75] text-justify transition-opacity duration-300">
                {BLOCK_2_ITEMS[block2Idx].description}
              </p>
              
              {/* Home-style Explore Button CTA */}
              <div className="flex justify-start relative z-20 mt-6">
                <a
                  href={
                    BLOCK_2_ITEMS[block2Idx].title === 'Anubhuti Zone'
                      ? '/pm-sangrahalaya/anubhuti-zone'
                      : '/pm-sangrahalaya/key-galleries'
                  }
                  className="flex items-center gap-3 text-[#052356] hover:text-[#f37021] font-bold text-sm tracking-wide transition-colors group cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold">Explore</span>
                  <div className="bg-[#f37021] group-hover:bg-[#d85c15] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95">
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="black">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Frame with image crossfade */}
          <div className="w-full lg:w-[40%] relative min-h-[260px] lg:min-h-full overflow-hidden bg-[#040a17]">
            {BLOCK_2_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  block2Idx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ──── NEHRU PLANETARIUM SECTION (Tabbed card) ──── */}
        <div id="nehru-planetarium" className="bg-[#f8f8f8] rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row w-full transition-all duration-300 hover:shadow-md">
          <div className="w-full lg:w-[60%] p-6 sm:p-8 flex flex-col justify-start gap-4 text-left">
            <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-[32px] font-bold text-[#052356] leading-tight`}>
              Nehru Planetarium
            </h3>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2.5 my-1">
              {NEHRU_PLANETARIUM_ITEMS.map((item, idx) => (
                <button
                  key={item.title}
                  onClick={() => setPlanetariumIdx(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    planetariumIdx === idx
                      ? 'bg-[#f37021] text-white shadow-sm scale-105'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed text-justify transition-opacity duration-300">
              {NEHRU_PLANETARIUM_ITEMS[planetariumIdx].description}
            </p>

            <div className="flex justify-start relative z-20">
              <a
                href="/about-pmml/nehru-planetarium"
                className="flex items-center gap-3 text-[#052356] hover:text-[#f37021] font-bold text-sm tracking-wide transition-colors group cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-bold">Explore</span>
                <div className="bg-[#f37021] group-hover:bg-[#d85c15] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95">
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: crossfade images */}
          <div className="w-full lg:w-[40%] relative min-h-[220px] lg:min-h-full overflow-hidden bg-[#040a17]">
            {NEHRU_PLANETARIUM_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  planetariumIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ──── RESEARCH INTERACTIVE SLIDESHOW SECTION ──── */}
        <div
          onMouseEnter={() => setIsPausedResearch(true)}
          onMouseLeave={() => setIsPausedResearch(false)}
          className="bg-[#f8f8f8] rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row-reverse w-full transition-all duration-300 hover:shadow-md"
        >
          {/* Left Column: Interactive Navigation & Description */}
          <div className="w-full lg:w-[60%] p-6 sm:p-8 flex flex-col justify-start gap-4 text-left">
            {/* Title */}
            <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-[32px] font-bold text-[#052356] leading-tight`}>
              Research
            </h3>

            {/* Custom Interactive Tabs for Research Area */}
            <div className="flex flex-wrap gap-2.5 my-2">
              {RESEARCH_TABS.map((item, idx) => (
                <button
                  key={item.title}
                  onClick={() => {
                    setResearchIdx(idx);
                    setIsPausedResearch(true);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    researchIdx === idx
                      ? 'bg-[#f37021] text-white shadow-sm scale-105'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Carousel Item Details */}
            <div className="min-h-[140px] flex flex-col justify-between">
              <p className="text-gray-600 text-sm sm:text-[15px] leading-[1.75] text-justify transition-opacity duration-300">
                {RESEARCH_TABS[researchIdx].description}
              </p>
              
              {/* Home-style Explore Button CTA */}
              <div className="flex justify-start relative z-20 mt-6">
                <a
                  href={
                    RESEARCH_TABS[researchIdx].title === 'Fellowship'
                      ? '/ccs/fellowship'
                      : RESEARCH_TABS[researchIdx].title === 'Talks & Seminars'
                      ? '/ccs/events'
                      : RESEARCH_TABS[researchIdx].title === 'Publications'
                      ? '/research/publications'
                      : '/ccs/about'
                  }
                  className="flex items-center gap-3 text-[#052356] hover:text-[#f37021] font-bold text-sm tracking-wide transition-colors group cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold">Explore</span>
                  <div className="bg-[#f37021] group-hover:bg-[#d85c15] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95">
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="black">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Frame with image crossfade */}
          <div className="w-full lg:w-[40%] relative min-h-[260px] lg:min-h-full overflow-hidden bg-[#040a17]">
            {RESEARCH_TABS.map((item, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  researchIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ──── STATIC ATTRACTIONS MAPPING (Library, Visitor Experience) ──── */}
        {attractions.map((item, i) => (
          <div
            key={i}
            className={`bg-[#f8f8f8] rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col ${
              i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } w-full transition-all duration-300 hover:shadow-md`}
          >
            {/* Left Column: Text Content */}
            <div className="w-full lg:w-[60%] p-6 sm:p-8 flex flex-col justify-start gap-4 text-left">
              {/* Section Title */}
              <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-[32px] font-bold text-[#052356] leading-tight`}>
                {item.title}
              </h3>

              {/* Body */}
              {item.body}

              {/* Home-style Explore Button CTA */}
              {item.link && (
                <div className="flex justify-start relative z-20 mt-4">
                  <a
                    href={item.link}
                    className="flex items-center gap-3 text-[#052356] hover:text-[#f37021] font-bold text-sm tracking-wide transition-colors group cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold">{item.linkLabel || 'Explore'}</span>
                    <div className="bg-[#f37021] group-hover:bg-[#d85c15] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95">
                      <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Right Column: Visual Frame */}
            {item.image && (
              <div className="w-full lg:w-[40%] relative min-h-[220px] lg:min-h-full overflow-hidden bg-[#040a17]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 hover:scale-103"
                />
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
