import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { items: { [key: string]: any }; totalAmmount: number } = {
  items: {},
  totalAmmount: 0,
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addtocart: (state, action) => {
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
    deletefromcart: (state, action) => {
      const selectedItem = state.items[action.payload.productID];

      const currentquantity = selectedItem.quantity;
      let updatedItems;

      if (currentquantity > 1) {
        const updatedItem = {
          quantity: selectedItem.quantity - 1,
          productPrice: selectedItem.productPrice,
          productTitle: selectedItem.productTitle,
          sum: selectedItem.sum - selectedItem.productPrice,
          image: selectedItem.image,
        };

        updatedItems = {
          ...state.items,
          [action.payload.productID]: updatedItem,
        };
      } else {
        updatedItems = {
          ...state.items,
        };
        delete updatedItems[action.payload.productID];
      }
      return {
        ...state,
        items: updatedItems,
        totalAmmount: state.totalAmmount - selectedItem.productPrice,
      };
    },
    deleteAll: (state, action) => {
      return initialState;
    },
  },
});

export default cartSlice.reducer;
export const { addtocart, deletefromcart, deleteAll } = cartSlice.actions;
