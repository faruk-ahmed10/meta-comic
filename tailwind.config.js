const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
        'sec': ['IBM Plex Sans']
      },
      colors: {
        dark: '#060315',
        primary: '#3282E9',
        secondary: '#FFA900'
      }
    },
  },
  plugins: [],
}