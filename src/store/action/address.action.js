import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAddressAction = createAsyncThunk(
  "getAddress/address",
  async (token) => {
    try {
      const response = await axios.get("http://localhost:3000/address", {
        headers: {
          Authorization: token,
        },
      });

      if (!token) {
        return console.log("gagal");
      }

      const data = response.data;

      return data;
    } catch (error) {
      new Error(error.message);
    }
  }
);

export const postAddressAction = createAsyncThunk(
  "postUser/user",
  async ({formData, token}) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/address`,
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (!token) {
        console.log("gagal");
        return;
      }

      const data = response.data;
      alert("oke");
      return data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);

export const updateAddressAction = createAsyncThunk(
  "updateUser/user",
  async ({formData, token}) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/address`,
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (!token) {
        console.log("gagal");
        return;
      }

      const data = response.data;
      alert("oke");
      return data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);
