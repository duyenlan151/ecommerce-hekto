import OrderCommon from '@components/Order/OrderCommon';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { orderServices } from 'services';

export interface OrdersResultPageProps {}

export default function OrdersResultPage(props: OrdersResultPageProps) {
  const [result, setResult] = useState({ message: 'Nothing from here', status: false });
  const router = useRouter();
  console.log('🚀 ~ file: index.tsx:11 ~ OrdersResultPage ~ router:', router);
  const {
    query: { success, order_id },
  } = useRouter();

  useEffect(() => {
    (async () => {
      if (success && order_id) {
        try {
          let result = await orderServices.updateStatusPayment({ status: success, id: order_id });
          setResult(result);
        } catch (error) {
          setResult(error);
        }
      }
    })();
  }, []);

  return <OrderCommon status={result.status} message={result.message} />;
}
