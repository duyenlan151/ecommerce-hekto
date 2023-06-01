import * as yup from 'yup';

export const dataTile = {
  login: 'Login',
  signup: 'Sign Up',
};

export const schemaLogin = yup
  .object({
    email: yup
      .string()
      .required('Please enter email')
      .email('Please enter valid email')
      .max(255, 'Value must be at most 255 characters'),
    password: yup
      .string()
      .required('Please enter password')
      .min(4, 'Password length should be at least 4 characters')
      .max(255, 'Password cannot exceed more than 255 characters'),
  })
  .required();

export const schemaSignUp = yup
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
