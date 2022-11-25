const konstaConfig = require('konsta/config');
/** @type {import('tailwindcss').Config} */
module.exports = konstaConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  konsta: {
    colors: {
      'brand-red': '#CE3765',
      'brand-green': '#9FE369',
    }
  },
  darkMode: 'class'
});
