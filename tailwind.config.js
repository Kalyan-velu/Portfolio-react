/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'gray-dark': '#273444',
      'dark-blue': 'hsl(205, 51%, 12%)'
    },
    'textColor': {
      'green': 'green',
    },
    extend: {
      screens: {
        mobile: { max: "700px" },
        widescreen: { min: "700px" },
      },
    },
  },
  plugins: [],
}