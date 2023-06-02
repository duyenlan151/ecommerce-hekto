import * as React from 'react';
import {
  FilterByBrand,
  FilterByCategories,
  FilterByColors,
  FilterByPrice,
  FilterByRating,
} from './Filters';

export interface ProductFiltersProps {}

export default function ProductFilters(props: ProductFiltersProps) {
  return (
    <div className="bg-white py-2">
      {/* <FilterByBrand /> */}
      <FilterByCategories />
      <FilterByPrice />
      {/* <FilterByColors /> */}
      <FilterByRating />
    </div>
  );
}
