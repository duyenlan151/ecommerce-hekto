import * as yup from 'yup';

export const schemaReset = yup
  .object({
    password: yup
      .string()
      .required('Please enter password')
      .min(4, 'Password length should be at least 4 characters')
      .max(255, 'Password cannot exceed more than 255 characters'),
    confirm_password: yup
      .string()
      .required('Please enter confirm password')
      .min(4, 'Password length should be at least 4 characters')
      .max(255, 'Password cannot exceed more than 255 characters')
      .oneOf([yup.ref('password')], 'Confirm passwords does not match'),
  })
  .required();

export const schemaForgot = yup
  .object({
    email: yup
      .string()
      .required('Please enter email')
      .email('Please enter valid email')
      .max(255, 'Value must be at most 255 characters'),
  })
  .required();
