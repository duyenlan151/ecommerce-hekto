import { IFast } from '@components/Icons';
import { formatDateTime, getSymbolCurrency } from '@utils/common';
import { OrderModel } from 'models';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Table } from '@components/Shared/Table';
import MetaData from '@components/Shared/MetaData';

export interface CartInfoProps {
  isLoading: boolean;
  order: OrderModel;
}

const columns = [
  {
    key: 'product',
    title: 'Product',
    render: (_, { _id, product, color, size, slug }, columnIndex) => (
      <>
        <div className="flex py-4">
          <div className="relative mr-3 h-[83px] w-[83px]">
            <Link
              href={`/products/${product?._id}/${product?.slug}`}
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
    render: (_, { product, slug }) => (
      <>
        <div className="line-clamp-3">
          <Link
            href={`/products/${product?._id}/${product?.slug}`}
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
    render: (_, { product }) => <>{getSymbolCurrency(Number(product.price))}</>,
  },
  {
    key: 'quantity',
    title: 'Quantity',
  },
  {
    key: 'total',
    title: 'Total',
    render: (_, { product, quantity }) => (
      <>{getSymbolCurrency(quantity * Number(product.price))}</>
    ),
  },
];

export function CartInfoSkeleton() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-white p-4 max-w-sm w-full mx-auto">
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
        <div className="bg-white p-4 max-w-sm w-full mx-auto">
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
        <div className="bg-white p-4 max-w-sm w-full mx-auto">
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
      <div className="bg-white p-4 w-full mx-auto mt-4">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-15 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-10 bg-slate-200 rounded col-span-2"></div>
                <div className="h-10 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-10 bg-slate-200 rounded col-span-1"></div>
                <div className="h-10 bg-slate-200 rounded col-span-2"></div>
              </div>
              <div className="h-12 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function CartInfo({ isLoading, order }: CartInfoProps) {
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
    user,
  } = order;
  if (isLoading) {
    return <CartInfoSkeleton />;
  }

  return (
    <div className="">
      <MetaData
        propTitle={'Order Infor'}
        propSuffix={'Order Infor'}
        propDescription={'Order Infor'}
        propKeywords={''}
      />
      <div className="pb-4 gap-4">
        #{_id} - <span className="text-blue-600">{!isDelivered ? 'In progress' : 'Delivered'}</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-white p-4 w-full mx-auto">
          <div className="uppercase font-bold">{firstName + lastName}</div>
          <div className="text-[13px] mt-2">Address: {[address, city, country].join(', ')}</div>
          <div className="text-[13px] mt-1">Postal Code: {postalCode}</div>
          <div className="text-[13px] mt-1">Email: {user[0]?.email}</div>
        </div>
        <div className="bg-white p-4 w-full mx-auto">
          <div className="font-[13px] flex items-center">
            <IFast />
            <span className="ml-2 -mt-[1px]">Economical delivery</span>
          </div>
          <div className="text-[13px] mt-2">Shipping price: {getSymbolCurrency(shippingPrice)}</div>
        </div>
        <div className="bg-white p-4 w-full mx-auto">
          <div className="text-[13px]">
            Payment method:
            <span className="uppercase text-sm ml-2 text-yellow-600">{paymentMethod}</span>
          </div>
          <div className="text-[13px] mt-2">
            Status:
            <span className="text-sm ml-2 text-yellow-600">{isPaid ? 'Done' : 'Unpaid'}</span>
          </div>
          <div className="text-[13px] mt-2">Order Date: {formatDateTime(new Date(createdAt))}</div>
        </div>
      </div>
      <div className="bg-white w-full mx-auto mt-4">
        <Table
          isPrimary={false}
          showAction={false}
          title={''}
          data={orderItems}
          columns={columns}
          onSelectOption={() => {}}
        />
        <div className="p-6 mt-4">
          <div className="space-y-3">
            <div className="flex justify-end">
              <div className="text-right text-sm">Items: </div>
              <div className="min-w-[120px] text-sm text-right">
                {getSymbolCurrency(itemsPrice)}
              </div>
            </div>
            <div className="flex justify-end">
              <div className="text-right text-sm">Tax: </div>
              <div className="min-w-[120px] text-sm text-right">{getSymbolCurrency(taxPrice)}</div>
            </div>
            <div className="flex justify-end">
              <div className="text-right text-sm">Ship: </div>
              <div className="min-w-[120px] text-sm text-right">
                {getSymbolCurrency(shippingPrice)}
              </div>
            </div>
            <div className="flex justify-end">
              <div className="text-right">Total price: </div>
              <div className="min-w-[120px] text-right text-red-500 text-lg">
                {getSymbolCurrency(totalPrice)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
