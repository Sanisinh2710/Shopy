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

const cartReducer = persistReducer(cartConfig, cartSlice);
const orderReducer = persistReducer(ordersConfig, ordersSlice);

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cartItems: cartReducer,
    orderItems: orderReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
