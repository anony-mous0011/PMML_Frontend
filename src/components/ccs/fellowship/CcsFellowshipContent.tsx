"use client";

import React, { useState, useMemo } from 'react';
import Image from "next/image";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface FellowshipDoc {
  id: string;
  title: string;
  url: string;
  year?: number;
  size?: string;
  type?: string;
}

interface FellowshipCategory {
  id: string;
  title: string;
  docs: FellowshipDoc[];
}

const FELLOWSHIP_CATEGORIES: FellowshipCategory[] = [
  {
    id: 'cat1',
    title: 'PMML Fellowships 2026 – Application Forms',
    docs: [
      { id: 'cat1-d1', title: 'Scholar in Residence Programme', url: '#', year: 2026, type: 'PDF', size: '1.2 MB' },
      { id: 'cat1-d2', title: 'PMML Fellowship Programme', url: '#', year: 2026, type: 'PDF', size: '1.5 MB' },
      { id: 'cat1-d3', title: 'Atal Bihari Vajpayee Fellowship', url: '#', year: 2026, type: 'PDF', size: '1.1 MB' },
      { id: 'cat1-d4', title: 'Advertisement 2026 (English)', url: '#', year: 2026, type: 'PDF', size: '750 KB' },
    ]
  },
  {
    id: 'cat2',
    title: 'Fellowship Result 2025',
    docs: [
      { id: 'cat2-d1', title: 'Fellowship Result 2025', url: '#', year: 2025, type: 'PDF', size: '920 KB' },
    ]
  },
  {
    id: 'cat3',
    title: 'Applications Invited – Previous Years',
    docs: [
      { id: 'cat3-d1', title: 'Applications are invited for Prime Ministers Museum and Library Fellowships 2025 and Atal Bihari Vajpayee Fellowship 2025', url: '#', year: 2025, type: 'PDF', size: '1.4 MB' },
      { id: 'cat3-d2', title: 'Applications are invited for Prime Ministers Museum and Library Fellowships 2024 and Atal Bihari Vajpayee Fellowship 2024', url: '#', year: 2024, type: 'PDF', size: '1.3 MB' },
    ]
  },
  {
    id: 'cat4',
    title: 'Bio-Note Of Fellows',
    docs: [
      { id: 'cat4-d1', title: 'Bio-Note of Fellows of Prime Ministers Museum & Library', url: '#', type: 'PDF', size: '1.8 MB' },
    ]
  },
  {
    id: 'cat5',
    title: 'Tagore National Fellowship For Cultural Research',
    docs: [
      { id: 'cat5-d1', title: 'Link for Tagore National Fellowship for Cultural Research', url: '#' },
      { id: 'cat5-d2', title: 'Guidelines-Tagore National Fellowship for Cultural Research (TNFCR)', url: '#', type: 'PDF', size: '1.1 MB' },
      { id: 'cat5-d3', title: 'Application Form-Tagore National Fellowship for Cultural Research (TNFCR)', url: '#', type: 'PDF', size: '640 KB' },
    ]
  },
  {
    id: 'cat6',
    title: 'Tagore National Fellowship For Cultural Research – Final Reports',
    docs: [
      { id: 'cat6-d1', title: 'Dr. Baby Francis Kulirani, Indira Gandhi Rastriya Manav Sangrahalaya, Bhopal, Conserving the Civilizational Heritages of Kabini River Basin through New Museum Movement Strategies', url: '#', type: 'PDF', size: '2.1 MB' },
      { id: 'cat6-d2', title: 'Dr. Subha M.M, Anthropological Survey of India, Kolkata, Structural Analysis of Tribal Literature: A Study with Special Focus on Oral Traditions and Myths of Tribes of Wayanad District of Kerala', url: '#', type: 'PDF', size: '1.9 MB' },
      { id: 'cat6-d3', title: 'Prof. Tripurari Sharma, National School of Drama, New Delhi, The Play of Memory and Imagination in the Arena of Performance: An Attempt to Contextualize the History and Legend of Amar Singh Rathore as Taken Forward by Various Performance', url: '#', type: 'PDF', size: '2.4 MB' },
      { id: 'cat6-d4', title: 'Dr. Arpita Basu, Anthropological Survey of India, Kolkata, Cultural Mapping of Tribal Handicrafts: Evaluation and Status Survey as an Option for Livelihood of Tribal Community in the States of Arunachal Pradesh, Meghalaya and Sikkim', url: '#', type: 'PDF', size: '2.8 MB' },
      { id: 'cat6-d5', title: 'Dr. Abhishek Kumar (S), Indira Gandhi National Centre for the Arts, New Delhi, A Survey Research into the Cultural Practices of Traditional Philosophical Knowledge in Mithila (North Bihar)', url: '#', type: 'PDF', size: '1.7 MB' },
      { id: 'cat6-d6', title: 'Smt. Binita Devi (S), North East Zone Cultural Centre, Dimapur, A Comparative Study on Puppeteer of Select States of India to Compete and Survive in the Competitive World', url: '#', type: 'PDF', size: '1.5 MB' },
      { id: 'cat6-d7', title: 'Prof. Dipak C Ghosh (S), Eastern Zonal Cultural Centre, Kolkata, Emotion Cognition Based Categorization and Learning of Indian Classical Music (guru Shishya Parampara online) Using Novel Non-linear Computing Technique', url: '#', type: 'PDF', size: '3.1 MB' },
      { id: 'cat6-d8', title: 'Ms. Vrinda Agrawal, Government Museum and Art Gallery, Chandigarh, Provenance Research of the Miniature Paintings in the Chandigarh Museum', url: '#', type: 'PDF', size: '1.3 MB' },
      { id: 'cat6-d9', title: 'Prof. Choodamani Nandagopal, National Museum, New Delhi, Imagery of female messengers (Dutis/Sakhis) in Indian Art Thought and Literature - A critical appraisal on their socio-cultural relevance (from the art collections of National Museum, Delhi)', url: '#', type: 'PDF', size: '2.6 MB' },
    ]
  }
];

export default function CcsFellowshipContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Filter and Sort documents by category
  const processedCategories = useMemo(() => {
    return FELLOWSHIP_CATEGORIES.map((category) => {
      let filteredDocs = category.docs;

      if (searchQuery) {
        filteredDocs = filteredDocs.filter((doc) =>
          doc.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      const sortedDocs = [...filteredDocs];
      if (sortBy === "alphabetical") {
        sortedDocs.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortBy === "newest") {
        sortedDocs.sort((a, b) => (b.year || 0) - (a.year || 0));
      }

      return {
        ...category,
        docs: sortedDocs,
      };
    }).filter((category) => category.docs.length > 0);
  }, [searchQuery, sortBy]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Hero Banner ── */}
        <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/DSC_4568.jpg"
          alt="PMML Center for Contemporary Studies"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── Main content Section ── */}
      <section className="w-full py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Heading */}
          <div className="mb-6 text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Fellowship
            </h2>
          </div>

          {/* Filter and Search controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Search Box */}
            <div className="relative md:col-span-2">
              <input
                type="text"
                placeholder="Search fellowships, guidelines, announcements, and reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm text-black border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none transition-all bg-gray-50/20"
              />
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Sort By Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none bg-white text-gray-600 appearance-none cursor-pointer"
              >
                <option value="default">Sort: Default Order</option>
                <option value="alphabetical">Sort: Alphabetical</option>
                <option value="newest">Sort: Newest Year</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Categories List */}
          {processedCategories.length > 0 ? (
            <div className="flex flex-col gap-6 lg:gap-8">
              {processedCategories.map((category) => {
                return (
                  <div
                    key={category.id}
                    className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Card Header */}
                    <div className="bg-[#f4f4f4] border-b border-gray-100 px-6 py-4 border-t-4 border-[#f37021]">
                      <h3 className={`${spectral.className} text-base sm:text-lg font-bold text-[#052356] leading-snug`}>
                        {category.title}
                      </h3>
                    </div>

                    {/* Card Body - List of documents */}
                    <div className="divide-y divide-gray-100">
                      {category.docs.map((doc) => (
                        <div
                          key={doc.id}
                          className="p-4 px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/30 transition-colors duration-150"
                        >
                          {/* Left Side: Icon + Title */}
                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            {/* File / Link Icon */}
                            {doc.type === 'PDF' ? (
                              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                              </svg>
                            )}

                            {/* Doc Title */}
                            <a
                              href={doc.url}
                              className="text-sm font-semibold text-gray-700 hover:text-[#f37021] transition-colors leading-snug break-words"
                            >
                              {doc.title}
                            </a>
                          </div>

                          {/* Right Side: Badges + Action button */}
                          <div className="flex items-center gap-3 self-end sm:self-auto flex-shrink-0">
                            {/* Badges */}
                            {(doc.type || doc.size || doc.year) && (
                              <div className="inline-flex items-center gap-1.5 bg-blue-50/50 border border-blue-100/50 rounded px-2.5 py-0.5 text-xs font-semibold text-blue-600">
                                {doc.type && <span className="uppercase text-[9px] font-bold tracking-wider">{doc.type}</span>}
                                {doc.type && doc.size && <span className="w-1 h-1 bg-blue-300 rounded-full" />}
                                {doc.size && <span className="text-[10px] font-medium">{doc.size}</span>}
                                {doc.year && (doc.type || doc.size) && <span className="w-1 h-1 bg-blue-300 rounded-full" />}
                                {doc.year && <span className="text-[10px] font-medium">{doc.year}</span>}
                              </div>
                            )}

                            {/* View / Download Button */}
                            <a
                              href={doc.url}
                              className="inline-flex items-center justify-center p-1.5 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all select-none cursor-pointer hover:border-blue-600"
                              title={doc.type === 'PDF' ? "Download PDF" : "Open Link"}
                            >
                              {doc.type === 'PDF' ? (
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                              ) : (
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                              )}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white border border-gray-100 rounded-xl p-12 text-center text-gray-500 shadow-sm">
              <div className="flex flex-col items-center justify-center gap-2">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-medium">No documents found matching your search.</p>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
