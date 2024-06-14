/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0C0C0C',
        'items': '#1F1E1F',
        'itemBorder': '#CFBEA5',
        'button': '#FE5733'
      },
      checkbox: {
        border: '#FE5733', // Gray-700
        checked: '#48BB78', // Green-500
      },
      fontFamily: {
        custom: ['Poppins','sans-serif'],
      },
    },

  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.circle-checkbox': {
          'appearance': 'none',
          '-webkit-appearance': 'none',
          'width': '24px',
          'height': '24px',
          'border-radius': '50%',
          'background-color': 'transparent',
          'border': '2px solid #FE5733', // Gray-700
          'transition': 'background-color 0.2s, border-color 0.2s',
        },
        '.circle-checkbox:checked': {
          'background-color': '#48BB78', // Green-500
          'border-color': '#48BB78', // Green-500
        },
      });
    }
  ],
}

