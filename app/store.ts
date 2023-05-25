import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cart/cartSlice';

const rootReducer = {
  cart: cartReducer,
  // user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
