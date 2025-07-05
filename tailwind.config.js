/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: '#f2a36a',
        royal: '#590fe3',
        violet: '#b501e2'
      },
      backgroundImage: {
        'violet-royal': 'linear-gradient(50deg, #b501e2, #590fe3)',
        'peach-royal': 'linear-gradient(120deg, #f2a36a, #590fe3)'
      },
      boxShadow: {
        'gradient': '0 0 20px #f2a36a'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}