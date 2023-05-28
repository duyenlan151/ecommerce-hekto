import { CheckBox, InputField } from '@components/Shared/Common';
import * as React from 'react';

export interface FilterByPriceProps {}
const classCheckBox = 'bg-pink-pattern border-pink-500 text-pink-300 focus:border-pink-500 mr-3';

const filterPrice = [
  { id: 1, label: 'Under €25', value: 'price-1' },
  { id: 2, label: '$25 to $50', value: 'price-2' },
  { id: 3, label: '$50 to $100', value: 'price-3' },
  { id: 4, label: '$100 to $200', value: 'price-4' },
  { id: 5, label: ' $200 & Above', value: 'price-4' },
];

export function FilterByPrice(props: FilterByPriceProps) {
  return (
    <div className="my-2 border-b">
      <p className="text-blue-1 text-xl px-3 py-2">Price</p>
      <div className="flex flex-col px-3 pt-0">
        {filterPrice.map((item) => (
          <a
            key={item.id}
            className="my-1 font-lato text-sm hover:text-pink-1 cursor-pointer transition ease-in-out duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>
      <form className="px-3 mb-3">
        <div className="flex items-center gap-3">
          <InputField className="h-10 !px-2 border-grey-1" placeholder="€ Min" />
          <InputField className="h-10 !px-2 border-grey-1" placeholder="€ Max" />
        </div>
        <button
          type="submit"
          className="rounded-sm bg-transparent w-full flex-none px-10 py-2 text-sm border border-pink-500 font-semibold text-pink-1 shadow-sm hover:backdrop-opacity-60"
        >
          Go
        </button>
      </form>
    </div>
  );
}
