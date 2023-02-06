/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"]
      },
      colors: {
        one: '#3B322C',
        two: '#9B6A6C',
        three: '#B09398',
        four: '#CEDFD9',
        five: '#f8f8f8'
      }
    },
  },
  plugins: [],
}