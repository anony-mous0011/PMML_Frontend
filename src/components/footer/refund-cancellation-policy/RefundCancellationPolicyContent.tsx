"use client";

import React from 'react';
import Image from 'next/image';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function RefundCancellationPolicyContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Page Hero Section ── */}
       <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/hero.png"
          alt="Refund Cancellation Policy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── Header Strip (bg-[#f4f4f4] matching RTI strip) ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Top orange accent line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Refund & Cancellation Policy
            </h2>
          </div>
        </div>
      </section>

      {/* ── Main Content Block (bg-white) ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            When you make a payment, you agree to use a valid payment method. You agree to pay the price for tickets that you purchase, and you authorize us to charge your debit or credit card or process other means of payment (such as PayPal, direct debit, or mobile wallet) for those fees. PM Sangrahalaya works with third-party payment processing partners to offer you convenient payment methods in your country and to keep your payment information secure.
          </p>
          <p>
            Customers are requested to review details like name, date, time, event, and quantity of ticket(s) before executing the purchase. Tickets once booked cannot be cancelled, transferred or refunded under any circumstances. All sales are final. Pradhanmantri Sangrahalaya does not offer refunds, cancellations or exchanges of tickets purchased on the site or application.
          </p>
          <p>
            Pradhanmantri Sangrahalaya may cancel a ticket due to unforeseen circumstances. In such cases, customers will be offered a full refund within 7-10 days. Pradhanmantri Sangrahalaya will not be responsible for any individual expenses related to the visit (e.g., hotel, flight, car rental).
          </p>
          <p>
            PM Sangrahalaya or partners may offer gift and promotional codes. Certain codes may be redeemed for prepaid credits applied to your PM Sangrahalaya account, which may be used to purchase tickets on our platform, subject to the terms included with your codes. These codes and credits, and any promotional value linked to them, may expire if not used within the specified period. Such codes are not refundable for cash unless specified in the terms or required by law. Partner-offered codes are subject to the partner's refund policies.
          </p>
        </div>
      </section>
    </div>
  );
}
