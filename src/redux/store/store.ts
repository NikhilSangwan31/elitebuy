import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/CartSlice';
import productReducer from '../slices/ProductSlice';
import orderReducer from '../slices/orderSlice';
import authReducer from '../slices/AuthSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productReducer,
    order: orderReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
