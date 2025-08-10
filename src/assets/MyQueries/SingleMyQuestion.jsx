import React from "react";
import { Link } from "react-router-dom";

const SingleMyQuestion = ({ question }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-xs w-full mx-auto border border-gray-200 dark:border-gray-700 flex flex-col h-[380px]">
      {/* Image */}
      <img
        className="w-full h-32 object-cover flex-shrink-0"
        src={question.imageUrl || "https://via.placeholder.com/400x150?text=No+Image"}
        alt={question.title || "Question Image"}
      />

      {/* Content */}
      <div className="p-2 flex-grow overflow-hidden">
        {/* Brand */}
        <span className="text-xs font-semibold text-blue-600 uppercase dark:text-blue-400">
          {question.brand || "Brand"}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 mt-1">
          {question.title || "No Title"}
        </h2>

        {/* Reason */}
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 line-clamp-3">
          {question.reason || "No description available."}
        </p>

        {/* User Info */}
        <div className="mt-3 flex items-center">
        
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate max-w-[150px]">
              {question.username || "Anonymous"}
            </p>
           
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex-shrink-0">
        <Link to={`/AllQusetinDetails/${question._id}`}>
          <button className="w-full text-center px-4 py-2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-md text-white font-medium transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleMyQuestion;
