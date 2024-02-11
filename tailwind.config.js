/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      notosansjp: ["Noto Sans JP", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
      bizudmincho: ["BIZ UDMincho", "serif"],
    },
  },
  plugins: [],
};
