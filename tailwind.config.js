/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-red-hover': '#f40612',
        'netflix-dark': '#141414',
        'netflix-gray': '#2f2f2f',
        'netflix-light-gray': '#cccccc',
        'netflix-muted': '#999999',
      },
      fontFamily: {
        'netflix': ['Roboto', 'Open Sans', 'sans-serif'],
      },
      fontSize: {
        'netflix-hero': ['4rem', { lineHeight: '1.1', fontWeight: '900' }],
        'netflix-title': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'netflix-subtitle': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      animation: {
        'netflix-fade': 'fadeIn 0.5s ease-in-out',
        'netflix-slide': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};