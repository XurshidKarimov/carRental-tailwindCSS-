/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      maxWidth: {
        'container': '1230px',
      },
      colors: {
        'main-green': '#299764',
        'main-black': '#1C1C1C',
        'card-black': '#272727',
        
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),
            require('@tailwindcss/typography'),],
  darkMode: 'class',
}
