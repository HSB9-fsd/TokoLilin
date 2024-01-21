import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getUserAction = createAsyncThunk("getUser/user", async (token) => {
  try {
    const response = await axios.get("http://localhost:8080/user/", {
      headers: {
        access_token: token,
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
});

export const getUserByIdAction = createAsyncThunk(
  "getUser/user",
  async ({userId, token}) => {
    try {
      const response = await axios.get(`http://localhost:8080/user/${userId}`, {
        headers: {
          access_token: token,
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

export const updateUserAction = createAsyncThunk(
  "updateUser/user",
  async ({id, formData, token}) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/user/${id}`,
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
