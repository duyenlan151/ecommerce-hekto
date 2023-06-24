import { ProductModel } from '@models/index';
import axiosClient from 'services/api-services';

export const productsService = {
  getAllProducts(params?): Promise<ProductModel> {
    return axiosClient.get('/admin/products', { params });
  },

  getProductById({ id }): Promise<ProductModel> {
    return axiosClient.get(`/admin/products`, {
      params: {
        id,
      },
    });
  },

  addNewProduct(product): Promise<ProductModel> {
    return axiosClient.post(`/admin/products`, {
      ...product,
    });
  },

  updateProduct(product): Promise<ProductModel> {
    return axiosClient.put(`/admin/products`, {
      ...product,
    });
  },

  deleteProduct({ _id }): Promise<ProductModel> {
    return axiosClient.delete(`/admin/products`, {
      params: {
        _id,
      },
    });
  },
};
