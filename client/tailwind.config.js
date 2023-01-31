/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: "#0a66c2",
        gray: "#70757a",
      },
      screens: {
        tablet: "481px",

        laptop: "769px",

        desktop: "1025px",
      },
    },
  },
  plugins: [],
};
