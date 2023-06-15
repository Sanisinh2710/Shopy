import AsyncStorage from "@react-native-async-storage/async-storage";
import cartSlice from "./slices/cartSlice";
import ordersSlice from "./slices/ordersSlice";
import productsSlice from "./slices/productsSlice";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";

const cartConfig = {
  key: "cartItems",
  storage: AsyncStorage,
};

const ordersConfig = {
  key: "orderItems",
  storage: AsyncStorage,
};

const productConfig = {
  key: "productItems",
  storage: AsyncStorage,
};

const cartReducer = persistReducer(cartConfig, cartSlice);
const orderReducer = persistReducer(ordersConfig, ordersSlice);
const productReducer = persistReducer(productConfig, productsSlice);

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    orderItems: orderReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
