import axiosClient from 'services/api-services';

export const productsService = {
  getAllProducts(params?): Promise<any> {
    return axiosClient.get('/products', { params });
  },

  getProductById({ id }): Promise<any> {
    return axiosClient.get(`/products`, {
      params: {
        id,
      },
    });
  },

  addNewProduct(product): Promise<any> {
    return axiosClient.post(`/products`, {
      ...product,
    });
  },

  updateProduct(product): Promise<any> {
    return axiosClient.put(`/products`, {
      ...product,
    });
  },

  deleteProduct({ _id }): Promise<any> {
    console.log('🚀 ~ file: products.ts:29 ~ deleteProduct ~ _id:', _id);
    return axiosClient.delete(`/products`, {
      params: {
        _id,
      },
    });
  },
};
