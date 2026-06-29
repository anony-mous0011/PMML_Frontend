"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import MenuBar from '@/components/layout/MenuBar';
import GovernmentPortalsSection from '@/components/layout/GovernmentPortalsSection';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

interface SearchItem {
  title: string;
  category: string;
  href: string;
  description: string;
}

const SEARCH_INDEX: SearchItem[] = [
  {
    title: "Home",
    category: "Main",
    href: "/",
    description: "Welcome to Prime Ministers Museum & Library. Explore Pradhanmantri Sangrahalaya, Teen Murti House, Teen Murti Library, Nehru Planetarium, Exhibition Galleries, and collections of speech and writing."
  },
  {
    title: "About PMML",
    category: "About",
    href: "/about-pmml",
    description: "Learn about the Prime Ministers Museum and Library (PMML) Society, its history, governance structure, and divisions."
  },
  {
    title: "PMML Society",
    category: "About",
    href: "/about-pmml/pmml-society",
    description: "Learn about the composition, roles, and members of the Prime Ministers Museum and Library Society."
  },
  {
    title: "Executive Council",
    category: "About",
    href: "/about-pmml/executive-council",
    description: "Structure, composition, and list of members of the PMML Executive Council."
  },
  {
    title: "Finance Committee",
    category: "About",
    href: "/about-pmml/finance-committee",
    description: "Financial oversight, guidelines, budgeting policies, and committee members of the PMML."
  },
  {
    title: "Annual Reports",
    category: "About",
    href: "/about-pmml/annual-reports",
    description: "Download annual reports, financial statements, and accounts of the Prime Ministers Museum & Library."
  },
  {
    title: "MoU with Ministry of Culture",
    category: "About",
    href: "/about-pmml/mou-culture",
    description: "Details, documents, and performance indicators of the Memorandum of Understanding (MoU) with the Ministry of Culture."
  },
  {
    title: "Directory (Who's Who)",
    category: "About",
    href: "/about-pmml/whos-who",
    description: "Contact directory of PMML key personnel, administrative officers, and staff members."
  },
  {
    title: "Conference Facilities",
    category: "About",
    href: "/about-pmml/conference-facilities",
    description: "Book lecture halls, seminar rooms, and auditorium facilities at Teen Murti House. Rental rates, guidelines, and booking form."
  },
  {
    title: "Nehru Planetarium",
    category: "About",
    href: "/about-pmml/nehru-planetarium",
    description: "Discover astronomical shows, ticket booking, planetarium history, celestial programs, and school visits."
  },
  {
    title: "Hindi Division",
    category: "About",
    href: "/about-pmml/hindi-division",
    description: "Details on implementation of Official Language Hindi, Rajbhasha meetings, workshops, and publications."
  },
  {
    title: "Pradhanmantri Sangrahalaya",
    category: "Sangrahalaya",
    href: "/pm-sangrahalaya",
    description: "A tribute to every Prime Minister of India since independence, showcasing their contributions to the nation."
  },
  {
    title: "Know Your Prime Minister",
    category: "Sangrahalaya",
    href: "/pm-sangrahalaya/pms-of-india",
    description: "Learn about the history, timeline, policies, and decisions of all Prime Ministers of India."
  },
  {
    title: "Key Galleries",
    category: "Sangrahalaya",
    href: "/pm-sangrahalaya/key-galleries",
    description: "Explore the main display galleries, Nehru Memorial, Constitution Gallery, Toshakhana, and dynamic exhibits."
  },
  {
    title: "Anubhuti Zone",
    category: "Sangrahalaya",
    href: "/pm-sangrahalaya/anubhuti-zone",
    description: "Interactive zones including Virtual Helicopter Ride, Sketching with PM, Handwriting with PM, and walking with PM."
  },
  {
    title: "Special Shows",
    category: "Sangrahalaya",
    href: "/pm-sangrahalaya/special-shows",
    description: "Light and sound shows, multimedia screenings, and educational events details at the Museum."
  },
  {
    title: "Library",
    category: "Library",
    href: "/library",
    description: "One of the premier research libraries on modern Indian history. Learn about reading hours, rules, membership, and resources."
  },
  {
    title: "Latest Books",
    category: "Library",
    href: "/library/latest-books",
    description: "View a catalog of recently acquired books, monographs, and journals in the PMML Library."
  },
  {
    title: "Rare Books",
    category: "Library",
    href: "/library/rare-books",
    description: "Browse the rare books collection, historical manuscripts, and out-of-print books catalog."
  },
  {
    title: "Archives",
    category: "Archives",
    href: "/archives",
    description: "Manuscripts section holding private papers of eminent individuals, institutional records, and digital archives."
  },
  {
    title: "Catalogue of Holdings",
    category: "Archives",
    href: "/archives/catalogue-holdings",
    description: "Comprehensive catalogue index of microfilms, oral history, private papers, and institutional collections."
  },
  {
    title: "CCS (Center for Contemporary Studies)",
    category: "CCS",
    href: "/ccs/about",
    description: "Advancing academic research in contemporary history, economics, and political science through fellowship and seminars."
  },
  {
    title: "CCS Fellowship",
    category: "CCS",
    href: "/ccs/fellowship",
    description: "Fellowship program details, application forms, eligibility criteria, and past fellows list."
  },
  {
    title: "CCS Occasional Papers",
    category: "CCS",
    href: "/ccs/occasional-papers",
    description: "Research papers and journals published by CCS fellows on modern Indian history and social sciences."
  },
  {
    title: "Research Publications",
    category: "Research",
    href: "/research/publications",
    description: "Books, monographs, seminar proceedings, and bibliography publications issued by PMML."
  },
  {
    title: "Reprography Division",
    category: "Research",
    href: "/research/reprography-division",
    description: "Microfilm conversion, positive microfilm rolls, preservation, lamination, and reprographic services details."
  },
  {
    title: "Oral History Division",
    category: "Research",
    href: "/research/oral-history-division",
    description: "Systematic recording and transcribing of interviews with prominent figures who participated in modern Indian history."
  },
  {
    title: "Research Projects",
    category: "Research",
    href: "/research/projects",
    description: "Ongoing and completed research projects undertaken by the faculty and scholars at PMML."
  },
  {
    title: "Sangrahalaya Events",
    category: "Events",
    href: "/pm-sangrahalaya/events",
    description: "Upcoming exhibitions, special event days, national celebrations, and lectures at the Museum."
  },
  {
    title: "CCS Events",
    category: "Events",
    href: "/ccs/events",
    description: "Seminars, academic panel debates, and round table conferences organized by the Center for Contemporary Studies."
  },
  {
    title: "Planetarium Events",
    category: "Events",
    href: "/about-pmml/nehru-planetarium/events",
    description: "Sky observation programs, lunar eclipse viewings, solar astronomy classes, and planetary shows."
  },
  {
    title: "Photo Gallery",
    category: "Media",
    href: "/media/photo-gallery",
    description: "High-resolution photos of Prime Ministers Museum & Library campus, gallery exhibits, events, and dignitaries."
  },
  {
    title: "News & Media",
    category: "Media",
    href: "/media/news",
    description: "Press releases, news articles, print media coverage, and television segments about PMML."
  },
  {
    title: "Contact Us",
    category: "Contact",
    href: "/about-pmml/contact-us",
    description: "Get in touch with PMML offices, find location details, email addresses, phone directory, and submit inquiries."
  },
  {
    title: "Terms & Conditions",
    category: "Policy",
    href: "/terms-conditions",
    description: "Terms and conditions governing the usage, limitations, and access to the PMML web portal."
  },
  {
    title: "Privacy Policy",
    category: "Policy",
    href: "/privacy-policy",
    description: "Details regarding user privacy, cookie policy, data security, and privacy protection protocols."
  },
  {
    title: "Disclaimer",
    category: "Policy",
    href: "/disclaimer",
    description: "Legal disclaimer regarding accuracy, completeness, and references of content published on the portal."
  },
  {
    title: "Copyright Policy",
    category: "Policy",
    href: "/copyright-policy",
    description: "Copyright ownership, citation guidelines, reproduction requests, and copying restrictions."
  },
  {
    title: "Help & Accessibility",
    category: "Help",
    href: "/help",
    description: "Portal accessibility features, screen reader access, keyboard navigation guide, and help options."
  },
  {
    title: "Hyperlink Policy",
    category: "Policy",
    href: "/hyperlink-policy",
    description: "Policy for incoming and outgoing hyperlinks, permissions, and linking conditions."
  },
  {
    title: "RTI (Right to Information)",
    category: "Information",
    href: "/rti",
    description: "Information handbook, Public Information Officers (PIO), fee payment details, and voluntary disclosures under the RTI Act."
  },
  {
    title: "Tenders",
    category: "Procurement",
    href: "/tenders",
    description: "Procurement notices, expressions of interest, requests for proposals (RFP), and bidding guidelines."
  },
  {
    title: "Vacancies",
    category: "Careers",
    href: "/vacancies",
    description: "Job vacancies, recruitment results, fellow appointments, internship opportunities, and application forms."
  },
  {
    title: "Sitemap",
    category: "Main",
    href: "/sitemap",
    description: "Full hierarchical list of pages and sections available on the Prime Ministers Museum & Library website."
  },
  {
    title: "Refund and Cancellation Policy",
    category: "Policy",
    href: "/refund-cancellation-policy",
    description: "Rules regarding ticket booking cancellations, payment failure handling, and ticket refund options."
  }
];

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const q = searchParams.get('q') || '';
  const [query, setQuery] = useState(q);
  const [results, setResults] = useState<SearchItem[]>([]);

  useEffect(() => {
    setQuery(q);
  }, [q]);

  useEffect(() => {
    if (!q.trim()) {
      setResults([]);
      return;
    }
    const term = q.toLowerCase();
    const filtered = SEARCH_INDEX.filter(item => 
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
    setResults(filtered);
  }, [q]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() 
            ? <mark key={i} className="bg-orange-100 text-[#f37021] font-semibold px-0.5 rounded">{part}</mark>
            : part
        )}
      </span>
    );
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Page Header Strip */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-1 bg-[#f37021] mb-4" />
          <h1 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
            Search
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 text-left">
        {/* Search Form */}
        <div className="mb-8">
          <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-3 w-full">
            <div className="relative flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search here..."
                className="w-full bg-white text-gray-800 placeholder-gray-400 pl-10 pr-4 py-3 sm:py-3.5 rounded-xl text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f37021]/30 focus:border-[#f37021] transition-all"
              />
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
                <svg className="w-4 h-4 text-[#f37021]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#f37021] hover:bg-[#d85c15] text-white font-bold px-6 py-3 sm:py-3.5 rounded-xl text-sm shadow-sm transition-all hover:shadow-md cursor-pointer select-none active:scale-[0.98]"
            >
              Search
            </button>
          </form>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
            {q.trim() ? `Search Results for "${q}"` : "Please enter a search term"}
          </span>
          <span className="text-xs font-bold bg-orange-50 text-[#f37021] px-3 py-1.5 rounded-full">
            {results.length} {results.length === 1 ? 'result' : 'results'} found
          </span>
        </div>

        {/* Results List */}
        {results.length > 0 ? (
          <div className="space-y-4">
            {results.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block bg-white rounded-xl border border-gray-150 p-5 shadow-sm hover:shadow-md hover:border-[#f37021]/30 transition-all duration-200 group text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {/* Category tag */}
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#f37021] bg-orange-50 px-2 py-0.5 rounded mb-2.5">
                      {item.category}
                    </span>
                    {/* Title */}
                    <h3 className={`${spectral.className} text-lg sm:text-xl font-bold text-[#052356] group-hover:text-[#f37021] transition-colors leading-tight mb-2`}>
                      {highlightText(item.title, q)}
                    </h3>
                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed mb-3">
                      {highlightText(item.description, q)}
                    </p>
                    {/* Path breadcrumb */}
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                      <span>pmml-portal</span>
                      <span>/</span>
                      <span className="truncate max-w-[250px]">{item.href === '/' ? 'home' : item.href.slice(1)}</span>
                    </div>
                  </div>
                  {/* Action chevron */}
                  <div className="text-[#f37021] opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center hidden sm:block">
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-150 p-10 sm:p-14 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 text-slate-400 mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356] mb-2`}>
              No search results found
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto mb-6">
              We couldn't find anything matching your query. Please make sure all words are spelled correctly or try using different keywords.
            </p>
            {/* Suggestions */}
            <div className="border-t border-gray-100 pt-6">
              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Popular search terms</span>
              <div className="flex flex-wrap justify-center gap-2">
                {['Planetarium', 'Sangrahalaya', 'Library', 'Archives', 'CCS Fellowship', 'RTI', 'Contact Us'].map(term => (
                  <Link
                    key={term}
                    href={`/search?q=${encodeURIComponent(term)}`}
                    className="text-xs bg-slate-50 hover:bg-orange-50 text-slate-600 hover:text-[#f37021] border border-gray-200 hover:border-[#f37021]/30 px-3 py-1.5 rounded-lg font-medium transition-all"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default function SearchPage() {
  return (
    <>
      <TopBar />
      <Header />
      <MenuBar />
      <Suspense fallback={
        <div className="w-full flex-1 py-20 flex items-center justify-center bg-gray-50">
          <div className="text-slate-500 font-medium">Loading search results...</div>
        </div>
      }>
        <SearchResults />
      </Suspense>
      <GovernmentPortalsSection />
      <Footer />
    </>
  );
}
