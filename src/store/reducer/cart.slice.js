import {createSlice} from "@reduxjs/toolkit";
import {getCartByUserIdAction} from "../action/cart.action";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addCart: (state, action) => {
      state.data.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      const {id} = action.payload;
      const selectedItem = state.data.find((item) => item.id === id);
      if (selectedItem) selectedItem.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const {id} = action.payload;
      const selectedItem = state.data.find((item) => item.id === id);
      if (selectedItem && selectedItem.quantity > 1) selectedItem.quantity--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartByUserIdAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCartByUserIdAction.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getCartByUserIdAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const {addCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
