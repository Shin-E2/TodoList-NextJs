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
        slate: {
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          800: "#1E293B",
          900: "#0F172A",
        },
        violet: {
          100: "#EDE9FE",
          600: "#7C3AED",
        },
        rose: {
          500: "#F43F5E",
        },
        lime: {
          300: "#BEF264",
        },
        amber: {
          800: "#92400E",
        },
      },
      fontFamily: {
        sans: ["NanumSquare"],
      },
      fontSize: {
        "regular-16": ["16px", { lineHeight: "18.16", fontWeight: "400" }],
        "bold-16": ["16px", { lineHeight: "18.16", fontWeight: "800" }],
        "bold-18": ["18px", { lineHeight: "20.43", fontWeight: "700" }],
        "bold-20": ["20px", { lineHeight: "22.7", fontWeight: "700" }],
      },
      screens: {
        mobile: "375px", //모바일
        tablet: "640px", // 태블릿
        desktop: "1280px", // 데스크탑
      },
    },
  },
  plugins: [],
};
