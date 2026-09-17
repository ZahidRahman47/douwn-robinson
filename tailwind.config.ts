import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#080D18",
          900: "#0B1220",
          800: "#10192B",
          700: "#182437",
          600: "#223252",
        },
        gold: {
          300: "#F0D48A",
          400: "#E8C158",
          500: "#D4A537",
          600: "#B4842A",
        },
        cream: {
          DEFAULT: "#F7F4EC",
          100: "#FBFAF6",
          200: "#EFE9D8",
        },
        maroon: {
          500: "#7A2130",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(8,13,24,0.45)",
        goldGlow: "0 0 120px 20px rgba(232,193,88,0.25)",
        card: "0 10px 30px -10px rgba(8,13,24,0.15)",
        cardHover: "0 24px 48px -12px rgba(8,13,24,0.25)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
        "mesh-navy": "radial-gradient(at 20% 20%, rgba(232,193,88,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(122,33,48,0.10) 0px, transparent 50%), radial-gradient(at 80% 100%, rgba(212,165,55,0.10) 0px, transparent 50%)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.97)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        blob: "blob 12s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
