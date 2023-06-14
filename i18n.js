module.exports = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  pages: {
    '*': ['common', 'header', 'footer', 'error', 'cart'],
    '/': ['home'],

    // Auth
    '/login': ['auth', 'form'],
    '/signup': ['auth', 'form'],
    '/forgot': ['auth', 'form'],

    // User
    '/user/orders': ['user'],
    '/user/orders/[id]': ['user'],
    '/user/profile': ['user'],

    // Product
    '/products': ['products'],
    '/products/[...slug]': ['products'],

    // Cart
    '/cart/[slug]': ['form'],
  },
};
