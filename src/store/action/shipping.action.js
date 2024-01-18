import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";

export const postShippingAction = createAsyncThunk(
  "postUser/user",
  async ({formData, token}) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/shipping`,
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

      notification.success({
        message: "Success",
        description: "Shipping data has been successfully added.",
      });

      return data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);
