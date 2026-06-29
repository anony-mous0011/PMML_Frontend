"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";
import { Search, ChevronDown, Eye, BookOpen } from "lucide-react";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface Publication {
  id: string;
  title: string;
  author: string;
  category: string;
  year: number;
  size: string;
}

const PUBLICATIONS_DATA: Publication[] = [
  { id: "p1", title: "JAYAPRAKASH NARAYAN SELECTED WORKS Volume Six (1950-1954)", author: "Edited by Bimal Prasad", category: "Selected Works", year: 2003, size: "4.2 MB" },
  { id: "p2", title: "JAYAPRAKASH NARAYAN SELECTED WORKS Volume Five (1948-1950)", author: "Edited by Bimal Prasad", category: "Selected Works", year: 2003, size: "3.8 MB" },
  { id: "p3", title: "JAYAPRAKASH NARAYAN SELECTED WORKS: Volume Four (1946-1948)", author: "Edited by Bimal Prasad", category: "Selected Works", year: 2003, size: "4.5 MB" },
  { id: "p4", title: "JAYAPRAKASH NARAYAN SELECTED WORKS: Volume Three (1939-1946)", author: "Edited by Bimal Prasad", category: "Selected Works", year: 2003, size: "3.9 MB" },
  { id: "p5", title: "JAYAPRAKASH NARAYAN SELECTED WORKS: Volume Two (1936-1939)", author: "Edited by Bimal Prasad", category: "Selected Works", year: 2003, size: "4.1 MB" },
  { id: "p6", title: "JAYAPRAKASH NARAYAN SELECTED WORKS Volume One (1929 - 1935)", author: "Edited by Bimal Prasad", category: "Selected Works", year: 2000, size: "3.6 MB" },
  { id: "p7", title: "The Indian National Congress: A Reconstruction Volume Two: 1919-1923", author: "Dr. Iqbal Singh", category: "Studies", year: 1988, size: "2.8 MB" },
  { id: "p8", title: "The Indian National Congress: A Reconstruction Volume One: 1885-1918", author: "Dr. Iqbal Singh", category: "Studies", year: 1987, size: "2.5 MB" },
  { id: "p9", title: "INDIAN FOREIGN POLICY: The Indira Gandhi Years", author: "A. K. Damodaran, U. S. Bajpai", category: "Policy & Politics", year: 1990, size: "3.2 MB" },
  { id: "p10", title: "The Agrarian Drama: The Leftists and the Rural Poor in India 1934-1951", author: "Amit Kumar Gupta", category: "Studies", year: 1996, size: "2.9 MB" },
  { id: "p11", title: "NORTH-EAST INDIA: A BIBLIOGRAPHY", author: "PMML Research Team", category: "Bibliography", year: 1985, size: "1.8 MB" },
  { id: "p12", title: "JAWAHARLAL NEHRU ON SCIENCE AND SOCIETY", author: "Edited by Baldev Singh", category: "Selected Works", year: 1988, size: "3.0 MB" },
  { id: "p13", title: "WOMEN IN INDIA: A BIBLIOGRAPHY", author: "PMML Research Team", category: "Bibliography", year: 1982, size: "1.5 MB" },
  { id: "p14", title: "JAWAHARLAL NEHRU: A Communicator and Democratic Leader", author: "A. K. Damodaran", category: "Studies", year: 1997, size: "2.3 MB" },
  { id: "p15", title: "UNDERSTANDING THE POST-COLONIAL WORLD THEORY AND METHOD", author: "Edited by Neera Chandhoke", category: "Studies", year: 1994, size: "2.7 MB" },
  { id: "p16", title: "SOCIALISATION EDUCATION AND WOMEN", author: "Edited by Karuna Chanana", category: "Studies", year: 1988, size: "2.4 MB" },
  { id: "p17", title: "Socialism In India", author: "Edited by B. R. Nanda", category: "Studies", year: 1972, size: "3.1 MB" },
  { id: "p18", title: "The Resurgence of Indian Women", author: "Aruna Asaf Ali", category: "Studies", year: 1991, size: "2.6 MB" },
  { id: "p19", title: "SOCIAL TRANSFORMATION AND CREATIVE IMAGINATION", author: "Edited by Sudhir Chandra", category: "Studies", year: 1984, size: "2.9 MB" },
  { id: "p20", title: "Peace and Conflict Resolution in the World Community", author: "Edited by Anima Bose", category: "Studies", year: 1992, size: "3.3 MB" },
  { id: "p21", title: "Philosophical Theory and Social Reality", author: "Edited by Ravinder Kumar", category: "Studies", year: 1984, size: "2.8 MB" },
  { id: "p22", title: "STUDIES IN MODERN INDIAN HISTORY", author: "Edited by B. R. Nanda, V. C. Joshi", category: "Studies", year: 1972, size: "3.5 MB" },
  { id: "p23", title: "SRI AUROBINDO An Interpretation", author: "Edited by Ravinder Kumar", category: "Studies", year: 1973, size: "2.1 MB" },
  { id: "p24", title: "Exploring Gender Equations: Colonial and Post-Colonial India", author: "Shakti Kak, Biswamoy Pati", category: "Studies", year: 2005, size: "3.4 MB" },
  { id: "p25", title: "India in the Age of Globalization", author: "Edited by Priyankar Upadhyaya", category: "Policy & Politics", year: 2002, size: "2.7 MB" },
  { id: "p26", title: "वैश्वीकरण के परिप्रेक्ष्य में हिन्दी", author: "नेहरू स्मारक संग्रहालय एवं पुस्तकालय", category: "Policy & Politics", year: 2003, size: "2.9 MB" },
  { id: "p27", title: "KHAN ABDUL GHAFFAR KHAN", author: "PMML Research Team", category: "Studies", year: 1984, size: "1.9 MB" },
  { id: "p28", title: "Rammohun Roy and the Process of Modernization in India", author: "Edited by V. C. Joshi", category: "Studies", year: 1975, size: "2.5 MB" },
  { id: "p29", title: "SCIENCE AND TECHNOLOGY IN INDIA", author: "PMML Research Team", category: "Studies", year: 1978, size: "3.1 MB" },
  { id: "p30", title: "भारतीय गणतंत्र में हिंदी", author: "नेहरू स्मारक संग्रहालय एवं पुस्तकालय", category: "Studies", year: 2000, size: "2.2 MB" },
  { id: "p31", title: "GANDHI AND NEHRU", author: "B. R. Nanda, P. C. Joshi, Raj Krishna", category: "Studies", year: 1979, size: "2.7 MB" },
  { id: "p32", title: "Kargil: The Crisis and its Implications", author: "PMML Research Team", category: "Policy & Politics", year: 1999, size: "2.4 MB" },
  { id: "p33", title: "Democracy and Education in India", author: "Edited by Krishna Kumar", category: "Studies", year: 1993, size: "2.6 MB" },
  { id: "p34", title: "THE AFGHANISTAN CRISIS", author: "PMML Research Team", category: "Policy & Politics", year: 1981, size: "3.0 MB" },
  { id: "p35", title: "Jawaharlal Nehru on Science", author: "Nehru Memorial Museum & Library", category: "Selected Works", year: 1985, size: "2.8 MB" },
  { id: "p36", title: "Bengal Famine of 1943: The American Response", author: "M. S. Venkataramani", category: "Studies", year: 1973, size: "3.5 MB" },
];

export default function PublicationsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("title-asc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter Categories
  const categories = ["All", "Selected Works", "Studies", "Bibliography", "Policy & Politics"];

  // Filter and Sort Data
  const processedPublications = useMemo(() => {
    let result = PUBLICATIONS_DATA.filter((pub) => {
      const matchesSearch =
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory =
        selectedCategory === "All" || pub.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "title-asc") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "title-desc") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "year-newest") {
      result.sort((a, b) => b.year - a.year);
    } else if (sortBy === "year-oldest") {
      result.sort((a, b) => a.year - b.year);
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  // Reset page on filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  // Pagination calculations
  const totalPages = Math.ceil(processedPublications.length / itemsPerPage);
  const paginatedPublications = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedPublications.slice(startIndex, startIndex + itemsPerPage);
  }, [processedPublications, currentPage]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Hero Banner ── */}
      <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/DSC_4568.jpg"
          alt="PMML Research Publications"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>


      {/* ── Main Introduction Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:gap-12 w-full">
            
            {/* Main 2-column Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
              {/* Left Column: Image */}
              <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
                <Image
                  src="/research-publication.png"
                  alt="Publications Division Archival Storage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Column: Text */}
              <div className="lg:col-span-6 flex flex-col justify-start h-full">
                {/* Orange Accent Line */}
                <div className="w-12 h-1 bg-[#f37021] mb-2.5" />

                {/* Heading */}
                <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                  Publications
                </h2>

                <p className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed text-justify">
                  The Publications Division of the Prime Ministers Museum and Library (erstwhile Nehru Memorial Museum and Library (NMML)), has been a key instrument in advancing and disseminating scholarly research on modern and contemporary Indian history, society, politics, and culture. The Division began its publishing programme in December 1971 with Socialism in India, marking PMML&apos;s entry into institutional publishing. During the 1970s, it produced several important works based on lectures delivered at PMML, including Studies in Modern Indian History, Sri Aurobindo—An Interpretation, Bengal Famine of 1943: The American Response, and edited volumes on Rammohan Roy, Indian foreign policy during the Nehru years, women&apos;s history, and science and technology. These publications reflected PMML&apos;s commitment to critical historical inquiry and contemporary relevance, as well as its effort to reach wider audiences.
                </p>
              </div>
            </div>

            {/* Full-width Paragraph */}
            <div className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed text-justify mt-4">
              <p>
                The Publications Division of the Prime Ministers Museum and Library (erstwhile Nehru Memorial Museum and Library (NMML)), has been a key instrument in advancing and disseminating scholarly research on modern and contemporary Indian history, society, politics, and culture. The Division began its publishing programme in December 1971 with Socialism in India, marking PMML&apos;s entry into institutional publishing. During the 1970s, it produced several important works based on lectures delivered at PMML, including Studies in Modern Indian History, Sri Aurobindo—An Interpretation, Bengal Famine of 1943: The American Response, and edited volumes on Rammohan Roy, Indian foreign policy during the Nehru years, women&apos;s history, and science and technology. These publications reflected PMML&apos;s commitment to critical historical inquiry and contemporary relevance, as well as its effort to reach wider audiences.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Interactive Catalog Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 select-none">
            <div>
              <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
                Search Publications
              </h2>
            </div>
          </div>

          {/* Filtering Control Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
            {/* Search Input */}
            <div className="relative md:col-span-5">
              <input
                type="text"
                placeholder="Search by title, author, editor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm text-black border border-gray-200 rounded-xl focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none transition-all bg-white shadow-sm"
              />
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-4 h-4" />
              </div>
            </div>

            {/* Category Filter Dropdown */}
            <div className="relative md:col-span-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none bg-white text-gray-600 appearance-none cursor-pointer shadow-sm"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    Category: {cat}
                  </option>
                ))}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none bg-white text-gray-600 appearance-none cursor-pointer shadow-sm"
              >
                <option value="title-asc">Sort: Title (A-Z)</option>
                <option value="title-desc">Sort: Title (Z-A)</option>
                <option value="year-newest">Sort: Newest Year</option>
                <option value="year-oldest">Sort: Oldest Year</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Publications Display */}
          {paginatedPublications.length > 0 ? (
            viewMode === "grid" ? (
              /* Grid View layout with stylized book covers */
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
                {paginatedPublications.map((pub) => (
                  <div key={pub.id} className="flex flex-col items-center text-center group">
                    {/* Stylized Book Cover */}
                    <div className="relative w-full aspect-[3/4.2] rounded-lg overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.06)] group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition-all duration-300 transform group-hover:-translate-y-1.5 cursor-pointer bg-gradient-to-br from-[#fbfaf7] to-[#ede8d9] border border-[#dcd6be] p-4 flex flex-col justify-between text-left select-none">
                      
                      {/* Spine / Book bind shadow */}
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-r from-black/15 via-transparent to-transparent shadow-inner" />
                      <div className="absolute left-1.5 top-0 bottom-0 w-[1px] bg-white/20" />

                      {/* Header info */}
                      <div className="flex flex-col gap-0.5 z-10">
                        <span className="text-[7.5px] font-black uppercase tracking-widest text-[#f37021]">{pub.category}</span>
                        <div className="h-[2px] w-4 bg-[#f37021] mt-0.5" />
                      </div>

                      {/* Book Title */}
                      <h3 className={`${spectral.className} text-[9.5px] sm:text-[10.5px] font-bold text-[#052356] leading-snug line-clamp-5 z-10 uppercase pr-1`}>
                        {pub.title}
                      </h3>

                      {/* Footer info */}
                      <div className="flex flex-col justify-end z-10 pt-2 border-t border-[#dfd8bf]">
                        <span className="text-[8px] text-gray-500 font-semibold truncate leading-none mb-1">{pub.author}</span>
                        <span className="text-[7.5px] text-gray-400 font-bold leading-none uppercase">{pub.year} &bull; {pub.size}</span>
                      </div>

                      {/* Hover action overlay */}
                      <div className="absolute inset-0 bg-[#052356]/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center z-20">
                        <span className="text-white text-[11px] font-bold uppercase tracking-wider mb-3">View PDF</span>
                        <button
                          className="w-8 h-8 rounded-full bg-[#f37021] text-white flex items-center justify-center shadow-lg hover:bg-[#d85c15] transition-all duration-200 active:scale-90 cursor-pointer"
                          aria-label="View Publication"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>

                    </div>

                    {/* Text Title under Book Cover */}
                    <h4 className="mt-3.5 text-[11px] sm:text-xs font-bold text-gray-700 leading-snug line-clamp-2 max-w-[130px] hover:text-[#f37021] transition-colors cursor-pointer uppercase">
                      {pub.title}
                    </h4>
                  </div>
                ))}
              </div>
            ) : (
              /* List View layout: Table layout matching Annual Reports page style */
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#f4f4f4] text-[#052356] border-b border-gray-200">
                        <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider">Title</th>
                        <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-40">Category</th>
                        <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-48">Author/Editor</th>
                        <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-28">Year</th>
                        <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-28">Size</th>
                        <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-28">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {paginatedPublications.map((pub) => (
                        <tr key={pub.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                          {/* Title column */}
                          <td className="py-4 px-6 flex items-start gap-3">
                            <BookOpen className="w-4.5 h-4.5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <a href="#" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-blue-600 uppercase transition-colors leading-snug cursor-pointer">
                              {pub.title}
                            </a>
                          </td>

                          {/* Category column */}
                          <td className="py-4 px-6 text-center text-xs text-gray-600 font-semibold whitespace-nowrap">
                            {pub.category}
                          </td>

                          {/* Author column */}
                          <td className="py-4 px-6 text-center text-xs text-gray-500 font-medium">
                            {pub.author}
                          </td>

                          {/* Year column */}
                          <td className="py-4 px-6 text-center text-xs text-gray-600 font-bold">
                            {pub.year}
                          </td>

                          {/* Size column */}
                          <td className="py-4 px-6 text-center">
                            <span className="inline-block bg-blue-50 text-blue-600 border border-blue-100 rounded px-2 py-0.5 text-xs font-bold uppercase">
                              {pub.size}
                            </span>
                          </td>

                          {/* Action column */}
                          <td className="py-4 px-6 text-center">
                            <button
                              className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-bold tracking-wide transition-all select-none cursor-pointer"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>VIEW</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          ) : (
            /* Empty state */
            <div className="bg-white py-16 text-center text-gray-500 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex flex-col items-center justify-center gap-2">
                <BookOpen className="w-10 h-10 text-gray-300" />
                <p className="text-sm font-semibold text-gray-600">No publications found matching your filters.</p>
              </div>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-8 bg-white py-3.5 border-t border-gray-100 rounded-xl px-6 select-none shadow-sm">
              <p className="text-xs text-gray-500 font-bold">
                Showing <span className="font-extrabold text-gray-700">{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
                <span className="font-extrabold text-gray-700">
                  {Math.min(currentPage * itemsPerPage, processedPublications.length)}
                </span>{" "}
                of <span className="font-extrabold text-gray-700">{processedPublications.length}</span> publications
              </p>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3.5 py-2 rounded-lg border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      currentPage === pageNum
                        ? "bg-[#052356] text-white shadow-md"
                        : "border border-gray-200 text-gray-600 hover:bg-gray-50 bg-white"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3.5 py-2 rounded-lg border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
