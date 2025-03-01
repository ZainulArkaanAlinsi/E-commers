/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "serif"],
        'jakarta': ["Plus Jakarta Sans", "serif"],
      },
      colors: {
        background: "#1F1E25",
        manggo: "#FED049",
        ungu: "#A12568",
         gradieant: "#A12568",
         putih: "#FFFFFF",
      },

      padding: {
        30: "120px",
      }
    },

  },
  plugins: [],
}

