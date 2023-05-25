/** @type {import('tailwindcss').Config} */

const colorClasses = [
  '#05E6B7',
  '#F701A8',
  '#00009D',
  '#FFEAC1',
  '#5726DF',
  '#FFB265',
  '#FB2E86',
  '#1BE982',
];
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  purge: {
    safelist: [...colorClasses.map((color) => `bg-[${color}]`)],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ['JosefinSans-Regular', 'sans-serif'],
      ['josefinsans-thin']: ['JosefinSans-Thin', 'sans-serif'],
      lato: ['Lato-Regular', 'sans-serif'],
      ['lato-light']: ['Lato-Light', 'sans-serif'],
    },
    extend: {
      colors: {
        'violet-1': '#7E33E0',
        'violet-2': '#E7E6EF',
        'violet-3': '#F1F0FF',
        'violet-4': '#ACABC3',
        'violet-5': '#E7E4F8',
        'pink-1': '#FB2E86',
        'pink-2': '#F2F0FF',
        'pink-3': '#F6F7FB',
        'pink-4': '#F701A8',
        'pink-5': '#00009D',
        'pink-6': '#F52B70',
        'pink-200': '#FFF6FB',
        'sub-title': '#8A8FB9',
        'sub-title-2': '#A1ABCC',
        'blue-1': '#151875',
        'blue-2': '#1A0B5B',
        'blue-3': '#2F1AC4',
        'blue-4': '#2B2BF5',
        'blue-5': '#101750',
        'green-1': '#08D15F',
        'green-2': '#05E6B7',
        'green-3': '#FFEAC1',
        'green-4': '#2BF5CC',
        'grey-1': '#EEEFFB',
        'grey-2': '#F7F7F7',
        'grey-3': '#72718F',
        'grey-4': '#9DA0AE',
        'grey-5': '#F8F8FD',
        'grey-6': '#F8F8FD',
        'red-1': '#FB2448',
        'orange-1': '#FF9100',
        'border-1': '#C2C5E1',
      },
      boxShadow: {
        main: ' 0px 0px 25px 10px #F8F8FB',
      },
      spacing: {
        34: '34rem',
        3.125: '3.125rem',
      },
      height: {
        'circle-sm': '1.5625rem',
        'circle-md': '2.8125rem',
      },
      minWidth: {
        'circle-sm': '1.5625rem',
        'circle-md': '2.8125rem',
      },
      lineHeight: {
        'extra-loose': '3.5',
        12: '3rem',
      },
    },
  },
  plugins: [],
};
