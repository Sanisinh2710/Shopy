import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  totalAmmount: 0,
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addtocart: (state: any, action) => {
      const adedProduct = action.payload;
      const productPrice = adedProduct.price;
      const productTitle = adedProduct.title;
      const image = adedProduct.imageUrl;

      if (state.items[adedProduct.id]) {
        const exixtingitems = {
          quantity: state.items[adedProduct.id].quantity + 1,
          productPrice: productPrice,
          productTitle: productTitle,
          sum: state.items[adedProduct.id].sum + productPrice,
          image: image,
        };
        return {
          ...state,
          items: { ...state.items, [adedProduct.id]: exixtingitems },
          totalAmmount: state.totalAmmount + productPrice,
        };
      } else {
        const newItem = {
          quantity: 1,
          productPrice: productPrice,
          productTitle: productTitle,
          sum: productPrice,
          image: image,
        };
        return {
          ...state,
          items: { ...state.items, [adedProduct.id]: newItem },
          totalAmmount: state.totalAmmount + productPrice,
        };
      }
    },
  },
});

export default cartSlice.reducer;
export const { addtocart } = cartSlice.actions;
