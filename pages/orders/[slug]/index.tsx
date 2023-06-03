import { cleanAllCart } from '@app/Cart/cartSlice';
import OrderCommon from '@components/Order/OrderCommon';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderServices } from 'services';

export interface OrdersResultPageProps {}

export default function OrdersResultPage(props: OrdersResultPageProps) {
  const [result, setResult] = useState({ message: 'Nothing from here', status: false });
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    query: { success, order_id },
  } = useRouter();

  useEffect(() => {
    (async () => {
      if (success && order_id) {
        try {
          let result = await orderServices.updateStatusPayment({ status: success, id: order_id });
          if (result.status) {
            dispatch(cleanAllCart());
          }
          setResult(result);
        } catch (error) {
          setResult(error);
        }
      }
    })();
  }, []);

  return <OrderCommon status={result.status} message={result.message} />;
}
