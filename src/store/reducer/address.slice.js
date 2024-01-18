import {createSlice} from "@reduxjs/toolkit";
import {getAddressAction} from "../action/address.action";

const addressSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAddressAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAddressAction.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getAddressAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default addressSlice.reducer;
