const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        "tuco-navy": "#0B1B2B",
        "tuco-blue": "#1E3A8A",
        "tuco-sky": "#E8EEF7",
        "tuco-ink": "#0F172A",
        "tuco-slate": "#475569",
        "tuco-card": "#FFFFFF",
        "tuco-line": "#E2E8F0",
        navy: {
          50: "#e6eaed",
          100: "#cdd5db",
          200: "#9baab7",
          300: "#698093",
          400: "#37556f",
          500: "#0c233f",
          600: "#0a1d35",
          700: "#08172b",
          800: "#061221",
          900: "#040c17",
          950: "#020611",
        },
        teal: {
          50: "#effaf7",
          100: "#d0f2e8",
          200: "#a1e5d1",
          300: "#8ddcc3",
          400: "#77d3b4",
          500: "#62bda5",
          600: "#4e9784",
          700: "#3b7163",
          800: "#274c42",
          900: "#142621",
          950: "#0a1310",
        },
        sky: {
          50: "#e8f6fc",
          100: "#d1edf9",
          200: "#a3dbf3",
          300: "#75c9ed",
          400: "#56b5dc",
          500: "#38a2ca",
          600: "#2d82a2",
          700: "#22617a",
          800: "#174151",
          900: "#0c2029",
          950: "#061014",
        },
        gray: {
          50: "#f8f9f9",
          100: "#f1f2f2",
          200: "#e3e5e6",
          300: "#d4d7d9",
          400: "#c4c8cc",
          500: "#9da2a7",
          600: "#7d8287",
          700: "#5e6266",
          800: "#3e4145",
          900: "#1f2123",
          950: "#0f1011",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "Inter",
          "system-ui",
          ...defaultTheme.fontFamily.sans.slice(2),
        ],
        display: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          ...defaultTheme.fontFamily.sans.slice(2),
        ],
      },
      borderRadius: {
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        "card-lg": "0 25px 70px -35px rgba(11, 27, 43, 0.35)",
        "card-soft": "0 18px 50px -28px rgba(15, 23, 42, 0.25)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
