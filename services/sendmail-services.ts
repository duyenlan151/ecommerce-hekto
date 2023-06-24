import axiosClient from './api-services';

export const sendmailService = {
  sendMail(params): Promise<{ message: string }> {
    return axiosClient.post(`/sendmail`, { ...params });
  },
};
