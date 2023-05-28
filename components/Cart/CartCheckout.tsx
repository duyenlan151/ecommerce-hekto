import { CheckBox } from '@components/Shared/Common';
import { getSymbolCurrency } from '@utils/common';
import { Currency } from 'models';
import * as React from 'react';

export interface CartCheckoutProps {
  currency?: Currency;
  price: string | number;
  totalPrice: string | number;
  onClick: () => void;
}

export default function CartCheckout({
  currency = 'EUR',
  price = 0,
  totalPrice,
  onClick,
}: CartCheckoutProps) {
  return (
    <div className="bg-grey-6 w-full h-fit lg:p-6 p-4">
      <div className="flex items-center justify-between border-b-2 pb-3 border-grey-1 mt-3 mb-8">
        <label className="text-blue-1 text-xl">Subtotals:</label>
        <p className="text-blue-1 font-lato text-lg">{getSymbolCurrency(currency, price)}</p>
      </div>
      <div className="flex items-center justify-between border-b-2 pb-3 border-grey-1 mb-8">
        <label className="text-blue-1 text-xl">Totals:</label>
        <p className="text-blue-1 font-lato text-lg">{getSymbolCurrency(currency, totalPrice)}</p>
      </div>
      <CheckBox label="Shipping & taxes calculated at checkout" className="rounded w-3 h-3" />
      <button
        type="submit"
        onClick={onClick}
        className="block text-center mt-10 bg-green-1 w-full rounded-sm py-3 text-base font-lato text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
      >
        Proceed To Checkout
      </button>
    </div>
  );
}
