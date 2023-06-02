import { createSlice } from '@reduxjs/toolkit';
import { KEY_CART } from 'constants/index';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { CartsModel } from 'models';

const defaultCart: CartsModel = {
  showMiniCart: false,
  formValid: false,
  paymentMethod: 'cash',
  shippingAddress: {},
  cartItems: [],
};

const initialState: CartsModel = getCookie(KEY_CART)
  ? //@ts-ignore
    JSON.parse(getCookie(KEY_CART))
  : defaultCart;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleMiniCart: (state) => {
      state.showMiniCart = !state.showMiniCart;
    },

    addToCart: (state, action) => {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((product) => product._id === newItem._id);

      if (index >= 0) {
        state.cartItems[index].quantity = state.cartItems[index].quantity + newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }

      setCookie(KEY_CART, JSON.stringify({ ...state, ...state.cartItems }));
    },

    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const idxProduct = state.cartItems.findIndex((product) => product._id === _id);

      if (idxProduct >= 0) {
        state.cartItems[idxProduct].quantity = quantity;
      }
      setCookie(KEY_CART, JSON.stringify({ ...state, ...state.cartItems }));
    },

    removeFromCart: (state, action) => {
      const isNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== isNeedToRemove);
      setCookie(KEY_CART, JSON.stringify({ ...state, ...state.cartItems }));
    },

    updateFormValid: (state, action) => {
      state.formValid = action.payload;
      setCookie(KEY_CART, JSON.stringify({ ...state }));
    },

    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      setCookie(KEY_CART, JSON.stringify({ ...state }));
    },

    updatePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      setCookie(KEY_CART, JSON.stringify({ ...state }));
    },

    cleanAllCart: (state) => {
      state = { ...defaultCart };
      deleteCookie(KEY_CART);
    },
  },
});

const { actions, reducer } = cartSlice;
// Action creators are generated for each case reducer function
export const {
  cleanAllCart,
  toggleMiniCart,
  addToCart,
  updateQuantity,
  removeFromCart,
  updateFormValid,
  updatePaymentMethod,
  updateShippingAddress,
} = actions;

export default reducer;
