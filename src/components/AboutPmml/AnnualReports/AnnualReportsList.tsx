"use client";

import React, { useState, useMemo } from 'react';
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface Report {
  id: string;
  title: string;
  year: number;
  size: string;
  type: string;
  url: string;
}

const REPORTS_DATA: Report[] = [
  { id: 'r58', title: '58th Annual Report 2023-2024', year: 2024, size: '1.85 MB', type: 'PDF', url: '#' },
  { id: 'r57', title: '57th Annual Report 2022-2023', year: 2023, size: '2.10 MB', type: 'PDF', url: '#' },
  { id: 'r56', title: '56th Annual Report 2021-2022', year: 2022, size: '1.50 MB', type: 'PDF', url: '#' },
  { id: 'r55', title: '55th Annual Report 2020-2021', year: 2021, size: '1.72 MB', type: 'PDF', url: '#' },
  { id: 'r54', title: '54th Annual Report 2019-2020', year: 2020, size: '2.45 MB', type: 'PDF', url: '#' },
  { id: 'r53', title: '53rd Annual Report 2018-2019', year: 2019, size: '1.90 MB', type: 'PDF', url: '#' },
  { id: 'r52', title: '52nd Annual Report 2017-2018', year: 2018, size: '2.05 MB', type: 'PDF', url: '#' },
  { id: 'r51', title: '51st Annual Report 2016-2017', year: 2017, size: '1.65 MB', type: 'PDF', url: '#' },
  { id: 'r50', title: '50th Annual Report 2015-2016', year: 2016, size: '2.30 MB', type: 'PDF', url: '#' },
  { id: 'r49', title: '49th Annual Report 2014-2015', year: 2015, size: '1.80 MB', type: 'PDF', url: '#' },
  { id: 'r48', title: '48th Annual Report 2013-2014', year: 2014, size: '1.95 MB', type: 'PDF', url: '#' },
  { id: 'r47', title: '47th Annual Report 2012-2013', year: 2013, size: '2.20 MB', type: 'PDF', url: '#' },
  { id: 'r46', title: '46th Annual Report 2011-2012', year: 2012, size: '1.75 MB', type: 'PDF', url: '#' }
];

export default function AnnualReportsList() {
  // State for search and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and Sort reports
  const processedReports = useMemo(() => {
    let result = REPORTS_DATA.filter((report) =>
      report.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === "newest") {
      result.sort((a, b) => b.year - a.year);
    } else {
      result.sort((a, b) => a.year - b.year);
    }

    return result;
  }, [searchQuery, sortBy]);

  // Reset page when queries change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy, itemsPerPage]);

  // Pagination calculation
  const totalPages = Math.ceil(processedReports.length / itemsPerPage);
  const paginatedReports = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedReports.slice(startIndex, startIndex + itemsPerPage);
  }, [processedReports, currentPage, itemsPerPage]);

  return (
    <section className="w-full py-12 bg-white text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading */}
        <div className="mb-6 text-left">
          <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
          <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
            Annual Reports
          </h2>
        </div>

        {/* Filter and Search controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Search Box */}
          <div className="relative md:col-span-2">
            <input
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm text-black border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none transition-all bg-gray-50/20"
            />
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Sort By Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none bg-white text-gray-600 appearance-none cursor-pointer"
            >
              <option value="newest">Sort: Newest Year</option>
              <option value="oldest">Sort: Oldest Year</option>
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Items Per Page Dropdown */}
          <div className="relative">
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none bg-white text-gray-600 appearance-none cursor-pointer"
            >
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
              <option value={50}>50 per page</option>
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Documents Table */}
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f4f4f4] text-[#052356] border-b border-gray-200">
                  <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider">Title</th>
                  <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-40 whitespace-nowrap">Published Year</th>
                  <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-36">Type/Size</th>
                  <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-32">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedReports.length > 0 ? (
                  paginatedReports.map((report) => (
                    <tr key={report.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                      {/* Document Title */}
                      <td className="py-4 px-6 flex items-start gap-3">
                        <svg className="w-5.5 h-5.5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <a 
                          href={report.url} 
                          className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors leading-snug cursor-pointer"
                        >
                          {report.title}
                        </a>
                      </td>
                      
                      {/* Published Year */}
                      <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                        {report.year}
                      </td>

                      {/* Type/Size */}
                      <td className="py-4 px-6 text-center">
                        <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 border border-blue-100 rounded px-2 py-0.5 text-xs font-bold">
                          <span className="text-[10px] uppercase font-black">{report.type}</span>
                          <span className="w-1 h-1 bg-blue-300 rounded-full" />
                          <span className="text-[10.5px] font-medium">{report.size}</span>
                        </div>
                      </td>

                      {/* View Action */}
                      <td className="py-4 px-6 text-center">
                        <a
                          href={report.url}
                          className="inline-flex items-center justify-center gap-1 px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-bold tracking-wide transition-all select-none cursor-pointer"
                        >
                          <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>VIEW</span>
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-sm font-medium">No reports found matching your filters.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6 bg-white py-3 border-t border-gray-100 px-2 select-none">
            {/* Results summary */}
            <p className="text-xs text-gray-500 font-medium">
              Showing <span className="font-semibold text-gray-700">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
              <span className="font-semibold text-gray-700">
                {Math.min(currentPage * itemsPerPage, processedReports.length)}
              </span>{' '}
              of <span className="font-semibold text-gray-700">{processedReports.length}</span> entries
            </p>

            {/* Pagination buttons */}
            <div className="flex items-center gap-1.5">
              {/* Prev Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer"
              >
                Previous
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    currentPage === pageNum
                      ? 'bg-[#052356] text-white shadow-sm'
                      : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
