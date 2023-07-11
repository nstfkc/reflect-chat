/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEF3E9",
        secondary: "#22333C",
        tertiary: "#5D513F",
        alt1: "#C6AD8F",
        alt2: "#EBE0D6",
      },
    },
  },
  plugins: [],
};
