import {createSlice} from "@reduxjs/toolkit";
import {getAddressByUserIdAction} from "../action/address.action";

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
      .addCase(getAddressByUserIdAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAddressByUserIdAction.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getAddressByUserIdAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default addressSlice.reducer;
