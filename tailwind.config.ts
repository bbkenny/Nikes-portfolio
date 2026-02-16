import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "forest-night": "#192420",
        "olive-slate": "#707C5B",
        "antique-gold": "#C79340",
        "ivory-mist": "#F6F3E8",
        "obsidian-black": "#13140F",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [],
};
export default config;
