/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#ced4da',
        'grey':'#adb5bd'
        
      },
      fontFamily: {
        libre: ['"Libre Baskerville"', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      
    },
  },
  variants: {
    animation: ['responsive', 'hover'],
  },
  plugins: [],
}

