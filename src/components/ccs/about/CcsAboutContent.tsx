"use client";

import React from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function CcsAboutContent() {
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

      {/* ── About Section ── */}
      <section id="about" className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Image Card */}
            <div className="lg:col-span-5 w-full">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
                <Image
                  src="/ccs.png"
                  alt="Academic Disk at Center for Contemporary Studies"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
              
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                Center for Contemporary Studies
              </h2>

              <div className="space-y-4 text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed text-justify">
                <p>
                  The Centre for Contemporary Studies (CCS) was established in 1990 as a constituent unit of the Prime Ministers&apos; Museum and Library (PMML) to provide an active forum for fellowship research and contemporary historical studies. Since its inception, the Centre has emerged as one of the premier hubs for academic excellence and research relating to contemporary India.
                </p>
                <p>
                  CCS administers several prestigious fellowship programmes that cater to researchers at different levels of their academic careers. The research produced by the Centre&apos;s fellows covers a wide array of topics, including national security, international relations, economic history, sociology, and political development. The Centre is also responsible for organizing lectures, seminars, workshops, and publishing academic research volumes.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 w-full">
                
                {/* Stat Box 1 */}
                <div className="flex flex-col items-center justify-center bg-white rounded-[11px] border-b-[4px] sm:border-b-[6px] border-[#E88B1D] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-[80px] sm:h-[90px] lg:h-[95px] px-2 text-center transition-all duration-200 hover:shadow-md">
                  <span className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#052356] leading-none mb-1 sm:mb-1.5">30+</span>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#444651] font-bold tracking-wider uppercase">Fellows Annually</span>
                </div>

                {/* Stat Box 2 */}
                <div className="flex flex-col items-center justify-center bg-white rounded-[11px] border-b-[4px] sm:border-b-[6px] border-[#E88B1D] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-[80px] sm:h-[90px] lg:h-[95px] px-2 text-center transition-all duration-200 hover:shadow-md">
                  <span className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#052356] leading-none mb-1 sm:mb-1.5">500+</span>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#444651] font-bold tracking-wider uppercase">Seminars Hosted</span>
                </div>

                {/* Stat Box 3 */}
                <div className="flex flex-col items-center justify-center bg-white rounded-[11px] border-b-[4px] sm:border-b-[6px] border-[#E88B1D] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-[80px] sm:h-[90px] lg:h-[95px] px-2 text-center transition-all duration-200 hover:shadow-md">
                  <span className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#052356] leading-none mb-1 sm:mb-1.5">150+</span>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#444651] font-bold tracking-wider uppercase">Papers Published</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
