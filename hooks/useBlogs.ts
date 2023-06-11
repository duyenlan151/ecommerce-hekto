import { ActionCommon, BlogModel } from 'models';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { blogsService } from 'services/Admin';

const titleAction = {
  add: 'Added',
  edit: 'Updated',
  delete: 'Deleted',
};

export const useBlog = () => {
  const [loading, setLoading] = useState(false);

  const handleBlog = async (
    blog: Partial<BlogModel>,
    action: ActionCommon,
    categoryStatus: string = 'active'
  ) => {
    let statusCode = false;
    try {
      setLoading(true);

      const { _id } = blog;
      switch (action) {
        case 'get':
          return await blogsService.getAllBlog({
            status: categoryStatus,
          });
          break;
        case 'add':
          await blogsService.addNewBlog({
            ...blog,
          });
          break;
        case 'delete':
          await blogsService.deleteBlog({
            _id,
          });
          break;
        case 'edit':
          await blogsService.updateBlog({
            ...blog,
          });
          break;
        default:
          return;
      }

      setTimeout(() => {
        toast(`${titleAction[action]} Successfully!`, { type: 'success' });
      }, 2000);

      statusCode = true;
    } catch (error) {
      toast('Something error! Please try again.', { type: 'error' });
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    return statusCode;
  };

  return { loading, handleBlog };
};
