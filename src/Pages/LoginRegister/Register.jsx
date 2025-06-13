import React, { useContext } from "react";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";
import { GrGoogle } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, setUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          setUser({
            ...user,
            displayName: name,
            photoURL: photoURL,
          });
        });

        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch((error) => {
        console.error("Registration error:", error.message);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  const handleGoogleSignup = () => {
    googleLogin()
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Google Sign-up Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Google Sign-up error:", error.message);
        Swal.fire({
          icon: "error",
          title: "Google Sign-up Failed",
          text: error.message,
        });
      });
  };

  return (
    <>
      <Navber />
      <div className="lg:min-h-screen flex flex-col items-center justify-center p-6 dark:bg-gray-900 transition duration-300">
        <div className="grid lg:grid-cols-2 items-center gap-10 max-w-6xl max-lg:max-w-lg w-full">
          {/* Left Side */}
          <div>
            <h1 className="lg:text-5xl text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Create an Account and Join Us!
            </h1>
            <p className="text-[15px] mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">
              Register now to get access to our amazing platform.
            </p>
            <p className="text-[15px] mt-6 lg:mt-12 text-slate-600 dark:text-slate-300">
              Already have an account?
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:underline ml-1"
              >
                Login here
              </Link>
            </p>
          </div>

          {/* Register Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-md lg:ml-auto w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h2 className="text-slate-900 dark:text-white text-3xl font-semibold mb-8">
              Register
            </h2>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-2 block">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-2 block">
                  Photo URL
                </label>
                <input
                  name="photoURL"
                  type="text"
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter photo URL"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-2 block">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter email"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-2 block">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter password"
                />
              </div>

              {/* Already Have Account */}
              <Link to={"/login"}>
                <div className="flex gap-2 pb-2 text-sm text-gray-600 dark:text-gray-300">
                  Do you already have an account?
                  <p className="text-blue-400 underline">Login here</p>
                </div>
              </Link>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-teal-700 text-white font-semibold rounded-md hover:bg-teal-900 transition"
              >
                Register
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="lg:col-span-2 flex items-center w-full gap-4 mt-6">
            <hr className="flex-grow border-t border-gray-300 dark:border-gray-700" />
            <span className="text-sm text-gray-500 dark:text-gray-400">OR</span>
            <hr className="flex-grow border-t border-gray-300 dark:border-gray-700" />
          </div>

          {/* Google Button */}
          <div className="lg:col-span-2 w-full flex justify-center mt-4">
            <button
              type="button"
              onClick={handleGoogleSignup}
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

export default Register;
