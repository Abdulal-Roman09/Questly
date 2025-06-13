import React, { useContext, useState } from "react";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";
import { useNavigate, Link } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <>
      <Navber />
      <div className="lg:min-h-screen flex flex-col items-center justify-center p-6 dark:bg-gray-900 transition duration-300">
        <div className="grid lg:grid-cols-2 items-center gap-10 max-w-6xl max-lg:max-w-lg w-full">
          {/* Left side */}
          <div>
            <h1 className="lg:text-5xl text-4xl font-bold text-slate-900 dark:text-white !leading-tight">
              Seamless Login for Exclusive Access
            </h1>
            <p className="text-[15px] mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">
              Immerse yourself in a hassle-free login journey with our
              intuitively designed login form. Effortlessly access your account.
            </p>
            <p className="text-[15px] mt-6 lg:mt-12 text-slate-600 dark:text-slate-300">
              Don't have an account?
              <Link to="/register" className="text-blue-600 font-medium hover:underline ml-1">
                Register here
              </Link>
            </p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleLogin}
            className="max-w-md lg:ml-auto w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h2 className="text-slate-900 dark:text-white text-3xl font-semibold mb-8">
              Sign in
            </h2>

            <div className="space-y-6">
              <div>
                <label className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-2 block">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-2 block">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-slate-700 dark:text-slate-300"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
                
              </div>
              <p className="text-[15px] mt-6 lg:mt-12 text-slate-600 dark:text-slate-300">
              Don't have an account?
              <Link to="/register" className="text-blue-600 font-medium hover:underline ml-1">
                Register here
              </Link>
            </p>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-teal-700 text-white font-semibold rounded-md hover:bg-teal-900 transition"
              >
                Login
              </button>
            </div>
          </form>

          {/* OR Divider */}
          <div className="lg:col-span-2 flex items-center w-full gap-4 mt-6">
            <hr className="flex-grow border-t border-gray-300 dark:border-gray-700" />
            <span className="text-sm text-gray-500 dark:text-gray-400">OR</span>
            <hr className="flex-grow border-t border-gray-300 dark:border-gray-700" />
          </div>

          {/* Google Button */}
          <div className="lg:col-span-2 w-full flex justify-center mt-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm px-6 py-3 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
            >
              <GrGoogle className="text-xl" />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
};

export default Login;
