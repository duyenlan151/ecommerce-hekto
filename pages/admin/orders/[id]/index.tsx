import { CartInfo, CartInfoSkeleton } from '@components/Cart/CartInfo';
import LayoutAdmin from '@components/Shared/LayoutAdmin';
import { useOrders } from '@hooks/useOrders';
import router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export interface OrderDetailProps {}

export default function OrderDetail(props: OrderDetailProps) {
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
    <>
      <button
        onClick={() => router.back()}
        className="flex flex-1 w-full items-center focus:outline-none hover:underline pb-4 mb-4"
      >
        <AiOutlineArrowLeft />
        <span className="ml-1 text-sm">Back To Orders</span>
      </button>
      {loading ? (
        <CartInfoSkeleton />
      ) : errors?.message ? (
        <div className="flex flex-col items-center justify-center bg-white py-20 px-4">
          <div className="text-lg">Not found</div>
        </div>
      ) : (
        order && <CartInfo isLoading={loading} order={order} />
      )}
    </>
  );
}

OrderDetail.layout = LayoutAdmin;
OrderDetail.isAdmin = true;
