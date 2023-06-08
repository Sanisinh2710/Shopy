import { createSlice } from "@reduxjs/toolkit";
import dummy from "../../constants/dummy_data";

const initialState = {
  availableProducts: dummy,
  userProducts: dummy.filter((dummy) => dummy.ownerId === "u1"),
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    viewproducts: (state, action) => {
      return state;
    },
  },
});

export default productsSlice.reducer;
export const { viewproducts } = productsSlice.actions;
