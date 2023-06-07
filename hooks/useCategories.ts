import { ActionCommon } from 'models';
import { CategoryModel } from 'models/category';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { categoryService } from 'services/Admin';

const titleAction = {
  add: 'Added',
  edit: 'Updated',
  delete: 'Deleted',
};

export const useCategories = () => {
  const [loading, setLoading] = useState(false);

  const handleCategory = async (
    category: CategoryModel,
    action: ActionCommon,
    categoryStatus: string = 'active'
  ) => {
    let statusCode = false;
    try {
      setLoading(true);

      const { _id, name, slug, status } = category;
      switch (action) {
        case 'get':
          return await categoryService.getAllCategory({
            status: categoryStatus,
          });
          break;
        case 'add':
          await categoryService.addNewCategory({
            name,
            slug,
            status,
          });
          break;
        case 'delete':
          await categoryService.deleteCategory({
            _id,
          });
          break;
        case 'edit':
          await categoryService.updateCategory({
            _id,
            name,
            slug,
            status,
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

  return { loading, handleCategory };
};
