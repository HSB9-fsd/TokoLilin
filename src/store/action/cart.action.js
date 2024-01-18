import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getCartAction = createAsyncThunk("getCart/cart", async () => {
  try {
    const response = await axios.get("http://localhost:3000/basket");

    const data = response.data;

    return data;
  } catch (error) {
    new Error(error.message);
  }
});

export const postCartAction = createAsyncThunk(
  "postCart/cart",
  async (id, {dispatch}) => {
    try {
      const response = await axios.post("http://localhost:3000/basket", {
        productId: id,
        quantity: 1,
      });

      const data = response.data;

      alert("oke");

      dispatch(getCartAction());
      return data;
    } catch (error) {
      new Error(error.message);
    }
  }
);
export const deleteCartAction = createAsyncThunk(
  "deleteCart/cart",
  async (id, {dispatch}) => {
    try {
      const response = await axios.delete(`http://localhost:3000/basket/${id}`);

      const data = response.data;

      alert("oke");

      dispatch(getCartAction());
      return data;
    } catch (error) {
      new Error(error.message);
    }
  }
);
