"use client";

import React from 'react';
import Image from 'next/image';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function HindiDivisionContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Page Hero Section ── */}
       <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/hero.png"
          alt="Hindi Division"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── Header Strip (bg-[#f4f4f4]) ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Top orange accent line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Hindi Division
            </h2>
          </div>
        </div>
      </section>

      {/* ── Main Content Block (bg-white) ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 space-y-8 text-sm sm:text-base leading-relaxed">
          
          {/* Objectives */}
          <div className="space-y-3">
            <h3 className={`${spectral.className} text-xl font-bold text-[#052356]`}>
              Objectives
            </h3>
            <p className="text-justify">
              The objectives of Rajbhasha Prabhag (Hindi Division) is to ensure compliance with the official language policy of Government of India, i.e. the provisions made in the Constitution of India (Part–XVII, Articles 343 to 351) regarding Official Language; The Official Languages (OL) Act, 1963; (as amended in 1967), the Government resolutions regarding Official Language, 1968; Official Languages (OL) rules, 1976 and also to motivate staff members to achieve the targets fixed in the annual programme issued by the Department of Official Language, Ministry of Home Affairs, Government of India for the progressive use of Hindi language.
            </p>
          </div>

          {/* 1. Capacity Building */}
          <div className="space-y-3">
            <h3 className={`${spectral.className} text-lg font-bold text-[#052356]`}>
              1. Capacity Building
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-justify">
              <li>Regular Hindi workshops are organized for staff members of PMML to do their office work in Hindi.</li>
              <li>Training is imparted to staff members for using Hindi language on computers.</li>
            </ul>
          </div>

          {/* 2. Creating conducive atmosphere */}
          <div className="space-y-3">
            <h3 className={`${spectral.className} text-lg font-bold text-[#052356]`}>
              2. Creating conducive atmosphere
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-justify">
              <li>
                <strong>Hindi Competitions:</strong> Various types of Hindi competitions are organized to create interest among staff members towards Hindi as also to enrich their knowledge of Hindi. Competitions are also organized at inter-departmental as well as at intra-departmental level.
              </li>
              <li>
                <strong>Hindi Day function:</strong> A function is organized every year on the occasion of Hindi Day which falls on 14 September and prizes are distributed to the winners of various competitions.
              </li>
            </ul>
          </div>

          {/* 3. Meeting of Official Language Implementation Committee */}
          <div className="space-y-3">
            <h3 className={`${spectral.className} text-lg font-bold text-[#052356]`}>
              3. Meeting of Official Language Implementation Committee
            </h3>
            <p className="text-justify">
              Work relating to implementation of the Official Language Policy in PMML is being looked after by the Hindi Unit. The Departmental Official Language Implementation Committee of the organization is constituted under the chairmanship of the Director, PMML. All Heads of Divisions are members of OLIC. Quarterly meetings of the Official Language Implementation Committee (OLIC) are held to review the progress of use of Hindi by the Sections. After due deliberations, appropriate decisions are taken with a view to encouraging the use of Hindi language in official work. Suitable instructions are issued to the Sections for achieving the targets prescribed by the Government of India under its annual programme.
            </p>
          </div>

          {/* 4. Preparation of Reference Material */}
          <div className="space-y-3">
            <h3 className={`${spectral.className} text-lg font-bold text-[#052356]`}>
              4. Preparation of Reference Material
            </h3>
            <p className="text-justify">
              Rajbhasha Prabhag prepares and updates, from time to time, administrative glossary, standard drafts, collection of English and Hindi expressions and various support material in Hindi which are made available to the staff members to facilitate them for use of Hindi in their office work.
            </p>
          </div>

          {/* 5. Translation */}
          <div className="space-y-3">
            <h3 className={`${spectral.className} text-lg font-bold text-[#052356]`}>
              5. Translation
            </h3>
            <p className="text-justify">
              The Division provides translation of manuals and various documents coming under Section 3(3) of Official Languages Act, 1963. This is in addition to all kinds of procedural literature, stationery, publications, advertisements, hoardings, brochures, slogans, policy circulars/circulars, instructions issued by different Divisions, day-to-day correspondence, and various schemes of publicity material, invitation cards, Annual Reports and press communiqués.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
