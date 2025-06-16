import React, { useContext, useState } from "react";
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
  console.log(data);

  // set all type of text herer

  const [RecommendationName, setRecommendationName] = useState("");
  const [RecommendationTitle, setRecommendationTitle] = useState("");
  const [RecommendationImg, setRecommendationImg] = useState("");
  const [RecommendationReson, setRecommendationReson] = useState("");

  const [comments, setComments] = useState(data?.comments || []);

  const [updateCommentModel, setUpdateCommentModel] = useState(false);
  const [updateComment, setUpdateComment] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const isOwner = user?.email === data?.email;

  const handleSend = async (e) => {
    e.preventDefault();

    const trimmedReason = RecommendationReson.trim();
    if (!trimmedReason) return;

    const formData = {
      // Recommendation details
      recommendationTitle: RecommendationTitle,
      recommendedProductName: RecommendationName,
      recommendedProductImage: RecommendationImg,
      recommendationReason: trimmedReason,

      // Query details
      queryId: data?._id,
      queryTitle: data?.title,
      queryProductName: data?.productName,
      queryUserEmail: data?.email,
      queryUserName: data?.name,

      // Recommender details
      recommenderEmail: user?.email,
      recommenderName: user?.displayName,
      timestamp: new Date().toISOString(),
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
        setRecommendationReson((prev) => [...prev, formData]);
        setRecommendationReson("");
        setRecommendationTitle("");
        setRecommendationImg("");
        setRecommendationName("");
        Swal.fire({
          icon: "success",
          title: "Comment Added",
          text: "Your comment has been successfully posted.",
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

  // Edit Comment Modal trigger
  const handleUpdateComment = (index) => {
    setUpdateComment(comments[index].comment);
    setEditIndex(index);
    setUpdateCommentModel(true);
  };

  // Edit Modal confirmation
  const handleUpdateComments = async () => {
    if (editIndex === null || !updateComment.trim()) return;

    const oldComment = comments[editIndex].comment;

    const response = await fetch(
      `http://localhost:3000/allQuestion/updateComment/${data._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldComment: oldComment,
          updateComment: updateComment.trim(),
        }),
      }
    );

    if (response.ok) {
      const updated = [...comments];
      updated[editIndex].comment = updateComment.trim();
      setComments(updated);

      setUpdateCommentModel(false);
      setEditIndex(null);
      setUpdateComment("");

      Swal.fire("Updated!", "Your comment has been updated.", "success");
    } else {
      Swal.fire("Error", "Failed to update comment.", "error");
    }
  };

  // delete comment
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

        fetch(`http://localhost:3000/allQuestion/deleteComment/${data._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentToDelete),
        })
          .then((res) => res.json())
          .then(() => {
            const updatedComments = [...comments];
            updatedComments.splice(index, 1);
            setComments(updatedComments);
            Swal.fire("Deleted!", "Your comment has been deleted.", "success");
          });
      }
    });
  };

  const handleUpdatePost = (_id) => {
    console.log("clicked", _id);
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
        fetch(`http://localhost:3000/allQuestion/id/${id}`, {
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
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* Product Info */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <img
              src={data?.imageUrl || "https://via.placeholder.com/300"}
              alt={data?.title}
              className="w-full sm:w-48 h-48 object-cover rounded-md border dark:border-gray-700"
            />
            <div>
              <h2 className="text-2xl font-bold">{data?.title}</h2>
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
              <p className="font-medium">{data?.username}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(data?.createdAt).toLocaleString()}
              </p>
            </div>

            {isOwner && (
              <div className="flex justify-center gap-4 mt-6 pr-6 pb-4 md:ml-20">
                <button
                  onClick={() => handleUpdatePost(data._id)}
                  className="flex items-center gap-2 bg-teal-500 text-white md:px-4 px-1 py-2 rounded-lg hover:bg-teal-400"
                >
                  <BiPencil size={18} />
                  Update
                </button>
                <button
                  onClick={() => handleDeletePost(data._id)}
                  className="flex items-center gap-2 bg-red-500 text-white md:px-4 px-1 py-2 rounded-lg hover:bg-red-600"
                >
                  <BsTrash2 size={18} />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Recommendation Comments */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Recommendations:  {comments.length}</h3>

          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((rec, i) => {
                const isCommentOwner = user?.email === rec.recommenderEmail;

                return (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-start gap-4 border-b pb-4 last:border-b-0 dark:border-gray-700"
                  >
                    <div className="flex gap-4">
                      <img
                        src={rec.recommendedProductImage || "/default.jpg"}
                        alt={rec.recommendedProductName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{rec.recommenderName}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(rec.timestamp).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <span className="font-semibold">Title:</span>{" "}
                          {rec.recommendationTitle}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <span className="font-semibold">Product:</span>{" "}
                          {rec.recommendedProductName}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <span className="font-semibold">Reason:</span>{" "}
                          {rec.recommendationReason}
                        </p>
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
            <p className="text-sm text-gray-500">No recommendations yet.</p>
          )}
        </div>

        {/* Comment Input */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-md mx-auto mt-10">
          <h3 className="text-xl font-semibold">Leave a Comment</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Share your thoughts with us.
          </p>

          <form
            onSubmit={handleSend}
            className="mt-4 flex flex-col gap-4 border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
          >
            {/*Recommendation Name Field */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Recommendation Name:
              </label>
              <input
                type="text"
                id="name"
                value={RecommendationName}
                onChange={(e) => setRecommendationName(e.target.value)}
                placeholder="Enter your  Recommendation Product name"
                className="w-full p-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border rounded-md outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            {/*Recommendation Title
             */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Recommendation Title:
              </label>
              <input
                type="text"
                id="name"
                value={RecommendationTitle}
                onChange={(e) => setRecommendationTitle(e.target.value)}
                placeholder="Enter your Recommendation Title"
                className="w-full p-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border rounded-md outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            {/* Recommended Product Image
             */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Recommended Product Image:
              </label>
              <input
                type="text"
                id="name"
                value={RecommendationImg}
                onChange={(e) => setRecommendationImg(e.target.value)}
                placeholder="Enter your  Recommended Product Image name"
                className="w-full p-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border rounded-md outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            {/* Recommendation reason
             */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="comment"
                className="text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Recommendation reason :
              </label>
              <input
                type="text"
                id="comment"
                value={RecommendationReson}
                onChange={(e) => setRecommendationReson(e.target.value)}
                placeholder="Write yourRecommendation reason here..."
                className="w-full p-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border rounded-md outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </main>

      {/* Edit Comment Modal */}
      {updateCommentModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Edit Comment
            </h2>
            <input
              type="text"
              value={updateComment}
              onChange={(e) => setUpdateComment(e.target.value)}
              className="w-full p-3 border rounded mb-4 dark:bg-gray-700 dark:text-white"
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
