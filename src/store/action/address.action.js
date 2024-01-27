import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";

export const getAddressByUserIdAction = createAsyncThunk(
  "getAddress/address",
  async ({token, userId}) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/address/${userId}`,
        {
          headers: {
            access_token: token,
          },
        }
      );

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
            access_token: token,
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
  async ({formData, token, id}) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/address/update/${id}`,
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
      notification.success({
        message: "Sukses update data",
      });
      return data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);
