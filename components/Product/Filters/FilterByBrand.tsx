import { CheckBox } from '@components/Shared/Common';
import * as React from 'react';

export interface FilterByBrandProps {}
const classCheckBox =
  'bg-brand-pattern !border-blue-300 !text-blue-500 !focus:border-blue-300 mr-3';

const filterBrand = [
  { id: 1, label: 'Brand 1', value: 'brand-1' },
  { id: 2, label: 'Brand 2', value: 'brand-2' },
  { id: 3, label: 'Brand 3', value: 'brand-3' },
  { id: 4, label: 'Brand 4', value: 'brand-4' },
];

export function FilterByBrand(props: FilterByBrandProps) {
  return (
    <div className="border-b">
      <p className="text-blue-1 text-xl px-3 py-2">Brand</p>
      <div className="flex flex-col p-3 pt-0">
        {filterBrand.map((item) => (
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
