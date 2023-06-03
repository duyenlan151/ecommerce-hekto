import { Currency } from './currency';
import { ProductModel } from './products';

export interface ShippingAddressModel {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface CartModel {
  id: string | number;
  product: ProductModel;
  size: string;
  currency?: Currency;
  color: string;
  quantity: number;
  [key: string]: any;
}

export type paymentMethod = 'cash' | 'stripe' | 'paypal';
export interface CartsModel {
  showMiniCart: boolean;
  formValid: boolean;
  paymentMethod: paymentMethod;
  cartItems: CartModel[];
  shippingAddress: Partial<ShippingAddressModel>;
}
