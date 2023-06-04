import { cartTotalSelector } from '@app/Cart/cartSelector';
import { CheckBox } from '@components/Shared/Common';
import { yupResolver } from '@hookform/resolvers/yup';
import { getSymbolCurrency } from '@utils/common';
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
      <div className="flex items-center justify-between border-b-2 pb-3 border-grey-1 mt-3 mb-8">
        <label className="text-blue-1 text-base">Subtotals:</label>
        <p className="text-blue-1 font-lato font-bold text-lg">{getSymbolCurrency(cartTotal)}</p>
      </div>
      <div className="flex items-center justify-between border-b-2 pb-3 border-grey-1 mb-4">
        <label className="text-blue-1 text-base">Totals:</label>
        <p className="text-blue-1 font-lato font-bold text-lg">
          {getSymbolCurrency(cartTotal + (cartTotal * 3) / 100)}
        </p>
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
