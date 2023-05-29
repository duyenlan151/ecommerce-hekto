// import { LoginPayload } from '@/models'
import axiosClient from 'services/api-services';

export const categoryService = {
  getAllCategory(params?): Promise<any> {
    return axiosClient.get('/categories', { params });
  },

  getProductById({ id }): Promise<any> {
    return axiosClient.get(`/categories`, {
      params: {
        id,
      },
    });
  },

  addNewCategory(category): Promise<any> {
    return axiosClient.post(`/categories`, {
      ...category,
    });
  },

  updateCategory(category): Promise<any> {
    return axiosClient.put(`/categories`, {
      ...category,
    });
  },

  deleteCategory({ _id }): Promise<any> {
    return axiosClient.delete(`/categories`, {
      params: {
        _id,
      },
    });
  },
};
