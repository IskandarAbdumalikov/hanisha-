import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../context/productsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoriesApi } from "../context/categorySlice";
import { userApi } from "./userSlice";
import cartsSlice from "./cartSlice/index";
import wishlistSlice from "./wishlistSlice/wishlistSlice";
import { api } from "./api";
import authSlice from "./authSlice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cartData: cartsSlice,
    [api.reducerPath]: api.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    wishlist: wishlistSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(userApi.middleware)
      .concat(productsApi.middleware)
      .concat(api.middleware),
});

setupListeners(store.dispatch);
