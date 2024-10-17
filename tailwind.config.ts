import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#00bed8",
        customWhite:"#fbfbfa",
        customDarkBlue:"#0199fb",
        customGrey:"#0199fb"
      },
    },
  },
  plugins: [],
};
export default config;
