import axiosClient from 'services/api-services';

export const ordersAdminService = {
  getAllProducts(params?): Promise<any> {
    return axiosClient.get('/admin/products', { params });
  },

  getProductById({ id }): Promise<any> {
    return axiosClient.get(`/admin/products`, {
      params: {
        id,
      },
    });
  },

  addNewProduct(product): Promise<any> {
    return axiosClient.post(`/admin/products`, {
      ...product,
    });
  },

  updateProduct(product): Promise<any> {
    return axiosClient.put(`/admin/products`, {
      ...product,
    });
  },

  deleteProduct({ _id }): Promise<any> {
    return axiosClient.delete(`/admin/products`, {
      params: {
        _id,
      },
    });
  },
};
