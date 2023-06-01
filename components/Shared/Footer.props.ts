import * as yup from 'yup';

export const dataFooter = {
  Categories: [
    'Laptops & Computers',
    'Cameras & Photography',
    'Smart Phones & Tablets',
    'Video Games & Consoles',
    'Waterproof Headphones',
  ],
  'Customer Care': ['My Account', 'Discount', 'Returns', 'Orders History', 'Order Tracking'],
  Pages: [
    'Blog',
    'Browse the Shop',
    'Category',
    'Pre-Built Pages',
    'Visual Composer Elements',
    'WooCommerce Pages',
  ],
};

export const schemaFooter = yup
  .object({
    email: yup
      .string()
      .required('Please enter email')
      .email('Please enter valid email')
      .max(255, 'Value must be at most 255 characters'),
  })
  .required();
