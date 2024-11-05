/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ghostWhite': '#f8f8ff',
        'black': '#1e1e1e',
        'red': '#ff0000',
        'darkRed': '#e61919',
      },
      backgroundImage: {
        'soundBackground': "url('./images/soundBackground.svg')",
      }
    },
  },
  plugins: [],
}

