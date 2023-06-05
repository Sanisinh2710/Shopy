import cartSlice from "./slices/cartslice";
import productsSlice from "./slices/products";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cartItems: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
