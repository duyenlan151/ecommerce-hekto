import { cleanAllCart } from '@app/Cart/cartSlice';
import OrderCommon from '@components/Order/OrderCommon';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderServices } from 'services';

export interface OrdersResultPageProps {}

export default function OrdersResultPage(props: OrdersResultPageProps) {
  const [result, setResult] = useState({ message: 'Nothing from here', status: false });
  const router = useRouter();
  console.log('🚀 ~ file: index.tsx:14 ~ OrdersResultPage ~ router:', router);
  const dispatch = useDispatch();
  const {
    query: { success, order_id },
  } = useRouter();
  console.log('🚀 ~ file: [order_id].tsx:17 ~ OrdersResultPage ~ order_id:', order_id);

  const { data: session } = useSession();

  useEffect(() => {
    (async () => {
      if (success && order_id) {
        try {
          let result = await orderServices.updateStatusPayment({
            status: success,
            id: order_id,
            email_address: session?.user?.email,
          });
          if (result.status) {
            dispatch(cleanAllCart());
            router.push(`/user/orders/${order_id}`);
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
