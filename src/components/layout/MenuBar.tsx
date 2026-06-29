"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export interface SubItem {
  label: string;
  href: string;
  target?: string;
}

export interface MenuItem {
  label: string;
  href: string;
  hasStar?: boolean;
  dropdown?: SubItem[];
}

export const NAV_ITEMS: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About PMML",
    href: "/about-pmml",
    dropdown: [
      { label: "PMML Society", href: "/about-pmml/pmml-society" },
      { label: "Executive Council", href: "/about-pmml/executive-council" },
      { label: "Finance Committee", href: "/about-pmml/finance-committee" },
      { label: "Annual Reports", href: "/about-pmml/annual-reports" },
      { label: "MoU with Ministry of Culture", href: "/about-pmml/mou-culture" },
      { label: "Directory", href: "/about-pmml/whos-who" },
      { label: "Conference Facilities", href: "/about-pmml/conference-facilities" },
      { label: "Nehru Planetarium", href: "/about-pmml/nehru-planetarium" },
      { label: "Hindi Division", href: "/about-pmml/hindi-division" },
    ],
  },
  {
    label: "Sangrahalaya",
    href: "/pm-sangrahalaya",
    dropdown: [
      { label: "Know Your Prime Minister", href: "/pm-sangrahalaya/pms-of-india" },
      { label: "Key Galleries", href: "/pm-sangrahalaya/key-galleries" },
      { label: "Anubhuti Zone", href: "/pm-sangrahalaya/anubhuti-zone" },
      { label: "Special Shows", href: "/pm-sangrahalaya/special-shows" },
      { label: "Virtual Tour", href: "/pm-sangrahalaya#virtual-tour" },
    ],
  },
  {
    label: "Library",
    href: "/library",
    dropdown: [
      { label: "Latest Books", href: "/library/latest-books" },
      { label: "Koha OPAC", href: "https://pmmlcatalog.ltsinformatics.com/", target: "_blank" },
      { label: "Rare Books", href: "/library/rare-books" },
    ],
  },
  {
    label: "Archives",
    href: "/archives",
    dropdown: [
      { label: "PMML Digital Archives", href: "https://pmmlarchives.in/login", target: "_blank" },
      { label: "Catalogue of Holdings", href: "/archives/catalogue-holdings" },
      { label: "SOP for Remote Access", href: "/archives#sop-remote-access" },
    ],
  },
  {
    label: "CCS",
    href: "/ccs/about",
    dropdown: [
      { label: "Fellowship", href: "/ccs/fellowship" },
      { label: "Seminars/Publications", href: "/ccs/about#ccs-seminars-publications" },
      { label: "Occasional Papers", href: "/ccs/occasional-papers" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    dropdown: [
      { label: "Publications", href: "/research/publications" },
      { label: "Reprography Division", href: "/research/reprography-division" },
      { label: "Oral History Division", href: "/research/oral-history-division" },
      { label: "Projects", href: "/research/projects" },
    ],
  },
   {
    label: "Events",
    href: "/events",
    dropdown: [
      { label: "Sangrahalaya Events", href: "/pm-sangrahalaya/events" },
      { label: "CCS Events", href: "/ccs/events" },
      { label: "Planetarium Events", href: "/about-pmml/nehru-planetarium/events" },
    ],
  },
  {
    label: "Media",
    href: "/media/photo-gallery",
    dropdown: [
      { label: "Photo Gallery", href: "/media/photo-gallery" },
      { label: "News", href: "/media/news" },
    ],
  },
 
];

export default function MenuBar() {
  // Track which dropdown is open via click on arrow
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      ref={navRef}
      className="w-full bg-[#052356] text-white hidden lg:block shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center justify-between h-11 text-xs xl:text-[13px] font-semibold tracking-wide">
          {NAV_ITEMS.map((item) => {
            const isOpen = openDropdown === item.label;

            return (
              <li
                key={item.label}
                className={`group relative h-full flex items-center transition-colors duration-200 ${
                  isOpen ? 'bg-[#f37021]' : 'hover:bg-[#f37021]'
                }`}
                // Close click-opened dropdown on mouse leave only if it wasn't opened by click
                onMouseLeave={() => {
                  // Let CSS handle hover; don't interfere with click state
                }}
              >
                {/* Label link — navigates to the page */}
                <Link
                  href={item.href}
                  className={`h-full flex items-center gap-1 transition-colors duration-200 text-white ${
                    item.dropdown ? 'pl-2 xl:pl-2.5 pr-1' : 'pl-2 xl:pl-2.5 pr-4 xl:pr-5'
                  }`}
                  onClick={() => setOpenDropdown(null)}
                >
                  <span className="flex items-center gap-1">
                    {item.label}
                    {item.hasStar && <span className="text-[#F5A623] text-xs">★</span>}
                  </span>
                </Link>

                {/* Arrow button — toggles dropdown on click */}
                {item.dropdown && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} dropdown`}
                    aria-expanded={isOpen}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(item.label);
                    }}
                    className="h-full pl-1 pr-4 xl:pr-5 flex items-center transition-colors duration-200 border-none bg-transparent cursor-pointer"
                  >
                    <svg
                      className={`w-2.5 h-2.5 text-white/80 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : 'group-hover:text-white'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                )}

                {/* Dropdown Panel — visible on hover (CSS) OR click (state) */}
                {item.dropdown && (
                  <ul
                    className={`
                      absolute left-0 top-full mt-0 w-64 bg-white border border-gray-100 shadow-xl
                      rounded-b-lg py-2 z-50 transition-all duration-300
                      ${isOpen
                        ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                        : 'opacity-0 invisible translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto'
                      }
                    `}
                  >
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          target={subItem.target}
                          rel={subItem.target === "_blank" ? "noopener noreferrer" : undefined}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-5 py-2.5 text-xs xl:text-[13px] text-[#052356] hover:text-[#f37021] hover:bg-orange-50/70 border-l-2 border-transparent hover:border-[#f37021] font-medium transition-all duration-200 text-left"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
