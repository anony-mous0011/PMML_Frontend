"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

interface Vacancy {
  id: string;
  title: string;
  date: string;
  size: string;
  type: string;
  url: string;
}

const VACANCIES_DATA: Vacancy[] = [
  {
    id: "v1",
    title: "Vacancy for the Positions of Science Educator and Technician (On Contractual Basis)",
    date: "30/06/2026",
    size: "1.24 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v2",
    title: "Vacancy for the posts of Chief Curator and General Manager at Pradhanmantri Sangrahalaya.",
    date: "29/06/2026",
    size: "890 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v3",
    title: "Vacancy for various postitions in the O/o Financial Advisor, PMML",
    date: "22/11/2025",
    size: "1.10 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v4",
    title: "Recruitment for the Newly Upgraded Astronomy Gallery at Planetarium",
    date: "20/11/2025",
    size: "950 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v5",
    title: "Vacancy for the position of Publicity Manager (on contractual basis)",
    date: "21/11/2025",
    size: "1.05 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v6",
    title: "Vacancy for the Position of Director, Nehru Planetarium (on Contractual/ Deputation Basis)",
    date: "17/11/2025",
    size: "1.80 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v7",
    title: "Result for the post of Director (Planetarium)",
    date: "15/11/2025",
    size: "720 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v8",
    title: "Vacancy for the Position of Curator and Assistant Curator (On Contractual Basis and Deputation)",
    date: "02/11/2025",
    size: "2.10 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v9",
    title: "Vacancy for the Position of Director, Nehru Planetarium (on Contractual/ Deputation Basis)",
    date: "17/10/2025",
    size: "1.65 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v10",
    title: "Vacancy for the post of Accounts Assistant (on contractual basis)",
    date: "15/10/2025",
    size: "1.20 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v11",
    title: "Vacancy for the post of Cashier (on contractual basis)",
    date: "15/10/2025",
    size: "980 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v12",
    title: "Recruitments for the Newly Upgraded \"Astronomy Gallery\" at the Planetarium",
    date: "25/09/2025",
    size: "1.45 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v13",
    title: "Vacancy for the Positions of IT Head & IT Full Stack Developer (on Contractual Basis)",
    date: "12/09/2025",
    size: "2.30 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v14",
    title: "Result for the post of Assistant Administrative Officer-cum- Engineer (Planetarium)",
    date: "10/09/2025",
    size: "820 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v15",
    title: "Vacancy for appointment to the post of Junior Finance Officer on deputation basis",
    date: "30/04/2025",
    size: "1.15 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v16",
    title: "Vacancy for the post of Assistant Administrative Officer-cum-Engineer in Planetarium",
    date: "20/01/2025",
    size: "1.30 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v17",
    title: "Result of One post of Hindi Translator",
    date: "",
    size: "640 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v18",
    title: "Result for One post of Preservation Assistant",
    date: "",
    size: "710 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v19",
    title: "List of applicants shortlisted for Hindi Translator (Contractual)",
    date: "",
    size: "890 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v20",
    title: "List of applicants shortlisted for Junior Hindi Stenographer (Contractual)",
    date: "",
    size: "820 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v21",
    title: "LIST OF CANDIDATES FOR SKILL TEST FOR THE POST OF PRESERVATION ASSISTANT",
    date: "",
    size: "750 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v22",
    title: "LIST OF CANDIDATES SHORTLISTED FOR SKILL TEST FOR THE POST OF JUNIOR TECHNICIAN",
    date: "",
    size: "910 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v23",
    title: "Appointment to the posts of Research Associates on contractual basis",
    date: "",
    size: "1.12 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v24",
    title: "Postponement of Written Test for the post of Junior Technician",
    date: "",
    size: "480 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v25",
    title: "LIST OF CANDIDATES SHORTLISTED FOR WRITTEN TEST FOR THE POST OF JUNIOR TECHNICIAN",
    date: "",
    size: "960 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v26",
    title: "Result for two (2) Posts (EWS & OBC each) of Senior Research Assistant",
    date: "",
    size: "840 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v27",
    title: "Result of one UR post of Photo Assistant",
    date: "",
    size: "690 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v28",
    title: "Result for the post of Account Assistant",
    date: "",
    size: "780 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v29",
    title: "List of candidates shortlisted for Skill Test for the post of Guide (Contractual Basis)",
    date: "",
    size: "810 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v30",
    title: "Interview Call for the post of Accounts Assistant",
    date: "",
    size: "530 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v31",
    title: "Result for 3 Posts of Photographer",
    date: "",
    size: "740 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v32",
    title: "Applications are invited for the post of Accounts Assistant on Contractual basis",
    date: "",
    size: "1.02 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v33",
    title: "List of candidates shortlisted for Skill Test- Based Viva for the post of Photographer",
    date: "",
    size: "880 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v34",
    title: "Proctor-Based Online Examination for Contractual Appointment for the post of Guide",
    date: "",
    size: "1.15 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v35",
    title: "Vacancy for one post of General Manager on deputation basis failing which contract basis",
    date: "",
    size: "1.40 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v36",
    title: "Applications are invited for various posts of Prime Ministers Museum & Library",
    date: "",
    size: "1.60 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v37",
    title: "RESULT FOR THE POST OF PRESERVATION ASSISTANT & TECHNICAL ASSISTANT (PRESERVATION)",
    date: "",
    size: "920 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v38",
    title: "Admit card link and Syllabus for SRA exam",
    date: "",
    size: "550 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v39",
    title: "List of Shortlisted Candidates for Skill Test for post of Photo Assistant & Photographer (EWS & UR)",
    date: "",
    size: "680 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v40",
    title: "List of Shortlisted Candidates for the Post of SRA (OBC & EWS) and Cancellation of One UR Vacancy",
    date: "",
    size: "930 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v41",
    title: "Vacancy for Hindi Translator and Junior Stenographer (Hindi) on contract basis",
    date: "15/10/2023",
    size: "1.10 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v42",
    title: "Result for the post of Junior Curator",
    date: "",
    size: "720 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v43",
    title: "Result for the post of Junior Technician",
    date: "",
    size: "860 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v44",
    title: "List of selected candidates for the post of Research Assistant (Contractual)",
    date: "",
    size: "740 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v45",
    title: "List of candidates for final interaction session for the post of Research Assistant (Contractual)",
    date: "",
    size: "920 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v46",
    title: "List of candidates for the interaction session for the post of Research Assistant (Contractual)",
    date: "",
    size: "890 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v47",
    title: "Result for the post of Accounts Assistant",
    date: "",
    size: "670 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v48",
    title: "Vacancy for the post of Photographer",
    date: "",
    size: "1.15 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v49",
    title: "Result for the two posts of Preservation Assistant",
    date: "",
    size: "790 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v50",
    title: "List of shortlisted candidates for the post of Account Assistant (contract basis)",
    date: "",
    size: "820 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v51",
    title: "List of shortlisted candidates for the post of Preservation Assistant (contract basis)",
    date: "",
    size: "850 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v52",
    title: "Vacancy for the Post of Research Assistant (Contract Basis) for the Manuscripts Section",
    date: "09/06/2023",
    size: "1.25 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v53",
    title: "Vacancy for the Post of Preservation Assistant in the Preservation Unit (Contract Basis)",
    date: "",
    size: "1.08 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v54",
    title: "Applications for the post of Accounts Assistant on Contract basis",
    date: "",
    size: "990 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v55",
    title: "Advertisement for the post of Photo Assistant",
    date: "",
    size: "830 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v56",
    title: "Result for the post of Assistant Caretaker",
    date: "",
    size: "720 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v57",
    title: "List of Shortlisted candidates for interview to the post of Assistant Caretaker",
    date: "03/03/2023",
    size: "940 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v58",
    title: "SKILL TEST AND INTERVIEW FOR THR POST OF PRESERVATION ASSISTANT AND JUNIOR TECHNICIAN",
    date: "",
    size: "1.10 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v59",
    title: "Result for Upper Division Clerk (UDC), Pradhanmantri Sangrahalaya (2 posts)",
    date: "",
    size: "800 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v60",
    title: "Cancellation of the Post of Junior Finance Officer in Pradhanmantri Sangrahalaya",
    date: "",
    size: "620 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v61",
    title: "Result for the post of Manager (Administrator)",
    date: "",
    size: "750 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v62",
    title: "Result for the post of Photo Assistant",
    date: "",
    size: "690 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v63",
    title: "The last date for filling up the form for UDC has been extended till 27th January, 2023",
    date: "27/01/2023",
    size: "1.05 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v64",
    title: "LIST OF CANDIDATES SELECTED FOR INTERVIEW FOR THE POST OF PHOTO ASSISTANT TO BE HELD ON 03.02.2023",
    date: "03/02/2023",
    size: "690 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v65",
    title: "Application Link for shortlisted candidates for the post of UDC Helpline No. 7353014447",
    date: "",
    size: "520 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v66",
    title: "List of Shortlisted Candidates for post of UDC and Information Bulletin for Written Exam – UPDATED",
    date: "",
    size: "1.05 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v67",
    title: "Result for the Post of Personal Assistant in Pradhanmantri Sangrahalaya",
    date: "",
    size: "730 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v68",
    title: "Advertisement for the post of Junior Curator at Pradhanmantri Sangrahalaya",
    date: "25/01/2023",
    size: "1.12 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v69",
    title: "Cancellation of the Post of General Manager in Pradhanmantri Sangrahalaya",
    date: "",
    size: "480 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v70",
    title: "List of Shortlisted Candidates for Interview for the post of Personal Assistant",
    date: "",
    size: "820 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v71",
    title: "Consultant on Retainership",
    date: "16/12/2022",
    size: "950 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v72",
    title: "Appointment to the post of Web Developer on contractual basis",
    date: "",
    size: "1.10 MB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v73",
    title: "Typographical Amendment in the list of shortlisted candidates for the post of Personal Assistant",
    date: "",
    size: "540 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v74",
    title: "List of shortlisted candidates for the post of Junior Finance Officer",
    date: "",
    size: "670 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v75",
    title: "List of Shortlisted Candidates for Typing Test for the post of Personal Assistant",
    date: "",
    size: "810 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v76",
    title: "Shortlisted candidates for the post of Manager (Administrator)",
    date: "",
    size: "790 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v77",
    title: "Result for the post of Assistant Caretaker",
    date: "",
    size: "710 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v78",
    title: "Result for the post of IT Specialist",
    date: "",
    size: "880 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v79",
    title: "Shortlisted candidates for the post of Ass. Caretaker",
    date: "31/10/2022",
    size: "920 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v80",
    title: "Shortlisted candidates for the post of IT Specialist",
    date: "31/10/2022",
    size: "950 KB",
    type: "PDF",
    url: "#"
  },
  {
    id: "v81",
    title: "Result : Selected candidate for the post of FAO",
    date: "31/10/2022",
    size: "740 KB",
    type: "PDF",
    url: "#"
  }
];

export default function VacanciesContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Helper to parse DD/MM/YYYY into timestamp
  const parseDate = (dateStr: string) => {
    if (!dateStr) return 0;
    const parts = dateStr.split('/');
    if (parts.length < 3) return 0;
    return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0])).getTime();
  };

  // Helper to map and compute vacancy details dynamically
  const getVacancyDetails = (item: Vacancy) => {
    // 1. Department Mapping
    let dept = "Administration";
    const titleLower = item.title.toLowerCase();
    if (titleLower.includes("planetarium") || titleLower.includes("science educator") || titleLower.includes("astronomy")) {
      dept = "Nehru Planetarium";
    } else if (titleLower.includes("sangrahalaya") || titleLower.includes("museum") || titleLower.includes("gallery")) {
      dept = "Museum";
    } else if (titleLower.includes("library") || titleLower.includes("manuscripts") || titleLower.includes("book")) {
      dept = "Library";
    } else if (titleLower.includes("finance") || titleLower.includes("accounts") || titleLower.includes("cashier") || titleLower.includes("fao")) {
      dept = "Finance & Accounts";
    } else if (titleLower.includes("it head") || titleLower.includes("developer") || titleLower.includes("it specialist")) {
      dept = "IT Department";
    } else if (titleLower.includes("curator")) {
      dept = "Curatorial";
    } else if (titleLower.includes("research") || titleLower.includes("archives")) {
      dept = "Research";
    } else if (titleLower.includes("preservation") || titleLower.includes("technical assistant")) {
      dept = "Preservation Unit";
    }

    // 2. Published Date
    const pubDate = item.date || "";

    // 3. Last Date & Status
    let lastDateStr = "";
    let isOpen = false;

    if (item.date) {
      const parts = item.date.split('/');
      if (parts.length === 3) {
        const pubDateObj = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
        // Add 30 days for last date
        const lastDateObj = new Date(pubDateObj.getTime() + 30 * 24 * 60 * 60 * 1000);
        
        // Format last date back to DD/MM/YYYY
        const dd = String(lastDateObj.getDate()).padStart(2, '0');
        const mm = String(lastDateObj.getMonth() + 1).padStart(2, '0');
        const yyyy = lastDateObj.getFullYear();
        lastDateStr = `${dd}/${mm}/${yyyy}`;

        // Status Check: Compare lastDateObj with today (June 29, 2026)
        const today = new Date(2026, 5, 29); // 29 June 2026
        if (lastDateObj >= today) {
          isOpen = true;
        }
      }
    }

    return {
      dept,
      pubDate,
      lastDateStr,
      status: isOpen ? "Open" : "Closed"
    };
  };

  // Filter & Sort
  const processedVacancies = useMemo(() => {
    let result = VACANCIES_DATA.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    result.sort((a, b) => {
      const timeA = parseDate(a.date);
      const timeB = parseDate(b.date);
      return sortBy === "newest" ? timeB - timeA : timeA - timeB;
    });

    return result;
  }, [searchQuery, sortBy]);

  // Reset pagination on search/sort change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy, itemsPerPage]);

  const totalPages = Math.ceil(processedVacancies.length / itemsPerPage);
  const paginatedVacancies = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedVacancies.slice(startIndex, startIndex + itemsPerPage);
  }, [processedVacancies, currentPage, itemsPerPage]);

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

      {/* ── Main Content Block (bg-white) ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Heading */}
          <div className="mb-6 text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Vacancies
            </h2>
          </div>

          {/* Controls row (aligned with Annual Reports style) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Search Box */}
            <div className="relative md:col-span-2">
              <input
                type="text"
                placeholder="Search vacancies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm text-black border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none transition-all bg-gray-50/20"
              />
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none bg-white text-gray-600 appearance-none cursor-pointer"
              >
                <option value="newest">Sort: Newest First</option>
                <option value="oldest">Sort: Oldest First</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Items Per Page */}
            <div className="relative">
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none bg-white text-gray-600 appearance-none cursor-pointer"
              >
                <option value={5}>5 per page</option>
                <option value={10}>10 per page</option>
                <option value={20}>20 per page</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Documents Table */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f4f4f4] text-[#052356] border-b border-gray-200">
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider">Title</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-48 whitespace-nowrap">Department</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-40 whitespace-nowrap">Published Date</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-40 whitespace-nowrap">Last Date</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-32 whitespace-nowrap">Status</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-32 whitespace-nowrap">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedVacancies.length > 0 ? (
                    paginatedVacancies.map((vacancy) => {
                      const { dept, pubDate, lastDateStr, status } = getVacancyDetails(vacancy);
                      return (
                        <tr key={vacancy.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                          {/* Title Column */}
                          <td className="py-4 px-6">
                            <div className="flex items-start gap-3">
                              <svg className="w-5.5 h-5.5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                              </svg>
                              <a 
                                href={vacancy.url} 
                                className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors leading-snug cursor-pointer"
                              >
                                {vacancy.title}
                              </a>
                            </div>
                          </td>

                          {/* Department Column */}
                          <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                            {dept}
                          </td>

                          {/* Published Date Column */}
                          <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                            {pubDate}
                          </td>

                          {/* Last Date Column */}
                          <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                            {lastDateStr}
                          </td>

                          {/* Status Column */}
                          <td className="py-4 px-6 text-center">
                            {status === "Open" ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-150">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                Open
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-50 text-gray-500 border border-gray-200">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                Closed
                              </span>
                            )}
                          </td>

                          {/* Details (VIEW Button) Column */}
                          <td className="py-4 px-6 text-center">
                            <a 
                              href={vacancy.url} 
                              className="inline-flex items-center justify-center gap-1 px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-bold tracking-wide transition-all select-none cursor-pointer"
                            >
                              <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span>VIEW</span>
                            </a>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-gray-500">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">No vacancies found matching your search query.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-slate-100 pt-6">
              <span className="text-xs sm:text-sm text-slate-500 font-medium">
                Showing <strong className="text-slate-800">{(currentPage - 1) * itemsPerPage + 1}</strong> to{' '}
                <strong className="text-slate-800">
                  {Math.min(currentPage * itemsPerPage, processedVacancies.length)}
                </strong>{' '}
                of <strong className="text-slate-800">{processedVacancies.length}</strong> entries
              </span>

              {/* Pagination buttons */}
              <div className="flex items-center gap-1.5 select-none">
                {/* Prev Button */}
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer"
                >
                  Previous
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-[#052356] text-white shadow-sm'
                        : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
