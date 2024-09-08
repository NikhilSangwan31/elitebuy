// src/slices/orderSlice.ts
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItem, OrderState} from "../../types/types";

const initialState: OrderState = {
  orders: []
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (
      state,
      action: PayloadAction<{
        id: string;
        items: CartItem[];
        subtotal: number;
        taxes: number;
        shipping: number;
        total: number;
        billingInfo: {[key: string]: string};
        paymentInfo: {[key: string]: string};
      }>
    ) => {
      state.orders.push(action.payload);
    }
  }
});

export const {addOrder} = orderSlice.actions;

export default orderSlice.reducer;
