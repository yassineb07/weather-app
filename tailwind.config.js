/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './dist/*.html'
  ],
  theme: {
    extend: {
      colors:{
        day:'#eefcff',
        night:'#064171',
        sunny:'#FFFFB7',
        rainy:'',
        snow:'',
      }
    },
  },
  plugins: [],
};
// day bg-gradient-to-b from-sky-400 to-sky-200
// night bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900
// rain bg-gradient-to-t from-gray-200 via-gray-400 to-gray-600
// bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900
// bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900
