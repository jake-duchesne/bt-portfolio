const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    fontFamily: {
      "lato": 'Lato-Regular',
      "lato-bold": 'Lato-Bold',
      "ms": 'Montserrat-Regular',
      "ms-bold": 'Montserrat-Bold',
      sans: ['Inter var', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
