/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto'
      }
    },
  },
  plugins: [],
}
