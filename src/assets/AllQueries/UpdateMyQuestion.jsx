import React, { useContext } from "react";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";
import Lottie from "lottie-react";
import AddLotti from "/public/addLotti.json";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateMyQuestion = () => {
  const { user } = useContext(AuthContext);
  const question = useLoaderData();
  const navigate = useNavigate();

  
  const id = question._id; 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedData = {
      productName: form.productName.value,
      brand: form.brand.value,
      imageUrl: form.imageUrl.value,
      title: form.title.value,
      reason: form.reason.value,
    };

    try {
      const response = await fetch(`http://localhost:3000/allQuestion/id/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Your query has been updated successfully.",
          confirmButtonColor: "#14b8a6",
        });
        navigate("/myQueries");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to update the query.",
          confirmButtonColor: "#ef4444",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Something went wrong: " + error.message,
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
              Update Your Product Query
            </h1>
            <p className="text-[15px] mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">
              Make necessary changes to your previously submitted query.
            </p>
            <div className="mt-6 flex justify-center items-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-xl shadow-lg bg-white dark:bg-gray-800 p-4">
                <Lottie animationData={AddLotti} loop={true} />
              </div>
            </div>
          </div>

          {/* Update Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-md lg:ml-auto w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h2 className="text-slate-900 dark:text-white text-3xl font-semibold mb-8">
              Edit Query
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
                  defaultValue={question.productName}
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                  defaultValue={question.brand}
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                  defaultValue={question.imageUrl}
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                  defaultValue={question.title}
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Reason */}
              <div>
                <label className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-2 block">
                  Boycotting Reason (Details)
                </label>
                <textarea
                  name="reason"
                  rows={4}
                  defaultValue={question.reason}
                  required
                  className="bg-slate-100 dark:bg-gray-700 dark:text-white w-full text-sm px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-teal-700 text-white font-semibold rounded-md hover:bg-teal-900 transition"
              >
                Update Query
              </button>
            </div>
          </form>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default UpdateMyQuestion;
