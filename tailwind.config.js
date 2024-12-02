/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 3s ease-in-out infinite',
        'float-slower': 'float 4s ease-in-out infinite',
        'float-slowest': 'float 5s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'slide-left': 'slideFromLeft 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'slide-right': 'slideFromRight 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'slide-bottom': 'slideFromBottom 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade': 'fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'scale': 'scaleIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'rotate': 'rotateIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
};