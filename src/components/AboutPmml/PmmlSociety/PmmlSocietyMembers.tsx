"use client";

import React, { useState, useMemo, useRef } from 'react';
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface Member {
  sNo: number;
  name: string;
  address: string;
  profile: string;
}

const MEMBERS_DATA: Member[] = [
  {
    sNo: 1,
    name: "Shri Narendra Modi",
    address: "Prime Minister of India, Prime Minister's Office, South Block, New Delhi - 110001.",
    profile: "President"
  },
  {
    sNo: 2,
    name: "Shri Rajnath Singh",
    address: "Union Minister of Defence, South Block, New Delhi 110001",
    profile: "Vice-President"
  },
  {
    sNo: 3,
    name: "Shri Amit Shah",
    address: "Union Minister of Home Affairs, North Block, New Delhi - 110001",
    profile: ""
  },
  {
    sNo: 4,
    name: "Smt Nirmala Sitharaman",
    address: "Union Minister of Finance, North Block, New Delhi -110 001",
    profile: ""
  },
  {
    sNo: 5,
    name: "Shri Dharmendra Pradhan",
    address: "Union Minister of Education, Shastri Bhawan, New Delhi-110 001",
    profile: ""
  },
  {
    sNo: 6,
    name: "Shri Gajendra Singh Shekhawat",
    address: "Union Minister of Culture and Tourism",
    profile: ""
  },
  {
    sNo: 7,
    name: "Shri Ashwini Vaishnaw",
    address: "Union Minister of Railways, Information and Broadcasting, Electronics and Information Technology",
    profile: ""
  },
  {
    sNo: 8,
    name: "Smt Smriti Irani",
    address: "Former Union Minister",
    profile: ""
  },
  {
    sNo: 9,
    name: "Shri Nripendra Misra",
    address: "Former Principal Secretary to the Prime Minister",
    profile: ""
  },
  {
    sNo: 10,
    name: "Dr A. Surya Prakash",
    address: "Former Chairman, Prasar Bharti",
    profile: ""
  },
  {
    sNo: 11,
    name: "Dr Swapan Dasgupta",
    address: "Journalist",
    profile: ""
  },
  {
    sNo: 12,
    name: "Prof Raghuvendra Tanwar",
    address: "Chairman, Indian Council for Historical Research",
    profile: ""
  },
  {
    sNo: 13,
    name: "Dr Sachchidanand Joshi",
    address: "Member Secretary, Indira Gandhi National Centre for the Arts",
    profile: ""
  },
  {
    sNo: 14,
    name: "Shri Prasoon Joshi",
    address: "Lyricist and Adman",
    profile: ""
  },
  {
    sNo: 15,
    name: "Dr Rizwan Kadri",
    address: "Researcher",
    profile: ""
  },
  {
    sNo: 16,
    name: "Dr Rajiv Kumar",
    address: "Former Vice Chairman, Niti Aayog",
    profile: ""
  },
  {
    sNo: 17,
    name: "Gen. Syed Ata Hussain",
    address: "Retired General, Indian Army",
    profile: ""
  },
  {
    sNo: 18,
    name: "Shri Sujan R. Chinoy",
    address: "Director General, Institute for Defence Studies and Analysis",
    profile: ""
  },
  {
    sNo: 19,
    name: "Shri Shekhar Kapur",
    address: "Indian Filmmaker",
    profile: ""
  },
  {
    sNo: 20,
    name: "Shri Waman Kendre",
    address: "Academician",
    profile: ""
  },
  {
    sNo: 21,
    name: "Shri Vasudeo Kamath",
    address: "Sanskar Bharti",
    profile: ""
  },
  {
    sNo: 22,
    name: "Shri Chamu Krishna Shastry",
    address: "Educationist",
    profile: ""
  },
  {
    sNo: 23,
    name: "Shri Sanjeev Sanyal",
    address: "Member of the Economic Advisory Council to the Prime Minister",
    profile: ""
  },
  {
    sNo: 24,
    name: "Dr K. K. Mohammad",
    address: "Eminent Archaeologist",
    profile: ""
  },
  {
    sNo: 25,
    name: "Dr B. R. Mani",
    address: "Director General, National Museum",
    profile: ""
  },
  {
    sNo: 26,
    name: "Prof Harmohinder Singh Bedi",
    address: "Academician",
    profile: ""
  },
  {
    sNo: 27,
    name: "Prof Tejasvi Venkappa Kattimani",
    address: "Vice Chancellor, Central Tribal University of Andhra Pradesh",
    profile: ""
  },
  {
    sNo: 28,
    name: "Shri T. S. Krishnan (Krishnan Subramanian)",
    address: "Eminent Historian",
    profile: ""
  },
  {
    sNo: 29,
    name: "Secretary",
    address: "Department of Expenditure, Ministry of Finance, Government of India",
    profile: "Ex-Officio Member"
  },
  {
    sNo: 30,
    name: "Secretary",
    address: "Ministry of Culture, Government of India",
    profile: "Ex-Officio Member"
  },
  {
    sNo: 31,
    name: "Secretary",
    address: "Ministry of Housing and Urban Affairs, Government of India",
    profile: "Ex-Officio Member"
  },
  {
    sNo: 32,
    name: "Chairman",
    address: "University Grants Commission",
    profile: "Ex-Officio Member"
  },
  {
    sNo: 33,
    name: "Representative of Jawahar Lal Memorial Fund",
    address: "Jawahar Lal Memorial Fund",
    profile: "Ex-Officio Member"
  },
  {
    sNo: 34,
    name: "Shri Ashwani Lohani",
    address: "Director, Prime Ministers Museum and Library",
    profile: "Ex-Officio Member"
  }
];

export default function PmmlSocietyMembers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemsPerPage = 10;

  const filteredMembers = useMemo(() => {
    return MEMBERS_DATA.filter((member) => {
      return (
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.profile.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

  // Reset page when criteria changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const paginatedMembers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredMembers.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredMembers, currentPage]);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      return next;
    });
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between border-b border-gray-200/50 pb-4">
          <div className="text-left">
            {/* Top accent line */}
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              List of Members of the <span className="text-[#052356]">PMML Society</span>
            </h2>
          </div>

          {/* Search container aligned to right corner of heading */}
          <div className="flex items-center gap-2 relative mb-1.5">
            <div
              className={`transition-all duration-300 ease-in-out flex items-center relative ${
                isSearchOpen ? "w-40 sm:w-64 opacity-100" : "w-0 opacity-0 pointer-events-none"
              }`}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Search members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-8 py-1.5 text-xs sm:text-sm text-[#052356] placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <button
              onClick={toggleSearch}
              className="p-1.5 text-[#f37021] hover:bg-[#f37021]/10 rounded-full transition-all focus:outline-none active:scale-95 cursor-pointer flex-shrink-0"
              aria-label="Toggle search"
              title="Search members"
            >
              <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all hover:shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f4f4f4] text-[#052356] border-b border-slate-200">
                  <th className="py-4 px-6 text-sm font-bold text-center w-20 whitespace-nowrap">S. No.</th>
                  <th className="py-4 px-6 text-sm font-bold">Name</th>
                  <th className="py-4 px-8 text-sm font-bold">Address</th>
                  <th className="py-4 px-6 text-sm font-bold text-center w-48">Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredMembers.length > 0 ? (
                  paginatedMembers.map((member, index) => {
                    const isPresident = member.profile === "President";
                    const isVicePresident = member.profile === "Vice-President";
                    const isExOfficio = member.profile === "Ex-Officio Member";

                    return (
                      <tr
                        key={member.sNo}
                        className={`hover:bg-[#f4f4f4]/50 transition-colors duration-150 ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                        }`}
                      >
                        <td className="py-4 px-6 text-sm text-gray-500 font-medium text-center">
                          {member.sNo}
                        </td>
                        <td className="py-4 px-6 text-sm text-[#052356] font-bold">
                          {member.name}
                        </td>
                        <td className="py-4 px-8 text-sm text-gray-600 leading-relaxed">
                          {member.address}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {member.profile ? (
                            <span
                              className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide ${
                                isPresident
                                  ? "bg-red-50 text-red-600 border border-red-100"
                                  : isVicePresident
                                  ? "bg-orange-50 text-[#f37021] border border-orange-100"
                                  : isExOfficio
                                  ? "bg-blue-50 text-[#052356] border border-blue-100"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {member.profile}
                            </span>
                          ) : null}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-sm font-medium">No members found matching your filters.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden flex flex-col gap-4">
          {filteredMembers.length > 0 ? (
            paginatedMembers.map((member) => {
              const isPresident = member.profile === "President";
              const isVicePresident = member.profile === "Vice-President";
              const isExOfficio = member.profile === "Ex-Officio Member";

              return (
                <div
                  key={member.sNo}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <span className="w-7 h-7 flex items-center justify-center bg-[#f4f4f4] text-xs font-bold text-[#052356] rounded-lg">
                      {member.sNo}
                    </span>
                    {member.profile && (
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wide ${
                          isPresident
                            ? "bg-red-50 text-red-600 border border-red-100"
                            : isVicePresident
                            ? "bg-orange-50 text-[#f37021] border border-orange-100"
                            : isExOfficio
                            ? "bg-blue-50 text-[#052356] border border-blue-100"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {member.profile}
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-[#052356] text-base mb-2">
                    {member.name}
                  </h3>

                  <p className="text-gray-500 text-xs leading-relaxed">
                    {member.address}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center text-gray-400 border border-gray-100">
              No members found matching your filters.
            </div>
          )}
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6 bg-white py-3 border border-gray-100 px-4 rounded-xl shadow-sm select-none">
            {/* Results summary */}
            <p className="text-xs text-gray-500 font-medium text-left">
              Showing <span className="font-semibold text-gray-700">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
              <span className="font-semibold text-gray-700">
                {Math.min(currentPage * itemsPerPage, filteredMembers.length)}
              </span>{' '}
              of <span className="font-semibold text-gray-700">{filteredMembers.length}</span> entries
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
