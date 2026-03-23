import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        crevi: {
          primary: "#0a1628",
          secondary: "#1a3a5c",
          accent: "#00b4d8",
          surface: "#0f2239",
          muted: "#8fa6bf",
          line: "#264d74",
        },
      },
      boxShadow: {
        glow: "0 20px 60px rgba(0, 180, 216, 0.18)",
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
