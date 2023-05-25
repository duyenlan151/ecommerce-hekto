import CartCheckout from '@components/Cart/CartCheckout';
import CartItemList from '@components/Cart/CartItemList';
import { cartItemsSelector, cartTotalSelector } from 'app/Cart/cartSelector';
import * as React from 'react';
import PaymentForm from './\bPaymentForm';
import { useSelector } from 'react-redux';

export interface PaymentProps {}

export default function Payment(props: PaymentProps) {
  const cartItems = useSelector(cartItemsSelector);
  const cartTotal = useSelector(cartTotalSelector);
  return (
    <section className="container mx-auto lg:py-32 py-10 lg:px-0 px-4">
      <h4 className="text-blue-1 text-3xl">Hekto Payment</h4>
      <div className="text-sub-title font-lato-light leading-7 mt-3">
        Cart/ Information/ Shipping/ Payment
      </div>
      <div className="flex lg:flex-nowrap flex-wrap justify-between mt-6">
        <div className="lg:basis-8/12 basis-full">
          <PaymentForm />
        </div>
        <div className="lg:basis-4/12 basis-full lg:ml-10 lg:mt-0 mt-5 w-full justify-self-end">
          <CartItemList data={cartItems} />
          <CartCheckout
            onClick={() => {}}
            price={cartTotal}
            totalPrice={cartTotal + (cartTotal * 3) / 100}
          />
        </div>
      </div>
    </section>
  );
}
