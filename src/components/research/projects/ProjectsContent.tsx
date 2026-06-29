"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";
import { Search, ChevronDown, BookOpen, ExternalLink, X } from "lucide-react";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: "proj1",
    title: "Selected Works of Acharya Narendra Deva",
    image: "/pro-1.jpg",
    description: "Acharya Narendra Deva, known as the father of the Indian socialist movement, occupied a significant place in the history of 20th century India. NMML published four-volumes of writings and speeches of Acharya Narendra Deva both in English and as well as in Hindi. These volumes cover his invaluable contribution to the freedom movement, peasant movement and his contribution as an educationist, scholar and socialist thinker.",
  },
  {
    id: "proj2",
    title: "Acharya Narendra Deva",
    image: "/pro-2.jpg",
    description: "Acharya Narendra Deva, known as the father of the Indian socialist movement, occupied a significant place in the history of 20th century India. NMML published four-volumes of writings and speeches of Acharya Narendra Deva both in English and as well as in Hindi. These volumes cover his invaluable contribution to the freedom movement, peasant movement and his contribution as an educationist, scholar and socialist thinker.",
  },
  {
    id: "proj3",
    title: "Jayaprakash Narayan",
    image: "/pro-3.jpg",
    description: "Jayaprakash Narayan (1902-79), an eminent political leader and thinker of India, played a major role not only in the freedom movement but also left a mark in the Socialist and Sarvodaya movements. He played a formidable role in the movement for strengthening the Indian democracy popularly known as the J.P. movement. Jayaprakash Narayan: Selected Works, Volumes (1-10), edited by Prof. Bimal Prasad and published under the auspices of the Nehru Memorial Museum and Library is an endeavor to appraise the saga of Jayaprakash Narayan to the world. The series of the ten volumes, covers the period from 1929-79 and presents a comprehensive picture of the evolution of J.P.'s political life and thought through his writings, speeches and letters.",
  },
  {
    id: "proj4",
    title: "Motilal Nehru",
    image: "/pro-4.jpg",
    description: "Motilal Nehru (1861-1931), lawyer and a doyen of the Congress Party, played a crucial role in the Indian freedom struggle. Motilal was one of the outstanding lawyers and was a member of the U.P. Legislative Council (1909-19) and the Central Legislative Assembly (1923-30). He played a prominent role in the activities of the Congress Party as a moderate leader and served as its President in 1919 at Amritsar Congress and also at the Calcutta session of the Congress in 1928. He and C.R. Das founded the Swaraj Party in 1922. The Selected Works of Motilal Nehru (Vols 1-7), issued under the auspices of the Nehru Memorial Museum and Library, is an attempt to evince the readers the significant contributions of Motilal Nehru in the Indian national movement. The core of these volumes mainly consists of letters and speeches by Motilal Nehru which provide a vivid insight into Motilal Nehru's multifaceted personality as well as his role in the national movement.",
  },
];


export default function ProjectsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const itemsPerPage = 10;

  // Filter and Sort Data
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((proj) => {
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSearch;
    });
  }, [searchQuery]);

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProjects, currentPage]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Hero Banner ── */}
        <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/DSC_4568.jpg"
          alt="PMML Research Projects"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>


      {/* ── Projects Catalog Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-8 select-none">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Projects
            </h2>
          </div>

          {/* Filtering Control Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
            {/* Search Input */}
            <div className="relative md:col-span-12">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm text-black border border-gray-200 rounded-xl focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none transition-all bg-white shadow-sm"
              />
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Table List View */}
          {paginatedProjects.length > 0 ? (
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f4f4f4] text-[#052356] border-b border-gray-200">
                      <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider">Project Name</th>
                      <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-36">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {paginatedProjects.map((proj) => (
                      <tr key={proj.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                        {/* Title & Description column */}
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3.5 text-left">
                            <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <button
                              onClick={() => setSelectedProject(proj)}
                              className="text-sm sm:text-base font-bold text-gray-800 hover:text-blue-600 transition-colors cursor-pointer text-left focus:outline-none"
                            >
                              {proj.title}
                            </button>
                          </div>
                        </td>

                        {/* Action column */}
                        <td className="py-4 px-6 text-center">
                          <button
                            onClick={() => setSelectedProject(proj)}
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-bold tracking-wide transition-all select-none cursor-pointer whitespace-nowrap"
                          >
                            <span>KNOW MORE</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Empty state */
            <div className="bg-white py-16 text-center text-gray-500 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex flex-col items-center justify-center gap-2">
                <BookOpen className="w-10 h-10 text-gray-300" />
                <p className="text-sm font-semibold text-gray-600">No projects found matching your filters.</p>
              </div>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-8 bg-white py-3.5 border-t border-gray-100 rounded-xl px-6 select-none shadow-sm">
              <p className="text-xs text-gray-500 font-bold">
                Showing <span className="font-extrabold text-gray-700">{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
                <span className="font-extrabold text-gray-700">
                  {Math.min(currentPage * itemsPerPage, filteredProjects.length)}
                </span>{" "}
                of <span className="font-extrabold text-gray-700">{filteredProjects.length}</span> projects
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

      {/* ── Modal Pop-up ── */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1.5 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center text-left">
              {/* Book Image */}
              <div className="flex-shrink-0 w-28 sm:w-36 aspect-[3/4.2] relative rounded-lg border border-gray-200 overflow-hidden shadow-md bg-gray-50">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 640px) 112px, 144px"
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356] leading-tight mb-4`}>
                  {selectedProject.title}
                </h3>
                
                
                <p className="text-sm text-gray-600 font-medium leading-relaxed text-justify">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
