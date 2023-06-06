import { ActionOrder, DataOrdersModel, OrderModel } from 'models';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { orderServices } from 'services';

export const useOrders = () => {
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<OrderModel>();
  const [orders, setOrders] = useState<OrderModel[]>();
  const [errors, setErrors] = useState<{ message: '' }>();

  const handleOrder = async (action: ActionOrder, order?: Partial<OrderModel>, params?: Object) => {
    setLoading(true);
    try {
      switch (action) {
        case 'getOrderById':
          {
            const result = await orderServices.getOrderById({ id: order?._id });
            setOrder(result);
          }
          break;
        case 'getHistory': {
          const orders = await orderServices.getOrdersHistory(params);
          setOrders(orders);
        }

        case 'getAllOrders': {
          return (await orderServices.getAllOrders(params)) as DataOrdersModel;
        }
        default:
          break;
      }
    } catch (error) {
      toast('Something error! Please try again.', { type: 'error' });
      setErrors(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return { errors, loading, orders, order, handleOrder };
};
