import { paymentMethod, ShippingAddressModel } from './cart';
import { DataResCommonModel } from './common';
import { ProductModel } from './products';

export interface OrderModel {
  _id: string;
  user: string;
  orderItems: ProductModel[];

  shippingAddress: ShippingAddressModel;
  paymentMethod: paymentMethod;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;

  isPaid: boolean;
  isDelivered: boolean;
  isCancelled: boolean;

  createdAt: string;
  updatedAt: string;
}

export type ActionOrder = 'getOrderById' | 'getHistory' | 'getAllOrders';

export interface DataOrdersModel extends DataResCommonModel {
  data: OrderModel[];
}
