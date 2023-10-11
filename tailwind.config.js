/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['index.html'],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'regal-black': '#252525',
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
