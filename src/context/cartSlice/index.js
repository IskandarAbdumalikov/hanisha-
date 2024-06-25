import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("cart-shop")) || [],
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const index = state.value.findIndex((el) => el.id === payload.id);
      if (index === -1) {
        state.value = [...state.value, { ...payload, shopCount: 1 }];
      } else {
        state.value = state.value.map((item) =>
          item.id === payload.id
            ? { ...item, shopCount: item.shopCount + 1 }
            : item
        );
      }
      localStorage.setItem("cart-shop", JSON.stringify(state.value));
      return state;
    },
    addToShopCount: (state, { payload }) => {
      const index = state.value.findIndex((el) => el.id === payload);
      if (index !== -1) {
        state.value = state.value.map((item) =>
          item.id === payload
            ? { ...item, shopCount: item.shopCount + 1 }
            : item
        );
        localStorage.setItem("cart-shop", JSON.stringify(state.value));
      }
    },
    removeToShopCount: (state, { payload }) => {
      const index = state.value.findIndex((el) => el.id === payload);
      if (index !== -1) {
        const updatedCart = state.value.map((item, idx) =>
          idx === index ? { ...item, shopCount: item.shopCount - 1 } : item
        );
        state.value = updatedCart.filter((item) => item.shopCount > 0); // Remove items with shopCount <= 0
        localStorage.setItem("cart-shop", JSON.stringify(state.value));
      }
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, addToShopCount, removeToShopCount } =
  cartsSlice.actions;

export default cartsSlice.reducer;
