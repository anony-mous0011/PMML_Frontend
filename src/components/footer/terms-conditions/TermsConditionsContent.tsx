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

export default function TermsConditionsContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Page Hero Section ── */}
      <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/hero.png"
          alt="Privacy Policy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── Terms and Conditions Header Strip (bg-[#f4f4f4] matching RTI strip) ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Top orange accent line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Terms & Conditions
            </h2>
          </div>
        </div>
      </section>

      {/* ── Main Content Block (bg-white) ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            All of the content and information is provided by the <strong>Prime Ministers Museum and Library Society</strong>.
          </p>
          <p>
            Though all efforts have been made to ensure the accuracy of the content on this Portal, the same should not be construed as a statement of law or used for any legal purposes. The Prime Ministers Museum and Library Society accepts no responsibility in relation to the usefulness of the contents and users are advised to verify/check any information, and to obtain any appropriate professional advice before acting on the information provided in the Portal.
          </p>
          <p>
            In no event will the PMML be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this Portal.
          </p>
          <p>
            These terms of use shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts of India.
          </p>
          <p>
            Please refer following Policies of this Portal related to Privacy, Copyright and Hyper linking. If you need any more information please visit following or feel free to{' '}
            <Link href="/about-pmml/contact-us" className="text-[#f37021] hover:underline font-semibold">
              Contact Us
            </Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
