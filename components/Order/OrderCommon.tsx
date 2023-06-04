import { IOrder } from '@components/Icons';
import React from 'react';

export interface OrderCommonProps {
  message: string;
  status: boolean;
}

export default function OrderCommon({ message, status }: OrderCommonProps) {
  return (
    <section className="relative bg-white py-20 lg:px-0 px-4">
      <div className="container relative mx-auto relative text-center lg:w-[70%] lg:p-16">
        <h4 className="text-blue-1 text-3xl"> {status ? 'Your Order Is Completed' : message}</h4>
        <div className="text-sub-title font-lato-light leading-7 mt-5 lg:w-[60%] mx-auto">
          {status &&
            ` Thank you for your order! Your order is being processed and will be completed within 3-6
          hours. You will receive an email confirmation when your order is completed.`}
        </div>
        <a
          href="/"
          className="block mt-12 !z-50 bg-pink-1 w-fit mx-auto rounded-sm px-8 py-4 text-base font-lato text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
        >
          Continue Shopping
        </a>
        {/* <div className="absolute z-0 top-1/2 left-1/2 transform !-translate-y-1/2 !-translate-x-1/2">
          <IOrder />
        </div> */}
      </div>
    </section>
  );
}
