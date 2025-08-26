/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF8E6',
          100: '#F7F1CE',
          200: '#F0E39D',
          300: '#E8D46B',
          400: '#D4AF37', // Main gold color
          500: '#C19A2E',
          600: '#9F7F26',
          700: '#7D651E',
          800: '#5B4A15',
          900: '#3A300D',
        },
        black: {
          DEFAULT: '#0A0A0A',
          50: '#1a1a1a',
          100: '#262626',
          200: '#333333',
          300: '#404040',
          400: '#595959',
          500: '#737373',
          600: '#8C8C8C',
          700: '#A6A6A6',
          800: '#BFBFBF',
          900: '#D9D9D9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};