/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    container: {
      center: true, 
    },
    extend: {
      colors: {
        "header-color": "#f9f9f9",
        "black-color": "#DC0083",
        "header-text-color": "#FABE4C",
      },
    },
    fontfamiy: {
      bebas: ["bebas-nue"],
    },
  },
  plugins: [],
}  