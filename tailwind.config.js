const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/images/hero-background.jpg')",
        'main-background': "url('/images/main-background.jpg')",
      },
      fontFamily: {
        byker: ['byker', ...defaultTheme.fontFamily.sans],
        hackman: ['hackman', ...defaultTheme.fontFamily.sans],
        novecento: ['novecento-sans-wide', ...defaultTheme.fontFamily.sans],
        regulator: ['regulator-nova', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
