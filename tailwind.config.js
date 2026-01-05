/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Zorg ervoor dat al uw HTML-bestanden hier staan
    "./*.html",
    "./*/.html",
  ],
  theme: {
    extend: {
      // ⬇️ HIER moeten de fontFamily en colors blokken staan ⬇️
      fontFamily: {
        // Zorgt dat 'font-sans' de Inter family gebruikt
        sans: ['Inter', 'sans-serif'], 
      },
      colors: {
        'primaire-donker': '#003B58', // Voor headers
        'secundair-midden': '#176F98', // Voor inactieve nav
        'accent-actief': '#389ACB', // Voor actieve nav en accenten
      },
      // ⬆️ Alles binnen 'extend' ⬆️
    },
  },
  plugins: [],
}