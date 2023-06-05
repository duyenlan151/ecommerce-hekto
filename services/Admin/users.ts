import axiosClient from 'services/api-services';

export const usersService = {
  getAllUsers(params?): Promise<any> {
    return axiosClient.get('/admin/users');
  },
};
