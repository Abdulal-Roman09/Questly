import React from "react";
import { Link } from "react-router";

const SingleQuestion = ({ question }) => {
  return (
    <div className="max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        className="object-cover w-full h-56 sm:h-64"
        src={question.imageUrl || "https://via.placeholder.com/500x256?text=No+Image"}
        alt={question.title || "Question Image"}
      />

      <div className="p-5">
        <span className="text-xs font-semibold text-blue-600 uppercase dark:text-blue-400">
          {question.brand || "Brand"}
        </span>

        <h2 className="mt-1 text-xl font-bold text-gray-800 dark:text-white">
          {question.title || "No Title"}
        </h2>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {question.reason || "No description available."}
        </p>

        <div className="mt-5 flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover border border-gray-300 dark:border-gray-600"
            src={question.photoURL || "https://via.placeholder.com/40"}
            alt={question.username || "User Avatar"}
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {question.username || "Anonymous"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(question.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end p-4 border-t dark:border-gray-700">
       <Link to={`/AllQusetinDetails/${question._id}`}> <button className="px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-md transition">
          View Details
        </button></Link>
      </div>
    </div>
  );
};

export default SingleQuestion;
