import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../../types/types';

const initialState = JSON.parse(localStorage.getItem('cart') || '[]');

const cartSlice = createSlice({
  name: 'cart',
  initialState, // Provide a type annotation for the initialState
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item: CartItem) => item.id !== action.payload);
    },
    updateQuantity(state: CartItem[], action: { payload: { id: string, quantity: number } }) {
      const item: CartItem | undefined = state?.find((i: CartItem) => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;