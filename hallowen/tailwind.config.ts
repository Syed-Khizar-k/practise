import type { Config } from "tailwindcss";

export default {
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
        greenish:
          "linear-gradient(90deg, hsl(104, 28%, 40%) 0%, hsl(58, 28%, 40%) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
