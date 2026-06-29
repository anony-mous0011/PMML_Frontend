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

export default function PrivacyPolicyContent() {
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


      {/* ── Privacy Policy Header Strip (bg-[#f4f4f4] matching RTI strip) ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Top orange accent line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Privacy Policy
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 space-y-8 text-sm sm:text-base leading-relaxed">
          <p>
            As a general rule, this website does not collect Personal Information about you when you visit the site. You can generally visit the site without revealing Personal Information, unless you choose to provide such information.
          </p>

          <div className="space-y-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
              Site Visit Data
            </h3>
            <p>
              This website records your visit and logs the following information for statistical purposes: your server's address; the name of the top-level domain from which you access the Internet (for example, .gov, .com, .in, etc.); the type of browser you use; the date and time you access the site; the pages you have accessed and the documents downloaded and the previous Internet Address from which you linked directly to the site.
            </p>
            <p>
              We will not identify users or their browsing activities, except when a law enforcement agency may exercise a warrant to inspect the service provider's logs.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
              Cookies
            </h3>
            <p>
              A cookie is a piece of software code that an internet web site sends to your browser when you access information at that site. This site does not use cookies.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
              Email Management
            </h3>
            <p>
              Your email address will only be recorded if you choose to send a message. It will only be used for the purpose for which you have provided it and will not be added to a mailing list. Your email address will not be used for any other purpose, and will not be disclosed, without your consent.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
              Collection of Personal Information
            </h3>
            <p>
              If you are asked for any other Personal Information you will be informed how it will be used if you choose to give it, and adequate security measures will be taken to protect your personal information. If at any time you believe the principles referred to in this privacy statement have not been followed, or have any other comments on these principles, please notify the webmaster through the{' '}
              <Link href="/about-pmml/contact-us" className="text-[#f37021] hover:underline font-semibold">
                Contact Us
              </Link>{' '}
              page.
            </p>
          </div>

          <div className="bg-[#f4f4f4] rounded-xl p-5 border border-slate-100 mt-6">
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              <strong>Note:</strong> The use of the term &quot;Personal Information&quot; in this privacy statement refers to any information from which your identity is apparent or can be reasonably ascertained.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
