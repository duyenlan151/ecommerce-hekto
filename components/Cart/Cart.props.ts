import * as yup from 'yup';

export const schemaCart = yup
  .object({
    terms: yup.boolean().oneOf([true], 'cart.error.not-check').required('cart.error.not-check'),
    cartTotal: yup.number().required('cart.error.items-null').min(1, 'cart.error.items-null'),
  })
  .required();
