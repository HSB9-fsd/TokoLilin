import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Login = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-[url('../public/img/bg-image.png')] bg-no-repeat bg-cover">
      <div className="w-full p-6 m-auto bg-gray-50 rounded-md shadow-md lg:max-w-xl max-lg:max-w-sm max-sm:max-w-xs">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-center text-primary underline">
            Sign in
          </h1>
          <Link to="/" className="text-2xl hover:bg-primary p-2 hover:text-white rounded-xl">
            <FaHome />
          </Link>
        </div>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Your Password"
            />
          </div>
          <a href="#" className="text-xs text-primary hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primaryDark focus:outline-none focus:bg-primary">
              LOGIN
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
