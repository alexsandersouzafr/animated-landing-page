import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1152px",
      },
    },
    extend: {
      colors: {
        black: "var(--black)",
        d_grey: "var(--d_grey)",
        grey: "var(--grey)",
        l_grey: "var(--l_grey)",
        "grey-blue": "var(--grey-blue)",
        silver: "var(--silver)",
        white: "var(--white)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",
        info: "var(--info)",

        shade1: "var(--shade1)",
        shade2: "var(--shade2)",
        shade3: "var(--shade3)",
        shade4: "var(--shade4)",
        shade5: "var(--shade5)",

        tint1: "var(--tint1)",
        tint2: "var(--tint2)",
        tint3: "var(--tint3)",
        tint4: "var(--tint4)",
        tint5: "var(--tint5)",

        warning: "var(--warning)",
        error: "var(--error)",
        success: "var(--success)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
