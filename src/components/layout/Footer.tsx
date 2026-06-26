"use client";

import React from "react";

export default function Footer() {
  return (
    <footer style={{ width: "100%", backgroundColor: "#0f2044", color: "white", borderTop: "2px solid #c8902a" }}>

      {/* MAIN FOOTER */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 items-stretch w-full">

          {/* COL 1 — Important Links */}
          <div>
            <h4 style={{ fontSize: "11px", fontWeight: "700", color: "white", margin: "0 0 10px 0", fontFamily: "Georgia, serif", letterSpacing: "0.5px" }}>
              Important Links
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", fontSize: "10px", color: "#d1d5db", rowGap: "6px" }}>
              {[
                { name: "RTI", href: "#" },
                { name: "Sitemap", href: "#" },
                { name: "Disclaimer", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms & Conditions", href: "#" },
                { name: "Help", href: "#" }
              ].map((link, idx, arr) => (
                <React.Fragment key={link.name}>
                  {idx > 0 && <span style={{ margin: "0 6px", color: "#6b7280" }}>|</span>}
                  <a href={link.href} style={{ color: "#d1d5db", textDecoration: "none", lineHeight: "1.4" }}>
                    {link.name}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* COL 2 — Explore */}
          <div className="lg:border-l lg:border-[#1e3a6a] lg:pl-6">
            <h4 style={{ fontSize: "11px", fontWeight: "700", color: "white", margin: "0 0 10px 0", fontFamily: "Georgia, serif", letterSpacing: "0.5px" }}>
              Explore
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", fontSize: "10px", color: "#d1d5db", rowGap: "6px" }}>
              {[
                { name: "Museum", href: "#" },
                { name: "Library", href: "#" },
                 { name: "Archives", href: "#" },
                { name: "Digital Collections", href: "#" },
                { name: "E-Resources", href: "#" },
                { name: "Research", href: "#" },
                { name: "Media Gallery", href: "#" },
                { name: "Nehru Portal", href: "http://nehruportal.nic.in", target: "_blank", rel: "noopener noreferrer" },
                { name: "Tenders", href: "#" },
                { name: "Vacancies", href: "#" }
              ].map((link, idx) => (
                <React.Fragment key={link.name}>
                  {idx > 0 && <span style={{ margin: "0 6px", color: "#6b7280" }}>|</span>}
                  <a
                    href={link.href}
                    target={link.target}
                    rel={link.rel}
                    style={{ color: "#d1d5db", textDecoration: "none", lineHeight: "1.4" }}
                  >
                    {link.name}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* COL 3 — Connect With Us */}
          <div className="lg:border-l lg:border-[#1e3a6a] lg:pl-6">
            <h4 style={{ fontSize: "11px", fontWeight: "700", color: "white", margin: "0 0 10px 0", fontFamily: "Georgia, serif", letterSpacing: "0.5px" }}>
              Connect With Us
            </h4>

            {/* Social Block */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {/* Facebook */}
                <a href="https://www.facebook.com/pmsangrahalaya?rdid=KTTddJ8iU4wLwF9W&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1KEEYkm99T%2F#" target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "22px", height: "22px", borderRadius: "3px", backgroundColor: "#3b5998",
                  color: "white", textDecoration: "none"
                }} title="Facebook">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style={{ margin: "auto" }}>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                
                {/* X (Twitter) */}
                <a href="https://x.com/PMSangrahalaya" target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "22px", height: "22px", borderRadius: "3px", backgroundColor: "#000000",
                  color: "white", textDecoration: "none"
                }} title="X">
                  <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" style={{ margin: "auto" }}>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/pmsangrahalaya" target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "22px", height: "22px", borderRadius: "3px",
                  background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  color: "white", textDecoration: "none"
                }} title="Instagram">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "auto" }}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* YouTube */}
                <a href="https://www.youtube.com/@nehrumemoriallibrary" target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "22px", height: "22px", borderRadius: "3px", backgroundColor: "#FF0000",
                  color: "white", textDecoration: "none"
                }} title="YouTube">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style={{ margin: "auto" }}>
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.122C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.496a3.003 3.003 0 0 0-2.11 2.122A30.062 30.062 0 0 0 0 12c0 2.807.19 5.617.49 6.163a3.003 3.003 0 0 0 2.11 2.122c1.86.496 9.388.496 9.388.496s7.528 0 9.388-.496a3.002 3.002 0 0 0 2.11-2.122A30.058 30.058 0 0 0 24 12a30.058 30.058 0 0 0-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              <div style={{ fontSize: "9.5px", color: "#9ca3af", marginTop: "6px" }}>
                <span>Visitors: 107488</span>
                <span style={{ margin: "0 5px", color: "#4b5563" }}>|</span>
                <span>Last Updated: 08-Apr-2026</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{ borderTop: "1px solid #1e3a6a" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p style={{ fontSize: "9.5px", color: "#9ca3af", margin: 0 }}>
            © 2026 Prime Ministers Museum &amp; Library. All Rights Reserved.
          </p>
          <div style={{ fontSize: "9.5px", color: "#9ca3af", margin: 0 }}>
            An Autonomous Body of Ministry of Culture
          </div>
        </div>
      </div>

    </footer>
  ); 
}
