import { createSelector } from '@reduxjs/toolkit';
import { CartModel } from 'models';

const cartItemsSelector = (state) => state.cart.cartItems as CartModel[];

const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((count, item) => (count += 1), 0)
);

const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + Number(item.product.price) * item.quantity, 0)
);

export { cartItemsSelector, cartItemsCountSelector, cartTotalSelector };
