// import { LoginPayload } from '@/models'
import axiosClient from 'services/api-services';

export const categoryService = {
  getAllCategory(params?): Promise<any> {
    return axiosClient.get('/admin/categories', { params });
  },

  getProductById({ id }): Promise<any> {
    return axiosClient.get(`/admin/categories`, {
      params: {
        id,
      },
    });
  },

  addNewCategory(category): Promise<any> {
    return axiosClient.post(`/admin/categories`, {
      ...category,
    });
  },

  updateCategory(category): Promise<any> {
    return axiosClient.put(`/admin/categories`, {
      ...category,
    });
  },

  deleteCategory({ _id }): Promise<any> {
    return axiosClient.delete(`/admin/categories`, {
      params: {
        _id,
      },
    });
  },
};
