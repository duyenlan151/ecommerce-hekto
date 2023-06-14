import * as yup from 'yup';

export const dataTile = {
  login: 'auth:login.title',
  signup: 'auth:sign-up.title',
};

export const schemaLogin = yup
  .object({
    email: yup
      .string()
      .required('email.error.required')
      .email('email.error.invalid')
      .max(255, 'email.error.max'),
    password: yup
      .string()
      .required('password.error.required')
      .min(4, 'password.error.min')
      .max(255, 'password.error.max'),
  })
  .required();

export const schemaSignUp = yup
  .object({
    name: yup.string().required('name.error.required').max(255, 'name.error.max'),
    email: yup
      .string()
      .required('email.error.required')
      .email('email.error.invalid')
      .max(255, 'email.error.max'),
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
