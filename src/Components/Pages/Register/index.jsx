import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-[url('../public/img/bg-image.png')] bg-no-repeat bg-cover">
        <div className="w-full p-6 m-auto bg-gray-50 rounded-md shadow-md lg:max-w-xl max-lg:max-w-sm max-sm:max-w-xs">
          <h1 className="text-3xl font-semibold text-center text-primary underline">
            Create Account
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
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
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter your password"
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
