"use client";

import React from 'react';
import Image from 'next/image';
import { Spectral } from 'next/font/google';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import HeroSection from '@/components/Home/HeroSection';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

interface PM {
  id: number;
  name: string;
  role: string;
  dates: string;
  image: string;
  bio: string;
  icons: { emoji: string; label: string; image?: string }[];
  badge?: string;
  badgeColor?: string;
}

const PM_LIST: PM[] = [
  {
    id: 1,
    name: "Shri Narendra Modi",
    role: "14th Prime Minister",
    dates: "26 May 2014 – Present",
    image: "/leaders/modi.png",
    bio: "Shri Narendra Modi is the current and the fourth longest-serving Prime Minister of India. He served as the Chief Minister of Gujarat for 14 years and was applauded for the economic growth and setting up advanced infrastructure in the state, among other key developments. As the Prime Minister of India, he is known for campaigns like Swachh Bharat, Make in India, Digital India, among many more. Amongst his several accolades, he is also famous for being the first Indian to win the Seoul Peace Prize award in 2018.",
    icons: [
      { emoji: "🧹", label: "Swachh Bharat", image: "/caricatures/modi-/modi-swachh-bharat.png" },
      { emoji: "🏭", label: "Make in India", image: "/caricatures/modi-/modi-make-in-india.png" },
      { emoji: "💻", label: "Digital India", image: "/caricatures/modi-/modi-digital-india.png" },
      { emoji: "🏥", label: "Ayushman Bharat", image: "/caricatures/modi-/modi-ayushman-bharat.png" },
      { emoji: "🏘️", label: "PM Awas Yojana", image: "/caricatures/modi-/modi-pm-awas-yojana.png" },
      { emoji: "💡", label: "Ujjwala Yojana", image: "/caricatures/modi-/modi-ujjwala-yojana.png" },
      { emoji: "📱", label: "Jan Dhan", image: "/caricatures/modi-/modi-jan-dhan.png" },
      { emoji: "🛤️", label: "Infrastructure", image: "/caricatures/modi-/modi-infrastructure.png" },
    ],
  },
  {
    id: 2,
    name: "Dr. Manmohan Singh",
    role: "13th Prime Minister",
    dates: "22 May 2004 – 26 May 2014",
    image: "/leaders/manmohan.png",
    bio: "Dr. Manmohan Singh served as Prime Minister of India from 2004 to 2014. The National Rural Employment Guarantee Act (NREGA) and the Right to Information Act were passed during his tenure as Prime Minister. Dr. Manmohan Singh is widely credited for efficiently carrying out economic reforms in the country. He is also known for signing the nuclear civil deal with the United States of America.",
    icons: [
      { emoji: "⚖️", label: "RTI Act", image: "/caricatures/manmohan-/manmohan-rti-act.png" },
      { emoji: "🔬", label: "Nuclear Deal", image: "/caricatures/manmohan-/manmohan-nuclear-deal.png" },
      { emoji: "🪪", label: "Aadhaar", image: "/caricatures/manmohan-/manmohan-aadhaar.png" },
      { emoji: "💼", label: "Economic Reform", image: "/caricatures/manmohan-/manmohan-economic-reform.png" },
      { emoji: "🌾", label: "NREGA", image: "/caricatures/manmohan-/manmohan-nrega.png" },
      { emoji: "🏗️", label: "Bharat Nirman", image: "/caricatures/manmohan-/manmohan-bharat-nirman.png" },
      { emoji: "📊", label: "GDP Growth", image: "/caricatures/manmohan-/manmohan-gdp-growth.png" },
    ],
  },
  {
    id: 3,
    name: "Shri Atal Bihari Vajpayee",
    role: "10th / 11th Prime Minister",
    dates: "16 May 1996 – 1 Jun 1996 | 19 Mar 1998 – 22 May 2004",
    image: "/leaders/vajpayee.png",
    bio: "Shri Atal Bihari Vajpayee served as Prime Minister of India for 13 days in 1996 and two incomplete terms from 1998 to 2004. He is known for his valuable contribution to India's economic growth. Operation Vijay, commonly known as the Kargil War, was fought against Pakistan and won during his tenure as Prime Minister. He made India a nuclear weapons power.",
    icons: [
      { emoji: "⚛️", label: "Pokhran Tests", image: "/caricatures/vajpayee-/vajpayee-pokhran-tests.png" },
      { emoji: "🛣️", label: "Golden Quadrilateral", image: "/caricatures/vajpayee-/vajpayee-golden-quadrilateral.png" },
      { emoji: "🎖️", label: "Kargil Victory", image: "/caricatures/vajpayee-/vajpayee-kargil-victory.png" },
      { emoji: "🏫", label: "Sarva Shiksha", image: "/caricatures/vajpayee-/vajpayee-sarva-shiksha.png" },
      { emoji: "🛤️", label: "PMGSY", image: "/caricatures/vajpayee-/vajpayee-pmgsy.png" },
      { emoji: "🤝", label: "Diplomacy", image: "/caricatures/vajpayee-/vajpayee-diplomacy.png" },
    ],
  },
  {
    id: 4,
    name: "Shri Inder Kumar Gujral",
    role: "12th Prime Minister",
    dates: "21 April 1997 – 19 March 1998",
    image: "/leaders/gujral.png",
    bio: "Shri Inder Kumar Gujral became the Prime Minister for slightly less than a year. He worked with various ministries in different capacities before becoming the Prime Minister of India. He is known for the Gujral Doctrine, which is considered a milestone in India's foreign policy.",
    icons: [
      { emoji: "🌏", label: "Gujral Doctrine", image: "/caricatures/gujral-/gujral-gujral-doctrine.png" },
      { emoji: "🤝", label: "SAARC Relations", image: "/caricatures/gujral-/gujral-saarc-relations.png" },
      { emoji: "🕊️", label: "Diplomacy", image: "/caricatures/gujral-/gujral-diplomacy.png" },
      { emoji: "🗺️", label: "Regional Policy", image: "/caricatures/gujral-/gujral-regional-policy.png" },
      { emoji: "🏛️", label: "Governance", image: "/caricatures/gujral-/gujral-governance.png" },
    ],
  },
  {
    id: 5,
    name: "Shri H. D. Deve Gowda",
    role: "11th Prime Minister",
    dates: "1 June 1996 – 21 April 1997",
    image: "/leaders/deve-gowda.png",
    bio: "Shri Haradanahalli Doddegowda Deve Gowda served as Prime Minister of India for slightly less than a year. He focused on the farmers of the country and is also credited for kickstarting the Delhi Metro project. He is popularly called the 'son of the soil' for his contributions to agriculture.",
    icons: [
      { emoji: "🚇", label: "Delhi Metro", image: "/caricatures/gowda-/gowda-delhi-metro.png" },
      { emoji: "🌾", label: "Farmer Welfare", image: "/caricatures/gowda-/gowda-farmer-welfare.png" },
      { emoji: "🌱", label: "Agriculture", image: "/caricatures/gowda-/gowda-agriculture.png" },
      { emoji: "🚜", label: "Farming", image: "/caricatures/gowda-/gowda-farming.png" },
      { emoji: "🏗️", label: "Infrastructure", image: "/caricatures/gowda-/gowda-infrastructure.png" },
    ],
  },
  {
    id: 6,
    name: "Shri P. V. Narasimha Rao",
    role: "9th Prime Minister",
    dates: "21 June 1991 – 16 May 1996",
    image: "/leaders/pvrao.png",
    bio: "Shri Pamulaparthi Venkata Narasimha Rao served as Prime Minister of India for a single term from 1991 to 1996. During his tenure, he carried out landmark economic reforms in the form of liberalisation and globalisation.",
    icons: [
      { emoji: "📈", label: "Liberalisation", image: "/caricatures/pvrao-/pvrao-liberalisation.png" },
      { emoji: "🌐", label: "Globalisation", image: "/caricatures/pvrao-/pvrao-globalisation.png" },
      { emoji: "🏦", label: "SEBI", image: "/caricatures/pvrao-/pvrao-sebi.png" },
      { emoji: "✈️", label: "WTO Entry", image: "/caricatures/pvrao-/pvrao-wto-entry.png" },
      { emoji: "💹", label: "Market Reform", image: "/caricatures/pvrao-/pvrao-market-reform.png" },
      { emoji: "🏛️", label: "Economic Policy", image: "/caricatures/pvrao-/pvrao-economic-policy.png" },
    ],
  },
  {
    id: 7,
    name: "Shri Chandra Shekhar",
    role: "8th Prime Minister",
    dates: "10 November 1990 – 21 June 1991",
    image: "/leaders/chandra-shekhar.png",
    bio: "Shri Chandra Shekhar became the first Prime Minister of India to head a coalition government at the centre. He was instrumental in preventing India from defaulting on sovereign repayments. Known for his fiery spirit, he was often referred to as 'Young Turk'.",
    icons: [
      { emoji: "💰", label: "Debt Resolution", image: "/caricatures/chandrashekhar-/chandrashekhar-debt-resolution.png" },
      { emoji: "🏛️", label: "Coalition Govt", image: "/caricatures/chandrashekhar-/chandrashekhar-coalition-govt.png" },
      { emoji: "⚖️", label: "Stability", image: "/caricatures/chandrashekhar-/chandrashekhar-stability.png" },
      { emoji: "🤝", label: "IMF Agreement", image: "/caricatures/chandrashekhar-/chandrashekhar-imf-agreement.png" },
      { emoji: "🪙", label: "Gold Pledge", image: "/caricatures/chandrashekhar-/chandrashekhar-gold-pledge.png" },
    ],
  },
  {
    id: 8,
    name: "Shri V. P. Singh",
    role: "7th Prime Minister",
    dates: "2 December 1989 – 10 November 1990",
    image: "/leaders/vp-singh.png",
    bio: "Shri Vishwanath Pratap Singh served as Prime Minister of India from 1989 to 1990. The Mandal Commission Report was implemented and the Scheduled Caste and Scheduled Tribe Act of 1989 was passed during his tenure.",
    icons: [
      { emoji: "📋", label: "Mandal Commission", image: "/caricatures/vpsingh-/vpsingh-mandal-commission.png" },
      { emoji: "⚖️", label: "SC/ST Act", image: "/caricatures/vpsingh-/vpsingh-scst-act.png" },
      { emoji: "🤲", label: "OBC Reservation", image: "/caricatures/vpsingh-/vpsingh-obc-reservation.png" },
      { emoji: "✊", label: "Social Justice", image: "/caricatures/vpsingh-/vpsingh-social-justice.png" },
      { emoji: "📜", label: "Policy Reform", image: "/caricatures/vpsingh-/vpsingh-policy-reform.png" },
    ],
  },
  {
    id: 9,
    name: "Shri Rajiv Gandhi",
    role: "6th Prime Minister",
    dates: "31 October 1984 – 2 December 1989",
    image: "/leaders/rajiv.png",
    bio: "Shri Rajiv Gandhi became the youngest Prime Minister of India and served for a single term from 1984 to 1989. During his tenure, he promoted science & technology and associated industries, and ushered in a new era of higher education reforms in the country.",
    icons: [
      { emoji: "🖥️", label: "Computerisation", image: "/caricatures/rajiv-/rajiv-computerisation.png" },
      { emoji: "📡", label: "Telecom Revolution", image: "/caricatures/rajiv-/rajiv-telecom-revolution.png" },
      { emoji: "🚂", label: "Railway Computers", image: "/caricatures/rajiv-/rajiv-railway-computers.png" },
      { emoji: "🎓", label: "IIT Expansion", image: "/caricatures/rajiv-/rajiv-iit-expansion.png" },
      { emoji: "🏫", label: "Navodaya Schools", image: "/caricatures/rajiv-/rajiv-navodaya-schools.png" },
      { emoji: "🗳️", label: "Voter Age 18", image: "/caricatures/rajiv-/rajiv-voter-age-18.png" },
    ],
  },
  {
    id: 10,
    name: "Chaudhary Charan Singh",
    role: "5th Prime Minister",
    dates: "28 July 1979 – 14 January 1980",
    image: "/leaders/charan-singh.png",
    bio: "Chaudhary Charan Singh served as Prime Minister of India for 170 days. Throughout his life he tried to improve the conditions of farmers. His birth anniversary, 23 December, is celebrated as Kisan Diwas.",
    icons: [
      { emoji: "🌾", label: "Kisan Diwas", image: "/caricatures/charansingh-/charansingh-kisan-diwas.png" },
      { emoji: "🚜", label: "Farmer Rights", image: "/caricatures/charansingh-/charansingh-farmer-rights.png" },
      { emoji: "🌱", label: "Land Reform", image: "/caricatures/charansingh-/charansingh-land-reform.png" },
      { emoji: "🪴", label: "Agriculture", image: "/caricatures/charansingh-/charansingh-agriculture.png" },
      { emoji: "🤲", label: "Rural Welfare", image: "/caricatures/charansingh-/charansingh-rural-welfare.png" },
    ],
  },
  {
    id: 11,
    name: "Shri Morarji Desai",
    role: "4th Prime Minister",
    dates: "24 March 1977 – 28 July 1979",
    image: "/leaders/desai.png",
    bio: "Shri Morarji Desai served as Prime Minister of India for 2 years from 1977 to 1979. The Forty-fourth Amendment of the Constitution of India was enacted during his tenure as Prime Minister. Shri Morarji Desai passed away at the age of 99 in Mumbai, making him the world's oldest former head of government.",
    icons: [
      { emoji: "📜", label: "44th Amendment", image: "/caricatures/desai-/desai-44th-amendment.png" },
      { emoji: "🗽", label: "Restored Democracy", image: "/caricatures/desai-/desai-restored-democracy.png" },
      { emoji: "📰", label: "Press Freedom", image: "/caricatures/desai-/desai-press-freedom.png" },
      { emoji: "🏛️", label: "Janata Party", image: "/caricatures/desai-/desai-janata-party.png" },
      { emoji: "✊", label: "Anti-Emergency", image: "/caricatures/desai-/desai-anti-emergency.png" },
    ],
  },
  {
    id: 12,
    name: "Smt. Indira Gandhi",
    role: "3rd Prime Minister",
    dates: "24 Jan 1966 – 24 Mar 1977 | 14 Jan 1980 – 31 Oct 1984",
    image: "/leaders/indira.png",
    bio: "Smt. Indira Gandhi was the first woman Prime Minister of India and served the nation for two terms. During her tenure, India won the 1971 war against Pakistan which resulted in the creation of Bangladesh. Smt. Indira Gandhi imposed emergency from 1975 to 1977.",
    icons: [
      { emoji: "🎖️", label: "1971 War Victory", image: "/caricatures/indira-/indira-1971-war-victory.png" },
      { emoji: "🌾", label: "Green Revolution", image: "/caricatures/indira-/indira-green-revolution.png" },
      { emoji: "🏦", label: "Bank Nationalisation", image: "/caricatures/indira-/indira-bank-nationalisation.png" },
      { emoji: "🚀", label: "ISRO", image: "/caricatures/indira-/indira-isro.png" },
      { emoji: "⚛️", label: "Pokhran 1974", image: "/caricatures/indira-/indira-pokhran-1974.png" },
      { emoji: "✊", label: "Garibi Hatao", image: "/caricatures/indira-/indira-garibi-hatao.png" },
    ],
    badge: "First Woman PM",
    badgeColor: "bg-purple-600",
  },
  {
    id: 13,
    name: "Shri Lal Bahadur Shastri",
    role: "2nd Prime Minister",
    dates: "9 June 1964 – 11 January 1966",
    image: "/leaders/shastri.png",
    bio: "Shri Lal Bahadur Shastri was the third Prime Minister of India. As Prime Minister, he promoted the White and Green Revolutions and coined the popular slogan 'Jai Jawan, Jai Kisan'. He also led India to victory in the India-Pakistan war of 1965.",
    icons: [
      { emoji: "🌾", label: "Green Revolution", image: "/caricatures/shastri-/shastri-green-revolution.png" },
      { emoji: "🥛", label: "White Revolution", image: "/caricatures/shastri-/shastri-white-revolution.png" },
      { emoji: "⚔️", label: "1965 War Victory", image: "/caricatures/shastri-/shastri-1965-war-victory.png" },
      { emoji: "🐄", label: "Operation Flood", image: "/caricatures/shastri-/shastri-operation-flood.png" },
      { emoji: "🛡️", label: "Jai Jawan", image: "/caricatures/shastri-/shastri-jai-jawan.png" },
    ],
  },
  {
    id: 14,
    name: "Shri Gulzari Lal Nanda",
    role: "Interim Prime Minister",
    dates: "27 May 1964 – 9 Jun 1964 | 11 Jan 1966 – 24 Jan 1966",
    image: "/leaders/nanda.png",
    bio: "Shri Gulzarilal Nanda was the second Prime Minister of India and he served the nation for two brief terms. He was instrumental in organising the Indian National Trade Union Congress. He was awarded the Bharat Ratna, India's highest civilian award, in 1997.",
    icons: [
      { emoji: "🏭", label: "INTUC", image: "/caricatures/nanda-/nanda-intuc.png" },
      { emoji: "👷", label: "Labour Rights", image: "/caricatures/nanda-/nanda-labour-rights.png" },
      { emoji: "🏅", label: "Bharat Ratna", image: "/caricatures/nanda-/nanda-bharat-ratna.png" },
      { emoji: "🤝", label: "Trade Unions", image: "/caricatures/nanda-/nanda-trade-unions.png" },
      { emoji: "⚖️", label: "Workers' Rights", image: "/caricatures/nanda-/nanda-workers-rights.png" },
    ],
    badge: "Bharat Ratna",
    badgeColor: "bg-amber-600",
  },
  {
    id: 15,
    name: "Shri Jawaharlal Nehru",
    role: "1st Prime Minister",
    dates: "15 August 1947 – 27 May 1964",
    image: "/leaders/nehru.png",
    bio: "Pandit Nehru served as Prime Minister for 17 years from 1947 to 1964. He is regarded as one of the founders of modern India as he helped usher the country into the age of industrial and technological development. His birth anniversary is celebrated as Children's Day across India.",
    icons: [
      { emoji: "🎓", label: "IITs", image: "/caricatures/nehru-/nehru-iits.png" },
      { emoji: "🏥", label: "AIIMS", image: "/caricatures/nehru-/nehru-aiims.png" },
      { emoji: "⚛️", label: "Atomic Energy", image: "/caricatures/nehru-/nehru-atomic-energy.png" },
      { emoji: "🚀", label: "Space Programme", image: "/caricatures/nehru-/nehru-space-programme.png" },
      { emoji: "🌍", label: "Non-Aligned Movement", image: "/caricatures/nehru-/nehru-non-aligned-movement.png" },
      { emoji: "🏗️", label: "Steel Plants", image: "/caricatures/nehru-/nehru-steel-plants.png" },
      { emoji: "🧒", label: "Children's Day", image: "/caricatures/nehru-/nehru-children-day.png" },
    ],
    badge: "Founder of Modern India",
    badgeColor: "bg-[#052356]",
  },
];


export default function PmsOfIndiaContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      <HeroSection />

      {/* ── INTRO SECTION ── */}
      <section className="w-full py-10 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-1 bg-[#f37021] mb-4" />
          <h1 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight leading-tight mb-6`}>
            Prime Ministers of India
          </h1>
          <p className="text-gray-500 font-medium text-sm sm:text-[15px] lg:text-[16px] leading-relaxed text-justify max-w-4xl">
            The Prime Minister is the head of the government and leader of the Council of Ministers. He is the
            chief of the executive branch of the Union Government. Since India's Independence in 1947, individuals
            of great calibre, with the passion to work for the country, have become Prime Ministers. Let's take a
            look at their life and work in the service of the nation.
          </p>
        </div>
      </section>

      {/* ── SECTION HEADING ── */}
      <div className="w-full bg-[#f4f4f4]/40 border-t border-b border-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
          <div className="w-12 h-1 bg-[#f37021] mb-4" />
          <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
            All Prime Ministers
          </h2>
        </div>
      </div>

      {/* ── PM HORIZONTAL SECTIONS ── */}
      {PM_LIST.map((pm, index) => {
        const isReversed = index % 2 !== 0;
        const isLightBg = index % 2 === 0;

        return (
          <section
            key={pm.id}
            className={`w-full border-b border-slate-100/60 ${isLightBg ? 'bg-white' : 'bg-[#f4f4f4]/25'}`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
              <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-14`}>

                {/* ── PORTRAIT SIDE ── */}
                <div className={`w-full lg:w-[30%] flex-shrink-0 flex flex-col ${isReversed ? 'items-center lg:items-end' : 'items-center lg:items-start'}`}>
                  <div className="relative w-full max-w-[220px] sm:max-w-[240px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white group transition-all duration-300 hover:shadow-2xl">
                    <Image
                      src={pm.image}
                      alt={pm.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-[1.02] group-hover:scale-105"
                      style={{ transformOrigin: 'top center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>

                {/* ── TEXT SIDE ── */}
                <div className="relative w-full lg:w-[70%] flex flex-col items-start text-left">
                  <div className="relative z-10 flex flex-col items-start w-full">
                    

                    {/* Name */}
                    <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] leading-tight mb-4`}>
                      {pm.name}
                    </h2>

                    {/* Dates Strap */}
                    <div className="flex items-center gap-2.5 mb-4 bg-[#f4f4f4] px-4 py-2.5 rounded-xl border-l-[4px] border-[#f37021] w-fit shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
                      <Calendar className="w-4 h-4 text-[#f37021] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-[#052356]">
                        {pm.dates}
                      </span>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-500 font-medium text-sm sm:text-[15px] lg:text-[16px] leading-relaxed text-justify mb-0">
                      {pm.bio}
                    </p>


                    {/* Explore Gallery button */}
                    <div className="mt-5">
                      <Link
                        href="/pm-sangrahalaya"
                        className="group inline-flex items-center justify-center bg-[#f37021] hover:bg-[#d85c15] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-[0_4px_14px_rgba(243,112,33,0.2)] hover:shadow-[0_6px_20px_rgba(243,112,33,0.35)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 select-none cursor-pointer"
                      >
                        <span>Explore Gallery</span>
                        <svg
                          className="w-4 h-4 ml-2 stroke-current transition-transform duration-300 group-hover:translate-x-1"
                          fill="none" viewBox="0 0 24 24" strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
