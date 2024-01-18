import {createSlice} from "@reduxjs/toolkit";
import {getUserAction} from "../action/user.action";

const userSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getUserAction.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getUserAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
