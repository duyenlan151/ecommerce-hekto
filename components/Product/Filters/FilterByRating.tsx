import { CheckBox } from '@components/Shared/Common';
import * as React from 'react';

export interface FilterByRatingProps {}
const classCheckBox =
  'bg-yellow-pattern border-yellow-300 text-yellow-500 focus:border-yellow-300 mr-3';

const filterRating = [
  { id: 1, label: 'Rating 1', value: 'rating-1' },
  { id: 2, label: 'Rating 2', value: 'rating-2' },
  { id: 3, label: 'Rating 3', value: 'rating-3' },
  { id: 4, label: 'Rating 4', value: 'rating-4' },
];

export function FilterByRating(props: FilterByRatingProps) {
  return (
    <div className="my-2">
      <p className="text-blue-1 text-xl px-3 py-2">Rating</p>
      <div className="flex flex-col p-3 pt-0">
        {filterRating.map((item) => (
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
