import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"SF Pro Text\"",
          "\"SF Pro Display\"",
          "sans-serif",
        ],
      },
      colors: {
        background: "#F5F5F7",
        surface: "#FFFFFF",
        primary: "#0071E3",
        "text-primary": "#1D1D1F",
        "text-secondary": "#86868B",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up":
          "fade-in-up 0.4s cubic-bezier(0.25,0.1,0.25,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;

