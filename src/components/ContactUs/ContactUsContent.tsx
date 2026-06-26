"use client";

import React from 'react';
import { Spectral } from "next/font/google";
import HeroSection from '@/components/Home/HeroSection';
import ReachUs from './ReachUs';
import ContactForm from './ContactForm';

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function ContactUsContent() {
  return (
    <div className="w-full">
      {/* Page Hero Section */}
      <HeroSection />

      {/* Contact Main Content Section */}
      <section className="w-full py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          
          {/* Page Heading */}
          <div className="text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Contact <span className="text-[#052356]">Us</span>
            </h2>
          </div>

          {/* Dual-Column Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Reach Us / Map */}
            <ReachUs />

            {/* Right Column: Contact Form */}
            <ContactForm />

          </div>

        </div>
      </section>
    </div>
  );
}
