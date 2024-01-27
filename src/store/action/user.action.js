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

export const getUserByTokenAction = createAsyncThunk(
  "getUser/user",
  async (token) => {
    try {
      const response = await axios.get("http://localhost:8080/user/profile/", {
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
      const response = await axios.patch(
        `http://localhost:8080/user/${id}`,
        formData,
        {
          headers: {
            access_token: token,
            "Content-Type": "multipart/form-data",
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
