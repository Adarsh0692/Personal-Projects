import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },

  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = [];
    },
    addToCart(state, action) {
      const find = state.user.active.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (find >= 0) {
        state.user.active.cart[find].quantity += 1;
      } else {
        state.user.active.cart.push(action.payload);
      }
    },
    cartItem(state, action) {
      const { id, pizza, quantity, varient, price } = action.payload;
      const find = state.user.active.cart.findIndex((item) => item.id === id);

      if (find >= 0) {
        state.user.active.cart[find].quantity = quantity;
        state.user.active.cart[find].price = price;
      }
    },
    deleteItem(state, action) {
      state.user.active.cart = state.user.active.cart.filter(
        (item) => item.id !== action.payload.id
      );
    },
    orderedItem(state, action) {
      state.user.active.order.unshift(action.payload);
      state.user.active.cart = [];
    },
  },
});

export const { login, logout, addToCart, cartItem, deleteItem, orderedItem } =
  dataSlice.actions;
export default dataSlice.reducer;
