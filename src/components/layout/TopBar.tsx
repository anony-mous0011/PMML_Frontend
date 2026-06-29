"use client";

import { useState, useEffect, useCallback } from "react";
import { FaUniversalAccess } from "react-icons/fa";

export default function TopBar() {
  const [fontSize, setFontSize] = useState<"small" | "normal" | "large">("normal");
  const [language, setLanguage] = useState<"en" | "hi">("en");

  useEffect(() => {
    if (typeof window === "undefined" || (window as any).Capacitor) return;

    /**
     * Physically remove the purple floating button and overlay from the DOM.
     * This is more reliable than CSS/inline-style hiding because the widget's
     * "Bigger Text" feature calls el.setAttribute('style', 'zoom:…') which
     * wipes out any inline display:none we set.
     */
    const cleanUpWidgetUI = () => {
      document.getElementById("uw-widget-custom-trigger")?.remove();
      document.getElementById("accessibility-overlay")?.remove();
    };

    // Watch for the widget elements being injected then immediately remove them
    const observer = new MutationObserver(() => cleanUpWidgetUI());
    observer.observe(document.body, { childList: true, subtree: true });

    const existing = document.querySelector(
      'script[src="https://cdn.ux4g.gov.in/tools/accessibility-widget.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://cdn.ux4g.gov.in/tools/accessibility-widget.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        cleanUpWidgetUI();
        setTimeout(cleanUpWidgetUI, 300);
        setTimeout(cleanUpWidgetUI, 1000);
      };
      script.onerror = () => console.warn("Failed to load accessibility widget from CDN");
      document.head.appendChild(script);
    } else {
      cleanUpWidgetUI();
    }

    return () => observer.disconnect();
  }, []);

  // FIX #6: Font size change excludes the widget panel (.uwaw) from scaling
  const handleFontSizeChange = (size: "small" | "normal" | "large") => {
    setFontSize(size);
    if (typeof window !== "undefined") {
      let pct = "100%";
      if (size === "large") pct = "115%";
      else if (size === "small") pct = "85%";

      document.documentElement.style.fontSize = pct;

      // Counteract the root font-size change on the widget so it stays readable
      const widget = document.getElementById("uw-main");
      if (widget) {
        // Reset widget to its natural size regardless of root font change
        widget.style.setProperty("font-size", "16px", "important");
      }
    }
  };

  // FIX #3: Language selector handler — sets document lang and triggers Google Translate if available
  const handleLanguageChange = (lang: "en" | "hi") => {
    setLanguage(lang);
    document.documentElement.lang = lang;

    // Attempt Google Translate integration (works when GT cookie/widget is present)
    const gtCombo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (gtCombo) {
      gtCombo.value = lang === "hi" ? "hi" : "en";
      gtCombo.dispatchEvent(new Event("change"));
      return;
    }

    // Fallback: store preference for SSR-capable pages to pick up
    try {
      localStorage.setItem("preferred-language", lang);
    } catch (_) {}

    // If page provides a lang query param convention, reload with it
    const url = new URL(window.location.href);
    if (lang === "hi") {
      url.searchParams.set("lang", "hi");
    } else {
      url.searchParams.delete("lang");
    }
    // Only navigate if the URL actually changed, to avoid unnecessary reloads
    if (url.href !== window.location.href) {
      window.location.href = url.href;
    }
  };

  // FIX #1: Skip to Main Content — smoothly scrolls to <main> or #main-content
  const handleSkipToMain = () => {
    const mainEl =
      document.getElementById("main-content") ||
      document.querySelector<HTMLElement>("main");
    if (mainEl) {
      mainEl.setAttribute("tabindex", "-1");
      mainEl.focus({ preventScroll: false });
      mainEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // FIX #2: Screen Reader Access — opens the accessibility panel focused on Text-to-Speech
  const handleScreenReaderAccess = () => {
    // Open the accessibility panel first
    openAccessibilityPanel();

    // After the panel animates in, focus the TTS button inside the widget
    setTimeout(() => {
      const ttsBtn = document.getElementById("speak");
      if (ttsBtn) {
        ttsBtn.focus();
        ttsBtn.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 400);
  };

  // Open the accessibility panel by directly setting its position
  const openAccessibilityPanel = useCallback(() => {
    const menu = document.getElementById("uw-main");
    if (!menu) return;

    const computedRight = getComputedStyle(menu).right;
    const isClosed =
      !computedRight ||
      computedRight === "" ||
      parseInt(computedRight) < -10;

    if (isClosed) {
      menu.style.setProperty("right", "0px", "important");
    }
  }, []);

  // Accessibility toggle — directly controls #uw-main position (trigger button is removed from DOM)
  const handleAccessibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window === "undefined") return;

    const menu = document.getElementById("uw-main");
    if (!menu) return;

    const computedRight = getComputedStyle(menu).right;
    const isClosed =
      !computedRight ||
      computedRight === "" ||
      parseInt(computedRight) < -10;

    if (isClosed) {
      // Open: slide panel in from right
      menu.style.setProperty("right", "0px", "important");
    } else {
      // Close: click the widget's own close button so it fires its internal cleanup
      const closeBtn = menu.querySelector<HTMLElement>(".uwaw-close");
      if (closeBtn) {
        closeBtn.click();
      } else {
        menu.style.setProperty("right", "-530px", "important");
      }
    }
  };

  return (
    <div className="w-full min-h-[36px] py-1.5 md:py-0 bg-[#f37021] flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 gap-2 text-xs text-white">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-2">
          {/* <span className="font-medium">Government of India</span> */}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* FIX #1: Skip to Main Content — now functional */}
          <button
            onClick={handleSkipToMain}
            className="hidden md:inline-block hover:text-[#052356] transition focus:outline-none focus:underline"
            aria-label="Skip to main content"
          >
            Skip to Main Content
          </button>
          <span className="hidden md:inline-block text-white/40">|</span>
          

          {/* FIX #3: Language selector — now wired with onChange handler */}
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value as "en" | "hi")}
            className="text-xs border border-gray-300 rounded px-1.5 h-6 bg-white outline-none cursor-pointer text-[#333333] leading-none"
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>

          {/* Accessibility Icon */}
          <button
            onClick={handleAccessibility}
            className="w-7 h-7 flex items-center justify-center text-white hover:text-[#052356] transition flex-shrink-0"
            aria-label="Accessibility settings"
            title="Open Accessibility Settings"
          >
            <FaUniversalAccess size={22} />
          </button>
        </div>

      </div>
    </div>
  );
}