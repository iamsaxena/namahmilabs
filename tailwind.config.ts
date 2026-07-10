import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        card: "#0B1023",
        primary: "#2563EB",
        secondary: "#06B6D4",
        accent: "#8B5CF6",
        success: "#22C55E",
        muted: "#94A3B8",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 70px rgba(37, 99, 235, 0.28)",
        violet: "0 0 80px rgba(139, 92, 246, 0.25)",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate3d(-8%, -4%, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(8%, 6%, 0) rotate(8deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
