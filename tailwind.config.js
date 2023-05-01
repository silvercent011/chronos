/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      colors: {
        background: "#fbfef9",
        foreground: "#27292b",
        neutral: {
          50: "#f8fbf6",
          100: "#f3f6f2",
          200: "#e6e8e5",
          300: "#d4d7d5",
          400: "#a3a6a5",
          500: "#737575",
          600: "#535656",
          700: "#404244",
          800: "#27292b",
          900: "#17181a",
        },
        primary: {
          DEFAULT: "#00aaff",
          50: "#f1f9ff",
          100: "#e5f3ff",
          200: "#c4e8ff",
          300: "#8fd6ff",
          400: "#55c1ff",
          500: "#00aaff",
          600: "#1086d6",
          700: "#1369aa",
          800: "#14588a",
          900: "#16496f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  // ...
};

/**
 * TO USE:
 *
 * <body class="bg-background text-foreground dark:bg-foreground dark:text-background"></div>
 */
