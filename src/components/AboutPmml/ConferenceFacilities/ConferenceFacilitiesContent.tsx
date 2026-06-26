"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Spectral } from 'next/font/google';
import {
  Building2, Users, Clock, CreditCard, FileText, Shield,
  Music, XCircle, Info, MapPin, Phone, Mail, ChevronDown, ChevronUp
} from 'lucide-react';
import HeroSection from '@/components/Home/HeroSection';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

/* ─── Accordion component ─── */
function Accordion({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between gap-4 px-6 py-5 hover:bg-[#f4f4f4] transition-colors text-left ${
          open ? 'bg-[#f8f8f8]' : 'bg-white'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-[#f37021]">{icon}</span>
          <span className="text-sm sm:text-[15px] md:text-base font-bold text-[#052356]">{title}</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-[#052356] flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#052356] flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-6 pt-2 bg-[#f8f8f8] border-t border-slate-100">
          {children}
        </div>
      )}
    </div>
  );
}

/* ─── Numbered list ─── */
function NumberedList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="flex flex-col gap-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm sm:text-[15px] text-gray-600 leading-[1.8] text-justify">
          <span className="mt-2 w-1 h-1 rounded-full bg-[#f37021] flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ─── Bullet list (top-level) ─── */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm sm:text-[15px] text-gray-600 leading-[1.8] text-justify">
          <span className="mt-2 w-1 h-1 rounded-full bg-[#f37021] flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ─── Sub list (nested, uses >>) ─── */
function SubList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1 mt-1.5 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm text-gray-600 leading-[1.8]">
          <span className="text-[#f37021] font-bold flex-shrink-0 text-xs mt-[3px]">&gt;&gt;</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ─── Section label ─── */
function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-[11px] font-bold text-[#f37021] uppercase tracking-[0.2em] mb-1 mt-5">{text}</p>
  );
}

export default function ConferenceFacilitiesContent() {
  return (
    <div className="w-full bg-white">
      <HeroSection />

      {/* ── MAIN CONTENT ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col gap-10">

        {/* Page Title & Intro */}
        <div className="w-full text-left">
          <div className="w-12 h-1 bg-[#f37021] mb-4" />
          <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] mb-3 tracking-tight`}>
            Conference Facilities
          </h2>
          <p className="text-gray-500 text-sm sm:text-[15px] lg:text-[16px] leading-relaxed text-justify">
            The core competence of the Prime Ministers Museum and Library (PMML) has been in the academic sphere, with seminars, workshops and lectures as the mainstay of its activities. The PMML Library Building has an Auditorium on the ground floor, a Seminar Room on the first floor, and the Prastuti room. The Auditorium has a capacity of 296, the Seminar Room 80, and the Prastuti room 50. Seminar Room/Auditorium/Prastuti facilities are generally provided to educational institutions, reputed NGOs, Trusts, Government departments & institutions, Foreign Missions, Cultural and Youth organizations, etc. The final decision regarding the booking rests with the Director, PMML. Organizers should fill in the requisite form and submit it to the Administration of the PMML. Outstation applicants can send their applications through email or courier.
          </p>
        </div>

        {/* ── VENUE & FACILITIES ── */}
        <div className="text-left">
          <div className="mb-6 border-b border-slate-100 pb-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>Venue & Facilities</h3>
          </div>

          {/* ── AUDITORIUM ROW ── */}
          <div className="flex flex-col gap-3 mb-10">
            {/* Title Label */}
            <div className="mb-1 text-left">
              <span className="text-slate-700 text-xs sm:text-[13px] font-extrabold uppercase tracking-widest">
                Auditorium
              </span>
            </div>

            {/* Grid layout: 1 card for pricing details, 2 cards for images */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-stretch">
              {/* Pricing Card */}
              <div className="lg:col-span-2 bg-[#f8f9fa] border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="text-4xl font-extrabold text-[#052356] tracking-tight">296</span>
                    <span className="text-slate-500 text-sm font-semibold">Capacity</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    <div className="bg-white border border-slate-200/60 rounded-xl p-4 flex flex-col justify-between shadow-xs">
                      <div>
                        <p className="text-slate-500 font-bold text-[9px] uppercase tracking-wider mb-2">Working Days (Max 8 Hours)</p>
                        <p className="text-xl font-bold text-[#052356]">₹50,000</p>
                      </div>
                      <p className="text-gray-400 text-[10px] mt-4 font-medium">Additional: ₹5,000/Hr</p>
                    </div>
                    <div className="bg-white border border-slate-200/60 rounded-xl p-4 flex flex-col justify-between shadow-xs">
                      <div>
                        <p className="text-slate-500 font-bold text-[9px] uppercase tracking-wider mb-2">Sat, Sun & Holidays</p>
                        <p className="text-xl font-bold text-[#052356]">₹70,000</p>
                      </div>
                      <p className="text-gray-400 text-[10px] mt-4 font-medium">Additional: ₹10,000/Hr</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 text-left">
                  <p className="text-slate-400 text-[11px] font-medium italic">
                    Rate of 1 Hour if Time Exceeds 30 Min
                  </p>
                </div>
              </div>

              {/* Image Card 1 */}
              <div className="lg:col-span-1 relative h-[220px] lg:h-auto min-h-[220px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
                <Image src="/audi-1.JPG" alt="Auditorium View 1" fill sizes="(max-w-7xl) 33vw, 100vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052356]/40 via-transparent to-transparent pointer-events-none" />
                <p className="absolute bottom-3 left-4 text-white text-[11px] font-bold uppercase tracking-wider">Auditorium Main Stage</p>
              </div>

              {/* Image Card 2 */}
              <div className="lg:col-span-1 relative h-[220px] lg:h-auto min-h-[220px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
                <Image src="/audi-2.JPG" alt="Auditorium View 2" fill sizes="(max-w-7xl) 33vw, 100vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052356]/40 via-transparent to-transparent pointer-events-none" />
                <p className="absolute bottom-3 left-4 text-white text-[11px] font-bold uppercase tracking-wider">Auditorium Seating</p>
              </div>
            </div>
            <p className="text-[12px] text-gray-500 italic mt-2">* All the above rates are excluding 18% GST.</p>
          </div>

          {/* ── SEMINAR & PRASTUTI HEADER STRIP ── */}
          <div className="w-full bg-[#f4f4f4] rounded-[10px] py-3.5 grid grid-cols-2 text-left text-xs sm:text-[13px] font-extrabold tracking-widest text-slate-700 uppercase mt-10 mb-8 border border-slate-200/60 shadow-xs">
            <div className="flex items-center justify-start pl-6 sm:pl-8">
              Seminar Hall
            </div>
            <div className="flex items-center justify-start pl-6 sm:pl-8 border-l border-slate-300">
              Prastuti
            </div>
          </div>

          {/* ── SEMINAR & PRASTUTI GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column: Seminar Room */}
            <div className="flex flex-col items-center sm:items-stretch">
              
              {/* Row: Capacity Card + Image */}
              <div className="flex flex-row items-center gap-4 sm:gap-6 justify-center w-full">
                {/* Capacity Card & Note */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="bg-[#f8f9fa] border border-slate-200/80 rounded-[20px] w-[130px] h-[90px] sm:w-[170px] sm:h-[105px] flex flex-col items-center justify-center text-center shadow-xs">
                    <span className="text-4xl font-extrabold text-[#052356] tracking-tight leading-none">80</span>
                    <span className="text-slate-500 text-sm font-semibold mt-1">Capacity</span>
                  </div>
                  <span className="text-[10px] text-[#f37021] font-bold mt-3 italic whitespace-nowrap">
                    * For Special Purposes Only
                  </span>
                </div>

                {/* Image */}
                <div className="w-[180px] h-[150px] sm:w-[260px] sm:h-[200px] md:w-[280px] md:h-[210px] relative rounded-[20px] overflow-hidden border border-slate-200/80 shadow-md flex-shrink-0">
                  <Image 
                    src="/seminar.JPG" 
                    alt="Seminar Room" 
                    fill 
                    sizes="(max-width: 640px) 180px, 280px"
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Prastuti */}
            <div className="flex flex-col items-center sm:items-stretch">
              
              {/* Row: Capacity Card + Image */}
              <div className="flex flex-row items-center gap-4 sm:gap-6 justify-center w-full">
                {/* Capacity Card & Note */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="bg-[#f8f9fa] border border-slate-200/80 rounded-[20px] w-[130px] h-[90px] sm:w-[170px] sm:h-[105px] flex flex-col items-center justify-center text-center shadow-xs">
                    <span className="text-4xl font-extrabold text-[#052356] tracking-tight leading-none">50</span>
                    <span className="text-slate-500 text-sm font-semibold mt-1">Capacity</span>
                  </div>
                  <span className="text-[10px] text-[#f37021] font-bold mt-3 italic whitespace-nowrap">
                    * For Special Purposes Only
                  </span>
                </div>

                {/* Image */}
                <div className="w-[180px] h-[150px] sm:w-[260px] sm:h-[200px] md:w-[280px] md:h-[210px] relative rounded-[20px] overflow-hidden border border-slate-200/80 shadow-md flex-shrink-0">
                  <Image 
                    src="/dsc_0038.JPG" 
                    alt="Prastuti Room" 
                    fill 
                    sizes="(max-width: 640px) 180px, 280px"
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* ── ACCORDION SECTIONS ── */}
        <div className="flex flex-col gap-3">
          <div className="mb-2 border-b border-slate-100 pb-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>Policies & Guidelines</h3>
          </div>

          <Accordion title="Booking Procedure" icon={<FileText className="w-4 h-4" />}>
            <NumberedList items={[
              'The booking party must contact the PMML Booking Officer to check the availability of the venue for the desired event date. During the initial conversation, the booking party should provide details such as the tentative date, estimated number of attendees, preferred timings, and the event schedule. Contact details for the Booking Officer can be found in the table of contacts at the end of this document.',
              'Once the venue\'s availability is confirmed, the booking party must carefully fill out the official booking form provided by PMML. All required details, as specified in the form, must be accurately completed, and any necessary supporting documents must be attached for further processing.',
              'After reviewing the application, PMML will assign a tentative booking date to the booking party. This date will be finalized upon approval by the Director of PMML. The booking party will be notified once the booking is confirmed.',
              'Following the approval of the booking request, the booking party is required to submit the full booking fee, including an additional 18% GST, to PMML. Payment must be made in full (100% of the total amount) through the approved payment methods.',
            ]} />
          </Accordion>

          <Accordion title="Decorations & Branding" icon={<Building2 className="w-4 h-4" />}>
            <NumberedList items={[
              'Only three backdrops are allowed: one on the left side of the Main Gate, one in the foyer outside the Library Building, and one inside the Seminar Room or Auditorium. Installation can be done a day prior, before 7:00 PM, if the venue is available. Additional banners or publicity materials require special permission. 3–4 signage boards are permitted.',
              <>
                <span>Backdrop Size Specifications:</span>
                <SubList items={['Seminar Room: 3′ x 6′', 'Auditorium: 8′ x 14′', 'Library Foyer: 8′ x 6′ or 10′ x 6′']} />
              </>,
              <>
                <span>Stage Dimensions:</span>
                <SubList items={['Width: 9 meters', 'Depth: 11 meters']} />
              </>,
              'No additional furniture will be provided beyond the fixed furnishings. Hoardings, banners, or flower arrangements must be placed in designated areas after PMML approval. Floral gates at Jacaranda, Silver Oak, or Stein Auditorium entrance are not permitted.',
              'Sponsor banners must be free-standing and cannot be affixed to walls. For large conferences, submit a proposed layout at least two weeks in advance for approval.',
              'Only floral decorations are allowed in designated areas. Minimal decorations are permitted outside the Auditorium and Seminar Rooms.',
              'All audio-visual equipment, signage, backdrops, and flower arrangements must be sourced from PMML or its approved vendors. Guests may only bring laptops.',
            ]} />
          </Accordion>

          <Accordion title="Important Terms & Conditions for PMML Auditorium" icon={<Info className="w-4 h-4" />}>
            <p className="text-[13px] text-gray-500 italic mb-3">Please read carefully before signing. Once signed, these terms will be binding.</p>
            <SectionLabel text="Booking Process & Payment" />
            <NumberedList items={[
              'The booking party must fix an appointment with the Conference Coordinator between 9:00 AM to 5:00 PM for discussions and planning. 100% of the booking amount must be paid after approval by the Director, PMML, to finalize the date and event details.',
              'Payments can be made via NEFT, Cheque, or DD in favor of the Director, Prime Ministers Museum and Library, payable at New Delhi.',
              'A 10% security deposit (refundable post-event) is mandatory and must be paid along with the booking charges.',
              'Conference facilities are available from 8:00 AM to 9:00 PM, with lights turned off by 10:00 PM.',
              'Bookings for Press Conferences, Annual General Meetings, and Interviews require prior approval from the Director.',
            ]} />
          </Accordion>

          <Accordion title="Event Guidelines" icon={<Users className="w-4 h-4" />}>
            <NumberedList items={[
              'Entry to the Auditorium is strictly from the rear side, except for VIPs, Chief Guests, and Speakers.',
              'The booking party must nominate designated representatives to identify delegates and ensure only invited guests are allowed.',
              'Strict adherence to the session timings specified in the booking agreement is mandatory.',
              'No outside food or beverages are allowed.',
              'Catering for events will be exclusively undertaken through the PMML-empanelled vendor, M/s Double A Lifestyle LLP, which is the authorised catering service provider for PMML.',
              'Functions such as weddings, live bands, birthday celebrations, or religious/political events are not permitted.',
              'Additionally, sales promotions, donations, or commercial activities are strictly prohibited on the premises.',
            ]} />
          </Accordion>

          <Accordion title="Decorations & Display" icon={<Building2 className="w-4 h-4" />}>
            <NumberedList items={[
              'The booking party must ensure that no posters, banners, or materials are displayed on wood paneling, dais or walls using nails, tape, or adhesives.',
              'No literature of religious, political, or communal nature may be distributed.',
              'Banners and backdrops must be removed immediately after the event.',
            ]} />
          </Accordion>

          <Accordion title="Layout and Movement Plan" icon={<MapPin className="w-4 h-4" />}>
            <NumberedList items={[
              'The booking party must ensure that the number of attendees does not exceed the seating capacity or carrying capacity of the booked venue. Overcrowding is strictly prohibited.',
              'The booking party is responsible for placing adequate signage at appropriate locations to ensure smooth movement of guests and efficient event operations. All signage must be pre-approved by PMML.',
              <>
                <span>A detailed event layout plan, including the movement of goods and people, must be submitted to PMML at least 7 days prior to the event. The plan must include:</span>
                <SubList items={['Entry and exit points for attendees.', 'Placement of branding, banners, and displays.', 'Movement routes for equipment and materials.']} />
              </>,
              'All goods and equipment must be transported through designated cargo areas and service lifts. Movement through main entrances or public areas is not permitted without prior approval.',
              'The booking party must ensure that all pathways, staircases, ramps, and emergency exits remain unobstructed at all times. No materials or equipment may be stored in these areas.',
            ]} />
          </Accordion>

          <Accordion title="Security & Safety" icon={<Shield className="w-4 h-4" />}>
            <NumberedList items={[
              'The booking party must comply with fire safety regulations; any temporary electrical fittings or connections must be properly insulated and safe for use. PMML is not liable for injuries, theft, or loss of personal belongings.',
              'The booking party is responsible for damages to property caused during the event.',
              'An Exit Pass must be obtained from the Security Officer after the event, which will be issued only after the venue is cleaned.',
            ]} />
          </Accordion>

          <Accordion title="Music, Video & Audio Policy" icon={<Music className="w-4 h-4" />}>
            <NumberedList items={[
              'For dance, music, or exhibitions, the booking party must obtain a performance license from the Additional Commissioner of Police, Delhi. Films must have a censorship certificate or exemption from the Ministry of Information & Broadcasting, along with a temporary screening license from the Entertainment Tax Department.',
              'Music volume must be within acceptable limits and not disturb others. PMML reserves the right to reduce or stop music if necessary. Only soft instrumental music is allowed in outdoor areas, with prior written approval.',
            ]} />
          </Accordion>

          <Accordion title="Cancellation of Booking" icon={<XCircle className="w-4 h-4" />}>
            <SectionLabel text="Refund Policy" />
            <BulletList items={[
              'Full refund will be provided if cancellation is made 20 days or more prior to the scheduled event date.',
              'For cancellations made between 15 to 20 days in advance, 10% of the total amount paid will be deducted, and the remaining amount will be refunded.',
              'No refund will be issued for cancellations made less than 12 days before the event date.',
            ]} />
            <NumberedList items={[
              'Any request for postponement or change of date will be treated as a cancellation and will be subject to the refund policy outlined above.',
              'The notice period for cancellation excludes the date of cancellation and the date of the event.',
              'PMML reserves the right to cancel a confirmed booking without prior notice. In such cases, a full refund of any rental amount paid will be provided.',
            ]} />
          </Accordion>

          <Accordion title="Additional Terms" icon={<FileText className="w-4 h-4" />}>
            <NumberedList items={[
              'PMML reserves the right to relocate or cancel events due to unforeseen circumstances. PMML programs will take priority over other bookings.',
              'Children below 8 years are not allowed in the Auditorium.',
              'Smoking is prohibited in all meeting venues.',
              'Organizers must make their own parking arrangements for VIPs and inform the Security Officer in advance.',
              'Organizers must comply with all applicable laws, including the Public Liability Insurance Act.',
            ]} />
          </Accordion>
        </div>

        {/* ── CONTACT & ENTRY ── */}
        <div>
          <div className="mb-5 border-b border-slate-100 pb-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>Contact & Entry Details</h3>
          </div>

          <div className="bg-[#f4f4f4] border border-slate-200 rounded-2xl p-6 mb-5 flex flex-col gap-3">
            <div className="flex items-start gap-2 text-[13px] text-gray-700">
              <MapPin className="w-4 h-4 text-[#f37021] mt-0.5 flex-shrink-0" />
              <span><strong>Entry Point:</strong> Gate No. 2, Teen Murti Bhawan, Teen Murti Circle, New Delhi, 110011.</span>
            </div>
            <div className="flex items-start gap-2 text-[13px] text-gray-700">
              <Info className="w-4 h-4 text-[#f37021] mt-0.5 flex-shrink-0" />
              <span>All invitations must mention the venue as "Auditorium/Seminar Hall, Prime Ministers Museum & Library."</span>
            </div>
          </div>

          <p className="text-[11px] font-bold text-slate-700 uppercase tracking-[0.18em] mb-3">Contact Persons</p>
          <div className="rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f4f4f4] text-[#052356] border-b border-slate-200">
                  <th className="px-4 py-3 text-left font-bold">Section</th>
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-left font-semibold">Designation</th>
                  <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Email</th>
                  <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Phone</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    section: 'Centre for Contemporary Studies',
                    name: 'Mr. Iqbal Ahmad',
                    desig: 'Assistant Research Officer',
                    email: 'iqbalahmad(dot)nmml(at)gov(dot)in',
                    phone: '',
                  },
                  {
                    section: 'Conference Facilities / Programmes',
                    name: 'Mr. Rajnish Ranjan',
                    desig: 'Programme Officer',
                    email: 'rajnish[dot]nmml[at]gov[dot]in',
                    phone: '23010666',
                  },
                  {
                    section: 'Security and Coordination',
                    name: 'Mr. Gajpal Chauhan',
                    desig: 'Security Officer',
                    email: 'gajendrasinghchauhan1981[at]gmail[dot]com',
                    phone: '',
                  },
                ].map((row, i) => (
                  <tr key={i} className="bg-white border-b border-slate-100 last:border-b-0">
                    <td className="px-4 py-3 text-gray-700 font-medium">{row.section}</td>
                    <td className="px-4 py-3 text-gray-700">{row.name}</td>
                    <td className="px-4 py-3 text-gray-500">{row.desig}</td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell text-[12px]">{row.email}</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{row.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="#booking-form"
              className="inline-flex items-center gap-2 bg-[#f37021] text-white text-[13px] font-bold px-6 py-3 rounded-xl hover:bg-[#d95e0f] transition-colors"
            >
              <FileText className="w-4 h-4" />
              Reservation of the PMML Auditorium Booking Form
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
