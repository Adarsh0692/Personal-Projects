import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk('pizzaData', async () => {
  const response = await fetch('https://mocki.io/v1/b8625a46-e7d9-43ac-bcd3-571bd43b5252')
  const result = response.json()
  return result;
})

const dataSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    data: [],
    loading: false,
    error: null,
  },

  extraReducers:{
    [getAllData.pending]: (state) =>{
      state.loading = true
    },

    [getAllData.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload
    },

    [getAllData.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
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

