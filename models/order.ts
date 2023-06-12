import { paymentMethod, ShippingAddressModel } from './cart';
import { DataResCommonModel } from './common';
import { ProductModel } from './products';
import { UserModel } from './users';

export interface OrderModel {
  _id: string;
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

  user: UserModel[];
}

export type ActionOrder = 'getOrderById' | 'getHistory' | 'getAllOrders';

export interface DataOrdersModel extends DataResCommonModel<OrderModel> {
  data: OrderModel[];
}
