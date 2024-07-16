/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'inito-blue': '#1f94aa',
        "inito-text": '#112D35',
        'inito-mobile': '#c4f2ff',
        'inito-footer': '#112d35',
      },
      backgroundImage: {
        'main-hero-bg': "url('https://cdn.inito.com/inito_website/v2_main_hero_background.png')",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}