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
    name: "Shri Sujan R. Chinoy",
    address: "Director, Institute for Defence Studies & Analyses (IDSA)",
    profile: "Chairman"
  },
  {
    sNo: 2,
    name: "Shri Sanjeev Sanyal",
    address: "Member of the Economic Advisory Council to the Prime Minister",
    profile: ""
  },
  {
    sNo: 3,
    name: "Dr T. S. Krishnan (Krishnan Subramanian)",
    address: "Eminent Historian",
    profile: ""
  },
  {
    sNo: 4,
    name: "Shri Ashwani Lohani",
    address: "Director, Prime Ministers Museum and Library",
    profile: ""
  },
  {
    sNo: 5,
    name: "Additional Secretary & Financial Advisor",
    address: "Ministry of Culture, Room No.318, 3rd Floor, Shastri Bhawan, New Delhi - 110001",
    profile: ""
  }
];

export default function FinanceCommitteeMembers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredMembers = useMemo(() => {
    return MEMBERS_DATA.filter((member) => {
      return (
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.profile.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

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
              Members of the <span className="text-[#052356]">Finance Committee</span>
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
                  filteredMembers.map((member, index) => {
                    const isChairman = member.profile === "Chairman";

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
                                isChairman
                                  ? "bg-orange-50 text-[#f37021] border border-orange-100"
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
                        <p className="text-sm font-medium">No members found matching your search.</p>
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
            filteredMembers.map((member) => {
              const isChairman = member.profile === "Chairman";

              return (
                <div
                  key={member.sNo}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 text-left"
                >
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <span className="w-7 h-7 flex items-center justify-center bg-[#f4f4f4] text-xs font-bold text-[#052356] rounded-lg">
                      {member.sNo}
                    </span>
                    {member.profile && (
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wide ${
                          isChairman
                            ? "bg-orange-50 text-[#f37021] border border-orange-100"
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
              No members found matching your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
