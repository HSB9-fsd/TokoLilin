/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#56B280',
        primaryDark: '#2D8F5A',
        secondary: '#56B2801A',
        blueDark: '#0B254B',
        light: '#fff'
      }
    },
  },
  plugins: [],
}

