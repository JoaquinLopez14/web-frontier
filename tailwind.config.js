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
    extend: {
      keyframes: {
        "hero-gradient-animation": {
          "0%": {
            "--c-0": "hsla(87.85714285714286, 91%, 23%, 1)",
            "--x-0": "11%",
            "--y-0": "64%",
            "--s-start-0": "7%",
            "--s-end-0": "75%",
          },
          "100%": {
            "--c-0": "hsla(88.65168539325842, 0%, 0%, 1)",
            "--x-0": "85%",
            "--y-0": "55%",
            "--s-start-0": "5.526102198352531%",
            "--s-end-0": "53.33023371526758%",
          },
        },
      },
    },
  },
  plugins: [],
};
