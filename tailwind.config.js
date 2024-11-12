/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     screens: {
//       'sm': '500px',
//       // => @media (min-width: 576px) { ... }
//     },
//   }
// }