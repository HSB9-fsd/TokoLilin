import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";

export const getCartAction = createAsyncThunk("getCart/cart", async () => {
  try {
    const response = await axios.get("http://localhost:3000/basket");

    const data = response.data;

    return data;
  } catch (error) {
    new Error(error.message);
  }
});

export const getCartByUserIdAction = createAsyncThunk(
  "getCart/cart",
  async ({id, token}) => {
    try {
      const response = await axios.get(`http://localhost:8080/cart/${id}`, {
        headers: {
          access_token: token,
        },
      });

      const data = response.data;

      return data;
    } catch (error) {
      new Error(error.message);
    }
  }
);

export const postCartAction = createAsyncThunk(
  "postCart/cart",
  async ({userId, id, token, quantity}, {dispatch}) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/cart/",
        {
          user_id: userId,
          product_id: id,
          quantity: quantity,
        },
        {
          headers: {
            access_token: token,
          },
        }
      );

      const data = response.data;

      notification.success({
        message: "Sukses menambahkan product ke keranjang",
      });

      dispatch(getCartAction());
      return data;
    } catch (error) {
      new Error(error.message);
    }
  }
);

export const deleteCartAction = createAsyncThunk(
  "deleteCart/cart",
  async ({id, token}, {dispatch}) => {
    try {
      const response = await axios.delete(`http://localhost:8080/cart/${id}`, {
        headers: {
          access_token: token,
        },
      });

      const data = response.data;

      notification.success({
        message: "Sukses menghapus data keranjang",
      });

      dispatch(getCartAction());
      return data;
    } catch (error) {
      new Error(error.message);
    }
  }
);
