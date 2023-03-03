/** @type {import('tailwindcss').Config} */
module.exports = {
  //since the theme is now managed by us, we need to add the purge option
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
