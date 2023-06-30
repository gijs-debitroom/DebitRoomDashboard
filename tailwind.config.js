/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./scr/app.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          400: '#969798',
          500: '#666666',
          700: '#353535',
          800: '#262626',
          900: '#171818',
        },
        DebitRoomgray: '#282828',
        DebitRoomblue: '#2b75b4',
        pageBackgroundColor: '#E7F2F8',
        dark: {
          textColor: '#e1e4e8',
          headingPictogramColor: '#67798E',
          pageBackgroundColor: '#161C24',
          componentColor: '#212b36',
          borderColor: '#212b36'
        }
      }
    },
  },
  plugins: [],
}
