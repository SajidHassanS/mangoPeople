/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // logo‐red and logo‐yellow:
        "brand-red": "#C12424",
        "brand-yellow": "#E7B52C",
      },
      fontFamily: {
        // “sans” will be your main menu/body font (e.g. Inter or Lexend)
        sans: ["Inter", "sans-serif"],
        // “cursive” will be the script font (Ephesis) for words like “Delivery”
        cursive: ["Ephesis", "cursive"],
        // “lexend” is an alternative sans, if you prefer Lexend over Inter
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
