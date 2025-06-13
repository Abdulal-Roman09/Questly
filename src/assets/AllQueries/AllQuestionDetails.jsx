import React, { useContext, useState } from "react";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";

const AllQuestionDetails = () => {
   
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
   const [commentText,setCommentText]=useState("");
    const [comments,setComments]=useState(data?.comments || [] )

  const handleSend = async (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;

    const formData = {
      comment,
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
      time: new Date().toISOString(),
    };

    try {
      const response = await fetch(
        `http://localhost:3000/allQuestion/addComment/${data._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setComments((prev)=>[...prev,formData]);
        setCommentText("")
        Swal.fire({
          icon: "success",
          title: "Comment Added",
          text: "Your comment has been successfully posted.",
          timer: 1500,
          showConfirmButton: false,
        });
        form.reset();
      } else {
        throw new Error("Failed to add comment");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong.",
      });
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white transition duration-300">
      <Navber />

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* Product Info Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <img
              src={data?.imageUrl || "https://via.placeholder.com/300"}
              alt={data?.title}
              className="w-full sm:w-48 h-48 object-cover rounded-md border dark:border-gray-700"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {data?.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {data?.brand}
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {data?.reason}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t dark:border-gray-700">
            <img
              src={data?.photoURL}
              alt={data?.username}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-600"
            />
            <div>
              <p className="font-medium text-gray-800 dark:text-white">
                {data?.username}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(data?.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
  <h3 className="text-lg font-semibold mb-4">Comments</h3>

  {comments.length > 0 ? (
    <div className="space-y-4">
      {comments.map((cmt, i) => (
        <div
          key={i}
          className="flex items-start gap-4 border-b pb-4 last:border-b-0 dark:border-gray-700"
        >
          <img
            src={cmt.photoURL}
            alt={cmt.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{cmt.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {cmt.comment}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {new Date(cmt.time).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-sm text-gray-500">No comments yet.</p>
  )}
</div>


        {/* Comment Box Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-md mx-auto mt-10">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Leave a Comment
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Share your thoughts with us.
          </p>

          {/* Input & Button inside Form */}
          <form
            onSubmit={handleSend}
            className="mt-4 flex border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg focus-within:ring-2 focus-within:ring-teal-500 overflow-hidden"
          >
            <input
              type="text"
              name="comment"
              placeholder="Write your comment here..."
              className="w-full p-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 bg-transparent outline-none"
              required
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 hover:bg-teal-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </main>

      <Fotter />
    </div>
  );
};

export default AllQuestionDetails;
