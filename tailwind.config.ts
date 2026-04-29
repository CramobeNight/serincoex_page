import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-outfit)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular"]
      },
      colors: {
        ink: {
          50: "#f7f8f9",
          100: "#eceef1",
          200: "#d6dae0",
          300: "#b3bac4",
          400: "#8b95a3",
          500: "#6b7585",
          600: "#535c6b",
          700: "#414956",
          800: "#2d333d",
          900: "#1a1f27",
          950: "#0e1217"
        },
        ocean: {
          50: "#eef7ff",
          100: "#d8edff",
          200: "#b9deff",
          300: "#88c8ff",
          400: "#4fa6ff",
          500: "#2682f5",
          600: "#1564d4",
          700: "#1450ab",
          800: "#16448a",
          900: "#173b71",
          950: "#0e2548"
        }
      },
      letterSpacing: {
        tightest: "-0.04em"
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
};

export default config;
