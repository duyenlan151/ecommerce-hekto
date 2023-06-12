// import { LoginPayload } from '@/models'

import { DataResCommonModel, ProductModel } from 'models';
import axiosClient from './api-services';

export const productsService = {
  getAllProducts(params?): Promise<DataResCommonModel<ProductModel>> {
    return axiosClient.get('/admin/products', { params });
  },

  getProductById(id: string): Promise<{ product: ProductModel }> {
    return axiosClient.get(`/admin/products/${id}`);
  },

  getProductBySlug({ id, slug }): Promise<{ product: ProductModel }> {
    return axiosClient.get(`/admin/products`, {
      params: {
        id,
        slug,
      },
    });
  },
};
