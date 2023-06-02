import { ActionCommon, ProductModel } from 'models';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { productsService } from 'services/Admin';

const titleAction = {
  add: 'Added',
  edit: 'Updated',
  delete: 'Deleted',
};

export const useProducts = () => {
  const [loading, setLoading] = useState(false);

  const handleProduct = async (product: Partial<ProductModel>, action: ActionCommon) => {
    let status = false;
    try {
      setLoading(true);

      const {
        _id,
        title,
        description,
        price,
        images,
        category,
        short_description,
        discount_percentage,
        rating,
      } = product;
      switch (action) {
        case 'add':
          await productsService.addNewProduct({
            title,
            description,
            price,
            images,
            category,
            short_description,
            discount_percentage,
            rating,
          });
          break;
        case 'delete':
          await productsService.deleteProduct({
            _id,
          });
          break;
        case 'edit':
          await productsService.updateProduct({
            _id,
            title,
            description,
            price,
            images,
            category,
            short_description,
            discount_percentage,
            rating,
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

  return { loading, handleProduct };
};
