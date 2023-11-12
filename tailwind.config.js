/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['inter', 'sans-serif']
      },
      colors: {
        'primary-background': '#F5F5F5',
      }
    },
  },
  plugins: [],
}

