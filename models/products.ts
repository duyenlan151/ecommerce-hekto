import { Currency } from './currency';

export interface ProductItem {
  id: string | number;
  name: string;
  price: number | string;
  currency: Currency;
  thumbnail: string | string[];
  colors: Array<string>;
  code: string | number;
  isSale?: boolean;
  desc?: string;
  [key: string]: any;
}
