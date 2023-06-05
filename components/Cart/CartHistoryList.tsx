import { Table } from '@components/Shared/Table';
import { getSymbolCurrency } from '@utils/common';
import { OrderModel } from 'models';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiOutlineStop } from 'react-icons/ai';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import CartHistory from './CartHistory';

export interface CartHistoryListProps {
  orders: OrderModel[];
}

export function CartHistoryListSkeleton() {
  return (
    <>
      <div className="">
        <div className="bg-white p-4 w-full mx-auto mt-4">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-4 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-4 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 w-full mx-auto mt-4">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-4 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-4 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 w-full mx-auto mt-4">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-4 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-4 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const columns = [
  {
    key: 'product',
    title: 'Product',
    render: (_, { _id, product, color, size }, columnIndex) => (
      <>
        <div className="flex py-4">
          <div className="relative mr-3 h-[83px] w-[83px]">
            <Link
              href={`/product/${product?._id}/${product?.slug}`}
              className="mr-3 h-[83px] w-[83px] py-4"
            >
              <Image
                className="max-w-[64px] min-w-[83px] h-full z overflow-hidden object-cover relative shadow-sm h-full"
                width={83}
                height={83}
                sizes="(max-width: 83px) 100vw, (max-width: 83px)"
                src={product?.images[0]?.path}
                alt={product?.images[0]?.name}
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </>
    ),
  },
  {
    key: 'title',
    title: 'Title',
    render: (_, { product }) => (
      <>
        <div className="line-clamp-3">
          <Link
            href={`/product/${product?._id}/${product?.slug}`}
            className="flex hover:text-pink-1 transition ease-in-out duration-300 whitespace-pre-wrap max-h-[80px]"
          >
            {product?.title}
          </Link>
        </div>
      </>
    ),
  },
  {
    key: 'price',
    title: 'Price',
    render: (_, { product }) => <>{getSymbolCurrency(Number(product?.price))}</>,
  },
  {
    key: 'quantity',
    title: 'Quantity',
  },
  {
    key: 'total',
    title: 'Total',
    render: (_, { product, quantity }) => (
      <>{getSymbolCurrency(quantity * Number(product?.price))}</>
    ),
  },
];

export default function CartHistoryList({ orders }: CartHistoryListProps) {
  if (orders?.length <= 0) {
    return <div className="p-4 bg-white mt-4">Your cart is empty</div>;
  }
  return <>{orders && orders.map((order) => <CartHistory key={order?._id} order={order} />)}</>;
}
