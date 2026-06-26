"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PmmlSocietyHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[420px] lg:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/heroimage.png"
        alt="Teen Murti Campus — Prime Ministers Museum & Library"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Layered Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031730]/90 via-[#052356]/70 to-[#052356]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#031730]/80 via-transparent to-transparent" />

      {/* Decorative diagonal stripe */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 sm:px-12 lg:px-20">
        {/* Breadcrumb */}
        <nav className="mb-5" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 flex-wrap">
            {[
              { label: 'Home', href: '/' },
              { label: 'About PMML', href: '#' },
              { label: 'PMML Society', href: '/about-pmml/pmml-society' },
            ].map((item, i, arr) => (
              <li key={item.href} className="flex items-center gap-2">
                {i < arr.length - 1 ? (
                  <>
                    <Link
                      href={item.href}
                      className="text-white/60 hover:text-white text-xs font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                    <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                ) : (
                  <span className="text-[#f37021] text-xs font-semibold">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Orange accent bar */}
        <div className="w-14 h-1 bg-[#f37021] rounded-full mb-4" />

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-4 drop-shadow-lg">
          Honoring the Legacy,{' '}
          <span className="text-[#f5c97a]">Shaping the Future</span>
          <br />
          <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90">
            The Journey of Indian Democracy
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-white/75 text-sm sm:text-base max-w-xl leading-relaxed mb-8">
          Nestled within the historic 30-acre Teen Murti campus, PMML stands as a living
          monument to India's democratic heritage — a museum, library, and research centre
          all under one iconic roof.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/plan-a-visit"
            className="inline-flex items-center gap-2 bg-[#f37021] hover:bg-[#d85c15] text-white font-bold px-6 py-3 rounded-lg text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Plan Your Visit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="#attractions"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg text-sm backdrop-blur-sm transition-all duration-200"
          >
            Explore the Galleries
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F9F6EF] to-transparent" />
    </section>
  );
}
