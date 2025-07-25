/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
theme: {
  extend: {
    colors: {
      cream: '#FEFAE0',
      forest: '#283618',
      olive: '#606C38',
      gold: '#DDA15E',
      rust: '#BC6C25',
      background: '#FEFAE0',
      foreground: '#283618',
      accent: '#BC6C25',
    },
  },
},

theme: {
  extend: {
    colors: {
      olive: '#606C38',
      forest: '#283618',
      cream: '#FEFAE0',
      gold: '#DDA15E',
      rust: '#BC6C25',
    },
  },
},

  darkMode: 'class',

  plugins: [],
};
