/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./FRONTEND/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      rocksalt: ["Rock Salt", "cursive"],
      jaini: ["Jaini", "system-ui"],
      ysabeau: ["Ysabeau SC", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
