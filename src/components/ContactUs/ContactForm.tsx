"use client";

import React, { useState } from 'react';

type Tab = 'enquiry' | 'feedback';
type Sentiment = 'Excellent' | 'Good' | 'Average';

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState<Tab>('enquiry');
  
  // Enquiry form state
  const [enquiryName, setEnquiryName] = useState("");
  const [enquiryEmail, setEnquiryEmail] = useState("");
  const [enquiryMobile, setEnquiryMobile] = useState("");
  const [enquiryMessage, setEnquiryMessage] = useState("");

  // Feedback form state
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackMobile, setFeedbackMobile] = useState("");
  const [selectedSentiment, setSelectedSentiment] = useState<Sentiment>('Good');
  const [feedbackText, setFeedbackText] = useState("");

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Enquiry submitted!\nName: ${enquiryName}\nEmail: ${enquiryEmail}\nMobile: ${enquiryMobile}\nMessage: ${enquiryMessage}`);
    // Clear state
    setEnquiryName("");
    setEnquiryEmail("");
    setEnquiryMobile("");
    setEnquiryMessage("");
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Feedback submitted!\nName: ${feedbackName}\nEmail: ${feedbackEmail}\nMobile: ${feedbackMobile}\nSentiment: ${selectedSentiment}\nFeedback: ${feedbackText}`);
    // Clear state
    setFeedbackName("");
    setFeedbackEmail("");
    setFeedbackMobile("");
    setSelectedSentiment('Good');
    setFeedbackText("");
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 text-left">
      
      {/* Label */}
      <div className="flex flex-col gap-2">
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-gray-500 uppercase">
          GET IN TOUCH
        </span>
      </div>

      {/* Box-shadowed White Card Card */}
      <div className="w-full flex-grow bg-white rounded-2xl border border-gray-100 shadow-md p-6 sm:p-8 flex flex-col gap-6">
        
        {/* Tab Switcher */}
        <div className="flex border-b border-gray-100 pb-1 gap-6 text-xs sm:text-sm font-semibold select-none">
          <button
            onClick={() => setActiveTab('enquiry')}
            className={`pb-3.5 transition-all border-b-2 outline-none cursor-pointer ${
              activeTab === 'enquiry'
                ? 'border-[#052356] text-[#052356] font-bold'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            General Enquiry
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`pb-3.5 transition-all border-b-2 outline-none cursor-pointer ${
              activeTab === 'feedback'
                ? 'border-[#052356] text-[#052356] font-bold'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            Give Feedback
          </button>
        </div>

        {/* Form rendering */}
        {activeTab === 'enquiry' ? (
          /* GENERAL ENQUIRY FORM */
          <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-6 flex-grow">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="enquiry-name" className="text-[11px] font-bold text-black uppercase tracking-wide">
                Full Name
              </label>
              <input
                id="enquiry-name"
                type="text"
                required
                value={enquiryName}
                onChange={(e) => setEnquiryName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full border-t-0 border-x-0 border-b border-gray-200 focus:border-[#052356] rounded-none outline-none focus:ring-0 px-0 pb-2 text-sm text-black placeholder-gray-300 transition-all"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="enquiry-email" className="text-[11px] font-bold text-black uppercase tracking-wide">
                Email Address
              </label>
              <input
                id="enquiry-email"
                type="email"
                required
                value={enquiryEmail}
                onChange={(e) => setEnquiryEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full border-t-0 border-x-0 border-b border-gray-200 focus:border-[#052356] rounded-none outline-none focus:ring-0 px-0 pb-2 text-sm text-black placeholder-gray-300 transition-all"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="enquiry-mobile" className="text-[11px] font-bold text-black uppercase tracking-wide">
                Mobile Number
              </label>
              <input
                id="enquiry-mobile"
                type="tel"
                required
                value={enquiryMobile}
                onChange={(e) => setEnquiryMobile(e.target.value)}
                placeholder="Enter your mobile number"
                className="w-full border-t-0 border-x-0 border-b border-gray-200 focus:border-[#052356] rounded-none outline-none focus:ring-0 px-0 pb-2 text-sm text-black placeholder-gray-300 transition-all"
              />
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="enquiry-message" className="text-[11px] font-bold text-black uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="enquiry-message"
                required
                rows={3}
                value={enquiryMessage}
                onChange={(e) => setEnquiryMessage(e.target.value)}
                placeholder="Type your query message here..."
                className="w-full border-t-0 border-x-0 border-b border-gray-200 focus:border-[#052356] rounded-none outline-none focus:ring-0 px-0 pb-2 text-sm text-black placeholder-gray-300 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-2 mt-auto">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-2.5 bg-[#052356] hover:bg-[#f37021] text-white text-xs sm:text-sm font-bold tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-200 select-none cursor-pointer transform hover:-translate-y-0.5 active:scale-95 outline-none"
              >
                SUBMIT
              </button>
            </div>
          </form>
        ) : (
          /* GIVE FEEDBACK FORM */
          <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-6 flex-grow">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="feedback-name" className="text-[11px] font-bold text-black uppercase tracking-wide">
                Full Name
              </label>
              <input
                id="feedback-name"
                type="text"
                required
                value={feedbackName}
                onChange={(e) => setFeedbackName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full border-t-0 border-x-0 border-b border-gray-200 focus:border-[#052356] rounded-none outline-none focus:ring-0 px-0 pb-2 text-sm text-black placeholder-gray-300 transition-all"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="feedback-email" className="text-[11px] font-bold text-black uppercase tracking-wide">
                Email Address
              </label>
              <input
                id="feedback-email"
                type="email"
                required
                value={feedbackEmail}
                onChange={(e) => setFeedbackEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full border-t-0 border-x-0 border-b border-gray-200 focus:border-[#052356] rounded-none outline-none focus:ring-0 px-0 pb-2 text-sm text-black placeholder-gray-300 transition-all"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="feedback-mobile" className="text-[11px] font-bold text-black uppercase tracking-wide">
                Mobile Number
              </label>
              <input
                id="feedback-mobile"
                type="tel"
                required
                value={feedbackMobile}
                onChange={(e) => setFeedbackMobile(e.target.value)}
                placeholder="Enter your mobile number"
                className="w-full border-t-0 border-x-0 border-b border-gray-200 focus:border-[#052356] rounded-none outline-none focus:ring-0 px-0 pb-2 text-sm text-black placeholder-gray-300 transition-all"
              />
            </div>

            {/* Sentiment Selector Row */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[11px] font-bold text-black uppercase tracking-wide">
                How was your experience?
              </span>
              <div className="flex items-center gap-3">
                {(['Excellent', 'Good', 'Average'] as Sentiment[]).map((sentiment) => {
                  const isActive = selectedSentiment === sentiment;
                  return (
                    <button
                      key={sentiment}
                      type="button"
                      onClick={() => setSelectedSentiment(sentiment)}
                      className={`px-5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer outline-none select-none active:scale-95 ${
                        isActive
                          ? 'bg-[#f37021] border-[#f37021] text-white shadow-sm'
                          : 'bg-transparent border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`}
                    >
                      {sentiment}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feedback Text Area */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="feedback-text" className="text-[11px] font-bold text-black uppercase tracking-wide">
                Feedback
              </label>
              <textarea
                id="feedback-text"
                required
                rows={3}
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Type your feedback message here..."
                className="w-full border-t-0 border-x-0 border-b border-gray-200 focus:border-[#052356] rounded-none outline-none focus:ring-0 px-0 pb-2 text-sm text-black placeholder-gray-300 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-2 mt-auto">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-2.5 bg-[#052356] hover:bg-[#f37021] text-white text-xs sm:text-sm font-bold tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-200 select-none cursor-pointer transform hover:-translate-y-0.5 active:scale-95 outline-none"
              >
                SUBMIT
              </button>
            </div>
          </form>
        )}
      </div>

    </div>
  );
}
