/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors: {
        borders: '#D1D6E0',
        'framework-light': '#F6F6FB',
        'framework-dark': '#3F3A50',
        'text-grey': '#55595D',
        'traffic-light-red': '#F87B7B',
      },
    },
  },
  plugins: [],
}
