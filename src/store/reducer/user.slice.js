import {createSlice} from "@reduxjs/toolkit";
import {getUserByIdAction} from "../action/user.action";

const userSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    user: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserByIdAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getUserByIdAction.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.data;
      })
      .addCase(getUserByIdAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
