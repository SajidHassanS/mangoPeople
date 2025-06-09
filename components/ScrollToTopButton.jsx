// components/ScrollToTopButton.jsx
"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed
        bottom-6       /* 1.5 rem (≈ 24 px) from the bottom edge */
        right-4
        z-50           /* ensure this arrow sits above the WhatsApp button */
        w-12
        h-12
        bg-orange-600
        text-white
        rounded-full
        shadow-lg
        flex
        items-center
        justify-center
        hover:bg-orange-700
        transition-colors
      "
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
}
