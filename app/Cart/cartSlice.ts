import { createSlice } from '@reduxjs/toolkit';
import { KEY_CART } from 'constants/index';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { CartsModel, ShippingAddressModel } from 'models/index';

const defaultShippingAddress: ShippingAddressModel = {
  address: '',
  city: '',
  country: '',
  email: '',
  firstName: '',
  lastName: '',
  postalCode: '',
};

const defaultCart: CartsModel = {
  showMiniCart: false,
  formValid: false,
  paymentMethod: 'cash',
  shippingAddress: defaultShippingAddress,
  cartItems: [],
};

const initialState: CartsModel =
  typeof window !== 'undefined' && localStorage.getItem(KEY_CART)
    ? //@ts-ignore
      JSON.parse(localStorage.getItem(KEY_CART))
    : defaultCart;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleMiniCart: (state) => {
      state.showMiniCart = !state.showMiniCart;
      localStorage.setItem(KEY_CART, JSON.stringify({ ...state }));
    },

    addToCart: (state, action) => {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((product) => product._id === newItem._id);

      if (index >= 0) {
        state.cartItems[index].quantity = state.cartItems[index].quantity + newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }

      state.showMiniCart = !state.showMiniCart;
      localStorage.setItem(KEY_CART, JSON.stringify({ ...state, ...state.cartItems }));
    },

    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const idxProduct = state.cartItems.findIndex((product) => product._id === _id);

      if (idxProduct >= 0) {
        state.cartItems[idxProduct].quantity = quantity;
      }
      localStorage.setItem(KEY_CART, JSON.stringify({ ...state, ...state.cartItems }));
    },

    removeFromCart: (state, action) => {
      const isNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== isNeedToRemove);
      localStorage.setItem(KEY_CART, JSON.stringify({ ...state, ...state.cartItems }));
    },

    updateFormValid: (state, action) => {
      state.formValid = action.payload;
      localStorage.setItem(KEY_CART, JSON.stringify({ ...state }));
    },

    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem(KEY_CART, JSON.stringify({ ...state }));
    },

    updatePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem(KEY_CART, JSON.stringify({ ...state }));
    },

    cleanAllCart: (state) => {
      localStorage.removeItem(KEY_CART);
      return { ...defaultCart };
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
