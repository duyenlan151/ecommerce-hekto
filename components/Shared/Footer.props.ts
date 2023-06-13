import * as yup from 'yup';

export const dataFooter = {
  Categories: [
    { label: 'Laptops & Computers', path: '/s' },
    { label: 'Cameras & Photography', path: '/' },
    { label: 'Smart Phones & Tablets', path: '/' },
    { label: 'Video Games & Consoles', path: '/' },
    { label: 'Waterproof Headphones', path: '/' },
  ],
  'Customer Care': [
    { label: 'My Account', path: '/user/profile' },
    { label: 'Discount', path: '/user/orders' },
    { label: 'Returns', path: '/user/orders' },
    { label: 'Orders History', path: '/user/orders' },
    { label: 'Order Tracking', path: '/user/orders' },
  ],
  Pages: [
    { label: 'Blog', path: '/blog' },
    { label: 'Browse the Shop', path: '/products' },
    { label: 'Category', path: '/' },
    { label: 'Pre-Built Pages', path: '/' },
    { label: 'Visual Composer Elements', path: '/' },
    { label: 'WooCommerce Pages', path: '/' },
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
