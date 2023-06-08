import { createSlice } from "@reduxjs/toolkit";

const initialState: { orders: { [key: string]: any }[] } = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    placeorders: (state, action) => {
      const order = {
        orderId: Math.floor(Math.random() * 1000),
        items: action.payload.onCartProducts,
        totalAmmount: action.payload.totalAmmount,
        orderDate: new Date().toLocaleString(),
      };
      return {
        ...state,
        orders: state.orders.concat(order),
      };
    },
  },
});

export default ordersSlice.reducer;
export const { placeorders } = ordersSlice.actions;
