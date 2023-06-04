import CartCheckout from '@components/Cart/CartCheckout';
import CartItemList from '@components/Cart/CartItemList';
import { cartItemsSelector, shippingAddressSelector } from 'app/Cart/cartSelector';
import { isObjectEmpty, isObjectEmptyValue } from 'constants/index';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useSelector } from 'react-redux';
import PaymentForm from './PaymentForm';
export interface PaymentProps {}

export default function Payment(props: PaymentProps) {
  const cartItems = useSelector(cartItemsSelector);
  const shippingAddress = useSelector(shippingAddressSelector);
  const router = useRouter();

  const [trigger, setTrigger] = React.useState(false);

  const onPayment = (e) => {
    // e.preventDefault();
    setTrigger(true);

    if (!isObjectEmpty(shippingAddress) && !isObjectEmptyValue(shippingAddress)) {
      router.push('/cart/payment-method');
    }
  };

  const onSubmit = (isError) => {};
  return (
    <section className="container mx-auto lg:py-32 py-10 lg:px-0 px-4">
      <h4 className="text-blue-1 text-3xl">Hekto Payment</h4>
      <div className="text-sub-title font-lato-light leading-7 mt-3">
        Cart/ Information/ Shipping/ Payment
      </div>
      <div className="flex lg:flex-row flex-col justify-between mt-6">
        <div className="lg:basis-8/12 basis-full">
          <PaymentForm isTrigger={trigger} />
        </div>
        <div className="lg:basis-4/12 basis-full lg:ml-4 lg:mt-0 mt-5 w-full justify-self-end">
          <CartItemList data={cartItems} />
          <div className="mt-4">
            <CartCheckout onClick={onPayment} />
          </div>
        </div>
      </div>
    </section>
  );
}
