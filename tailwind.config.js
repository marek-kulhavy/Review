/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F5F8FF',
        'secondary': '#DBE4FB',
        'purple-bg': '#1855FC',
        'logo-text': '#1855FC',
        'dots-color': '#97939A',
        'review-bg': '#F6F6F9',
        'header-text': '#2D2D2E',
        'date-text': '#ADABB6',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

