"use client";

import React, { useState } from 'react';
import { NAV_ITEMS } from './MenuBar';

interface HeaderProps {
  emblemSrc?: string;
  torchSrc?: string;
}

export const Header: React.FC<HeaderProps> = ({
  emblemSrc = '/ashok-stambh.png',
  torchSrc = '/logo.png',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Top Header Row (Logo, Search, Plan A Visit) */}
      <header className="w-full bg-white shadow-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            
            {/* LEFT: Mobile Toggle & Logos */}
            <div className="flex items-center space-x-3 md:space-x-4">
              {/* Mobile Hamburger Toggle (Visible only on mobile/tablet) */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                type="button"
                className="lg:hidden p-2 rounded-md text-[#f37021] border-none hover:bg-orange-50 focus:outline-none transition-colors cursor-pointer bg-transparent"
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Logo Group */}
              <a href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-95 transition-opacity select-none">
                <img src={emblemSrc} alt="State Emblem of India" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain" />
                <img src={torchSrc} alt="PMML Torch Logo" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain" />
                <div className="flex flex-col justify-center border-l border-gray-200 pl-2 sm:pl-3">
                  <span className="font-serif text-[10px] sm:text-xs font-semibold leading-tight text-gray-800 tracking-wide text-left">
                    Prime Ministers
                  </span>
                  <span className="font-serif text-[10px] sm:text-xs font-semibold leading-tight text-gray-800 tracking-wide text-left">
                    Museum & Library
                  </span>
                  <span className="text-[7px] sm:text-[9px] font-normal text-gray-500 mt-0.5 leading-none text-left">
                    प्रधानमंत्री संग्रहालय एवं पुस्तकालय
                  </span>
                </div>
              </a>
            </div>

            {/* RIGHT: Search Bar & Action Button (Desktop Only) */}
            <div className="hidden lg:flex items-center space-x-4">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-56 bg-[#f5f5f5] text-gray-800 placeholder-gray-400 pl-9 pr-4 py-2 rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#f37021] transition-all"
                />
                <div className="absolute left-3 pointer-events-none">
                  <svg className="h-4 w-4 text-[#f37021]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </form>

              <a
                href="/about-pmml/contact-us"
                className="bg-[#f37021] hover:bg-[#d85c15] text-white font-semibold px-5 py-2 rounded text-center text-xs shadow-sm transition-all"
              >
                Contact us
              </a>

              <a
                href="/plan-a-visit"
                className="bg-[#f37021] hover:bg-[#d85c15] text-white font-semibold px-5 py-2 rounded text-center text-xs btn-premium-pop shadow-sm"
              >
                Plan a visit
              </a>
            </div>

            {/* Mobile Actions Right (Search trigger or small search icon can go here if needed) */}
          </div>
        </div>
      </header>


      {/* Mobile Sidebar Navigation Drawer (Visible only on mobile/tablet) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/40 backdrop-blur-sm flex justify-start">
          {/* Backdrop click closer */}
          <div className="absolute inset-0" onClick={() => setIsMobileMenuOpen(false)} />
          
          {/* Drawer Container */}
          <div className="relative w-full max-w-[290px] bg-white h-full shadow-2xl flex flex-col z-10 animate-fade-in">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <span className="font-bold text-[#052356] text-[15px]">Navigation Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 border-none bg-transparent cursor-pointer"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Drawer Search & Visit CTA */}
            <div className="p-4 border-b border-gray-100">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full mb-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full bg-gray-50 text-gray-800 placeholder-gray-400 pl-9 pr-4 py-2 rounded-lg text-xs border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#f37021] focus:border-[#f37021]"
                />
                <div className="absolute left-3">
                  <svg className="w-3.5 h-3.5 text-[#f37021]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </form>
              <div className="flex flex-col gap-2">
                <a
                  href="/plan-a-visit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-[#f37021] hover:bg-[#d85c15] text-white font-semibold py-2 rounded-lg text-center text-xs shadow-sm"
                >
                  Plan a Visit
                </a>
                <a
                  href="/about-pmml/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-[#FEEAE6] hover:bg-[#FCDCD6] text-black font-semibold py-2 rounded-lg text-center text-xs shadow-sm"
                >
                  Contact us
                </a>
              </div>
            </div>

            {/* Accordion Categories */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const hasDropdown = !!item.dropdown;
                const isAccordionOpen = openMobileAccordion === item.label;
                return (
                  <div key={item.label} className="w-full flex flex-col border-b border-gray-100 pb-1.5 last:border-0 last:pb-0">
                    {hasDropdown ? (
                      <>
                        <button
                          onClick={() => setOpenMobileAccordion(isAccordionOpen ? null : item.label)}
                          className="w-full py-2 flex justify-between items-center text-left border-none bg-transparent cursor-pointer select-none font-semibold text-[13.5px] text-[#052356] hover:text-[#f37021]"
                        >
                          <span className="flex items-center gap-1.5">
                            {item.label}
                            {item.hasStar && <span className="text-[#F5A623] text-xs">★</span>}
                          </span>
                          <svg
                            className={`w-3.5 h-3.5 transform transition-transform duration-200 ${isAccordionOpen ? 'rotate-180 text-[#f37021]' : 'text-gray-400'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>
                        {isAccordionOpen && (
                          <div className="pl-3.5 bg-gray-50/50 flex flex-col border-l border-[#f37021]/30 py-1 gap-1 mt-1">
                            {item.dropdown!.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-1.5 px-2.5 text-[12.5px] text-gray-600 hover:text-[#f37021] font-medium"
                              >
                                {subItem.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 font-semibold text-[13.5px] text-[#052356] hover:text-[#f37021]"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
