/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bodyBackground: '#f2f4f8',
        primaryColor: '#002333',
        ironColor: '#66615C',
        bodyColor: '#cab26a',
      },
    },
    fontFamily: {
      appFont: ['Montserrat', 'sans-serif'],
      letterFont: ['DM Mono', 'monospace'],
    },
  },
  plugins: [],
};
