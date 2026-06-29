"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function DisclaimerContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Page Hero Section ── */}
       <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/hero.png"
          alt="Disclaimer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>




      {/* ── Disclaimer Header Strip (bg-[#f4f4f4] matching RTI strip) ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Top orange accent line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Disclaimer
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus. Donec feugiat sapien vitae odio. Mauris ac tempor ligula. Aliquam ac sem ac est interdum dictum. Ut sodales purus non tempor sodales.
          </p>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris convallis libero sed sodales pretium. Fusce a lectus id ante sodales interdum eget in massa. Vestibulum sit amet eros laoreet, laoreet lorem vel, lobortis lorem.
          </p>
          <p>
            Aenean nec lectus id ante sodales interdum eget in massa. Vestibulum sit amet eros laoreet, laoreet lorem vel, lobortis lorem. Mauris convallis libero sed sodales pretium. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          </p>
        </div>
      </section>
    </div>
  );
}
