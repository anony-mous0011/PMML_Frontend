"use client";

import React, { useState, useMemo, useRef } from 'react';
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface WhosWhoMember {
  sNo: number;
  department: string;
  name: string;
  designation: string;
  email: string;
  contact: string;
}

const WHOS_WHO_DATA: WhosWhoMember[] = [
  { sNo: 1, department: "—", name: "Shri Nripendra Misra", designation: "Chairman, Executive Council", email: "", contact: "" },
  { sNo: 2, department: "—", name: "Shri Ashwani Lohani", designation: "Director", email: "director@nmml.gov.in", contact: "23015333" },
  { sNo: 3, department: "—", name: "Dr. Ravi K. Mishra", designation: "Joint Director", email: "deputydirector@nmml.gov.in", contact: "23017599" },
  { sNo: 4, department: "Finance Wing", name: "Shri Garud Rahul Deelip", designation: "Financial Controller", email: "garud.rahul@gov.in", contact: "23014273" },
  { sNo: 5, department: "Museum", name: "Dr. Priyanka Mishra", designation: "Chief Executive Officer", email: "ceo.pm.museum@gmail.com", contact: "" },
  { sNo: 6, department: "Research and Publications Division", name: "Dr. Narendra Shukla", designation: "Head Research and Publications Division", email: "hrpd@nmml.gov.in", contact: "21412012" },
  { sNo: 7, department: "Library", name: "Shri Vikas Kumar", designation: "Library and Information Officer", email: "lio@nmml.gov.in", contact: "21411895" },
  { sNo: 8, department: "Museum", name: "Shri Indranil Sanyal", designation: "Officer on Special Duty", email: "sanyalindranilncsm@gmail.com", contact: "21410360" },
  { sNo: 9, department: "Publications", name: "Dr. Nisar Kizhakkayil", designation: "Research Officer", email: "aroresearch@nmml.gov.in", contact: "" },
  { sNo: 10, department: "Administration", name: "Smt. Nidhi Srivastava", designation: "Administrative Officer", email: "ao@nmml.gov.in", contact: "23014486" },
  { sNo: 11, department: "Reprography", name: "Shri Vipul Vasisht", designation: "Senior Reprography Officer", email: "sro@nmml.gov.in", contact: "23012752" },
  { sNo: 12, department: "Oral History Division", name: "Dr. L. Haokip", designation: "Research Officer", email: "ohdnmml@gmail.com", contact: "23016140" },
  { sNo: 13, department: "Research", name: "Shri Mukesh Kumar", designation: "Research Officer", email: "mukeshsharma@nmml.gov.in", contact: "" },
  { sNo: 14, department: "The Archives", name: "Smt. Priyamvada Shome", designation: "Consultant (Archives)", email: "pmmlmss1@gmail.com", contact: "23014475" },
  { sNo: 15, department: "Finance Wing", name: "Shri Sunil Rathi", designation: "Finance and Audit Officer", email: "fao-nmml@gov.in", contact: "" },
  { sNo: 16, department: "Planetarium", name: "Dr. Y Ravi Kiron", designation: "Director, Nehru Planetarium", email: "nehruplanetarium@gmail.com", contact: "23014504" },
  { sNo: 17, department: "Hindi Section", name: "Shri S.K. Shukla", designation: "Senior Consultant (Hindi)", email: "nmmlhindiunit@gmail.com", contact: "23010700" },
  { sNo: 18, department: "Center for Contemporary studies", name: "Shri Iqbal Ahmad", designation: "Assistant Research Officer", email: "iqbalahmad@nmml.gov.in", contact: "23010666" },
  { sNo: 19, department: "Library", name: "Smt. Sangeeta Sharma", designation: "Asst. Lib. and Info. officer", email: "sharmasangeeta0212@gmail.com", contact: "23013203" },
  { sNo: 20, department: "Library", name: "Dr. Pankaj Chaurasia", designation: "Asst. Lib. and Info. officer", email: "alio@nmml.gov.in", contact: "23017220" },
  { sNo: 21, department: "Research", name: "Smt. Sonika Gupta", designation: "Assistant Research Officer", email: "soni.gupta18@gmail.com", contact: "" },
  { sNo: 22, department: "Library", name: "Smt. Geeta Yadav", designation: "Asst. Lib. and Info. officer", email: "geetayadav29@gmail.com", contact: "" },
  { sNo: 23, department: "Oral History Division", name: "Shri Pankaj Meena", designation: "Assistant Research Officer", email: "aropankajpmml@gmail.com", contact: "" },
  { sNo: 24, department: "The Archives", name: "Shri Neeraj Kumar", designation: "Assistant Research Officer", email: "neerajkumar11june@gmail.com", contact: "" },
  { sNo: 25, department: "Museum", name: "Shri Anurag Arora", designation: "Manager (Administration)", email: "aao@nmml.gov.in", contact: "23014504" },
  { sNo: 26, department: "Conference Facilities / Programmes", name: "Shri Rajnish Ranjan", designation: "Programme Officer", email: "rajnish@nmml.gov.in", contact: "23010666" }
];

export default function WhosWhoMembers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemsPerPage = 10;

  const filteredMembers = useMemo(() => {
    return WHOS_WHO_DATA.filter((member) => {
      const formattedEmail = member.email.toLowerCase().replace(/\./g, "[dot]").replace(/@/g, "[at]");
      const query = searchQuery.toLowerCase();
      return (
        member.name.toLowerCase().includes(query) ||
        member.department.toLowerCase().includes(query) ||
        member.designation.toLowerCase().includes(query) ||
        member.email.toLowerCase().includes(query) ||
        formattedEmail.includes(query) ||
        member.contact.toLowerCase().includes(query)
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
              Directory
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
                placeholder="Search staff..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-8 py-1.5 text-xs sm:text-sm text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none transition-all"
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
              title="Search directory"
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
                  <th className="py-4 px-6 text-sm font-bold w-48">Department</th>
                  <th className="py-4 px-6 text-sm font-bold">Name</th>
                  <th className="py-4 px-6 text-sm font-bold">Designation</th>
                  <th className="py-4 px-6 text-sm font-bold">Email ID</th>
                  <th className="py-4 px-6 text-sm font-bold text-center w-40">Contact Number</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredMembers.length > 0 ? (
                  paginatedMembers.map((member, index) => {
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
                        <td className="py-4 px-6 text-sm text-gray-600 font-medium">
                          {member.department === "—" ? null : member.department}
                        </td>
                        <td className="py-4 px-6 text-sm text-[#052356] font-bold">
                          {member.name}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-600 leading-relaxed">
                          {member.designation}
                        </td>
                        <td className="py-4 px-6 text-sm text-blue-600 font-medium break-all">
                          {member.email ? (
                            <span>{member.email.replace(/\./g, "[dot]").replace(/@/g, "[at]")}</span>
                          ) : null}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                          {member.contact ? (
                            <span>{member.contact}</span>
                          ) : null}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-sm font-medium">No records found matching your search.</p>
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
              return (
                <div
                  key={member.sNo}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 text-left"
                >
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <span className="w-7 h-7 flex items-center justify-center bg-[#f4f4f4] text-xs font-bold text-[#052356] rounded-lg">
                      {member.sNo}
                    </span>
                    {member.department !== "—" && (
                      <span className="px-3 py-1 bg-blue-50 text-[#052356] border border-blue-100 rounded-full text-[10px] font-bold tracking-wide">
                        {member.department}
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-[#052356] text-base mb-1">
                    {member.name}
                  </h3>

                  <p className="text-[#f37021] text-xs font-semibold mb-3">
                    {member.designation}
                  </p>

                  <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 text-xs text-gray-500">
                    {member.email && (
                      <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-blue-600 font-medium">{member.email.replace(/\./g, "[dot]").replace(/@/g, "[at]")}</span>
                      </div>
                    )}
                    {member.contact && (
                      <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.099.281L7.75 7.75a9.047 9.047 0 005 5l1.45-1.45a1 1 0 01.281-.099l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{member.contact}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center text-gray-400 border border-gray-100">
              No records found matching your search.
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
