import axiosClient from 'services/api-services';

export const summaryService = {
  getSummary(params?): Promise<any> {
    return axiosClient.get('/admin/summary');
  },
};
