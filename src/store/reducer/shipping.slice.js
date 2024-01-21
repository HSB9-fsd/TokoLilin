import {createSlice} from "@reduxjs/toolkit";
import {getShippingAction} from "../action/shipping.action";

const shippingSlice = createSlice({
  name: "shippings",
  initialState: {
    checkout: [],
    shipping: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getShippingAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getShippingAction.fulfilled, (state, action) => {
        state.status = "success";
        state.checkout = action.payload.checkout;
        state.shipping = action.payload.shipping;
      })
      .addCase(getShippingAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default shippingSlice.reducer;
