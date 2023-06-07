import axiosClient from 'services/api-services';

export const usersService = {
  getAllUsers(params?): Promise<any> {
    return axiosClient.get('/admin/users', { params });
  },

  getUserById({ id }): Promise<any> {
    return axiosClient.get('/admin/users', { params: { id } });
  },

  updateUser(category): Promise<any> {
    return axiosClient.put(`/admin/users`, {
      ...category,
    });
  },
};
