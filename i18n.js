module.exports = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  pages: {
    '*': ['common', 'header', 'footer', 'error', 'cart'],
    '/': ['home'],
    '/products': ['products'],
    '/second-page': ['home'],
  },
};
