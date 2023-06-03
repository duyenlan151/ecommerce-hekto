import { paymentMethod, ShippingAddressModel } from './cart';
import { ProductModel } from './products';

export interface OrderModel {
  _id: string;
  user: string;
  orderItems: ProductModel;

  shippingAddress: ShippingAddressModel;
  paymentMethod: paymentMethod;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;

  isPaid: boolean;
  isDelivered: boolean;

  createdAt: string;
  updatedAt: string;
}
