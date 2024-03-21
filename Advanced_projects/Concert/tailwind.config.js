/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cornflowerblue': '#6495ED',
      },
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
      }
    },
  },
  plugins: [],
}