"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Spectral } from 'next/font/google';
import { Mail, Phone, MapPin, Info } from 'lucide-react';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function RtiContent() {
  const officers = [
    {
      role: "Appellate Authority (AA)",
      name: "Dr. L. Haokip",
      designation: "Research Officer",
      address: "Prime Ministers Museum and Library, Teen Murti House, New Delhi - 110011",
      email: "ohdnmmi[at]gmail[dot]com",
      phone: "23016140"
    },
    {
      role: "Central Public Information Officer (CPIO)",
      name: "Vikas Kumar",
      designation: "Library and Information Officer",
      address: "Prime Ministers Museum and Library, Teen Murti House, New Delhi - 110011",
      email: "lio.nmml[at]gov.in",
      phone: "21411895"
    },
    {
      role: "Public Information Officer (PIO)",
      name: "Smt. Geeta Yadav",
      designation: "Asst. Lib. & Info. Officer",
      address: "Prime Ministers Museum and Library, Teen Murti House, New Delhi - 110011",
      email: "geetayadav29[at]gmail[dot]com",
      phone: "01123013203"
    }
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Page Hero Section ── */}
      <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/hero.png"
          alt="RTI"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>




      {/* ── RTI Header Strip (bg-[#f4f4f4] to match Events header strip) ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Top orange accent line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Right to Information
            </h2>
          </div>
        </div>
      </section>

      {/* ── Main Content Block (bg-white) ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Left-Aligned Intro Paragraph */}
          <div className="mb-10 max-w-4xl">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The Prime Ministers Museum and Library (PMML) is committed to transparency, integrity, and public accountability. In compliance with the Right to Information Act, 2005, the designated officials responsible for processing queries and addressing information requests are listed below.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {officers.map((officer, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col p-6 sm:p-8"
              >
                {/* Header Card Role */}
                <div className="mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                    {officer.role}
                  </span>
                  <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
                    {officer.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                    {officer.designation}
                  </p>
                </div>

                <div className="h-[1px] w-full bg-slate-100 my-4" />

                {/* Details list */}
                <div className="space-y-4 text-xs sm:text-sm text-slate-600 flex-grow">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4.5 h-4.5 text-[#052356] mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{officer.address}</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <Mail className="w-4.5 h-4.5 text-[#052356] flex-shrink-0" />
                    <span className="font-mono tracking-tight break-all">{officer.email}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-4.5 h-4.5 text-[#052356] flex-shrink-0" />
                    <span>{officer.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Procedure Box */}
          <div className="bg-[#f4f4f4] rounded-xl p-6 sm:p-8 flex items-start gap-4 max-w-4xl mx-auto shadow-sm">
            <div className="p-2.5 bg-slate-200 text-[#052356] rounded-lg flex-shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#052356] mb-2">Application Procedure & Fees</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                All applications under the RTI Act, accompanied by the requisite processing fees (made in favor of the <strong className="text-slate-800">Director, Prime Ministers Museum and Library</strong>), will be duly received by the Cashier. Upon receipt, they will be officially logged and subsequently forwarded to the CPIO for action.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
