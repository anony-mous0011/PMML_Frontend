"use client";

import React from 'react';
import Image from 'next/image';

const RESEARCH_POINTS = [
  {
    icon: '🎓',
    title: 'Prestigious Fellowship Program',
    desc: 'PMML\'s Fellowship program — offering a variety of Fellowships — is regarded as one of the most prestigious in academic circles across Indian and international institutions.',
  },
  {
    icon: '🗣️',
    title: 'Academic Talks & Seminars',
    desc: 'As a centre of academic excellence, PMML regularly organises talks, lectures, and seminars to showcase and debate elements of modern and contemporary Indian history.',
  },
  {
    icon: '📁',
    title: 'Exhaustive Archival Holdings',
    desc: 'The Library houses an extensive collection of published material and a diverse archival holding — manuscripts, oral histories, official records, and rare documents — regularly updated and made available for research.',
  },
  {
    icon: '🌐',
    title: 'A Global Academic Destination',
    desc: 'Indian and foreign scholars from diverse disciplines — history, political science, economics, culture — converge at PMML, making it a truly international hub for research on modern India.',
  },
];

export default function PmmlResearch() {
  return (
    <section className="w-full py-10 bg-[#F9F6EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text Content */}
          <div className="flex flex-col gap-7">
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#f37021] inline-block" />
              <span className="text-[#f37021] text-xs font-bold tracking-widest uppercase">Research &amp; Scholarship</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#052356] leading-snug">
              A Premier Institution of <br />
              <span className="text-[#f37021]">Contemporary Research</span>
            </h2>

            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
              Over time, PMML has grown into one of India's foremost academic institutions,
              offering unrivalled resources for the study of modern and contemporary Indian
              history, politics, and society.
            </p>

            {/* Research Points */}
            <div className="flex flex-col gap-5">
              {RESEARCH_POINTS.map((pt) => (
                <div key={pt.title} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 text-lg group-hover:shadow-md transition-shadow">
                    {pt.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#052356] text-sm mb-1">{pt.title}</h4>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#052356] hover:bg-[#0a3a7e] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-all"
              >
                Fellowship Programs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-[#052356]/30 hover:border-[#052356] text-[#052356] font-semibold px-5 py-2.5 rounded-lg text-sm transition-all"
              >
                Visit the Library
              </a>
            </div>
          </div>

          {/* RIGHT: Visual Card */}
          <div className="relative flex flex-col gap-5">
            {/* Main library image */}
            <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/library.jpg"
                alt="Library and Archives at PMML"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031730]/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[#f5c97a] text-[10px] font-bold tracking-widest uppercase">Library &amp; Archives</span>
                <p className="text-white font-bold text-base mt-0.5 leading-snug">
                  Home to thousands of rare documents, manuscripts &amp; oral histories
                </p>
              </div>
            </div>

            {/* Two stat cards side by side */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2.5L+', label: 'Archival Items', icon: '📋', bg: 'bg-[#052356]', text: 'text-white' },
                { value: 'CCS', label: 'Centre for Contemporary Studies', icon: '🔬', bg: 'bg-white', text: 'text-[#052356]' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`${stat.bg} ${stat.text} rounded-xl p-4 flex flex-col gap-2 shadow-md border border-gray-100`}
                >
                  <span className="text-2xl">{stat.icon}</span>
                  <span className={`text-2xl font-black ${stat.bg === 'bg-white' ? 'text-[#f37021]' : 'text-[#f5c97a]'}`}>{stat.value}</span>
                  <span className={`text-[11px] font-semibold leading-snug ${stat.bg === 'bg-white' ? 'text-gray-500' : 'text-white/70'}`}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
