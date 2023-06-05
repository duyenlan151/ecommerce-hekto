import * as yup from 'yup';

export const schemaContact = yup
  .object({
    name: yup
      .string()
      .required('Please enter name')
      .max(255, 'Value must be at most 255 characters'),
    email: yup
      .string()
      .required('Please enter email')
      .email('Please enter valid email')
      .max(255, 'Value must be at most 255 characters'),
    subject: yup
      .string()
      .required('Please enter subject')
      .max(255, 'Password cannot exceed more than 255 characters'),
    message: yup
      .string()
      .required('Please enter message')
      .max(255, 'Password cannot exceed more than 255 characters'),
  })
  .required();
