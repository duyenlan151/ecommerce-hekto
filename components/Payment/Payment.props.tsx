import * as yup from 'yup';
import { BsCashCoin, BsPaypal, BsStripe } from 'react-icons/bs';

export const schemaPayment = yup
  .object({
    email: yup
      .string()
      .required('Please enter email')
      .max(255, 'Value must be at most 255 characters'),
    firstName: yup
      .string()
      .required('Please enter first name')
      .max(255, 'Value must be at most 255 characters'),
    lastName: yup
      .string()
      .required('Please enter last name')
      .max(255, 'Value must be at most 255 characters'),
    address: yup
      .string()
      .required('Please enter email')
      .max(255, 'Value must be at most 255 characters'),
    city: yup
      .string()
      .required('Please enter city')
      .max(255, 'Value must be at most 255 characters'),
    country: yup
      .string()
      .required('Please enter country')
      .max(255, 'Value must be at most 255 characters'),
    postalCode: yup
      .string()
      .required('Please enter post code')
      .max(255, 'Value must be at most 255 characters'),
  })
  .required();

export const paymentMethods = [
  { id: 1, label: 'Cash On Delivery', icon: <BsCashCoin />, value: 'cash' },
  { id: 1, label: 'Stripe', icon: <BsStripe color={'#0A2540'} />, value: 'stripe' },
  { id: 1, label: 'Paypal', icon: <BsPaypal />, value: 'paypal' },
];

export const typePayment = ['cash', 'stripe', 'paypal'];
