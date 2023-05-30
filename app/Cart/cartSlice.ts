import { createSlice } from '@reduxjs/toolkit';
import { CartModel } from 'models';

interface CartProps {
  showMiniCart: boolean;
  cartItems: CartModel[];
}

const initialState: CartProps = {
  showMiniCart: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleMiniCart: (state) => {
      state.showMiniCart = !state.showMiniCart;
    },

    addToCart: (state, action) => {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((product) => product.id === newItem.id);

      if (index >= 0) {
        state.cartItems[index].quantity = state.cartItems[index].quantity + newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const idxProduct = state.cartItems.findIndex((product) => product.id === id);

      if (idxProduct >= 0) {
        state.cartItems[idxProduct].quantity = quantity;
      }
    },

    removeFromCart: (state, action) => {
      const isNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== isNeedToRemove);
    },
  },
});

const { actions, reducer } = cartSlice;
// Action creators are generated for each case reducer function
export const { toggleMiniCart, addToCart, updateQuantity, removeFromCart } = actions;

export default reducer;
