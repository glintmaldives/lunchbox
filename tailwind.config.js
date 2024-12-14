/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        prussian: '#003049',
        cinnabar: '#D62828',
        orange: '#F77F00',
        maize: '#FCBF49',
        bone: '#EAE2B7',
        sienna: '#e56b49',
        slate: '#2b2e44',
        deepred: '#953137',
        grayblue: '#a1a4b0',
        taupe: '#a0949c',
        coral: '#FC8862',
        lightcoral: '#FC7174',
      },
    },
  },
  plugins: [],
};