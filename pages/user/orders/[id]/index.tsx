import { CartInfo, CartInfoSkeleton } from '@components/Cart/CartInfo';
import { useOrders } from '@hooks/useOrders';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LayoutProfile from 'pages/user/layout';
import React, { useEffect } from 'react';

export interface OrderInfoProps {}

export default function OrderInfo(props: OrderInfoProps) {
  const { errors, loading, order, handleOrder } = useOrders();
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    (async () => {
      await handleOrder('getOrderById', { _id: String(id) });
    })();
  }, []);

  return (
    <LayoutProfile>
      {loading ? (
        <CartInfoSkeleton />
      ) : errors?.message ? (
        <div className="flex flex-col items-center justify-center bg-white py-20 px-4">
          <div className="text-lg">Not Found</div>
          <Link
            href="/products"
            className="block text-center mt-4 bg-green-1 w-fit rounded-sm py-3 px-4 text-base font-lato text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        order && <CartInfo isLoading={loading} order={order} />
      )}
    </LayoutProfile>
  );
}

OrderInfo.authorize = true;
