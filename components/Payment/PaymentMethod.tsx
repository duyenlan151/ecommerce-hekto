import {
  paymentMethodSelector,
  shippingAddressSelector,
  allCartSelector,
  cartTotalSelector,
} from '@app/Cart/cartSelector';
import { cleanAllCart, updatePaymentMethod } from '@app/Cart/cartSlice';
import CartCheckout from '@components/Cart/CartCheckout';
import { isObjectEmpty, round2 } from 'constants/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { orderServices } from 'services';
import { paymentMethods } from './Payment.props';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import axiosClient from 'services/api-services';
import { getError } from '@utils/common';
import { Modal } from '@components/Shared/Modal';
import { ILoading } from '@components/Icons';

export interface PaymentMethodProps {}

export default function PaymentMethod(props: PaymentMethodProps) {
  const [loading, setLoading] = useState(false);
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const paymentMethod = useSelector(paymentMethodSelector);
  const cartTotal = useSelector(cartTotalSelector);
  const shippingAddress = useSelector(shippingAddressSelector);
  const allCart = useSelector(allCartSelector);
  const dispatch = useDispatch();
  const router = useRouter();

  const shippingPrice = cartTotal > 200 ? 0 : 15;
  const taxPrice = round2(cartTotal * 0.15);
  const totalPrice = round2(cartTotal + shippingPrice + taxPrice);

  useEffect(() => {
    if (isObjectEmpty(shippingAddress)) {
      router.push('/cart/payment');
    }
  }, []);

  useEffect(() => {
    const loadPaypalScript = async () => {
      const clientId = await axiosClient.get('/keys/paypal');
      paypalDispatch({
        type: 'resetOptions',
        value: {
          'client-id': String(clientId),
          currency: 'USD',
        },
      });
      //@ts-ignore
      paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
    };
    loadPaypalScript();
  }, [paypalDispatch]);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const { cartItems } = allCart;
      const result = await orderServices.orders({
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice: cartTotal,
        shippingPrice,
        taxPrice,
        totalPrice,
      });

      if (result?.error) {
        return toast.error(result?.error);
      }

      if (result?.url) {
        window.location.href = result?.url;
        return;
      }
      dispatch(cleanAllCart());
      toast.success('Order Successfully');
      router.push(`/order/${result?.order._id}`);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  function onApprove(data, actions) {
    console.log('🚀 ~ file: PaymentMethod.tsx:104 ~ onApprove ~ actions:', actions);
    return actions.order.capture().then(async function (details) {
      console.log('🚀 ~ file: PaymentMethod.tsx:105 ~ details:', details);
      try {
        // dispatch({ type: 'PAY_REQUEST' });
        // const { data } = await axios.put(
        //   `/api/orders/${order._id}/pay`,
        //   details
        // );
        // dispatch({ type: 'PAY_SUCCESS', payload: data });
        // toast.success('Order is paid successgully');
      } catch (err) {
        // dispatch({ type: 'PAY_FAIL', payload: getError(err) });
        // toast.error(getError(err));
      }
    });
  }
  function onError(err) {
    toast.error(getError(err));
  }

  return (
    <section className="container mx-auto lg:py-32 py-10 lg:px-0 px-4">
      <h4 className="text-blue-1 text-3xl">Hekto Payment</h4>
      <div className="text-sub-title font-lato-light leading-7 mt-3">
        Cart/ Information/ Shipping/ Payment
      </div>
      {paymentMethod !== 'paypal' && (
        <Modal showIconClose={false} isShow={loading} onChange={() => {}}>
          <ILoading />
        </Modal>
      )}
      <div className="flex lg:flex-row flex-col justify-between mt-6">
        <div className="lg:basis-8/12 basis-full">
          <div className=" bg-grey-6  mb-4">
            <div className="tracking-wider flex items-center justify-between px-8 py-4 text-lg mb-4 border-b border-primary">
              Shipping Address
              <Link href="/cart/payment" className="text-sm underline">
                Edit
              </Link>
            </div>
            <div className="px-8 pb-4">
              <div className="py-2 text-sm">
                First Name: <span className="text-sub-title">{shippingAddress?.firstName}</span>
              </div>
              <div className="py-2 text-sm">
                Last Name: <span className="text-sub-title">{shippingAddress?.lastName}</span>
              </div>
              <div className="py-2 text-sm">
                Email: <span className="text-sub-title">{shippingAddress?.email}</span>
              </div>
              <div className="py-2 text-sm">
                Address: <span className="text-sub-title">{shippingAddress?.address}</span>
              </div>
              <div className="py-2 text-sm">
                City: <span className="text-sub-title">{shippingAddress?.city}</span>
              </div>
              <div className="py-2 text-sm">
                Country: <span className="text-sub-title">{shippingAddress?.country}</span>
              </div>
              <div className="py-2 text-sm">
                Post code: <span className="text-sub-title">{shippingAddress?.postalCode}</span>
              </div>
            </div>
          </div>
          <div className=" bg-grey-6 py-5 px-8">
            <div className="tracking-wider text-xl mb-8">Payment method</div>
            <div className="">
              {paymentMethods.map((payment) => (
                <div className="flex items-center my-6" key={payment.value}>
                  <input
                    id="country-option-1"
                    type="radio"
                    name={payment.value}
                    onChange={(e) => dispatch(updatePaymentMethod(payment.value))}
                    value={payment.value}
                    className="h-4 w-4 border-gray-300 focus:ring-2"
                    aria-labelledby="country-option-1"
                    aria-describedby="country-option-1"
                    checked={paymentMethod.toLocaleLowerCase() === payment.value}
                  />
                  <span className="pl-4">{payment.icon}</span>
                  <label
                    htmlFor="country-option-1"
                    className="text-sm font-medium text-gray-900 ml-2"
                  >
                    {payment.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:basis-4/12 basis-full lg:ml-10 lg:mt-0 w-full justify-self-end">
          <CartCheckout onClick={handlePayment} isShowButton={paymentMethod !== 'paypal'} />
          {isPending ? (
            <div>Loading...</div>
          ) : (
            <>
              {paymentMethod === 'paypal' && (
                <div className="bg-grey-6 px-4 w-full">
                  <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                  ></PayPalButtons>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
