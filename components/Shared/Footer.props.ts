import * as yup from 'yup';

export const dataFooter = {
  'categories.title': [
    { label: 'categories.laptops-computers', path: '/s' },
    { label: 'categories.cameras-photography', path: '/' },
    { label: 'categories.smartphones-tablets', path: '/' },
    { label: 'categories.videogames-consoles', path: '/' },
    { label: 'categories.waterproof-headphones', path: '/' },
  ],
  'customer-care.title': [
    { label: 'customer-care.my-account', path: '/user/profile' },
    { label: 'customer-care.discount', path: '/user/orders' },
    { label: 'customer-care.returns', path: '/user/orders' },
    { label: 'customer-care.orders-history', path: '/user/orders' },
    { label: 'customer-care.order-tracking', path: '/user/orders' },
  ],
  'pages.title': [
    { label: 'pages.blog', path: '/blog' },
    { label: 'pages.shop', path: '/products' },
    { label: 'pages.category', path: '/' },
    { label: 'pages.pre-built', path: '/' },
    { label: 'pages.visual', path: '/' },
    { label: 'pages.wooCommerce', path: '/' },
  ],
};

export const schemaFooter = yup
  .object({
    emailSup: yup
      .string()
      .required('Please enter email')
      .email('Please enter valid email')
      .max(255, 'Value must be at most 255 characters'),
  })
  .required();
