import CartHistoryList, { CartHistoryListSkeleton } from '@components/Cart/CartHistoryList';
import { UserCartInfo } from '@components/Users';
import { useOrders } from '@hooks/useOrders';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LayoutProfile from '../layout';

export interface OrderInProps {}

export default function OrderAll(props: OrderInProps) {
  const { loading, orders, handleOrder } = useOrders();
  const router = useRouter();
  const {
    query: { typeOrder },
  } = router;

  useEffect(() => {
    (async () => {
      getOrders();
    })();
  }, []);

  useEffect(() => {
    if (typeOrder) {
      getOrders({ typeOrder });
    } else if (!typeOrder) {
      router.push({
        pathname: router.pathname,
        query: {
          typeOrder: 'all',
        },
      });
    }
  }, [typeOrder]);

  const getOrders = async (params?) => {
    await handleOrder('getHistory', {}, params);
  };

  return (
    <LayoutProfile>
      <UserCartInfo />
      {loading ? <CartHistoryListSkeleton /> : orders && <CartHistoryList orders={orders} />}
    </LayoutProfile>
  );
}

OrderAll.authorize = true;
