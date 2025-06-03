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
        "btn-gradient": "linear-gradient(180deg, #A4BC46 0%, #85A019 100%)",
      },
      screens: {
        sixforty: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    fontfamiy: {
      bebas: ["bebas-nue"],
    },
  },
  plugins: [],
}  