import axiosClient from './api-services';

export const orderServices = {
  orders(params?): Promise<any> {
    return axiosClient.post('/orders', { ...params });
  },

  updateStatusPayment({ id, status }): Promise<any> {
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
