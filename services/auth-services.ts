import { signIn } from 'next-auth/react';
import axiosClient from './api-services';

export const authService = {
  async redentials({ email, password }): Promise<any> {
    return await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
  },

  async login({ email, password }): Promise<any> {
    return this.redentials({ email, password });
  },

  async signup({ name, email, password }): Promise<any> {
    await axiosClient.post('/auth/signup', {
      name,
      email,
      password,
    });
    return this.redentials({ email, password });
  },

  resetPassword({ token, password, confirm_password }): Promise<any> {
    return axiosClient.put(`/user/reset/${token}`, {
      token,
      password,
      confirm_password,
    });
  },

  forgetPassword({ email }): Promise<any> {
    return axiosClient.post(`/user/forgot`, {
      email,
    });
  },

  verifyToken({ token }): Promise<any> {
    return axiosClient.post(`/verify-token`, {
      token,
    });
  },
};
