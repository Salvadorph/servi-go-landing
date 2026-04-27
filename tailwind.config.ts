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
        brand: {
          yellow: "#FFC300",
          blue: "#1E3A8A",
          green: "#22C55E",
        },
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
