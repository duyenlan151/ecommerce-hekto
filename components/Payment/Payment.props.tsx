import * as yup from 'yup';
import { BsCashCoin, BsPaypal, BsStripe } from 'react-icons/bs';

export const schemaPayment = yup
  .object({
    email: yup
      .string()
      .required('email.error.required')
      .email('email.error.invalid')
      .max(255, 'email.error.max'),
    firstName: yup.string().required('first-name.error.required').max(255, 'first-name.error.max'),
    lastName: yup.string().required('last-name.error.required').max(255, 'last-name.error.max'),
    address: yup.string().required('address.error.required').max(255, 'address.error.max'),
    city: yup.string().required('city.error.required').max(255, 'city.error.max'),
    country: yup.string().required('country.error.required').max(255, 'country.error.max'),
    postalCode: yup
      .string()
      .required('postal-code.error.required')
      .max(255, 'postal-code.error.required'),
  })
  .required();

export const paymentMethods = [
  { id: 1, label: 'cart:payment.cash', icon: <BsCashCoin />, value: 'cash' },
  { id: 1, label: 'Stripe', icon: <BsStripe color={'#0A2540'} />, value: 'stripe' },
  { id: 1, label: 'Paypal', icon: <BsPaypal />, value: 'paypal' },
];

export const typePayment = ['cash', 'stripe', 'paypal'];
