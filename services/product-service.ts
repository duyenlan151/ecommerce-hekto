// import { LoginPayload } from '@/models'

import { ProductItem } from 'models';
import axiosClient from './api-services';

export const productsService = {
  getAllProducts(params?): Promise<{ products: ProductItem; total: number; limit: number }> {
    return axiosClient.get('/products', { params });
  },

  getProductById(id: string): Promise<{ product: ProductItem }> {
    return axiosClient.get(`/products/${id}`);
  },
};
