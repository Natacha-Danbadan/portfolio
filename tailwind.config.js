/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#023047",
        primaryTwo: "#491637",
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
        // natty: '0 0 5px 2px rgba(0,0,0,.35)',
      },
      backgroundImage: {
        newbg: "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% );",
       },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
