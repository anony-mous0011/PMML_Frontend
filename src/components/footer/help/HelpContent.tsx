"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function HelpContent() {
  const formats = [
    {
      type: "PDF content",
      requirement: "Adobe Acrobat Reader",
      link: "https://get.adobe.com/reader/"
    },
    {
      type: "Word files",
      requirement: "MS Word Viewer / Open Office",
      link: "https://www.openoffice.org/download/"
    },
    {
      type: "Excel files",
      requirement: "MS Excel Viewer / Open Office",
      link: "https://www.openoffice.org/download/"
    },
    {
      type: "PowerPoint presentations",
      requirement: "MS PowerPoint Viewer / Open Office",
      link: "https://www.openoffice.org/download/"
    },
    {
      type: "Flash content",
      requirement: "Adobe Flash Player",
      link: "https://www.adobe.com/products/flashplayer.html"
    },
    {
      type: "Audio/Video Files",
      requirement: "Windows Media Player / Real Player",
      link: "https://www.real.com/"
    }
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Page Hero Section ── */}
       <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/hero.png"
          alt="Help"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── Help Header Strip (bg-[#f4f4f4] matching RTI strip) ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Top orange accent line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Help
            </h2>
          </div>
        </div>
      </section>

      {/* ── Main Content Block (bg-white) ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 space-y-8 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1: File Formats */}
          <div className="space-y-4">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
              Viewing Information in Various File Formats
            </h3>
            <p>
              This website includes some content that is available in non-HTML format. They might not be visible properly if your browser does not have the required plug-ins. For example, Acrobat Reader software is required to view Adobe Acrobat PDF files. If you do not have this software installed on your computer, you can download it for free.
            </p>

            <div className="overflow-x-auto border border-slate-200 rounded-xl mt-4">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-[#f8f9fa]">
                  <tr>
                    <th scope="col" className="px-6 py-3.5 text-left text-xs sm:text-sm font-bold text-[#052356] uppercase tracking-wider">
                      Document Type
                    </th>
                    <th scope="col" className="px-6 py-3.5 text-left text-xs sm:text-sm font-bold text-[#052356] uppercase tracking-wider">
                      Required Plug-in / Software
                    </th>
                    <th scope="col" className="px-6 py-3.5 text-left text-xs sm:text-sm font-bold text-[#052356] uppercase tracking-wider">
                      Download Link
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 text-xs sm:text-sm">
                  {formats.map((format, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-semibold text-slate-700 whitespace-nowrap">
                        {format.type}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {format.requirement}
                      </td>
                      <td className="px-6 py-4">
                        <a 
                          href={format.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#f37021] hover:underline font-medium"
                        >
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Accessibility */}
          <div className="space-y-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
              Screen Reader Access
            </h3>
            <p>
              The Prime Ministers Museum and Library website complies with World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.0 level AA. This will enable people with visual impairments to access the website using assistive technologies, such as screen readers. The information of the website is accessible with different screen readers, such as JAWS.
            </p>
          </div>

          {/* Section 3: Search */}
          <div className="space-y-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
              Using the Search Facility
            </h3>
            <p>
              The search facility is located at the top right hand corner of all pages. The Basic Search enables you to search for content using words or phrases in the site title or URL.
            </p>
          </div>

          {/* Section 4: RSS Feed */}
          <div className="space-y-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
              What is an RSS Feed and how to use it?
            </h3>
            <p>
              RSS (Rich Site Summary) is a format for delivering regularly changing web content. Many news-related sites, web blogs, and other online publishers syndicate their content as an RSS Feed to whoever wants it. RSS allows you to easily stay informed by retrieving the latest content from the sites you are interested in. You save time by not needing to visit each site individually.
            </p>
            <p>
              Feed Reader or News Aggregator software allows you to grab the RSS feeds from various sites and display them for you to read and use. A variety of RSS Readers are available for different platforms. Some popular feed readers include Amphetadesk (Windows, Linux, Mac), Feed Reader (Windows), and News Gator (Windows - integrates with Outlook).
            </p>
          </div>

          {/* Section 5: Subscribing RSS */}
          <div className="space-y-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
              How to Subscribe to an RSS Feed?
            </h3>
            <p>
              Follow the instructions of your RSS feed reader. Each RSS feed reader is slightly different. On a website or blog with a feed, find the RSS icon or button, left-click, and see if the RSS Feed has information to help you subscribe. Alternatively, right-click the RSS icon, copy the link location, and paste the URL into your RSS feed reader.
            </p>
          </div>

          {/* Section 6: Sitemap */}
          <div className="space-y-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
              Sitemap
            </h3>
            <p>
              You can visit the{' '}
              <Link href="/sitemap" className="text-[#f37021] hover:underline font-semibold">
                Sitemap
              </Link>{' '}
              page to get an overall view of the contents of this site. You can also navigate around the site by clicking on the Sitemap link.
            </p>
          </div>

          {/* Section 7: Feedback / Suggestion */}
          <div className="space-y-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
              Feedback / Suggestion
            </h3>
            <p>
              You can use our Feedback Form to submit your comments, feedback, suggestions, and ideas for improvements to the Prime Ministers Museum and Library.
            </p>
          </div>

          {/* Section 8: Further Help */}
          <div className="space-y-3">
            <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
              Do you need further help?
            </h3>
            <p>
              If you require further assistance, please feel free to{' '}
              <Link href="/about-pmml/contact-us" className="text-[#f37021] hover:underline font-semibold">
                Contact Us
              </Link>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
