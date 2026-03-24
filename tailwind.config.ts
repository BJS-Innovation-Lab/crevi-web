import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        crevi: {
          primary: "#0d1b2a",
          secondary: "#1b3a5c",
          accent: "#f58220",
          blue: "#2a8fd5",
          surface: "#0f2239",
          muted: "#8fa6bf",
          line: "#264d74",
        },
      },
      boxShadow: {
        glow: "0 20px 60px rgba(245, 130, 32, 0.18)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(143,166,191,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(143,166,191,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
