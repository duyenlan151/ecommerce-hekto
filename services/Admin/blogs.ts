import { BlogModel, DataResCommonModel } from 'models';
import axiosClient from 'services/api-services';

export const blogsService = {
  getAllBlog(params?): Promise<DataResCommonModel<BlogModel>> {
    return axiosClient.get('/blogs', { params });
  },

  getBlogById({ id, slug }): Promise<BlogModel> {
    return axiosClient.get(`/blogs`, {
      params: {
        id,
        slug,
      },
    });
  },

  addNewBlog(blog: Partial<BlogModel>): Promise<BlogModel> {
    return axiosClient.post(`/blogs`, {
      ...blog,
    });
  },

  updateBlog(blog: Partial<BlogModel>): Promise<BlogModel> {
    return axiosClient.put(`/blogs`, {
      ...blog,
    });
  },

  deleteBlog({ _id }): Promise<BlogModel> {
    return axiosClient.delete(`/blogs`, {
      params: {
        _id,
      },
    });
  },
};
