/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        heading: 'hsl(243, 87%, 12%)',
        text: 'hsl(238, 22%, 44%)',
        brightblue:'hsl(224, 93%, 58%)',
        cyan: ' hsl(170, 45%, 43%)',
        grayblue: 'hsl(240, 75%, 98%)',
        gray: 'hsl(0, 0%, 75%)',
      },
      fontFamily:{
        heading: ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}

