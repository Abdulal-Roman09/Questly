import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";
import { BiPencil } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AllQuestionDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const data = useLoaderData();

  // State for comment form
  const [RecommendationName, setRecommendationName] = useState("");
  const [RecommendationTitle, setRecommendationTitle] = useState("");
  const [RecommendationImg, setRecommendationImg] = useState("");
  const [RecommendationReson, setRecommendationReson] = useState("");
  const [comments, setComments] = useState(data?.comments || []);
  const [updateCommentModel, setUpdateCommentModel] = useState(false);
  const [updateComment, setUpdateComment] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const isOwner = user?.email === data?.email;

  // Handle comment submission
  const handleSend = async (e) => {
    e.preventDefault();
    const trimmedReason = RecommendationReson.trim();
    if (
      !trimmedReason ||
      !RecommendationName ||
      !RecommendationTitle ||
      !RecommendationImg
    )
      return;

    const formData = {
      commentId: uuidv4(),
      recommendationTitle: RecommendationTitle,
      recommendedProductName: RecommendationName,
      recommendedProductImage: RecommendationImg,
      recommendationReason: trimmedReason,
      queryId: data._id,
      queryTitle: data.title,
      queryProductName: data.productName,
      queryUserEmail: data.email,
      recommenderImage: user?.photoURL,
      recommenderEmail: user?.email,
      recommenderName: user?.displayName,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(
        `https://b11-a11-server.vercel.app/allQuestion/addComment/${data._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setComments((prevComments) => [...prevComments, formData]);
        setRecommendationReson("");
        setRecommendationTitle("");
        setRecommendationImg("");
        setRecommendationName("");
        Swal.fire({
          icon: "success",
          title: "Comment Added",
          text: "Your recommendation has been successfully posted.",
          timer: 1500,
          showConfirmButton: false,
        });
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

  // Handle edit comment
  const handleUpdateComment = (index) => {
    setUpdateComment(comments[index].recommendationReason);
    setEditIndex(index);
    setUpdateCommentModel(true);
  };

  const handleUpdateComments = async () => {
    if (editIndex === null || !updateComment.trim()) return;

    const oldCommentReason = comments[editIndex].recommendationReason;
    const response = await fetch(
      `https://b11-a11-server.vercel.app/allQuestion/updateComment/${data._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oldCommentReason: oldCommentReason,
          newRecommendationReason: updateComment.trim(),
          recommenderEmail: comments[editIndex].recommenderEmail,
          timestamp: comments[editIndex].timestamp,
        }),
      }
    );

    if (response.ok) {
      const updated = [...comments];
      updated[editIndex].recommendationReason = updateComment.trim();
      setComments(updated);
      setUpdateCommentModel(false);
      setEditIndex(null);
      setUpdateComment("");
      Swal.fire(
        "Updated!",
        "Your recommendation has been updated.",
        "success"
      ).then(() => {
        window.location.reload();
      });
    } else {
      Swal.fire("Error", "Failed to update recommendation.", "error");
    }
  };

  // Handle delete comment
  const handleDeleteComment = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const commentToDelete = comments[index];
        fetch(
          `https://b11-a11-server.vercel.app/allQuestion/deleteComment/${data._id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(commentToDelete),
          }
        )
          .then((res) => res.json())
          .then(() => {
            const updatedComments = [...comments];
            updatedComments.splice(index, 1);
            setComments(updatedComments);
            Swal.fire(
              "Deleted!",
              "Your recommendation has been deleted.",
              "success"
            );
          })
          .catch(() => {
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  // Handle update and delete post
  const handleUpdatePost = (_id) => {
    navigate(`/updateAllQuestions/${_id}`);
  };

  const handleDeletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b11-a11-server.vercel.app/allQuestion/id/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your question has been deleted.",
                "success"
              );
              navigate(`/`);
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white transition duration-300">
      <Navber />
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* Product Query Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-teal-700">
            Product Query Details
          </h1>
          <div className="flex items-center gap-4 pt-4 border-t dark:border-gray-700">
            <img
              src={data?.photoURL}
              alt={data?.username}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-600"
            />
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                {data?.username}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Posted:</span>{" "}
                {new Date(data?.createdAt).toLocaleString()}
              </p>
            </div>
            {isOwner && (
              <div className="flex justify-center md:gap-4 gap-1 mt-6 md:ml-20">
                <button
                  onClick={() => handleUpdatePost(data._id)}
                  className="flex items-center md:gap-4 gap-1 bg-teal-500 text-white md:px-4 px-1 py-2 rounded-lg hover:bg-teal-400"
                >
                  <BiPencil size={18} />
                  Update
                </button>
                <button
                  onClick={() => handleDeletePost(data._id)}
                  className="flex items-center md:gap-4 gap-1 bg-red-500 text-white md:px-4 px-1 py-2 rounded-lg hover:bg-red-600"
                >
                  <BsTrash2 size={18} />
                  Delete
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <img
              src={data?.imageUrl || "https://via.placeholder.com/300"}
              alt={data?.title}
              className="w-full sm:w-64 h-64 object-cover rounded-md border dark:border-gray-700"
            />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {data?.title}
              </h2>
              <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
                <span className="">Product:</span> {data?.productName}
              </p>
              <p className="text-xl text-gray-800 dark:text-gray-400 my-4">
                <span className="font-medium">Brand:</span>
                <span className="text-blue-600 text-sm font-medium bg-blue-50 px-3 py-1.5 tracking-wide rounded-full ml-4">
                  {data?.brand}
                </span>
              </p>

              <p className="mt-2 text-gray-700 dark:text-gray-300 text-xl">
                <span className="">Reason:</span>
                <span className="text-red-600 text-sm font-medium bg-red-50 px-3 py-1.5 tracking-wide rounded-full ml-4">{data?.reason}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Recommendations: {comments.length}
          </h3>
          {comments.length > 0 ? (
            <div className="space-y-6">
              {comments.map((rec, i) => {
                const isCommentOwner = user?.email === rec.recommenderEmail;
                return (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-start gap-4 border-b pb-4 last:border-b-0 dark:border-gray-700"
                  >
                    <div className="flex gap-4 flex-1">
                      <img
                        src={rec.recommenderImage || "/default.jpg"}
                        alt={rec.recommenderName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex flex-1 flex-col sm:flex-row gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border dark:border-gray-700">
                        <div className="flex-1">
                          <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                            {rec.recommenderName}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            <span className="font-medium">Posted:</span>{" "}
                            {new Date(rec.timestamp).toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            <span className="font-medium">Email:</span>{" "}
                            {rec.recommenderEmail}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                            <span className="font-medium">Query ID:</span>{" "}
                            {rec.queryId}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            <span className="font-medium">Title:</span>{" "}
                            {rec.recommendationTitle}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            <span className="font-medium">Product:</span>{" "}
                            {rec.recommendedProductName}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            <span className="font-medium">Reason:</span>{" "}
                            {rec.recommendationReason}
                          </p>
                        </div>
                        <div className="w-full sm:w-48 flex justify-center sm:justify-end">
                          <img
                            src={rec.recommendedProductImage}
                            alt={rec.recommendedProductName}
                            className="w-full sm:w-48 h-auto max-h-32 object-cover rounded-xl border dark:border-gray-600"
                          />
                        </div>
                      </div>
                    </div>
                    {isCommentOwner && (
                      <div className="flex gap-2 mt-2 sm:ml-auto">
                        <button
                          onClick={() => handleUpdateComment(i)}
                          className="flex items-center gap-1 bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600 text-sm"
                        >
                          <BiPencil size={16} />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteComment(i)}
                          className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                        >
                          <BsTrash2 size={16} />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No recommendations yet.
            </p>
          )}
        </div>

        {/* Comment Submission Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Add a Recommendation
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Share your recommendation for a versatile mirrorless camera.
          </p>
          <form
            onSubmit={handleSend}
            className="mt-4 flex flex-col gap-4 border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="recommendationName"
                className="text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Recommendation Name:
              </label>
              <input
                type="text"
                id="recommendationName"
                value={RecommendationName}
                onChange={(e) => setRecommendationName(e.target.value)}
                placeholder="Enter product name (e.g., Sony A7 III)"
                className="w-full p-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border rounded-md outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="recommendationTitle"
                className="text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Recommendation Title:
              </label>
              <input
                type="text"
                id="recommendationTitle"
                value={RecommendationTitle}
                onChange={(e) => setRecommendationTitle(e.target.value)}
                placeholder="Enter recommendation title"
                className="w-full p-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border rounded-md outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="recommendationImg"
                className="text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Product Image URL:
              </label>
              <input
                type="text"
                id="recommendationImg"
                value={RecommendationImg}
                onChange={(e) => setRecommendationImg(e.target.value)}
                placeholder="Enter image URL"
                className="w-full p-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border rounded-md outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="recommendationReason"
                className="text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Recommendation Reason:
              </label>
              <textarea
                id="recommendationReason"
                value={RecommendationReson}
                onChange={(e) => setRecommendationReson(e.target.value)}
                placeholder="Why do you recommend this product?"
                className="w-full p-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border rounded-md outline-none focus:ring-2 focus:ring-teal-500"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
            >
              Submit Recommendation
            </button>
          </form>
        </div>
      </div>

      {/* Edit Comment Modal */}
      {updateCommentModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">
              Edit Your Recommendation Reason
              <br />
              <span className="text-red-600 dark:text-red-400 text-lg font-medium">
                Title, Product, and Image are fixed
              </span>
            </h2>
            <textarea
              value={updateComment}
              onChange={(e) => setUpdateComment(e.target.value)}
              className="w-full p-3 border rounded mb-4 dark:bg-gray-700 dark:text-white"
              rows="4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setUpdateCommentModel(false);
                  setEditIndex(null);
                }}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateComments}
                className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
      <Fotter />
    </div>
  );
};

export default AllQuestionDetails;
