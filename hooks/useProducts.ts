import { ActionCommon, CategoryModel } from 'models';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { categoryService } from 'services/Admin';

const titleAction = {
  add: 'Added',
  edit: 'Edited',
  delete: 'Deleted',
};

export const useProducts = () => {
  const [loading, setLoading] = useState(false);

  const handleCategory = async (category: CategoryModel, action: ActionCommon) => {
    let status = false;
    try {
      setLoading(true);

      const { _id, name, slug } = category;
      switch (action) {
        case 'add':
          await categoryService.addNewCategory({
            name,
            slug,
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
          });
          break;
        default:
          return;
      }

      setTimeout(() => {
        toast(`${titleAction[action]} Successfully!`, { type: 'success' });
      }, 2000);

      status = true;
    } catch (error) {
      toast('Something error! Please try again.', { type: 'error' });
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    return status;
  };

  return { loading, handleCategory };
};
