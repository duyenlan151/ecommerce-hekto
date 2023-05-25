import { Currency } from './currency';
import { ProductItem } from './products';

export interface CartModel {
  id: string | number;
  product: ProductItem;
  size: string;
  currency?: Currency;
  color: string;
  quantity: number;
  [key: string]: any;
}
