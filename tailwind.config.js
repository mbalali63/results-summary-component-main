/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'Hanken': ['Hanken']
      },
      colors: {
        'LightSlateBlue':'#7857ff',
        'LightRoyalBlue': '#2e2be9',
        'PersianBlue': '#2421ca',
        'VioletBlue': '#4e21ca',
        'LightRed': '#ff5757',
        'OrangeyYellow': '#ffb01f',
        'GreenTeal': '#00bd91',
        'CobaltBlue': '#1125d4',
        'DarkGrayBlue': '#303b5a',
      },
    },
  },
  plugins: [],
}

