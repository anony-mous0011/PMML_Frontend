"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const GALLERY_IMAGES = [
  { src: "/NMM_2386.jpg", alt: "Archival Collections & Storage" },
  { src: "/DSC_0278.JPG", alt: "Historical Documents & Letters" },
  { src: "/DSC_0561.jpg", alt: "Rare Preserved Manuscripts" },
  { src: "/DSC_4568.jpg", alt: "Archival Research Section" },
];

const DOWNLOADS = [
  {
    label: "Documents required for consulting the archives",
    href: "#",
  },
  {
    label: "PMML Archives An Introduction",
    href: "#",
  },
  {
    label: "Rules",
    href: "#",
  },
  {
    label: "Requisition",
    href: "#",
  },
  {
    label: "Registration",
    href: "#",
  },
  {
    label: "Declaration",
    href: "#",
  },
];

const CONTACT_TABS = [
  {
    id: "reading-room",
    label: "READING ROOM",
    name: "Ms. Jyothi Luthra",
    designation: "Research Associate",
    contact: "8800183507",
    email: "readingroommss-nmm[at]gov[dot]in",
  },
  {
    id: "manuscript-section",
    label: "MANUSCRIPT SECTION",
    name: "Smt. Priyamvada Shome",
    designation: "Consultant (Archives)",
    contact: "23014475",
    email: "pmmlmss1[at]gmail[dot]com",
  },
];

export default function ArchivesAboutContent() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(3);
  const [activeContactTab, setActiveContactTab] = useState("reading-room");

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
          src="/NMM_2386.jpg"
          alt="PMML Archives and Records Section"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── About Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image column */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
              <Image
                src="/DSC_4568.jpg"
                alt="Research Reading and Archival Reference Room"
                fill
                sizes="(max-w-1024px) 100vw, 550px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right text content column */}
            <div className="lg:col-span-6 flex flex-col text-left justify-start">
              {/* Orange Accent Line */}
              <div className="w-12 h-1 bg-[#f37021] mb-2.5" />

              {/* Heading */}
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                About
              </h2>

              <p className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed mb-6 text-justify">
                The Prime Ministers Museum and Library (PMML) came into existence on 1 April 1966. One of the principal objectives of PMML was the promotion of original research in modern and contemporary Indian history. To achieve this objective, PMML established the Archives, which was created to acquire, preserve, classify, and maintain primary and non-official source material for research. The Archives was initially formed with the acquisition of two collections viz. Jawaharlal Nehru papers and the All-India Congress Committee papers. In due course of time, a reservoir of nearly 1300 collections of personal papers of eminent leaders, freedom fighters, politicians, educationists, scientists, jurists and industrialists who contributed to the making of modern India and...
              </p>

              <div>
                <a
                  href="#read-more"
                  className="inline-flex items-center gap-2 bg-[#f37021] hover:bg-[#d85c15] text-white font-bold text-[11px] sm:text-[12px] tracking-wider uppercase rounded-lg px-5 py-2.5 shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer select-none"
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

      {/* ── About Archives & Contacts Section ── */}
      <section className="w-full py-8 lg:py-10 bg-white text-left border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column: About Archives */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              {/* Heading */}
              <div className="mb-4">
                <div className="w-12 h-1 bg-[#f37021] mb-2" />
                <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
                  About Archives
                </h3>
              </div>

              {/* Grid of Downloads */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DOWNLOADS.map((item, idx) => (
                  <div key={idx} className="bg-[#fcfcfc] border border-gray-200/60 rounded-2xl p-4 flex flex-col justify-between shadow-[0_2px_10px_rgba(0,0,0,0.01)] min-h-[105px] hover:shadow-md transition-shadow duration-300">
                    <span className="text-xs sm:text-[13px] font-bold text-[#052356] leading-snug mb-2">
                      {item.label}
                    </span>
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1.5 border border-[#f37021] text-[#f37021] hover:bg-[#f37021] hover:text-white font-bold text-[9px] sm:text-[10px] tracking-wider uppercase rounded-full px-4 py-1.5 w-fit transition-all duration-200 cursor-pointer select-none"
                    >
                      <span>Download</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Contacts */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              {/* Contacts Tab Layout (Heading inside) */}
              <div className="bg-[#fdfbf7] border border-[#f4efe6] rounded-3xl p-5 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex-grow flex flex-col justify-start">
                {/* Heading */}
                <div className="mb-4 text-left">
                  <div className="w-12 h-1 bg-[#f37021] mb-2" />
                  <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
                    Contacts
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 items-stretch">
                  {/* Vertical Tabs (Left) */}
                  <div className="flex flex-row md:flex-col gap-2 justify-start overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                    {CONTACT_TABS.map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveContactTab(tab.id)}
                        className={`text-left text-[11px] sm:text-xs font-bold py-2.5 px-4 transition-all duration-200 rounded-full w-fit whitespace-nowrap ${activeContactTab === tab.id
                            ? "bg-[#f37021] text-white shadow-sm"
                            : "text-[#052356]/60 hover:text-[#052356] bg-transparent hover:bg-orange-50/50"
                          }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Details Card (Right) */}
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col justify-center">
                    {(() => {
                      const activeContact = CONTACT_TABS.find((c) => c.id === activeContactTab) || CONTACT_TABS[0];
                      return (
                        <div className="space-y-2 text-left">
                          <div className="border-b border-gray-100 pb-1.5">
                            <span className="block text-[10px] sm:text-xs font-bold text-[#052356] mb-0.5">Name</span>
                            <span className="text-xs sm:text-sm font-medium text-gray-500">{activeContact.name}</span>
                          </div>
                          <div className="border-b border-gray-100 pb-1.5">
                            <span className="block text-[10px] sm:text-xs font-bold text-[#052356] mb-0.5">Designation</span>
                            <span className="text-xs sm:text-sm font-medium text-gray-500">{activeContact.designation}</span>
                          </div>
                          <div className="border-b border-gray-100 pb-1.5">
                            <span className="block text-[10px] sm:text-xs font-bold text-[#052356] mb-0.5">Contact Number</span>
                            <span className="text-xs sm:text-sm font-medium text-gray-500">{activeContact.contact}</span>
                          </div>
                          <div className="pb-0.5">
                            <span className="block text-[10px] sm:text-xs font-bold text-[#052356] mb-0.5">Email ID</span>
                            <span className="text-xs sm:text-sm font-medium text-gray-500 break-all">{activeContact.email}</span>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Archives Photos Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Archives Photos
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
