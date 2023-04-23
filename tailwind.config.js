/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColour: "#154799",
        lightTextColour: "#151F2B",
        lightComponentBackground: "#EEEEF4",
        lightBackground: "#FEFBFF",
        darkTextColour: "#F2F2F2",
        darkComponentBackground: "#272930",
        darkBackground: "#1B1B1F",
        darkComponentBackground: "#272930",
        darkBackground: "#1B1B1F",
      },
    },
  },
  plugins: [],
};
