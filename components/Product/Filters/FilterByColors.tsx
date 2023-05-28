import { CheckBox } from '@components/Shared/Common';
import * as React from 'react';

export interface FilterByPriceProps {}
const classCheckBox = 'bg-pink-pattern border-pink-500 text-pink-300 focus:border-pink-500 mr-3';

const filterColors = [
  { id: 1, label: 'Color 1', value: 'price-1' },
  { id: 2, label: 'Color 2', value: 'price-2' },
  { id: 3, label: 'Color 3', value: 'price-3' },
  { id: 4, label: 'Color 4', value: 'price-4' },
];

export function FilterByColors(props: FilterByPriceProps) {
  return (
    <div className="my-2 border-b">
      <p className="text-blue-1 text-xl px-3 py-2">Colors</p>
      <div className="flex flex-col p-3 pt-0">
        {filterColors.map((item) => (
          <div className="my-2" key={item.id}>
            <CheckBox
              value={item.value}
              label={item.label}
              name={item.value}
              className={classCheckBox}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
