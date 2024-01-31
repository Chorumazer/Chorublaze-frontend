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
      fontFamily: {
        SofiaSans: ["Sofia Sans", "sans"],
      },
      colors: {
        background: "#0F1923",
        backgroundGray: "#253340",
        backgroundDarkGray: "#1A242D",
        accent: "#A81E35",
        accentAlt: "#04D17A",
        functional: "#ACB1CD",
      },

      gridTemplateAreas: {
        layout: [
          "header header header",
          "navbar content content",
          "navbar content content",
        ],
      },
      gridTemplateColumns: {
        layout: "245px auto auto",
      },
      gridTemplateRows: {
        layout: "72px auto auto",
      },
    },
  },

  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
