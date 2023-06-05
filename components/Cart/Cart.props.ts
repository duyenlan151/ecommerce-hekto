import * as yup from 'yup';

export const schemaCart = yup
  .object({
    terms: yup
      .boolean()
      .oneOf([true], 'Please checked this checkbox to countinue payment')
      .required('Please checked this checkbox to countinue payment'),
    cartTotal: yup.number().required('Price must be over 0').min(1, 'Items price must be over $0'),
  })
  .required();
