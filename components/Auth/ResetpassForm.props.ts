import * as yup from 'yup';

export const schemaReset = yup
  .object({
    password: yup
      .string()
      .required('password.error.required')
      .min(4, 'password.error.min')
      .max(255, 'password.error.max'),
    confirm_password: yup
      .string()
      .required('confirm_password.error.required')
      .min(4, 'confirm_password.error.min')
      .max(255, 'confirm_password.error.max')
      .oneOf([yup.ref('password')], 'confirm_password.error.required'),
  })
  .required();

export const schemaForgot = yup
  .object({
    email: yup
      .string()
      .required('email.error.required')
      .email('email.error.invalid')
      .max(255, 'email.error.max'),
  })
  .required();
