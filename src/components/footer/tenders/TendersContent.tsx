"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Spectral } from 'next/font/google';
import { Download } from 'lucide-react';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

interface Tender {
  sNo: number;
  publishedDate: string;
  closingDate: string;
  title: string;
  documentUrl: string;
  corrigendum: string;
}

const TENDERS_DATA: Tender[] = [
  {
    sNo: 1,
    publishedDate: "25/06/2026",
    closingDate: "01/07/2026",
    title: "Notice Inviting Quotation (NIQ) for Printing of Occasional Papers for PMML//308",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 2,
    publishedDate: "25/06/2026",
    closingDate: "16/07/2026",
    title: "RFP FOR SELECTION OF AGENCY FOR SUPPLY, INSTALLATION AND COMMISSIONING OF CCTV SYSTEMS AT PMML/PMML/RFP/CCTV/2026/307",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 3,
    publishedDate: "25/06/2026",
    closingDate: "06/07/2026",
    title: "CORRIGENDUM FOR RFP FOR SELECTION OF AGENCEY FOR SUPPLY & INSTALLATION OF MOBILE STORAGE COMPACTOR SYSTEMS AT PMML//306",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 4,
    publishedDate: "23/06/2026",
    closingDate: "30/06/2026",
    title: "Notice Inviting Quotation (NIQ) for procurement of archival boxes for The Archives, PMML/F/PMML/The Archives/2026-2027//305",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 5,
    publishedDate: "23/06/2026",
    closingDate: "30/06/2026",
    title: "Notice Inviting Quotations (NIQ) for Repair/Replacement of Red Sand Stone Flooring at PMS-I/9-20/2025-26/Admin/304",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 6,
    publishedDate: "23/06/2026",
    closingDate: "30/06/2026",
    title: "Notice Inviting Quotations (NIQ) for rate contract Annual of repair/maintenance of various type of furniture article work at PMML. New Delhi/15-16/2022-23/Admn/303",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 7,
    publishedDate: "15/06/2026",
    closingDate: "06/07/2026",
    title: "RFP FOR SELECTION OF AGENCEY FOR SUPPLY & INSTALLATION OF MOBILE STORAGE COMPACTOR SYSTEMS AT PMML/PMML/RFP/COMPACTOR/2026/301",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 8,
    publishedDate: "05/06/2026",
    closingDate: "12/06/2026",
    title: "Notice Inviting Quotation (NIQ) for Taxi hiring service for CEO Office, Museum, PMML/CEO-2/PMML/Misc./2025-26/299",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 9,
    publishedDate: "05/06/2026",
    closingDate: "15/06/2026",
    title: "Notice Inviting Quotation (NIQ) for Taxi service for PMML/24-29/2018 Admin./297",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 10,
    publishedDate: "01/06/2026",
    closingDate: "08/06/2026",
    title: "Notice Inviting Quotation (NIQ) for procurement of Enhanced/Advanced Level NAS (Network Attached Storage) System for Accounts Section, PMML/19-7/2017-18/Accounts/295",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 11,
    publishedDate: "21/05/2026",
    closingDate: "28/05/2026",
    title: "Notice Inviting Quotations (NIQ) – Percent Rate of DSR for Renovation of VIP Room at Ground Floor, Library Building, PMML/9-20/2025-26/Admn./293",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 12,
    publishedDate: "20/05/2026",
    closingDate: "26/05/2026",
    title: "Notice Inviting Quotation (NIQ) for procurement of High-end Desktop Computer with UPS for Reprography Section, PMML/76-69/2025-26/Admn./291",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 13,
    publishedDate: "15/05/2026",
    closingDate: "22/05/2026",
    title: "NIQ for Repair work of conservation Room at PMS-1, Teen Murti Campus, New Delhi. dg 2026-27 (SH: Civil Works)/PMS/ConservationLaboratoryWork/289",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 14,
    publishedDate: "11/05/2026",
    closingDate: "18/05/2026",
    title: "Notice Inviting Quotation (NIQ) for Procurement of Paper Rotary Trimmer Cutting Machines for Preservation Section, PMML/F-3/3/2026 Pres./287",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 15,
    publishedDate: "07/05/2026",
    closingDate: "13/05/2026",
    title: "Request for Proposal (RFP) for Design and Painting of Wall Mural depicting Gyarah Murti at PMML premises/76-65/2025-26/Admn./284",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 16,
    publishedDate: "27/04/2026",
    closingDate: "04/05/2026",
    title: "CORRIGENDUM2 FOR RFP FOR SELECTION OF AGENCY FOR ANNUAL ZONAL WORK (CIVIL) AT PMML FOR PERIOD OF 1 YEAR//283",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 17,
    publishedDate: "24/04/2026",
    closingDate: "08/05/2026",
    title: "Request for Quotation (RFQ) for procurement of fully automatic coffee machine for Joint Director Secretariat, PMML/76-72/2025-26/Admn. (Proc.)/281",
    documentUrl: "#",
    corrigendum: "The last date of submission is 08/05/2026 by 11 AM. The error occured inadvertantly."
  },
  {
    sNo: 18,
    publishedDate: "23/04/2026",
    closingDate: "29/04/2026",
    title: "Invitation of Quotations for Repair/Replacement of Red Sand Stone Flooring at PMS-I/9-20/2025-26/Admin/279",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 19,
    publishedDate: "22/04/2026",
    closingDate: "28/04/2026",
    title: "CORRIGENDUM FOR RFP FOR SELECTION OF AGENCY FOR ANNUAL ZONAL WORK (CIVIL) AT PMML FOR PERIOD OF 1 YEAR/76-68/PMML/RFP/Zonal Contract//278",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 20,
    publishedDate: "16/04/2026",
    closingDate: "22/04/2026",
    title: "Request for Quotation (RFQ) for procurement of Dell Alienware 16-Aurora Laptop at PMML, New Delhi/PMML/GM/Electronic & Technical/276",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 21,
    publishedDate: "15/04/2026",
    closingDate: "21/04/2026",
    title: "Invitation of Quotations for Disposal of Unserviceable Scrap Items – reg./76-39/2025-26/Admn./Procuremen/274",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 22,
    publishedDate: "08/04/2026",
    closingDate: "15/04/2026",
    title: "Request for Quotation (RFQ) for Duplicate Microfilm Rolls for Reprography Section, PMML/No.: 8/II/93-21 Rep. (I)/272",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 23,
    publishedDate: "07/04/2026",
    closingDate: "28/04/2026",
    title: "RFP FOR SELECTION OF AGENCY FOR ANNUAL ZONAL WORK (CIVIL) FOR WHITE WASHING, DISTEMPERING, PAINTING AND MISCELLANEOUS REPAIR WORKS FOR ALL BUILDINGS, CIRCULATION AREAS AND PARKING AT PRIME MINISTERS M/76-68/PMML/RFP/ZONALCONTRACT/270",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 24,
    publishedDate: "02/04/2026",
    closingDate: "08/04/2026",
    title: "Invitation of Quotations for Disposal of Raddi (Old Newspapers and Periodicals)/14-26/2025-26/Admin/Scrap/268",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 25,
    publishedDate: "27/03/2026",
    closingDate: "02/04/2026",
    title: "Request for Quotation (RFQ) for procurement of Silica Gel Drying Oven (25 Kg) at PMML, New Delhi/8/VII/2023 Rep/266",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 26,
    publishedDate: "12/03/2026",
    closingDate: "19/03/2026",
    title: "Request for Quotation (RFQ) for Manufacturing, Supply and Installation of Steel Double Door Almirahs at PMML, New Delhi/14-23/2025-26/Admin/CISF/264",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 27,
    publishedDate: "13/02/2026",
    closingDate: "05/03/2026",
    title: "RFP to Build, Operate and Manage a Souvenir Shop at Planetarium, Prime Ministers Museum and Library, New Delhi//262",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 28,
    publishedDate: "12/02/2026",
    closingDate: "17/02/2026",
    title: "CORRIGENDUM FOR RFP FOR SELECTION OF AGENCY FOR DESIGN, IMPLEMENTATION AND MAINTENANCE OF OFC/COPPER/ ANALOG BASED INTERCOM/IP-PBX SYSTEMS AT PMML//261",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 29,
    publishedDate: "29/01/2026",
    closingDate: "17/02/2026",
    title: "RFP FOR SELECTION OF AGENCY FOR DESIGN, IMPLEMENTATION AND MAINTENANCE OF OFC/COPPER/ ANALOG BASED INTERCOM/IP-PBX SYSTEMS AT PMML/PMML/RFP/IP-PBX/2026/260",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 30,
    publishedDate: "05/01/2026",
    closingDate: "26/01/2026",
    title: "Repair and replacement of stone in front of foyer at planetarium PMML Campus New Delhi during 2025-26/64-9(1)/2017/ Engg/Repair/259",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 31,
    publishedDate: "05/12/2025",
    closingDate: "15/12/2025",
    title: "Corrigendum for RFP for Selection of Consultant for Updation/Modification of Design & Content of PMS//257",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 32,
    publishedDate: "26/11/2025",
    closingDate: "15/12/2025",
    title: "RFP for Selection of Consultant for Updation/Modification of Design & Content of PMS/RFP/GALLERYUPGRADATION/2025/256",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 33,
    publishedDate: "25/11/2025",
    closingDate: "05/12/2025",
    title: "Annual Repair work and M/o of Library building PMML campus during 2025-26(SH Repair and replacement of old Rusted C.I pipe line in shaft etc) Teen Murti House, New Delhi./76-16/2025-26/Admin/Engg/Procu/255",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 34,
    publishedDate: "25/11/2025",
    closingDate: "05/12/2025",
    title: "Miscellaneous repairing works in old project office near Annex building at PMML,Teen Murti New Delhi/PMML76-15/2025-26/Admin /Engg/254",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 35,
    publishedDate: "08/11/2025",
    closingDate: "29/11/2025",
    title: "Annual Repair work and M/o of PMML Campus (SH Misc Civil Maintenance and repair works during 2025-26)/PMML/76-7/2025-26 admin/AR/MO/253",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 36,
    publishedDate: "30/10/2025",
    closingDate: "06/11/2025",
    title: "CORRIGENDUM FOR RFP FOR SELECTION OF AGENCY FOR DESIGN, IMPLEMENTATION AND MAINTENANCE OF OFC BASED INTERCOM IP-PBX SYSTEMS AT PMML//252",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 37,
    publishedDate: "14/10/2025",
    closingDate: "04/11/2025",
    title: "RFP FOR SELECTION OF AGENCY FOR DESIGN, IMPLEMENTATION AND MAINTENANCE OF OFC BASED INTERCOM IP-PBX SYSTEMS AT PMML/PMML/RFP/IP-PBX/2025/249",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 38,
    publishedDate: "13/10/2025",
    closingDate: "03/11/2025",
    title: "Repair work of Store near Annexe Building, PMML Teen Murti House, New Delhi, during 2025-26/PMML/Store Room/2025-26/248",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 39,
    publishedDate: "10/09/2025",
    closingDate: "15/09/2025",
    title: "Sale of Scrap Items/PMML/Scrap/2025 - 26/247",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 40,
    publishedDate: "02/05/2025",
    closingDate: "07/05/2025",
    title: "RFP for Civil and Electrical work for Server Farm at PMML/PMML/Server Farm/2025-26/246",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 41,
    publishedDate: "26/04/2025",
    closingDate: "05/05/2025",
    title: "A/R and M/O to PMML at Teen Murti Campus, New Delhi during 2025-26. (SH: Internal Finishing works)/PMML/Internal Works/2025-26/245",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 42,
    publishedDate: "26/04/2025",
    closingDate: "05/05/2025",
    title: "A/R and M/O to PMML at Teen Murti Campus, New Delhi during 2025-26 (SH: External Finishing works)/PMML/External Works/2025-26/244",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 43,
    publishedDate: "04/02/2025",
    closingDate: "13/02/2025",
    title: "Corrigendum for RFP for Selection of Agency for E-Office/Workflow Automation Implementation at Prime Ministers Museum & Library//241",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 44,
    publishedDate: "23/01/2025",
    closingDate: "06/02/2025",
    title: "RFP for Selection of Agency for E-Office/Workflow Automation Implementation at Prime Ministers Museum & Library//240",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 45,
    publishedDate: "09/12/2024",
    closingDate: "30/12/2024",
    title: "RFP for Selection of Service Provider for Implementation of HRMS & Payroll System at Prime Minister's Museum & Library//239",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 46,
    publishedDate: "27/11/2024",
    closingDate: "17/12/2024",
    title: "Request for Proposal Selection of Firm for Execution of Flyover Experience Exhibit in Pradhanmantri Sangrahalaya//238",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 47,
    publishedDate: "27/11/2024",
    closingDate: "17/12/2024",
    title: "Request for Proposal for Selection of Firm for Execution of Artificial Intelligence Exhibit in Pradhanmantri Sangrahalaya//237",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 48,
    publishedDate: "27/11/2024",
    closingDate: "28/11/2024",
    title: "Cancellation of Request for Proposal for Selection of Firm for Execution of Artificial Intelligence Exhibit in Pradhanmantri Sangrahalaya//235",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 49,
    publishedDate: "12/11/2024",
    closingDate: "19/11/2024",
    title: "Corrigendum for Request for Proposal for Selection of Firm for Execution of Artificial Intelligence Exhibit in Pradhanmantri Sangrahalaya//234",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 50,
    publishedDate: "12/11/2024",
    closingDate: "19/11/2024",
    title: "Corrigendum for Request for Proposal for Selection of Firm for Execution of Flyover Experience Exhibit in Pradhanmantri Sangrahalaya//233",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 51,
    publishedDate: "22/10/2024",
    closingDate: "13/11/2024",
    title: "Request for Proposal for Selection of Firm for Execution of Flyover Experience Exhibit in Pradhanmantri Sangrahalaya//232",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 52,
    publishedDate: "22/10/2024",
    closingDate: "13/11/2024",
    title: "Request for Proposal for Selection of Firm for Execution of Artificial Intelligence Exhibit in Pradhanmantri Sangrahalaya//231",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 53,
    publishedDate: "15/10/2024",
    closingDate: "15/11/2024",
    title: "Corrigendum for Tender for Development of Cafeteria and Redevelopment of Canteen at PMML, Delhi on Design, Finance, Build, Finance, Operate and Transfer (DFBOT) Basis//229",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 54,
    publishedDate: "06/09/2024",
    closingDate: "25/09/2024",
    title: "CORRIGENDUM2 FOR REQUEST FOR PROPOSAL FOR HIRING OF CLOUD SERVICE PROVIDER FOR SANGRAHALAYA WEBSITE//227",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 55,
    publishedDate: "29/08/2024",
    closingDate: "06/09/2024",
    title: "CORRIGENDUM3 FOR REQUEST FOR PROPOSAL (RFP) FOR DEVELOPING DIGITAL ARCHIVES FOR PRIME MINISTERS MUSEUM AND LIBRARY//226",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 56,
    publishedDate: "26/08/2024",
    closingDate: "06/09/2024",
    title: "CORRIGENDUM FOR REQUEST FOR PROPOSAL FOR HIRING OF CLOUD SERVICE PROVIDER FOR SANGRAHALAYA WEBSITE//225",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 57,
    publishedDate: "26/08/2024",
    closingDate: "06/09/2024",
    title: "CORRIGENDUM2 FOR REQUEST FOR PROPOSAL (RFP) FOR DEVELOPING DIGITAL ARCHIVES FOR PRIME MINISTERS MUSEUM AND LIBRARY//224",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 58,
    publishedDate: "08/08/2024",
    closingDate: "26/08/2024",
    title: "REQUEST FOR PROPOSAL (RFP) FOR DEVELOPING DIGITAL ARCHIVES FOR PRIME MINISTERS MUSEUM AND LIBRARY/PMML/e-tender/Digital Archives/222",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 59,
    publishedDate: "24/06/2024",
    closingDate: "27/07/2024",
    title: "Limited Tender Enquiry (LTE) for Appointment of Government Valuer in Prime Ministers Museum and Library/LTE/Valuer/1/2024-2025/220",
    documentUrl: "#",
    corrigendum: ""
  },
  {
    sNo: 60,
    publishedDate: "17/05/2024",
    closingDate: "30/05/2024",
    title: "Tender for HIRING OF PRIVATE SECURITY GUARDS (UNARMED) IN PMML//218",
    documentUrl: "#",
    corrigendum: ""
  }
];

export default function TendersContent() {
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

  // Filter & Sort
  const processedTenders = useMemo(() => {
    let result = TENDERS_DATA.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    result.sort((a, b) => {
      const timeA = parseDate(a.publishedDate);
      const timeB = parseDate(b.publishedDate);
      return sortBy === "newest" ? timeB - timeA : timeA - timeB;
    });

    return result;
  }, [searchQuery, sortBy]);

  // Reset pagination on search/sort change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy, itemsPerPage]);

  const totalPages = Math.ceil(processedTenders.length / itemsPerPage);
  const paginatedTenders = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedTenders.slice(startIndex, startIndex + itemsPerPage);
  }, [processedTenders, currentPage, itemsPerPage]);

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
              Tenders
            </h2>
          </div>

          {/* Controls row (aligned with Annual Reports style) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Search Box */}
            <div className="relative md:col-span-2">
              <input
                type="text"
                placeholder="Search tenders..."
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
            <div className="overflow-x-auto lg:overflow-visible">
              <table className="w-full text-left border-collapse font-sans">
                <thead>
                  <tr className="bg-[#f4f4f4] text-[#052356] border-b border-gray-200">
                    <th className="py-3.5 px-3 text-xs font-bold uppercase tracking-wider text-center w-16 whitespace-nowrap">S.No</th>
                    <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-left">Title/Ref. No./Tender Id</th>
                    <th className="py-3.5 px-3 text-xs font-bold uppercase tracking-wider text-center w-32 whitespace-nowrap">e-Published Date</th>
                    <th className="py-3.5 px-3 text-xs font-bold uppercase tracking-wider text-center w-32 whitespace-nowrap">Closing Date</th>
                    <th className="py-3.5 px-3 text-xs font-bold uppercase tracking-wider text-center w-32 whitespace-nowrap">Tender Document</th>
                    <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-left w-48 whitespace-nowrap">Corrigendum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedTenders.length > 0 ? (
                    paginatedTenders.map((tender, index) => (
                      <tr key={tender.sNo} className="hover:bg-gray-50/50 transition-colors duration-150">
                        {/* S.No */}
                        <td className="py-4 px-3 text-sm text-gray-600 text-center font-medium">
                          {tender.sNo}
                        </td>

                        {/* Title/Ref. No. */}
                        <td className="py-4 px-4">
                          <div className="flex items-start gap-3">
                            <svg className="w-5.5 h-5.5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <a 
                              href={tender.documentUrl} 
                              className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors leading-snug cursor-pointer block font-sans"
                            >
                              {tender.title}
                            </a>
                          </div>
                        </td>

                        {/* e-Published Date */}
                        <td className="py-4 px-3 text-sm text-gray-600 text-center font-medium">
                          {tender.publishedDate}
                        </td>

                        {/* Closing Date */}
                        <td className="py-4 px-3 text-sm text-gray-600 text-center font-medium">
                          {tender.closingDate}
                        </td>

                        {/* Tender Document View */}
                        <td className="py-4 px-3 text-center">
                          <a 
                            href={tender.documentUrl}
                            className="inline-flex items-center justify-center gap-1 px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-bold tracking-wide transition-all select-none cursor-pointer"
                          >
                            <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>VIEW</span>
                          </a>
                        </td>

                        {/* Corrigendum */}
                        <td className="py-4 px-4 text-xs font-medium text-gray-500 leading-normal">
                          {tender.corrigendum}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-gray-500">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">No tenders found matching your search query.</p>
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
                  {Math.min(currentPage * itemsPerPage, processedTenders.length)}
                </strong>{' '}
                of <strong className="text-slate-800">{processedTenders.length}</strong> entries
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
