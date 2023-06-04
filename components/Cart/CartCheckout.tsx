import { cartTotalSelector } from '@app/Cart/cartSelector';
import { CheckBox } from '@components/Shared/Common';
import { yupResolver } from '@hookform/resolvers/yup';
import { getSymbolCurrency } from '@utils/common';
import { round2 } from 'constants/index';
import { Currency } from 'models';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { schemaCart } from './Cart.props';

export interface CartCheckoutProps {
  currency?: Currency;
  onClick: (e) => void;
  isShowButton?: boolean;
}

export default function CartCheckout({
  currency = 'EUR',
  onClick,
  isShowButton = true,
}: CartCheckoutProps) {
  const cartTotal = useSelector(cartTotalSelector);

  const shippingPrice = cartTotal > 200 ? 0 : 15;
  const taxPrice = round2(cartTotal * 0.15);
  const totalPrice = round2(cartTotal + shippingPrice + taxPrice);

  const form = useForm({
    resolver: yupResolver(schemaCart),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      terms: false,
      cartTotal,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    trigger,
  } = form;

  useEffect(() => {
    setValue('cartTotal', cartTotal);
  }, [cartTotal]);

  return (
    <form onSubmit={handleSubmit(onClick)} className="bg-white w-full h-fit lg:p-6 p-4">
      <div className="flex items-center justify-between border-b pb-3 border-grey-1 mt-3 mb-4">
        <label className="text-blue-1 text-base">Subtotals:</label>
        <p className="text-blue-1 font-lato font-bold text-lg">{getSymbolCurrency(cartTotal)}</p>
      </div>

      <div className="flex items-center text-sm justify-between pb-3 border-grey-1 ">
        <label className="text-blue-1">Ship:</label>
        <p className="text-blue-1 font-lato">{getSymbolCurrency(shippingPrice)}</p>
      </div>
      <div className="flex items-center  text-sm justify-between pb-3 border-grey-1 border-b">
        <label className="text-blue-1">Tax:</label>
        <p className="text-blue-1 font-lato">{getSymbolCurrency(taxPrice)}</p>
      </div>
      {/* <div className="text-right text-sm mb-2">
        <div>Ship: {getSymbolCurrency(shippingPrice)}</div>
        <div>Tax: {getSymbolCurrency(taxPrice)}</div>
      </div> */}
      <div className="flex items-center justify-between border-b pb-2 border-grey-1 mt-2 mb-4">
        <label className="text-blue-1 text-base">Totals:</label>
        <p className="text-blue-1 font-lato font-bold text-lg">{getSymbolCurrency(totalPrice)}</p>
      </div>
      <CheckBox
        control={control}
        name="terms"
        label="Shipping & taxes calculated at checkout"
        className="rounded w-3 h-3"
      />
      {errors.cartTotal?.message && !errors.terms?.message && (
        <span className="text-red-500 text-xs font-bold tracking-wide">
          {errors.cartTotal?.message}
        </span>
      )}
      {isShowButton && (
        <button
          type="submit"
          className="block text-center mt-10 bg-green-1 w-full rounded-sm py-3 text-base font-lato text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
        >
          Proceed To Checkout
        </button>
      )}
    </form>
  );
}
