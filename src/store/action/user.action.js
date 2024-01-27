import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";

export const getUserAction = createAsyncThunk("getUser/user", async (token) => {
  try {
    const response = await axios.get("http://localhost:9000/user/", {
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

export const registerAction = createAsyncThunk(
  "registerAction/register",
  async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/user/register/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      notification.success({
        message: "Berhasil Register",
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        // throw new Error(error.message);
        notification.error({
          message: error.response.data.message,
        });
      }
    }
  }
);

export const loginAction = createAsyncThunk(
  "loginAction/login",
  async ({formData, navigate}) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        formData,
        {
          withCredentials: true,
        }
      );

      const data = response.data;

      localStorage.setItem("token", data.access_token);

      navigate("/");
      return data;
    } catch (error) {
      if (error.response) {
        notification.error({
          message: error.response.data.message,
        });
      }
    }
  }
);

export const logoutAction = createAsyncThunk(
  "logoutAction/logout",
  async ({access_token, navigate}) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/user/login",
        null,
        {
          headers: access_token,
        }
      );

      const data = response.data;

      localStorage.removeItem("token", data.access_token);

      navigate("/login");
      return data;
    } catch (error) {
      if (error.response) {
        notification.error({
          message: error.response.data.message,
        });
      }
    }
  }
);
