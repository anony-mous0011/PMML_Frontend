"use client";

import React from 'react';
import Image from 'next/image';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function CopyrightPolicyContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Page Hero Section ── */}
       <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/hero.png"
          alt="Copyright Policy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── Copyright Policy Header Strip (bg-[#f4f4f4] matching RTI strip) ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Top orange accent line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Copyright Policy
            </h2>
          </div>
        </div>
      </section>

      {/* ── Main Content Block (bg-white) ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            The contents of this website may not be reproduced partially or fully, without due permission from the <strong>Prime Ministers Museum and Library</strong>. If referred to as a part of another publication, the source must be appropriately acknowledged. The contents of this website cannot be used in any misleading or objectionable context.
          </p>
          <p>
            The PMML Photo Collection has been built up by donations from a number of individuals and institutions. The PMML holds the copyright of some of the photographs and rest of them are with the respective owners/donors. The PMML is only the custodian of the archival collections. The copyright of archival documents rests with the respective donors. The copyright of the Audio and Video collections in the Gallery is not with the PMML. Commercial use of materials in this website is strictly prohibited without permission from the PMML and is to be in accordance with the law. Use of materials for educational purposes is welcome but due acknowledgment from the PMML is required.
          </p>
        </div>
      </section>
    </div>
  );
}
