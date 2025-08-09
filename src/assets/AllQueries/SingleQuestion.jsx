import React from "react";
import { Link } from "react-router-dom";

const SingleQuestion = ({ question }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto h-[340px] flex flex-col">
      {/* Image */}
      <img
        className="w-full h-32 object-cover flex-shrink-0"
        src={
          question.imageUrl ||
          "https://via.placeholder.com/400x150?text=No+Image"
        }
        alt={question.title || "Question Image"}
      />

      {/* Content */}
      <div className="p-3 flex-grow flex flex-col justify-start">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 h-[3rem] overflow-hidden">
          {question.title || "No Title"}
        </h2>
        {/* reason */}
        <p className="text-sm">{question.reason}</p>
        {/* Username */}
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {question.username || "Anonymous"}
        </p>
      </div>

      {/* Action Button */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex-shrink-0">
        <Link to={`/AllQusetinDetails/${question._id}`}>
          <button className="w-full text-center px-4 py-1 bg-teal-600 hover:bg-teal-700 rounded-md text-white font-medium transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleQuestion;
