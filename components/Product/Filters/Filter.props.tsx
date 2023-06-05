import { getSymbolCurrency } from '@utils/common';
import { AiFillStar } from 'react-icons/ai';

export const filterRating = [
  { id: 1, label: 'from 3 star', value: 1 },
  { id: 2, label: 'from 4 star', value: 2 },
  { id: 3, label: 'from 5 star', value: 3 },
  { id: 4, label: 'from 5 star', value: 4 },
  { id: 5, label: 'from 5 star', value: 5 },
];

export const filterPrice = [
  { id: 1, label: 'Under €25', value: '0-25' },
  { id: 2, label: '$25 to $50', value: '25-50' },
  { id: 3, label: '$50 to $100', value: '50-100' },
  { id: 4, label: '$100 to $200', value: '100-200' },
  { id: 5, label: ' $200 & Above', value: '200-1000' },
];

export const filterColors = [
  { id: 1, label: 'Color 1', value: 'price-1' },
  { id: 2, label: 'Color 2', value: 'price-2' },
  { id: 3, label: 'Color 3', value: 'price-3' },
  { id: 4, label: 'Color 4', value: 'price-4' },
];

export const filterCategories = [
  { id: 1, label: 'Categories 1', value: 'categories-1' },
  { id: 2, label: 'Categories 2', value: 'categories-2' },
  { id: 3, label: 'Categories 3', value: 'categories-3' },
  { id: 4, label: 'Categories 4', value: 'categories-4' },
];

export const filterBrand = [
  { id: 1, label: 'Brand 1', value: 'brand-1' },
  { id: 2, label: 'Brand 2', value: 'brand-2' },
  { id: 3, label: 'Brand 3', value: 'brand-3' },
  { id: 4, label: 'Brand 4', value: 'brand-4' },
];

export const FILTER_LIST = [
  {
    id: 2,
    getLabel: (filters) =>
      filters.price &&
      `${getSymbolCurrency(Number(filters.price.split('-')[0]))} - ${getSymbolCurrency(
        Number(filters.price.split('-')[1])
      )}`,
    isShow: (filters) => filters.price,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.price;

      return newFilters;
    },
  },
  {
    id: 3,
    getLabel: (filters) => (
      <div className="flex items-center">
        <span className="mr-1">
          <AiFillStar size={20} color={'#FDDA43'} />
        </span>
        {filters.rating}
      </div>
    ),
    isShow: (filters) => filters.rating,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.rating;

      return newFilters;
    },
  },
  {
    id: 4,
    getLabel: (filters) => (
      <div className="flex items-center capitalize">Price - {filters.sort}</div>
    ),
    isShow: (filters) => filters.sort,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.sort;

      return newFilters;
    },
  },
];
