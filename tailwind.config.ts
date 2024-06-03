import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/*.{ts,tsx,js,css}",
    "./app/**/*.{ts,tsx,js,css}",
    "./node_modules/@frames.js/render/dist/*.{ts,tsx,js,css}",
    "./node_modules/@frames.js/render/dist/**/*.{ts,tsx,js,css}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
