import { createSlice } from '@reduxjs/toolkit';
import { CartModel } from 'models';

const dataProduct: CartModel[] = [
  {
    id: 1,
    product: {
      id: 1,
      name: 'Cantilever chair',
      price: '12',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/cart/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    size: 'XL',
    color: 'Green',
    quantity: 1,
  },
  {
    id: 2,
    product: {
      id: 2,
      name: 'Cantilever chair 2',
      price: '26',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/cart/image02.png'],
      colors: ['#05E6B7', '#F701A8', '#FFEAC1'],
    },
    size: 'XL',
    color: 'Green',
    quantity: 1,
  },
  {
    id: 3,
    product: {
      id: 3,
      name: 'Cantilever chair 3',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/cart/image03.png'],
      colors: ['#FFEAC1', '#F701A8', '#00009D'],
    },
    size: 'XXL',
    color: 'Pink',
    quantity: 2,
  },
  {
    id: 4,
    product: {
      id: 3,
      name: 'Cantilever chair 3',
      price: '22',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image03.png'],
      colors: ['#FFEAC1', '#F701A8', '#00009D'],
    },
    size: 'M',
    color: 'Blue',
    quantity: 1,
  },
];

const initialState = {
  showMiniCart: false,
  cartItems: dataProduct,
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
