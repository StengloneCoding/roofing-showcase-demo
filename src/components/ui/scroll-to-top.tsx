"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.documentElement.style.scrollPaddingTop = "0px";
    window.scrollTo({ top: 0, behavior: "smooth" });

    const restore = () => {
      document.documentElement.style.scrollPaddingTop = "";
      window.removeEventListener("scrollend", restore);
    };
    window.addEventListener("scrollend", restore, { once: true });
    // Fallback for browsers without scrollend
    setTimeout(restore, 1000);
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-secondary)] text-white shadow-lg transition-all duration-300 hover:bg-[color:var(--color-secondary-dark)] hover:shadow-xl active:scale-95 sm:bottom-8 sm:right-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
