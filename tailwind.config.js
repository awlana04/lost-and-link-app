/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
    colors: {
      lightGreen: '#D4FFE5',
      darkGreen: '#3DDB8F',
      white: '#FFFFFF',
      black: '#000000',
    },
  },

  plugins: [],
};
