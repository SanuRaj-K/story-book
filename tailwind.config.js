/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#FF7426",
        secondary: "#050C26",
        background: "#FDF8EE",
        box: "#4D2C5E",
      },
    },
  },
  plugins: [],
};
