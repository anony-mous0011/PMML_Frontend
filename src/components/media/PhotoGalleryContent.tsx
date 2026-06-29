"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Spectral } from 'next/font/google';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

// Albums Dataset
const ALBUMS_DATA = [
  {
    id: 1,
    title: 'Teen Murti House Facade and Gardens',
    category: 'Museum',
    date: '20/08/2026',
    image: '/hero.png',
  },
  {
    id: 2,
    title: 'Pradhanmantri Sangrahalaya Facade Display',
    category: 'Museum',
    date: '12/08/2026',
    image: '/pms img-1.png',
  },
  {
    id: 3,
    title: 'Executive Gallery Exhibition and Archives',
    category: 'Museum',
    date: '05/08/2026',
    image: '/pms img-2.png',
  },
  {
    id: 4,
    title: 'Center for Contemporary Studies Wing Seminar',
    category: 'CCS',
    date: '26/07/2026',
    image: '/pms img-3.png',
  },
  {
    id: 5,
    title: 'Nehru Planetarium Dome Celestial Show',
    category: 'Planetarium',
    date: '22/07/2026',
    image: '/nehru-planetarium.png',
  },
  {
    id: 6,
    title: 'Teen Murti Library Reading Hall Interior',
    category: 'Library',
    date: '18/07/2026',
    image: '/library.jpg',
  },
];

// Single Images Dataset
const IMAGES_DATA = [
  {
    id: 101,
    title: 'Nehru Bust Portrait',
    category: 'Museum',
    date: '24/08/2026',
    image: '/hero.png',
  },
  {
    id: 102,
    title: 'Interactive Prime Ministers Table',
    category: 'Museum',
    date: '22/08/2026',
    image: '/pms img-2.png',
  },
  {
    id: 103,
    title: 'Planetarium Projection System',
    category: 'Planetarium',
    date: '15/08/2026',
    image: '/nehru-planetarium.png',
  },
  {
    id: 104,
    title: 'Teen Murti Rose Garden Walkway',
    category: 'Museum',
    date: '11/08/2026',
    image: '/hero.png',
  },
  {
    id: 105,
    title: 'CCS Rare Manuscripts Display',
    category: 'CCS',
    date: '30/07/2026',
    image: '/pms img-3.png',
  },
  {
    id: 106,
    title: 'Koha Catalog Terminals',
    category: 'Library',
    date: '25/07/2026',
    image: '/library.jpg',
  },
  {
    id: 107,
    title: 'Sangrahalaya Entrance Flag Hoisting',
    category: 'Museum',
    date: '14/07/2026',
    image: '/pms img-1.png',
  },
  {
    id: 108,
    title: 'Student Astronomy Camp Workshop',
    category: 'Planetarium',
    date: '10/07/2026',
    image: '/nehru-planetarium.png',
  },
  {
    id: 109,
    title: 'Library Archival Digitization Unit',
    category: 'Library',
    date: '02/07/2026',
    image: '/library.jpg',
  },
];

// Videos Dataset
const VIDEOS_DATA = [
  {
    id: 201,
    title: 'Virtual Tour of PM Museum Facade',
    category: 'Museum',
    date: '18/08/2026',
    image: '/pms img-1.png',
    duration: '3:45',
  },
  {
    id: 202,
    title: 'Astronomy Day Celestial Dome Highlights',
    category: 'Planetarium',
    date: '10/08/2026',
    image: '/nehru-planetarium.png',
    duration: '5:12',
  },
  {
    id: 203,
    title: 'Oral History Project Documentary',
    category: 'Library',
    date: '02/08/2026',
    image: '/library.jpg',
    duration: '12:30',
  },
  {
    id: 204,
    title: 'CCS Symposium Keynote Speech',
    category: 'CCS',
    date: '28/07/2026',
    image: '/pms img-3.png',
    duration: '45:10',
  },
  {
    id: 205,
    title: 'Laxmi Memorial Lecture Recording',
    category: 'Museum',
    date: '15/07/2026',
    image: '/hero.png',
    duration: '28:15',
  },
  {
    id: 206,
    title: 'Kargil Vijay Diwas Sound & Light Show',
    category: 'Museum',
    date: '11/07/2026',
    image: '/pms img-2.png',
    duration: '8:40',
  },
];

export default function PhotoGalleryContent() {
  const [activeTab, setActiveTab] = useState<'albums' | 'images' | 'videos'>('albums');
  const [sortBy, setSortBy] = useState<'featured' | 'recent' | 'oldest'>('featured');

  // Parse DD/MM/YYYY into timestamp
  const parseDateStr = (dateStr: string) => {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day).getTime();
  };

  // Get active dataset
  const activeDataset = useMemo(() => {
    switch (activeTab) {
      case 'images':
        return [...IMAGES_DATA];
      case 'videos':
        return [...VIDEOS_DATA];
      case 'albums':
      default:
        return [...ALBUMS_DATA];
    }
  }, [activeTab]);

  // Process and sort dataset
  const processedData = useMemo(() => {
    const data = [...activeDataset];
    if (sortBy === 'featured') {
      return data; // Keep default mock layout order
    }
    return data.sort((a, b) => {
      const timeA = parseDateStr(a.date);
      const timeB = parseDateStr(b.date);
      return sortBy === 'recent' ? timeB - timeA : timeA - timeB;
    });
  }, [activeDataset, sortBy]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Page Hero Section ── */}
       <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/hero.png"
          alt="Photo Gallery"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>


      {/* ── Photo Gallery Header Strip ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Top orange accent line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Photo Gallery
            </h2>
          </div>
        </div>
      </section>

      {/* ── Main Content Block (bg-white) ── */}
      <section className="w-full py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Gallery Navigation & Filter Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-solid border-slate-200 pb-0 w-full">
            <div className="flex flex-row flex-wrap items-center justify-start gap-2.5 sm:gap-4 md:gap-6">
              
              {/* ALBUMS TAB */}
              <button
                onClick={() => setActiveTab('albums')}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded text-[10px] sm:text-[11px] md:text-xs font-bold tracking-wider select-none cursor-pointer flex items-center whitespace-nowrap w-fit transition-all ${
                  activeTab === 'albums'
                    ? 'bg-[#052356] text-[#f37021] shadow-sm'
                    : 'text-gray-400 bg-transparent hover:text-[#052356]'
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-3.5 h-3.5 mr-1.5 flex-shrink-0 ${activeTab === 'albums' ? 'text-white' : 'text-gray-400'}`}
                >
                  <path d="M12 2l1.91 2.3 2.91-1.01.99 2.83 2.82.97-1 2.82 2.3 1.91-2.3 1.91 1 2.82-2.82.97-.99 2.83-2.91-1.01L12 22l-1.91-2.3-2.91 1.01-.99-2.83-2.82-.97 1-2.82-2.3-1.91 2.3-1.91-1-2.82 2.82-.97.99-2.83 2.91 1.01L12 2z" />
                </svg>
                ALBUMS
              </button>

              {/* ALL IMAGES TAB */}
              <button
                onClick={() => setActiveTab('images')}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded text-[10px] sm:text-[11px] md:text-xs font-bold tracking-wider select-none cursor-pointer flex items-center whitespace-nowrap w-fit transition-all ${
                  activeTab === 'images'
                    ? 'bg-[#052356] text-[#f37021] shadow-sm'
                    : 'text-gray-400 bg-transparent hover:text-[#052356]'
                }`}
              >
                {activeTab === 'images' && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 text-white"
                  >
                    <path d="M12 2l1.91 2.3 2.91-1.01.99 2.83 2.82.97-1 2.82 2.3 1.91-2.3 1.91 1 2.82-2.82.97-.99 2.83-2.91-1.01L12 22l-1.91-2.3-2.91 1.01-.99-2.83-2.82-.97 1-2.82-2.3-1.91 2.3-1.91-1-2.82 2.82-.97.99-2.83 2.91 1.01L12 2z" />
                  </svg>
                )}
                ALL IMAGES
              </button>

              {/* ALL VIDEOS TAB */}
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded text-[10px] sm:text-[11px] md:text-xs font-bold tracking-wider select-none cursor-pointer flex items-center whitespace-nowrap w-fit transition-all ${
                  activeTab === 'videos'
                    ? 'bg-[#052356] text-[#f37021] shadow-sm'
                    : 'text-gray-400 bg-transparent hover:text-[#052356]'
                }`}
              >
                {activeTab === 'videos' && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 text-white"
                  >
                    <path d="M12 2l1.91 2.3 2.91-1.01.99 2.83 2.82.97-1 2.82 2.3 1.91-2.3 1.91 1 2.82-2.82.97-.99 2.83-2.91-1.01L12 22l-1.91-2.3-2.91 1.01-.99-2.83-2.82-.97 1-2.82-2.3-1.91 2.3-1.91-1-2.82 2.82-.97.99-2.83 2.91 1.01L12 2z" />
                  </svg>
                )}
                ALL VIDEOS
              </button>
            </div>

            {/* Sort Dropdown aligned to the right */}
            <div className="relative mb-2 sm:mb-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="pl-4 pr-12 py-2 text-xs font-bold text-gray-500 bg-[#f4f4f4] border border-gray-200 rounded-lg outline-none appearance-none cursor-pointer min-w-[180px]"
              >
                <option value="featured">Featured</option>
                <option value="recent">Most Recent</option>
                <option value="oldest">Oldest</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5.5 h-5.5 border border-[#f37021] rounded-full bg-transparent pointer-events-none">
                <ChevronDown className="w-3 h-3 text-[#f37021]" />
              </div>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {processedData.map((item) => (
              <div 
                key={item.id} 
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm border border-gray-100 bg-[#f4f4f4] cursor-pointer"
              >
                {/* Image Component */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Render Play Button overlay for Video items */}
                {activeTab === 'videos' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-[#052356] fill-[#052356] ml-1" />
                    </div>
                    {/* Duration badge */}
                    <span className="absolute bottom-4 right-4 bg-black/75 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {(item as any).duration}
                    </span>
                  </div>
                )}

                {/* Dark Gradient Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pt-24 px-5 pb-5 flex flex-col justify-end">
                  <h4 className={`${spectral.className} text-white text-base sm:text-lg font-bold leading-snug mb-2 line-clamp-2 group-hover:text-[#f37021] transition-colors`}>
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between w-full mt-1">
                    <span className="text-white/80 text-[11px] font-bold tracking-wider">
                      {item.date}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#f37021] stroke-[3] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Pagination (matches style) */}
          <div className="flex items-center justify-center gap-4 text-xs font-bold text-[#f37021] select-none mt-4">
            <button className="hover:underline opacity-30 cursor-not-allowed" disabled>
              &lt;
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center bg-[#f37021] text-white">
              1
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-[#052356] hover:bg-slate-50">
              2
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-[#052356] hover:bg-slate-50">
              3
            </button>
            <button className="hover:underline cursor-pointer">
              Next &gt;
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
