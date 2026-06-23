import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        background: {
          primary: "#020817",
          secondary: "#0F172A",
          tertiary: "#1E293B",
        },
        accent: {
          purple: "#7C3AED",
          "purple-light": "#A78BFA",
          cyan: "#06B6D4",
          "cyan-light": "#67E8F9",
          amber: "#F59E0B",
          green: "#10B981",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#CBD5E1",
          muted: "#64748B",
        },
        border: {
          DEFAULT: "#1E293B",
          subtle: "rgba(124, 58, 237, 0.2)",
          hover: "rgba(124, 58, 237, 0.5)",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
        "gradient-brand-r": "linear-gradient(135deg, #06B6D4 0%, #7C3AED 100%)",
        "gradient-subtle":
          "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124,58,237,0.25)" },
          "50%": { boxShadow: "0 0 40px rgba(124,58,237,0.5)" },
        },
        float1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-40px, 30px) scale(1.08)" },
          "66%": { transform: "translate(30px, -20px) scale(0.95)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        float1: "float1 8s ease-in-out infinite",
        float2: "float2 10s ease-in-out infinite",
        "spin-slow": "spinSlow 6s linear infinite",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;