module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'header': ['Copse']
    },
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
  darkMode: 'class'
}