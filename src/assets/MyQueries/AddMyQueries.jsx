import React, { useContext } from "react";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";
import Lottie from "lottie-react";
import AddLotti from "../../../public/addLotti.json";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";

const AddMyQueries = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value;
    const brand = form.brand.value;
    const imageUrl = form.imageUrl.value;
    const title = form.title.value;
    const reason = form.reason.value;

    const formData = {
      productName,
      brand,
      imageUrl,
      title,
      reason,
      username: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
      createdAt: new Date().toISOString(),
      comments: [],
    };

    const response = await fetch("http://localhost:3000/allQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your query has been submitted.",
        confirmButtonColor: "#14b8a6",
      });
      form.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div>
      <Navber />
      <div className="flex justify-center bg-gray-900 min-h-screen py-10">
        <div className="grid lg:grid-cols-2 items-center gap-10 max-w-6xl max-lg:max-w-lg w-full p-6">
          {/* Left Side Info */}
          <div>
            <h1 className="lg:text-5xl text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Add a Product Query Privately
            </h1>
            <p className="text-[15px] mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">
              Fill out the form to submit a query about a product you're
              boycotting. This will be saved privately and accessible from{" "}
              <strong>My Queries</strong> page.
            </p>

            {/* Lottie Animation */}
            <div className="mt-6 flex justify-center items-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-xl shadow-lg bg-white dark:bg-gray-800 p-4">
                <Lottie animationData={AddLotti} loop={true} />
              </div>
            </div>
          </div>

          {/* Add Query Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-md lg:ml-auto w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h2 className="text-slate-900 dark:text-white text-3xl font-semibold mb-8">
              Add Query
            </h2>

            <div className="space-y-6">
              {/* Product Name */}
              <div>
                <label className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-2 block">
                  Product Name
                </label>
                <input
                  name="productName"
                  type="text"
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="e.g., ABC Lotion"
                />
              </div>

              {/* Product Brand */}
              <div>
                <label className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-2 block">
                  Product Brand
                </label>
                <input
                  name="brand"
                  type="text"
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="e.g., XYZ Corp"
                />
              </div>

              {/* Product Image URL */}
              <div>
                <label className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-2 block">
                  Product Image URL
                </label>
                <input
                  name="imageUrl"
                  type="text"
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Paste image URL"
                />
              </div>

              {/* Query Title */}
              <div>
                <label className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-2 block">
                  Query Title
                </label>
                <input
                  name="title"
                  type="text"
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="e.g., Is there any better product with the same quality?"
                />
              </div>

              {/* Boycotting Reason */}
              <div>
                <label className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-2 block">
                  Boycotting Reason (Details)
                </label>
                <textarea
                  name="reason"
                  required
                  rows={4}
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Why are you boycotting this product?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-teal-700 text-white font-semibold rounded-md hover:bg-teal-900 transition"
              >
                Add Query
              </button>
            </div>
          </form>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default AddMyQueries;
