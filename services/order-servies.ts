import { DataOrdersModel, OrderModel, OrderResModel } from 'models';
import axiosClient from './api-services';

export const orderServices = {
  getAllOrders(params?): Promise<DataOrdersModel> {
    return axiosClient.get('/orders', { params });
  },

  getOrdersHistory(params): Promise<OrderModel[]> {
    return axiosClient.get(`/orders/history`, { params });
  },

  getOrderById(params?): Promise<OrderModel> {
    return axiosClient.get(`/orders`, { params });
  },

  orders(params?): Promise<OrderResModel> {
    return axiosClient.post('/orders', { ...params });
  },

  updateStatusPayment({
    id,
    status,
    email_address,
    session_id,
  }): Promise<{ message: string; status: boolean }> {
    return axiosClient.put('/orders/pay', {
      id,
      status,
      email_address,
      session_id,
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
