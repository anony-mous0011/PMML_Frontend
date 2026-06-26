"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const EXPLORE_ITEMS = [
  {
    label: "Microfilm",
    imageSrc: "/Frame 301.png",
    href: "#microfilm",
  },
  {
    label: "Microfiche",
    imageSrc: "/Frame 300.png",
    href: "#microfiche",
  },
  {
    label: "List of Holding Periodicals",
    imageSrc: "/Frame 302.png",
    href: "#list-of-holdings",
  },
  {
    label: "Personal Collections",
    imageSrc: "/Frame 303.png",
    href: "#personal",
  },
  {
    label: "Rare Book Collections",
    imageSrc: "/Frame 304.png",
    href: "#rare-book",
  },
  {
    label: "Rules & Regulations",
    imageSrc: "/Frame 306.png",
    href: "#rules-regulations",
  },
];

const TEAM_DATA = [
  {
    id: "head",
    role: "HEAD OF LIBRARY",
    name: "Dr. Ravi K Mishra",
    contact: "23017599",
    email: "deputydirector.nmml@gov.in",
  },
  {
    id: "librarian",
    role: "LIBRARIAN",
    name: "Shri Vikas Kumar",
    contact: "21411895",
    email: "lio@nmml.gov.in",
  },
  {
    id: "staff",
    role: "OFFICE STAFF",
    name: "Smt. Sangeeta Sharma",
    contact: "23013203",
    email: "sharmasangeeta0212@gmail.com",
  },
  {
    id: "committee",
    role: "BOOK SELECTION COMMITTEE MEMBERS",
    name: "Prof. Raghuvendra Tanwar",
    contact: "23017220",
    email: "committee.library@pmml.gov.in",
  },
];

const GALLERY_IMAGES = [
  { src: "/DSC_3203 copy.jpg", alt: "Research Study Area" },
  { src: "/library.jpg", alt: "Library Corridor" },
  { src: "/DSC_3206 copy.jpg", alt: "Book Stacks" },
];

export default function LibraryAboutContent() {
  const [activeTab, setActiveTab] = useState("head");
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setGalleryVisible(1);
      else if (window.innerWidth < 1024) setGalleryVisible(2);
      else setGalleryVisible(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevGallery = () => {
    if (galleryIndex > 0) {
      setGalleryIndex((prev) => prev - 1);
    }
  };

  const handleNextGallery = () => {
    if (galleryIndex < GALLERY_IMAGES.length - galleryVisible) {
      setGalleryIndex((prev) => prev + 1);
    }
  };

  const galleryGap = 20;
  const galleryTransformX = `calc(-${galleryIndex} * ( (100% - ${(galleryVisible - 1) * galleryGap}px) / ${galleryVisible} + ${galleryGap}px ))`;

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Subpage Hero Banner ── */}
      <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        {/* Background Image */}
        <Image
          src="/library.jpg"
          alt="PMML Library Building and Reading Hall"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── About Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Image column */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
              <Image
                src="/DSC_3203 copy.JPG"
                alt="Research Reading Room inside the Library"
                fill
                sizes="(max-w-1024px) 100vw, 550px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right text content column */}
            <div className="lg:col-span-6 flex flex-col text-left justify-start">
              {/* Orange Accent Line */}
              <div className="w-12 h-1 bg-[#f37021] mb-2.5" />

              {/* Heading matching welcome section in home page */}
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                About
              </h2>

              <p className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed mb-6 text-justify">
                The Library of the Prime Ministers Museum and Library is one of the foremost research libraries in the country for the study of modern and contemporary Indian history. Established as a core component of the institution in 1966, the Library supports advanced research and scholarly inquiry across disciplines related to India's political, social, economic, and cultural development. The Library holds an extensive and diverse collection of printed and reference material, including books, journals, newspapers, government publications, reports, pamphlets, and new publications. Its holdings cover a wide range of subjects such as the Indian national movement, constitutional and political history, public administration, international relations, economic  ...
              </p>

              <div>
                <a
                  href="#read-more"
                  className="inline-flex items-center gap-2 bg-[#E88B1D] hover:bg-[#d85c15] text-white font-bold text-[11px] sm:text-[12px] tracking-wider uppercase rounded-lg px-5 py-2.5 shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer select-none"
                >
                  <span>Read More</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 text-left">
            <div className="w-16 h-[5px] bg-[#f37021] mb-4.5" />
            <h3 className={`${spectral.className} text-3xl sm:text-[38px] font-bold text-[#052356] tracking-tight`}>
              Explore
            </h3>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {EXPLORE_ITEMS.map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex flex-col items-center select-none cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 w-full text-center"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-square transition-transform duration-500 group-hover:scale-[1.03] mb-3">
                    <Image
                      src={item.imageSrc}
                      alt={item.label}
                      fill
                      priority
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-contain"
                    />
                  </div>

                  {/* Label */}
                  <span className="text-[12px] sm:text-[13px] font-bold text-[#052356] group-hover:text-[#f37021] transition-colors tracking-wide leading-tight text-center min-h-[34px] flex items-center justify-center">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Library Team & Ask Librarian Section ── */}
      <section className="w-full py-6 lg:py-8 bg-[#FDFBF7] border-t border-b border-[#F4EFE6]/60 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Left Column: Library Team */}
            <div className="flex flex-col justify-between h-full pt-4 sm:pt-5">
              {/* Heading */}
              <div>
                <div className="w-12 h-1 bg-[#f37021] mb-2" />
                <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                  Library Team
                </h3>
              </div>

              {/* Grid for Tabs & Details */}
              <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-5 items-stretch flex-grow">
                {/* Vertical Tabs (Left - OUTSIDE the white box) */}
                <div className="flex flex-col gap-2.5 justify-start pt-1.5">
                  {TEAM_DATA.map((member) => (
                    <button
                      key={member.id}
                      type="button"
                      onClick={() => setActiveTab(member.id)}
                      className={`text-left text-xs font-bold py-2.5 px-4 transition-all duration-200 w-fit ${activeTab === member.id
                          ? "bg-white text-[#f37021] rounded-lg shadow-sm border border-gray-100/50"
                          : "text-[#052356]/60 hover:text-[#052356] bg-transparent"
                        }`}
                    >
                      {member.role}
                    </button>
                  ))}
                </div>

                {/* Details Panel (Right - INSIDE the white box) */}
                <div className="bg-white border border-gray-200 rounded-3xl p-4 sm:p-5 shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex flex-col justify-center">
                  {(() => {
                    const activeMember = TEAM_DATA.find((m) => m.id === activeTab) || TEAM_DATA[0];
                    return (
                      <div className="space-y-3.5">
                        <div className="border-b border-gray-100 pb-2">
                          <span className="block text-xs font-bold text-[#052356] mb-0.5">Name</span>
                          <span className="text-sm font-medium text-gray-500">{activeMember.name}</span>
                        </div>
                        <div className="border-b border-gray-100 pb-2">
                          <span className="block text-xs font-bold text-[#052356] mb-0.5">Contact Number</span>
                          <span className="text-sm font-medium text-gray-500">{activeMember.contact}</span>
                        </div>
                        <div className="pb-0.5">
                          <span className="block text-xs font-bold text-[#052356] mb-0.5">Email ID</span>
                          <span className="text-sm font-medium text-gray-500 break-all">{activeMember.email}</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Right Column: Ask Librarian */}
            <div className="flex flex-col justify-between h-full">
              {/* Form Card */}
              <div className="bg-white border border-gray-200 rounded-3xl p-4 sm:p-5 shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex-grow flex flex-col justify-center">
                <div>
                  {/* Orange Accent Line */}
                  <div className="w-12 h-1 bg-[#f37021] mb-2" />

                  {/* Title inside card */}
                  <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-5`}>
                    Ask Librarian
                  </h3>
                </div>

                <form className="flex-grow flex flex-col justify-between mt-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-[#052356] mb-0.5">Name</label>
                        <input
                          type="text"
                          placeholder="Max. 30 characters"
                          maxLength={30}
                          className="w-full bg-transparent border-b border-gray-200 focus:border-[#f37021] border-t-0 border-l-0 border-r-0 rounded-none px-0 py-1 text-xs text-gray-600 focus:outline-none focus:ring-0 transition-all font-semibold placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-[#052356] mb-0.5">Contact number</label>
                        <input
                          type="text"
                          placeholder="Max. 10 characters"
                          maxLength={10}
                          className="w-full bg-transparent border-b border-gray-200 focus:border-[#f37021] border-t-0 border-l-0 border-r-0 rounded-none px-0 py-1 text-xs text-gray-600 focus:outline-none focus:ring-0 transition-all font-semibold placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-[#052356] mb-0.5">Email-ID</label>
                        <input
                          type="email"
                          placeholder="Input your email"
                          className="w-full bg-transparent border-b border-gray-200 focus:border-[#f37021] border-t-0 border-l-0 border-r-0 rounded-none px-0 py-1 text-xs text-gray-600 focus:outline-none focus:ring-0 transition-all font-semibold placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-[#052356] mb-0.5">Library Question</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-gray-200 focus:border-[#f37021] border-t-0 border-l-0 border-r-0 rounded-none px-0 py-1 text-xs text-gray-600 focus:outline-none focus:ring-0 transition-all appearance-none cursor-pointer font-semibold placeholder-gray-400">
                            <option>Choose question</option>
                            <option>Membership Inquiries</option>
                            <option>Book/Manuscript Availability</option>
                            <option>Archives Access SOP</option>
                            <option>Other Inquiries</option>
                          </select>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#f37021]">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col mt-4 min-h-[60px]">
                    <label className="block text-[11px] font-bold text-[#052356] mb-0.5">Message</label>
                    <textarea
                      placeholder="Input your message"
                      className="w-full flex-grow bg-[#f4f4f4] border border-transparent rounded-xl px-3.5 py-2 text-xs text-gray-600 focus:outline-none focus:bg-[#ebebeb] transition-all font-semibold placeholder-gray-400 resize-none"
                    />
                  </div>

                  <div className="pt-3 flex justify-start">
                    <button
                      type="submit"
                      className="w-fit px-6 py-2 bg-[#E88B1D] hover:bg-[#d85c15] text-white font-bold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer select-none"
                    >
                      <span>Submit Query</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Library Photos Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Library Photos
            </h3>
          </div>

          {/* Photos Carousel/Row */}
          <div className="relative -mx-4 sm:-mx-10 lg:-mx-14 px-4 sm:px-10 lg:px-14">
            {/* Left Chevron */}
            {galleryIndex > 0 && (
              <button
                type="button"
                onClick={handlePrevGallery}
                className="absolute left-1 sm:left-2 lg:left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center text-[#f37021] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            )}

            {/* Right Chevron */}
            {galleryIndex < GALLERY_IMAGES.length - galleryVisible && (
              <button
                type="button"
                onClick={handleNextGallery}
                className="absolute right-1 sm:right-2 lg:right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center text-[#f37021] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            )}

            {/* Inner Images Row */}
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out w-full"
                style={{
                  transform: `translateX(${galleryTransformX})`,
                  gap: `${galleryGap}px`,
                }}
              >
                {GALLERY_IMAGES.map((img, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: `calc((100% - ${(galleryVisible - 1) * galleryGap}px) / ${galleryVisible})`,
                    }}
                    className="flex-shrink-0 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-5">
                      <span className="text-white text-xs sm:text-sm font-bold tracking-wide">{img.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
