"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Spectral } from 'next/font/google';
import { ChevronRight } from 'lucide-react';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function SitemapContent() {
  const categories = [
    {
      title: "About PMML",
      links: [
        { label: "Overview", href: "/about-pmml" },
        { label: "PMML Society", href: "/about-pmml/pmml-society" },
        { label: "Executive Council", href: "/about-pmml/executive-council" },
        { label: "Finance Committee", href: "/about-pmml/finance-committee" },
        { label: "Annual Reports", href: "/about-pmml/annual-reports" },
        { label: "MoU with Ministry of Culture", href: "/about-pmml/mou-culture" },
        { label: "Directory", href: "/about-pmml/whos-who" },
        { label: "Conference Facilities", href: "/about-pmml/conference-facilities" },
        { label: "Nehru Planetarium", href: "/about-pmml/nehru-planetarium" }
      ]
    },
    {
      title: "Sangrahalaya",
      links: [
        { label: "Overview", href: "/pm-sangrahalaya" },
        { label: "Know Your Prime Minister", href: "/pm-sangrahalaya/pms-of-india" },
        { label: "Key Galleries", href: "/pm-sangrahalaya/key-galleries" },
        { label: "Anubhuti Zone", href: "/pm-sangrahalaya/anubhuti-zone" },
        { label: "Special Shows", href: "/pm-sangrahalaya/special-shows" },
        { label: "Virtual Tour", href: "/pm-sangrahalaya#virtual-tour" }
      ]
    },
    {
      title: "Library & Archives",
      links: [
        { label: "Library Home", href: "/library" },
        { label: "Latest Books", href: "/library/latest-books" },
        { label: "Koha OPAC", href: "https://pmmlcatalog.ltsinformatics.com/", target: "_blank" },
        { label: "Rare Books", href: "/library/rare-books" },
        { label: "Archives Home", href: "/archives" },
        { label: "Digital Archives", href: "https://pmmlarchives.in/login", target: "_blank" },
        { label: "Catalogue of Holdings", href: "/archives/catalogue-holdings" },
        { label: "SOP for Remote Access", href: "/archives#sop-remote-access" }
      ]
    },
    {
      title: "CCS & Research",
      links: [
        { label: "CCS Home", href: "/ccs/about" },
        { label: "Fellowship", href: "/ccs/fellowship" },
        { label: "Seminars/Publications", href: "/ccs/about#ccs-seminars-publications" },
        { label: "Occasional Papers", href: "/ccs/occasional-papers" },
        { label: "Research Home", href: "/research" },
        { label: "Publications", href: "/research/publications" },
        { label: "Reprography Division", href: "/research/reprography-division" },
        { label: "Oral History Division", href: "/research/oral-history-division" },
        { label: "Projects", href: "/research/projects" }
      ]
    },
    {
      title: "Events & Media",
      links: [
        { label: "All Events", href: "/events" },
        { label: "Sangrahalaya Events", href: "/pm-sangrahalaya/events" },
        { label: "CCS Events", href: "/ccs/events" },
        { label: "Planetarium Events", href: "/about-pmml/nehru-planetarium/events" },
        { label: "Photo Gallery", href: "/media/photo-gallery" },
        { label: "News", href: "/media/news" }
      ]
    },
    {
      title: "Other Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Right to Information (RTI)", href: "/rti" },
        { label: "Disclaimer", href: "/disclaimer" },
        { label: "Sitemap", href: "/sitemap" }
      ]
    }
  ];

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

      {/* ── Sitemap Header Strip (bg-[#f4f4f4] matching RTI strip) ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Top orange accent line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Sitemap
            </h2>
          </div>
        </div>
      </section>

      {/* ── Main Content Block (bg-white) ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {categories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className={`${spectral.className} text-xl font-bold text-[#052356] border-b border-slate-100 pb-2`}>
                  {category.title}
                </h3>
                <ul className="space-y-2.5">
                  {category.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="flex items-center gap-1.5 group">
                      <ChevronRight className="w-3.5 h-3.5 text-[#f37021] transition-transform duration-200 group-hover:translate-x-0.5" />
                      {link.target === "_blank" ? (
                        <a 
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-slate-600 hover:text-[#f37021] transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link 
                          href={link.href}
                          className="text-xs sm:text-sm text-slate-600 hover:text-[#f37021] transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
