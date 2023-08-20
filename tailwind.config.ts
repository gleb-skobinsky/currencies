import type { Config } from "tailwindcss";

const config: Config = {
  content: [
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
      colors: {
        color1: "#2A4628",
        color2: "#452534",
        color3: "#142E67",
        color4: "#1D324B",
        color5: "#5B2C2B",
        color6: "#5A4B2C",
        color7: "#494F57",
        color8: "#4D505B",
        color9: "#3D2E28",
      },
    },
  },
  plugins: [],
};
export default config;
