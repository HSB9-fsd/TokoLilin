import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getShippingAction = createAsyncThunk(
  "postUser/user",
  async ({id, token}) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/shipping/byUserId/${id}`,
        {
          headers: {
            access_token: token,
          },
        }
      );

      if (!token) {
        console.log("gagal");
        return;
      }

      const data = response.data;

      return data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);

export const postShippingAction = createAsyncThunk(
  "postUser/user",
  async ({formData, token}) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/shipping`,
        formData,
        {
          headers: {
            access_token: token,
          },
        }
      );

      if (!token) {
        console.log("gagal");
        return;
      }

      const data = response.data;

      window.snap.pay(data.tokens);

      return data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);
