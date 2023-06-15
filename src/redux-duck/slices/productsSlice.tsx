import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
    createProduct: (state, action) => {
      console.log(action.payload);

      const createProduct = {
        id: "p" + (state.availableProducts.length + 1),
        ownerId: "u1",
        imageUrl: action.payload.imageUrl,
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
      };
      return {
        ...state,
        availableProducts: state.availableProducts.concat(createProduct),
        userProducts: state.userProducts.concat(createProduct),
      };
    },
    editProduct: (state, action) => {
      const productIndex = state.userProducts.findIndex(
        (prod) => prod.id === action.payload.id
      );
      const updatedProduct = {
        id: action.payload.id,
        ownerId: state.userProducts[productIndex].ownerId,
        title: action.payload.title,
        imageUrl: action.payload.imageUrl,
        description: action.payload.description,
        price: action.payload.price,
      };

      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const availableProductIndex = state.availableProducts.findIndex(
        (prod) => prod.id === action.payload.id
      );

      const updatedAvailableProducts = [...state.availableProducts];

      updatedAvailableProducts[availableProductIndex] = updatedProduct;

      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts,
      };
    },
    deleteProduct: (state, action) => {
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
export const { viewproducts, createProduct, editProduct, deleteProduct } =
  productsSlice.actions;
