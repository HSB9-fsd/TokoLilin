/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerAction } from "../../../store/action/user.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    avatar: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction(formData));
    setFormData({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phone: "",
      avatar: "",
    });
  };
  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-[url('../public/img/bg-image.png')] bg-no-repeat bg-cover">
        <div className="w-full p-6 m-auto bg-gray-50 rounded-md shadow-md lg:max-w-xl max-lg:max-w-sm max-sm:max-w-xs">
          <h1 className="text-3xl font-semibold text-center text-primary underline">
            Create Account
          </h1>
          <form
            className="mt-6"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <p className="text-center">{setFormData.message}</p>
            <div className="mb-2">
              <label
                htmlFor="first_name"
                className="block text-sm font-semibold text-gray-800"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Your First Name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="last_name"
                className="block text-sm font-semibold text-gray-800"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Your Last Name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-800"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter your password"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="avatar"
                className="block text-sm font-semibold text-gray-800"
              >
                Profile Picture
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter your password"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <input className="mt-3" type="checkbox" />
            <span className="ml-2 text-sm">
              I Agree all Statment in{" "}
              <Link to="#" className="text-primary hover:underline font-bold">
                Term of Services
              </Link>
            </span>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primaryDark focus:outline-none focus:bg-primary">
                SIGN UP
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Have already an account ?{" "}
            <Link
              to="/login"
              className="font-bold text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
