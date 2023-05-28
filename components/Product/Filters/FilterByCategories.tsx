import { CheckBox } from '@components/Shared/Common';
import * as React from 'react';

export interface FilterByCategoriesProps {}

const classCheckBox = 'bg-pink-pattern border-pink-500 text-pink-300 focus:border-pink-500 mr-3';

const filterCategories = [
  { id: 1, label: 'Categories 1', value: 'categories-1' },
  { id: 2, label: 'Categories 2', value: 'categories-2' },
  { id: 3, label: 'Categories 3', value: 'categories-3' },
  { id: 4, label: 'Categories 4', value: 'categories-4' },
];

export function FilterByCategories(props: FilterByCategoriesProps) {
  return (
    <div className="my-2 border-b">
      <p className="text-blue-1 text-xl px-3 py-2">Categories</p>
      <div className="flex flex-col p-3 pt-0">
        {filterCategories.map((item) => (
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
