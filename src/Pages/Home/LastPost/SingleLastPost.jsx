import React from "react";
import { Link } from "react-router-dom";

const SingleLastPost = ({ question }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto border border-gray-200 dark:border-gray-700">
      {/* Smaller Image */}
      <img
        className="w-full h-32 object-cover"
        src={
          question?.imageUrl ||
          "https://via.placeholder.com/400x150?text=No+Image"
        }
        alt={question?.title || "Question Image"}
      />

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
          {question?.title || "No Title"}
        </h2>

        {/* Reason */}
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
          {question?.reason || "No reason provided"}
        </p>

        {/* Username */}
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {question?.username || "Anonymous"}
        </p>
      </div>

      {/* Action */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-3">
        <Link to={`/AllQusetinDetails/${question?._id}`}>
          <button className="w-full text-center px-4 py-1 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-md text-white font-medium transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleLastPost;
