/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        keyframes: {
          fadeFromBlack: {
            "0%": { backgroundColor: "black" },
            "100%": { backgroundColor: "theme(colors.blue.500)" }, // Change this to your color
          },
        },
        animation: {
          fadeFromBlack: "fadeFromBlack 1.5s ease-in-out forwards delay-1200 duration-1000",
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            roboto: ["Roboto", "sans-serif"],
            tektur: ["Tektur", "cursive"],
          },
      },
    },
    plugins: [],
  };
  