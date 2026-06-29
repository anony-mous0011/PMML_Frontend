"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function OralHistoryDivisionContent() {
  const [activeInterviewIdx, setActiveInterviewIdx] = useState(0);

  const INTERVIEWS = [
    {
      image: "/interview-1.jpg",
      alt: "Shri Triloki Nath Chaturvedi Interview",
      text: "The latest interview conducted by the PMML was with Shri Triloki Nath Chaturvedi who has served in various capacities in government, including as Governor of Karnataka and Kerala.",
      readMoreUrl: "#"
    },
    {
      image: "/interview-2.jpg",
      alt: "Shri Ranjan Gogoi Interview",
      text: "The latest interview conducted by the PMML was with Shri Ranjan Gogoi, former Chief Justice of India and member of Rajya Sabha.",
      readMoreUrl: "#"
    }
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Hero Banner ── */}
      <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/DSC_4568.jpg"
          alt="PMML Oral History Division"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── Content Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:gap-12 w-full">
            
            {/* Block 1 */}
            <div className="flex flex-col gap-4 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
                {/* Left Column: Image */}
                <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
                  <Image
                    src="/hero-slide-3.png"
                    alt="PMML Oral History Division Archival Image"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right Column: Text */}
                <div className="lg:col-span-6 flex flex-col justify-start h-full">
                  {/* Orange Accent Line */}
                  <div className="w-12 h-1 bg-[#f37021] mb-2.5" />

                  {/* Heading */}
                  <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                    Oral History Division
                  </h2>

                  <div className="space-y-4 text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed text-justify">
                    <p>
                      The Oral History Project of the Prime Ministers&apos; Museum and Library (PMML) was conceived as part of its research activities. The first steps towards organising it were taken in the summer of 1966. So far, the PMML has conducted about 1,378 interviews. Out of these, 930 have been transcribed, edited, and prepared in book form. These are available to scholars and researchers for consultation in the Reading Room of the Manuscripts Section.
                    </p>
                    <p>
                      In the initial phase of the PMML&apos;s oral history project, the emphasis was on the recollections of men and women who came into contact with India&apos;s great leaders or were associated with important political events or movements, either as participants or as witnesses. Gradually, the oral history canvas expanded to include subjects concerning overall national development, including the economy, foreign policy, art and culture, sports, institution-building, etc.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full-width Paragraph 3 */}
              <div className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed text-justify mt-4">
                <p>
                  The list of persons to be interviewed is revised on a continual basis. Among those whose recollections have been recorded are Khan Abdul Ghaffar Khan, Acharya J.B. Kripalani, Smt. Renuka Ray, Smt. Kamaladevi Chattopadhyay, Dr. Sushila Nayar, E.M.S. Namboodiripad, H.V. Kamath, A.P. Jain, the Nawab of Chhatari, Dr. Jivraj Mehta, R.K. Nehru, H.M. Patel, Jyoti Basu, Gulzarilal Nanda, Chaudhary Charan Singh, P.V. Narasimha Rao, I.K. Gujral, and V.P. Singh.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col gap-4 w-full border-t border-gray-100 pt-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
                {/* Left Column: Text (order-2 on mobile, order-1 on desktop) */}
                <div className="lg:col-span-6 flex flex-col justify-start order-2 lg:order-1 h-full">
                  <div className="space-y-4 text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed text-justify">
                    <p>
                      Among the scientists interviewed are S. Chandrasekhar and Prof. Satyendranath Bose. The foreigners who have been interviewed on Jawaharlal Nehru or on their association with the Indian national movement include Louis Mountbatten, Fenner Brockway, Horace Alexander, James Cameron, Yehudi Menuhin, Mrs. Martin Luther King, Willy Brandt, Chancellor Kreisky of Austria, Pierre Mendès-France, Chester Bowles, Tibor Mende, Faiz Ahmed Faiz, and many others.
                    </p>
                    <p>
                      A wide variety of subjects have already been covered by our Oral History interviews, such as the reminiscences of important leaders; Indian politics going back to the partition of Bengal; the First World War; Satyagraha campaigns; social reform movements; the growth of trade unions and labour relations; activities of revolutionary groups; Hindu-Muslim relations; the growth of the socialist movement; Indo-British relations in the context of Indian and British politics; and the events leading to the partition of India.
                    </p>
                  </div>
                </div>

                {/* Right Column: Image (order-1 on mobile, order-2 on desktop) */}
                <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full order-1 lg:order-2">
                  <Image
                    src="/hero-slide-3.png"
                    alt="PMML Oral History Division Archive"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Full-width Paragraph 6 */}
              <div className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed text-justify mt-4">
                <p>
                  The programme for oral history interviews is a continuous process. However, a body of valuable source material has already been accumulated to assist historians of the period who wish to write about the great personalities or movements of recent Indian history. This material, along with the vast and varied printed and manuscript materials collected by the PMML, constitutes a significant contribution to the study of history of modern India, and especially of Indian nationalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Block 3: Interviews Section (Interactive Slider) ── */}
      <section className="w-full py-12 lg:py-16 bg-[#f4f4f4] text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-8">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Interviews
            </h2>
          </div>

          {/* Slider Wrapper */}
          <div className="relative flex items-center justify-center w-full bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] min-h-[320px] overflow-hidden">
            
            {/* Left Arrow */}
            <button
              onClick={() => setActiveInterviewIdx((prev) => (prev === 0 ? INTERVIEWS.length - 1 : prev - 1))}
              className="absolute left-2 md:left-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#f37021]/30 hover:bg-[#f37021] text-[#f37021] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer select-none z-10 active:scale-90"
              aria-label="Previous interview"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Slider Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full px-10 md:px-12">
              {/* Left Column: Image */}
              <div className="lg:col-span-7 relative aspect-[16/9] sm:aspect-[1.8/1] rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-slate-50 w-full">
                <Image
                  src={INTERVIEWS[activeInterviewIdx].image}
                  alt={INTERVIEWS[activeInterviewIdx].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover transition-opacity duration-300"
                />
              </div>

              {/* Right Column: Text */}
              <div className="lg:col-span-5 flex flex-col justify-center text-left">
                <p className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed mb-6 text-justify">
                  {INTERVIEWS[activeInterviewIdx].text}
                </p>
                
               
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => setActiveInterviewIdx((prev) => (prev === INTERVIEWS.length - 1 ? 0 : prev + 1))}
              className="absolute right-2 md:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#f37021]/30 hover:bg-[#f37021] text-[#f37021] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer select-none z-10 active:scale-90"
              aria-label="Next interview"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>
        </div>
      </section>

      {/* ── Block 4: Studio Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            {/* Left Column: Image */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
              <Image
                src="/studio.jpg"
                alt="PMML Oral History Recording Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Column: Text */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              {/* Orange Accent Line */}
              <div className="w-12 h-1 bg-[#f37021] mb-2.5" />

              {/* Heading */}
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                Studio
              </h2>

              <p className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed mb-6 text-justify">
                We usually conduct our oral history interviews in our Studio at the Museum building; our technical staff members oversee these recordings. Alternatively, we also conduct interviews at other locations as per the convenience of the interviewees.
              </p>

              <div className="flex flex-wrap items-center gap-5">
          

                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#FEEAE6] hover:bg-[#FCDAD2] text-[#f37021] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-all duration-300 shadow-[0_2px_8px_rgba(243,112,33,0.1)] active:scale-95 cursor-pointer ml-1"
                >
                  <span>Finalised Transcripts</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
