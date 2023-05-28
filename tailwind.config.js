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
        'pink-300': '#FF3EB2',
        'pink-500': '#FFDBF1',
        'sub-title': '#8A8FB9',
        'sub-title-2': '#A1ABCC',
        'sub-title-3': '#9295AA',
        'blue-1': '#151875',
        'blue-2': '#1A0B5B',
        'blue-3': '#2F1AC4',
        'blue-4': '#2B2BF5',
        'blue-5': '#101750',
        'blue-300': '#E5E0FC',
        'blue-500': '#603EFF',
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
        'bg-color': '#efefef',
        'yellow-300': '#FFF6DA',
        'yellow-500': '#FFCC2E',
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
      backgroundImage: {
        'pink-pattern':
          'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjRkZEQkYxIi8+CjxwYXRoIGQ9Ik0xMi40NzMgNC44MDY2M0MxMi40MTEgNC43NDQxNSAxMi4zMzczIDQuNjk0NTUgMTIuMjU2IDQuNjYwNzFDMTIuMTc0OCA0LjYyNjg2IDEyLjA4NzYgNC42MDk0NCAxMS45OTk2IDQuNjA5NDRDMTEuOTExNiA0LjYwOTQ0IDExLjgyNDUgNC42MjY4NiAxMS43NDMzIDQuNjYwNzFDMTEuNjYyIDQuNjk0NTUgMTEuNTg4MyA0Ljc0NDE1IDExLjUyNjMgNC44MDY2M0w2LjU1OTY0IDkuNzc5OTdMNC40NzI5NyA3LjY4NjYzQzQuNDA4NjMgNy42MjQ0OCA0LjMzMjY3IDcuNTc1NiA0LjI0OTQzIDcuNTQyOEM0LjE2NjE5IDcuNTA5OTkgNC4wNzczMSA3LjQ5MzkxIDMuOTg3ODYgNy40OTU0NkMzLjg5ODQgNy40OTcgMy44MTAxMyA3LjUxNjE1IDMuNzI4MDggNy41NTE4MkMzLjY0NjAyIDcuNTg3NDggMy41NzE4IDcuNjM4OTUgMy41MDk2NCA3LjcwMzNDMy40NDc0OCA3Ljc2NzY1IDMuMzk4NjEgNy44NDM2MSAzLjM2NTggNy45MjY4NUMzLjMzMyA4LjAxMDA4IDMuMzE2OTEgOC4wOTg5NyAzLjMxODQ2IDguMTg4NDJDMy4zMjAwMSA4LjI3Nzg3IDMuMzM5MTYgOC4zNjYxNSAzLjM3NDgyIDguNDQ4MkMzLjQxMDQ5IDguNTMwMjUgMy40NjE5NiA4LjYwNDQ4IDMuNTI2MzEgOC42NjY2M0w2LjA4NjMxIDExLjIyNjZDNi4xNDgyOCAxMS4yODkxIDYuMjIyMDIgMTEuMzM4NyA2LjMwMzI2IDExLjM3MjZDNi4zODQ1IDExLjQwNjQgNi40NzE2MyAxMS40MjM4IDYuNTU5NjQgMTEuNDIzOEM2LjY0NzY1IDExLjQyMzggNi43MzQ3OSAxMS40MDY0IDYuODE2MDMgMTEuMzcyNkM2Ljg5NzI3IDExLjMzODcgNi45NzEgMTEuMjg5MSA3LjAzMjk3IDExLjIyNjZMMTIuNDczIDUuNzg2NjRDMTIuNTQwNiA1LjcyNDIxIDEyLjU5NDYgNS42NDg0NCAxMi42MzE2IDUuNTY0MTFDMTIuNjY4NSA1LjQ3OTc3IDEyLjY4NzYgNS4zODg3IDEyLjY4NzYgNS4yOTY2NEMxMi42ODc2IDUuMjA0NTcgMTIuNjY4NSA1LjExMzUgMTIuNjMxNiA1LjAyOTE2QzEyLjU5NDYgNC45NDQ4MyAxMi41NDA2IDQuODY5MDYgMTIuNDczIDQuODA2NjNWNC44MDY2M1oiIGZpbGw9IiNGRjNFQjIiLz4KPC9zdmc+Cg==)',
        'brand-pattern':
          'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjRTVFMEZDIi8+CjxwYXRoIGQ9Ik0xMi40NzMgNC44MDY2M0MxMi40MTEgNC43NDQxNSAxMi4zMzczIDQuNjk0NTUgMTIuMjU2IDQuNjYwNzFDMTIuMTc0OCA0LjYyNjg2IDEyLjA4NzYgNC42MDk0NCAxMS45OTk2IDQuNjA5NDRDMTEuOTExNiA0LjYwOTQ0IDExLjgyNDUgNC42MjY4NiAxMS43NDMzIDQuNjYwNzFDMTEuNjYyIDQuNjk0NTUgMTEuNTg4MyA0Ljc0NDE1IDExLjUyNjMgNC44MDY2M0w2LjU1OTY0IDkuNzc5OTdMNC40NzI5NyA3LjY4NjYzQzQuNDA4NjMgNy42MjQ0OCA0LjMzMjY3IDcuNTc1NiA0LjI0OTQzIDcuNTQyOEM0LjE2NjE5IDcuNTA5OTkgNC4wNzczMSA3LjQ5MzkxIDMuOTg3ODYgNy40OTU0NkMzLjg5ODQgNy40OTcgMy44MTAxMyA3LjUxNjE1IDMuNzI4MDggNy41NTE4MkMzLjY0NjAyIDcuNTg3NDggMy41NzE4IDcuNjM4OTUgMy41MDk2NCA3LjcwMzNDMy40NDc0OCA3Ljc2NzY1IDMuMzk4NjEgNy44NDM2MSAzLjM2NTggNy45MjY4NUMzLjMzMyA4LjAxMDA4IDMuMzE2OTEgOC4wOTg5NyAzLjMxODQ2IDguMTg4NDJDMy4zMjAwMSA4LjI3Nzg3IDMuMzM5MTYgOC4zNjYxNSAzLjM3NDgyIDguNDQ4MkMzLjQxMDQ5IDguNTMwMjUgMy40NjE5NiA4LjYwNDQ4IDMuNTI2MzEgOC42NjY2M0w2LjA4NjMxIDExLjIyNjZDNi4xNDgyOCAxMS4yODkxIDYuMjIyMDIgMTEuMzM4NyA2LjMwMzI2IDExLjM3MjZDNi4zODQ1IDExLjQwNjQgNi40NzE2MyAxMS40MjM4IDYuNTU5NjQgMTEuNDIzOEM2LjY0NzY1IDExLjQyMzggNi43MzQ3OSAxMS40MDY0IDYuODE2MDMgMTEuMzcyNkM2Ljg5NzI3IDExLjMzODcgNi45NzEgMTEuMjg5MSA3LjAzMjk3IDExLjIyNjZMMTIuNDczIDUuNzg2NjRDMTIuNTQwNiA1LjcyNDIxIDEyLjU5NDYgNS42NDg0NCAxMi42MzE2IDUuNTY0MTFDMTIuNjY4NSA1LjQ3OTc3IDEyLjY4NzYgNS4zODg3IDEyLjY4NzYgNS4yOTY2NEMxMi42ODc2IDUuMjA0NTcgMTIuNjY4NSA1LjExMzUgMTIuNjMxNiA1LjAyOTE2QzEyLjU5NDYgNC45NDQ4MyAxMi41NDA2IDQuODY5MDYgMTIuNDczIDQuODA2NjNWNC44MDY2M1oiIGZpbGw9IiM2MDNFRkYiLz4KPC9zdmc+Cg==)',
        'yellow-pattern':
          'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjRkZGNkRBIi8+CjxwYXRoIGQ9Ik0xMi40NzMgNC44MDY2M0MxMi40MTEgNC43NDQxNSAxMi4zMzczIDQuNjk0NTUgMTIuMjU2IDQuNjYwNzFDMTIuMTc0OCA0LjYyNjg2IDEyLjA4NzYgNC42MDk0NCAxMS45OTk2IDQuNjA5NDRDMTEuOTExNiA0LjYwOTQ0IDExLjgyNDUgNC42MjY4NiAxMS43NDMzIDQuNjYwNzFDMTEuNjYyIDQuNjk0NTUgMTEuNTg4MyA0Ljc0NDE1IDExLjUyNjMgNC44MDY2M0w2LjU1OTY0IDkuNzc5OTdMNC40NzI5NyA3LjY4NjYzQzQuNDA4NjMgNy42MjQ0OCA0LjMzMjY3IDcuNTc1NiA0LjI0OTQzIDcuNTQyOEM0LjE2NjE5IDcuNTA5OTkgNC4wNzczMSA3LjQ5MzkxIDMuOTg3ODYgNy40OTU0NkMzLjg5ODQgNy40OTcgMy44MTAxMyA3LjUxNjE1IDMuNzI4MDggNy41NTE4MkMzLjY0NjAyIDcuNTg3NDggMy41NzE4IDcuNjM4OTUgMy41MDk2NCA3LjcwMzNDMy40NDc0OCA3Ljc2NzY1IDMuMzk4NjEgNy44NDM2MSAzLjM2NTggNy45MjY4NUMzLjMzMyA4LjAxMDA4IDMuMzE2OTEgOC4wOTg5NyAzLjMxODQ2IDguMTg4NDJDMy4zMjAwMSA4LjI3Nzg3IDMuMzM5MTYgOC4zNjYxNSAzLjM3NDgyIDguNDQ4MkMzLjQxMDQ5IDguNTMwMjUgMy40NjE5NiA4LjYwNDQ4IDMuNTI2MzEgOC42NjY2NEw2LjA4NjMxIDExLjIyNjZDNi4xNDgyOCAxMS4yODkxIDYuMjIyMDIgMTEuMzM4NyA2LjMwMzI2IDExLjM3MjZDNi4zODQ1IDExLjQwNjQgNi40NzE2MyAxMS40MjM4IDYuNTU5NjQgMTEuNDIzOEM2LjY0NzY1IDExLjQyMzggNi43MzQ3OSAxMS40MDY0IDYuODE2MDMgMTEuMzcyNkM2Ljg5NzI2IDExLjMzODcgNi45NzEgMTEuMjg5MSA3LjAzMjk3IDExLjIyNjZMMTIuNDczIDUuNzg2NjRDMTIuNTQwNiA1LjcyNDIxIDEyLjU5NDYgNS42NDg0NCAxMi42MzE2IDUuNTY0MTFDMTIuNjY4NSA1LjQ3OTc3IDEyLjY4NzYgNS4zODg3IDEyLjY4NzYgNS4yOTY2NEMxMi42ODc2IDUuMjA0NTcgMTIuNjY4NSA1LjExMzUgMTIuNjMxNiA1LjAyOTE2QzEyLjU5NDYgNC45NDQ4MyAxMi41NDA2IDQuODY5MDYgMTIuNDczIDQuODA2NjNaIiBmaWxsPSIjRkZDQzJFIi8+Cjwvc3ZnPgo=)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
