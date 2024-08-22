/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'pp-telegraf': ['PP Telegraf', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#824FE7',
      },
      fontFamily: {
        'pp-telegraf': ['PP Telegraf'],
      },
    },
  },
  plugins: [],
};
