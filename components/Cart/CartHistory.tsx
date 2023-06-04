import { Table } from '@components/Shared/Table';
import { getSymbolCurrency } from '@utils/common';
import { OrderModel } from 'models';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiOutlineStop } from 'react-icons/ai';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { useRouter } from 'next/router';

export interface CartHistoryProps {
  order: OrderModel;
}

const columns = [
  {
    key: 'product',
    title: 'Product',
    render: (_, { _id, product, slug, color, size, quantity }, columnIndex) => (
      <>
        <div className="flex py-4">
          <div className="relative mr-3 h-[83px] w-[83px]">
            <Link
              href={`/products/${product?._id}/${slug}`}
              className="mr-3 h-[83px] w-[83px] py-4"
            >
              <Image
                className="max-w-[64px] min-w-[83px] h-full z overflow-hidden object-cover relative shadow-sm h-full"
                width={83}
                height={83}
                sizes="(max-width: 83px) 100vw, (max-width: 83px)"
                src={product?.images[0]?.path}
                alt={product?.images[0]?.name}
                layout="responsive"
                loading="lazy"
              />
            </Link>
            <span className="absolute bottom-0 right-0 bg-gray-100 p-1 px-2 rounded-tl-xl text-xs">
              x{quantity}
            </span>
          </div>
        </div>
      </>
    ),
  },
  {
    key: 'title',
    title: 'Title',
    render: (_, { product, slug }) => (
      <>
        <div className="realitve line-clamp-3">
          <Link
            href={`/products/${product?._id}/${slug}`}
            className="flex hover:text-pink-1 transition ease-in-out duration-300 whitespace-pre-wrap max-h-[80px]"
          >
            {product?.title}
          </Link>
        </div>
      </>
    ),
  },
  {
    key: 'total',
    title: 'Total',
    render: (_, { product, quantity }) => (
      <>{getSymbolCurrency(quantity * Number(product?.price))}</>
    ),
  },
];

export default function CartHistory({ order }: CartHistoryProps) {
  const router = useRouter();
  const {
    _id,
    shippingAddress: { firstName, lastName, address, city, country, postalCode },
    shippingPrice,
    paymentMethod,
    createdAt,
    orderItems,
    totalPrice,
    taxPrice,
    itemsPrice,
    isPaid,
    isDelivered,
    isCancelled,
  } = order;
  return (
    <div className="bg-white p-4 w-full mx-auto mt-4">
      <div className="pb-4 border-b border-primary">
        {isCancelled ? (
          <div className="flex items-center">
            <AiOutlineStop />
            <span className="ml-2">Cancelled</span>
          </div>
        ) : !isDelivered ? (
          <div className="flex items-center">
            <MdOutlineDeliveryDining size={20} />
            <span className="ml-2">In progress</span>
          </div>
        ) : (
          <div className="flex items-center">
            <MdOutlineDeliveryDining />
            <span className="ml-2">Delivered</span>
          </div>
        )}
      </div>
      <Table
        showHeader={false}
        isPrimary={false}
        showAction={false}
        title={''}
        data={orderItems.slice(0, 2)}
        columns={columns}
        onSelectOption={() => {}}
      />
      <div className="flex flex-col flex-end items-end mt-6">
        <div className="flex">
          <div className="text-right">Total price: </div>
          <div className="ml-4 text-right">{getSymbolCurrency(totalPrice)}</div>
        </div>
        <Link
          href={`${router.pathname}/${_id}`}
          className="block text-center mt-4 border border-primary w-fit rounded-sm py-2 px-6 text-base font-lato text-black shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
        >
          View detail
        </Link>
      </div>
    </div>
  );
}
