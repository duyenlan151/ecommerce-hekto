import { OrderResModel } from 'models';
import axiosClient from './api-services';

export const orderServices = {
  orders(params?): Promise<OrderResModel> {
    return axiosClient.post('/orders', { ...params });
  },

  updateStatusPayment({ id, status }): Promise<{ message: string; status: boolean }> {
    return axiosClient.put('/orders/pay', {
      id,
      status,
    });
  },

  removeCartItem(id): Promise<any> {
    return axiosClient.put('/orders', {
      params: {
        id,
      },
    });
  },

  updateCartItem(carts): Promise<any> {
    return axiosClient.put('/orders', {
      params: {
        carts,
      },
    });
  },
};
