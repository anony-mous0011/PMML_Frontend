"use client";

import React from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function ResearchAboutContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Hero Banner ── */}
        <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/DSC_4568.jpg"
          alt="PMML Research Division"
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
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
              <Image
                src="/research-1.png"
                alt="Selected Works of Leaders"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Text Content Column */}
            <div className="lg:col-span-6 flex flex-col text-left justify-start">
              {/* Orange Accent Line */}
              <div className="w-12 h-1 bg-[#f37021] mb-2.5" />

              {/* Heading */}
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                About
              </h2>

              {/* Body */}
              <p className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed mb-6 text-justify">
                The Research Section undertakes various projects to publish the speeches and writings
                of prominent national leaders in the form of different &apos;Selected Works&apos;. It
                involves careful selection of relevant documents, annotations and preparation of
                typescripts. So far we have completed the projects of Selected Works of Motilal Nehru,
                Selected Works of Acharya Narendra Deva and Selected Works of Jayaprakash Narayan.
                At present, work on the Selected Works of C. Rajagopalachari and Atal Bihari Vajpayee
                Chayan Sangrah are being carried out by the section. For these projects the Section
                primarily utilises the private paper collections preserved at the PMML.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Areas of Research Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-12">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Areas of Research
            </h2>
          </div>

          <div className="flex flex-col gap-16 lg:gap-24 w-full">
            
            {/* Item 1: Atal Bihari Vajpayee Chayan Sangrah */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Image */}
              <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
                <Image
                  src="/research-2.png"
                  alt="Atal Bihari Vajpayee Chayan Sangrah"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Text */}
              <div className="lg:col-span-6 flex flex-col justify-start">
                {/* Pill Badge */}
                <div className="flex items-center gap-2.5 bg-[#f5f5f5] rounded-lg px-4 py-2 w-full mb-5">
                  <svg className="w-6 h-6 text-[#052356] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l1.8 3.8 4.2-1.8-1.8 4.2 3.8 1.8-3.8 1.8 1.8 4.2-4.2-1.8-1.8 3.8-1.8-3.8-4.2 1.8 1.8-4.2-3.8-1.8 3.8-1.8-1.8-4.2 4.2 1.8L12 2z" />
                  </svg>
                  <span className="text-sm sm:text-[15px] font-bold tracking-wide text-[#D74D02] uppercase">
                    ATAL BIHARI VAJPAYEE CHAYAN SANGRAH
                  </span>
                </div>

                <p className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed text-justify">
                  The Atal Bihari Vajpayee Chayan Sangrah is a major research and publication project of the Prime Ministers Museum and Library. It focuses on the compilation, editing, and preservation of the speeches, writings, correspondence, and literary works of the former Prime Minister, Shri Atal Bihari Vajpayee. Known for his exceptional statesmanship, oratorical skill, and poetic vision, Vajpayee&apos;s works provide crucial historical insights into India&apos;s foreign policy, democratic values, and modern governance. This project serves as a key resource for academic research and historical documentation.
                </p>
              </div>
            </div>

            {/* Item 2: Selected Works of C. Rajagopalachari */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Text (order-2 on mobile, order-1 on desktop) */}
              <div className="lg:col-span-6 flex flex-col justify-start order-2 lg:order-1">
                {/* Pill Badge */}
                <div className="flex items-center gap-2.5 bg-[#f5f5f5] rounded-lg px-4 py-2 w-full mb-5">
                  <svg className="w-6 h-6 text-[#052356] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l1.8 3.8 4.2-1.8-1.8 4.2 3.8 1.8-3.8 1.8 1.8 4.2-4.2-1.8-1.8 3.8-1.8-3.8-4.2 1.8 1.8-4.2-3.8-1.8 3.8-1.8-1.8-4.2 4.2 1.8L12 2z" />
                  </svg>
                  <span className="text-sm sm:text-[15px] font-bold tracking-wide text-[#D74D02] uppercase">
                    SELECTED WORKS OF C. RAJAGOPALACHARI
                  </span>
                </div>

                <p className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed text-justify">
                  Chakravarti Rajagopalachari (1878–1972), popularly known as Rajaji, was one of the most remarkable leaders of the Indian national movement. Mahatma Gandhi called him his &apos;conscience keeper&apos; which explains his importance in modern Indian history. Rajaji continued to be influential in independent India as well and was the first and last Indian Governor-General of independent India. A prolific writer and orator, his private papers and publications run into several pages. The Selected Works of C. Rajagopalachari is a multi-volume series being published by the Prime Ministers Museum and Library in association with the Orient BlackSwan covering the selected writings and speeches of Rajaji of the period between 1907 and 1972.
                </p>
              </div>

              {/* Right Image (order-1 on mobile, order-2 on desktop) */}
              <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full order-1 lg:order-2">
                <Image
                  src="/research-3.png"
                  alt="Selected Works of C. Rajagopalachari"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
