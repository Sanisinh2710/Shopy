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
    deleteProduct: (state, action) => {
      console.log(action.payload.id);
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.payload.id
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    },
  },
});

export default productsSlice.reducer;
export const { viewproducts, deleteProduct } = productsSlice.actions;
