import { createSelector } from '@reduxjs/toolkit';
import { CartModel, CartsModel, paymentMethod, ShippingAddressModel } from 'models';

const allCartSelector = (state) => state.cart as CartsModel;
const showMiniCartSelector = (state) => state.cart.showMiniCart as boolean;
const cartItemsSelector = (state) => state.cart.cartItems as CartModel[];
const formValidSelector = (state) => state.cart.formValid as boolean;
const shippingAddressSelector = (state) => state.cart.shippingAddress as ShippingAddressModel;
const paymentMethodSelector = (state) => state.cart.paymentMethod as paymentMethod;

const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((count, item) => (count += 1), 0)
);

const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + Number(item.product.price) * item.quantity, 0)
);

// const cartTotalWithTaxSelector = createSelector(cartItemsSelector, (cartItems) =>
//   cartItems.reduce((total, item) => total + Number(item.product.price) * item.quantity, 0)
// );

export {
  showMiniCartSelector,
  allCartSelector,
  paymentMethodSelector,
  shippingAddressSelector,
  formValidSelector,
  cartItemsSelector,
  cartItemsCountSelector,
  cartTotalSelector,
};
