/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./destination.html", "./crew.html", "./technology.html"],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightBlue: 'hsl(231, 77%, 90%)',
        darkBlue: 'hsl(230, 35%, 7%)',
      },
      fontFamily: {
        "Barlow": ["Barlow", "sans-serif"],
        "Bellefair": ["Bellefair", "sans-serif"],
      }
    },
  },
  plugins: [],
}

