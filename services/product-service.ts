// import { LoginPayload } from '@/models'

import { ProductModel } from 'models';
import axiosClient from './api-services';

export const productsService = {
  getAllProducts(params?): Promise<{ data: ProductModel[]; total: number; limit: number }> {
    return axiosClient.get('/admin/products', { params });
  },

  getProductById(id: string): Promise<{ product: ProductModel }> {
    return axiosClient.get(`/admin/products/${id}`);
  },

  getProductBySlug({ id }): Promise<{ product: ProductModel }> {
    return axiosClient.get(`/admin/products`, {
      params: {
        id,
      },
    });
  },
};
