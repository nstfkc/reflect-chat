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
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
        slideRight: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 250ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 250ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRight: "slideRight 250ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
