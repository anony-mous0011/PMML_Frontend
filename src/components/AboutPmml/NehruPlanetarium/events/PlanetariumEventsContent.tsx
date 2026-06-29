"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Spectral } from 'next/font/google';
import { Calendar, Clock, ChevronDown } from 'lucide-react';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

interface PlanetariumEvent {
  id: string;
  title: string;
  category: 'show' | 'lecture' | 'gazing' | 'workshop';
  date: string;
  day: string;
  monthYear: string;
  time: string;
  venue: string;
  description: string;
  image: string;
}

const EVENTS_DATA: PlanetariumEvent[] = [
  {
    id: 'p1',
    title: 'Wonders of the Cosmos: Sky Gazing Workshop',
    category: 'gazing',
    date: '2026-08-05',
    day: '05',
    monthYear: 'Aug, 2026',
    time: '6:30 pm - 8:30 pm',
    venue: 'Nehru Planetarium Sky Lawns',
    description: 'A guided astronomical session for beginners to learn sky mapping and observe Jupiter, Saturn, and seasonal constellations through high-powered telescopes.',
    image: '/planetarium-home.jpg',
  },
  {
    id: 'p2',
    title: 'Astronomy Day: Solar Observations & Interactive Talks',
    category: 'workshop',
    date: '2026-08-18',
    day: '18',
    monthYear: 'Aug, 2026',
    time: '10:00 am - 4:00 pm',
    venue: 'Nehru Planetarium Exhibition Hall',
    description: 'Celebrate Astronomy Day with solar projection telescope views, live water rocket launches, and exciting astrophotography talks.',
    image: '/nehru-planetarium.png',
  },
  {
    id: 'p3',
    title: 'Nehru Planetarium: Journey to the Edge of the Universe',
    category: 'show',
    date: '2026-07-30',
    day: '30',
    monthYear: 'Jul, 2026',
    time: '11:30 am, 1:30 pm, 3:30 pm (Daily)',
    venue: 'Planetarium Sky Dome',
    description: 'An immersive dome projection show explaining the birth of stars, structures of distant galaxies, and latest discoveries in modern observational cosmology.',
    image: '/planet-bg.png',
  },
  {
    id: 'p4',
    title: 'Asteroid Day: Defending Our Planet',
    category: 'lecture',
    date: '2026-06-30',
    day: '30',
    monthYear: 'Jun, 2026',
    time: '3:00 pm - 5:00 pm',
    venue: 'Planetarium Lecture Hall',
    description: 'A special public lecture by space scientists on near-Earth objects (NEOs), past impact events, and global monitoring defense programs.',
    image: '/seminar.JPG',
  },
];

const TABS = [
  { id: 'all', label: 'ALL EVENTS', href: '/events', star: true },
  { id: 'sangrahalaya', label: 'SANGRAHALAYA', href: '/pm-sangrahalaya/events' },
  { id: 'planetarium', label: 'NEHRU PLANETARIUM', href: '/about-pmml/nehru-planetarium/events' },
  { id: 'ccs', label: 'CENTER FOR CONTEMPORARY STUDIES', href: '/ccs/events' },
];

export default function PlanetariumEventsContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and Sort events
  const processedEvents = useMemo(() => {
    let result = [...EVENTS_DATA];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter(e => e.category === selectedCategory);
    }

    // Sort events
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return selectedSort === 'latest' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [selectedCategory, selectedSort]);

  // Pagination (6 cards per page)
  const itemsPerPage = 6;
  const totalPages = Math.ceil(processedEvents.length / itemsPerPage);
  const paginatedEvents = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return processedEvents.slice(start, start + itemsPerPage);
  }, [processedEvents, currentPage]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Page Hero Section ── */}
         <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/hero.png"
          alt="Planetarium Events"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── Upcoming Events Header Strip ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              {/* Top orange accent line */}
              <div className="w-12 h-1 bg-[#f37021] mb-4" />
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
                Upcoming Events
              </h2>
            </div>
            
            <button className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 rounded text-xs font-semibold text-gray-700 bg-white hover:bg-slate-50 transition-colors w-fit select-none cursor-pointer">
              <span>View Calender</span>
              <Calendar className="w-3.5 h-3.5 text-[#f37021]" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Main content block (bg-white) ── */}
      <section className="w-full py-10 lg:py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Sub-navigation Tabs */}
          <div className="flex flex-row flex-wrap items-center justify-start gap-2.5 sm:gap-4 md:gap-6 mb-8 border-b border-solid border-slate-200 pb-0 w-full">
            {TABS.map((tab) => {
              const isActive = tab.id === 'planetarium';
              return (
                <Link
                  key={tab.id}
                  href={tab.href}
                  className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded text-[10px] sm:text-[11px] md:text-xs font-bold tracking-wider transition-all select-none cursor-pointer flex items-center whitespace-nowrap w-fit ${
                    isActive
                      ? 'bg-[#052356] text-[#f37021] shadow-sm'
                      : 'text-gray-400 bg-transparent hover:text-[#052356]'
                  }`}
                >
                  {tab.star && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-3.5 h-3.5 mr-1.5 flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-400'}`}
                    >
                      <path d="M12 2l1.91 2.3 2.91-1.01.99 2.83 2.82.97-1 2.82 2.3 1.91-2.3 1.91 1 2.82-2.82.97-.99 2.83-2.91-1.01L12 22l-1.91-2.3-2.91 1.01-.99-2.83-2.82-.97 1-2.82-2.3-1.91 2.3-1.91-1-2.82 2.82-.97.99-2.83 2.91 1.01L12 2z" />
                    </svg>
                  )}
                  {tab.label}
                </Link>
              );
            })}
          </div>

          {/* Filters Row */}
          <div className="flex justify-end gap-4 mb-10">
            {/* Category Dropdown */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-4 pr-12 py-2.5 text-xs font-bold text-gray-500 bg-[#f4f4f4] border border-gray-200 rounded-lg outline-none appearance-none cursor-pointer min-w-[220px]"
              >
                <option value="all">Category</option>
                <option value="show">Sky Shows</option>
                <option value="gazing">Sky Gazing</option>
                <option value="workshop">Workshops</option>
                <option value="lecture">Lectures</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5.5 h-5.5 border border-[#f37021] rounded-full bg-transparent pointer-events-none">
                <ChevronDown className="w-3 h-3 text-[#f37021]" />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={selectedSort}
                onChange={(e) => {
                  setSelectedSort(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-4 pr-12 py-2.5 text-xs font-bold text-gray-500 bg-[#f4f4f4] border border-gray-200 rounded-lg outline-none appearance-none cursor-pointer min-w-[220px]"
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5.5 h-5.5 border border-[#f37021] rounded-full bg-transparent pointer-events-none">
                <ChevronDown className="w-3 h-3 text-[#f37021]" />
              </div>
            </div>
          </div>

          {/* Events Grid */}
          {paginatedEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-[#f4f4f4] border border-[#052356] rounded-2xl flex flex-col hover:shadow-md transition-all duration-300 pt-6 px-6 pb-0"
                >
                  {/* Date & Category Badge Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    {/* Date Badge */}
                    <div className="relative border border-gray-200 shadow-[3px_3px_0px_#fcd2af] rounded-lg px-3.5 py-3 bg-white text-center flex flex-col justify-center min-w-[85px] mt-1.5">
                      {/* Calendar Straps */}
                      <div className="absolute -top-2 left-4 w-1.5 h-3.5 bg-[#fcd2af] rounded-sm"></div>
                      <div className="absolute -top-2 right-4 w-1.5 h-3.5 bg-[#fcd2af] rounded-sm"></div>
                      
                      <span className="text-xl sm:text-2xl font-extrabold text-[#052356] leading-none mb-1">
                        {event.day}
                      </span>
                      <span className="text-[10px] font-bold text-gray-500 tracking-wide leading-none whitespace-nowrap">
                        {event.monthYear}
                      </span>
                    </div>

                    {/* Category Pill */}
                    <span className="bg-[#052356] text-white text-[10px] font-extrabold px-4 py-1.5 rounded uppercase tracking-wider">
                      {event.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`${spectral.className} text-lg sm:text-xl font-bold text-[#052356] leading-snug mb-3 hover:text-[#f37021] transition-colors line-clamp-2`}>
                    {event.title}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed mb-5 text-left font-medium line-clamp-3">
                    {event.description}
                  </p>

                  {/* Time (above divider) */}
                  <div className="flex items-center gap-1.5 text-[#052356] font-bold text-xs sm:text-[13px] mb-4">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{event.time}</span>
                  </div>

                  {/* Divider Line (edge-to-edge) */}
                  <div className="border-t border-slate-200/80 -mx-6 mb-0 mt-auto"></div>

                  {/* See Details link (below divider, aligned left) */}
                  <div className="flex items-center justify-start text-xs sm:text-[13px] py-3.5">
                    <Link
                      href={`/events/${event.id}`}
                      className="text-[#052356] hover:text-[#f37021] font-bold flex items-center gap-1 cursor-pointer select-none"
                    >
                      <span>See Details</span>
                      <span className="text-[#f37021] font-sans">↗</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full bg-white border border-gray-100 rounded-2xl p-12 text-center shadow-sm mb-12">
              <p className="text-sm font-semibold text-[#052356]">No events found matching your filters.</p>
            </div>
          )}

          {/* Centered Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 text-xs font-bold text-[#f37021] select-none">
              <button
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="hover:underline disabled:opacity-30 disabled:hover:no-underline cursor-pointer"
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-7 h-7 rounded flex items-center justify-center transition-all cursor-pointer ${
                    currentPage === pageNum
                      ? 'bg-[#f37021] text-white'
                      : 'text-[#052356] hover:bg-slate-50'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="hover:underline disabled:opacity-30 disabled:hover:no-underline cursor-pointer"
              >
                Next &gt;
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
