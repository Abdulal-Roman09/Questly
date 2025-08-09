import React from "react";
import { Link } from "react-router-dom";

const SingleQuestion = ({ question }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300
      max-w-xs mx-auto
      flex flex-col
      h-auto 
      "
    >
      {/* Image */}
      <img
        className="w-full h-32 md:h-40 lg:h-36 object-cover flex-shrink-0"
        src={
          question.imageUrl ||
          "https://via.placeholder.com/400x150?text=No+Image"
        }
        alt={question.title || "Question Image"}
      />

      {/* Content */}
      <div className="p-3 flex-grow flex flex-col justify-between">
        <div>
          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2">
            {question.title || "No Title"}
          </h2>
          {/* Reason */}
          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 mb-2">
            {question.reason}
          </p>
        </div>
        {/* Username */}
        <p className="mt-auto text-sm text-gray-600 dark:text-gray-400">
          {question.username || "Anonymous"}
        </p>
      </div>

      {/* Action Button */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex-shrink-0">
        <Link to={`/AllQusetinDetails/${question._id}`}>
          <button className="w-full text-center px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-md text-white font-medium transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleQuestion;
