import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    placeorders: (state, action) => {
      const order: any = {
        orderId: new Date().toString(),
        items: action.payload.onCartProducts,
        totalAmmount: action.payload.totalAmmount,
        orderDate: new Date().toDateString(),
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
