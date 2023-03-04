/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js", "./modules/darkMode.js"],
  theme: {
    extend: {
      colors: {
        'main-green': '#299764',
        'main-black': '#1C1C1C',
        'card-black': '#272727',
        'twitter-color': '#55ACE3',
        'fb-color': '#0B84EE',
        'whatsup-color': '#48C95F',
        'hover-gray': '#F5F5F5',
        'hover-green': '#077743',
        'header-border-bottom-color': '#E5E7EA',
        'cardTypeColor': '#555555',
        'cardTitleColor': '#000000',
        'cardBGcolor': '#F5F5F5',
        'googleFontcolor': '#4285F4',
        'community-border-color': 'radial-gradient(230.93% 230.93% at 102.01% 2.03%, #F9ED32 0%, #EE2A7B 36%, #D22A8A 44%, #8B2AB2 60%, #1B2AF0 83%, #002AFF 88%)',
      },
      backgroundImage: {
        'instagram-color': 'radial-gradient(230.93% 230.93% at 102.01% 2.03%, #F9ED32 0%, #EE2A7B 36%, #D22A8A 44%, #8B2AB2 60%, #1B2AF0 83%, #002AFF 88%)',
        'community-line': 'linear-gradient(90deg, #EA4335 19.83%, #FBBC05 65%, #34A853 82.29%, #4285F4 100%)',
      },
      boxShadow: {
        'nav-shadow': '0px 4px 10px 0px rgba(0, 0, 0, 0.15)',
        'form-shadow': '0px 5px 10px 5px rgba(0, 0, 0, 0.15);',
      },
      fontSize: {
        'cardTitleFont': ['24px', {
          lineHeight: '29.26px',
          fontWeight: '600',
          color: 'green',
        }],
        'cardTypeFont': ['16px', {
          lineHeight: '19.5px',
        }],
        'cardBottomFont': ['16px', {
          lineHeight: '19.5px',
        }]
      },
      gridTemplateColumns: {
        'cardGrid': 'repeat(auto-fill, minmax(380px, 1fr))',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),],
  darkMode: 'class',
}
