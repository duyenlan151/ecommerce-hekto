import * as yup from 'yup';

export const schemaProduct = yup
  .object({
    name: yup
      .string()
      .required('Please insert name')
      .max(255, 'Value must be at most 255 characters'),
    slug: yup
      .string()
      .required('Please insert slug')
      .max(255, 'Value must be at most 255 characters'),
  })
  .required();
