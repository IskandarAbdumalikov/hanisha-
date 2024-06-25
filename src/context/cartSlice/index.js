import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("cart-shop")) || [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const index = state.value.findIndex((el) => el.id === payload.id);
      if (index === -1) {
        state.value = [...state.value, { ...payload, shopCount: 1 }];
        state.totalCount + 1;
      } else {
        state.value = state.value.map((cart) =>
          cart.id === payload.id
            ? ({ ...cart, shopCount: cart.shopCount + 1 }, state.totalCount + 1)
            : cart
        );
      }
      localStorage.setItem("cart-shop", JSON.stringify(state.value));
      return state;
    },
    addToShopCount: (state, { payload }) => {
      const index = state.value.findIndex((el) => el.id === payload);
      if (index !== -1) {
        state.value = state.value.map((cart) =>
          cart.id === payload
            ? { ...cart, shopCount: cart.shopCount + 1 }
            : cart
        );
        localStorage.setItem("cart-shop", JSON.stringify(state.value));
      }
    },
    removeToShopCount: (state, { payload }) => {
      const index = state.value.findIndex((el) => el.id === payload);
      if (index !== -1) {
        const updatedCart = state.value.map((el, idx) =>
          idx === index ? { ...el, shopCount: el.shopCount - 1 } : el
        );
        state.value = updatedCart.filter((cart) => cart.shopCount > 0);
        localStorage.setItem("cart-shop", JSON.stringify(state.value));
      }
      return state;
    },
    deleteToCart: (state, { payload }) => {
      localStorage.setItem(
        "cart-shop",
        JSON.stringify(state?.value?.filter((cart) => cart.id !== payload))
      );
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, addToShopCount, removeToShopCount, deleteToCart } =
  cartsSlice.actions;

export default cartsSlice.reducer;
