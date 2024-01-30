/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      background: "#0F1923",
      backgroundGray: "#253340",
      backgroundDarkGray: "#1A242D",
      accent: "#A81E35",
      accentAlt: "#04D17A",
      functional: "#ACB1CD",
    },
  },
  plugins: [],
};
