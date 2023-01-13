/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#023047",
        primaryTwo: "#02273b",
        secondary:"#f77f00",
        secondaryTwo:"#d62828"
      },
      spacing: {
        height: "calc(100vh - 104px)",
        heightMob: "calc(100vh - 96px)"
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
        lobster: ["'Lobster'", "cursive"]
      },
      boxShadow: {
        profile: '0 4px 20px rgba(255, 252, 252, 0.25)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
