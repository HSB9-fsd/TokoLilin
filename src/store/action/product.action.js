import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProductAction = createAsyncThunk(
  "getProduct/products",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      const data = response.data;
      return data;
    } catch (error) {
      new Error(error);
    }
  }
);
