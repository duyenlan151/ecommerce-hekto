import { BlogModel, DataBlogModel } from 'models';
import axiosClient from 'services/api-services';

export const blogsService = {
  getAllBlog(params?): Promise<DataBlogModel> {
    return axiosClient.get('/blogs', { params });
  },

  getBlogById({ id, slug }): Promise<any> {
    return axiosClient.get(`/blogs`, {
      params: {
        id,
        slug,
      },
    });
  },

  addNewBlog(blog: Partial<BlogModel>): Promise<any> {
    return axiosClient.post(`/blogs`, {
      ...blog,
    });
  },

  updateBlog(blog: Partial<BlogModel>): Promise<any> {
    return axiosClient.put(`/blogs`, {
      ...blog,
    });
  },

  deleteBlog({ _id }): Promise<any> {
    return axiosClient.delete(`/blogs`, {
      params: {
        _id,
      },
    });
  },
};
