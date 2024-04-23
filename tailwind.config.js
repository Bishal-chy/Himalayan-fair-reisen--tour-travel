/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#E8F6FB',
        DarkRed: '#C22932',
        Bluish: '#235789',
        Lightgreen:'#2BB0A9',

      },
    },
  },
  plugins: [],
}

