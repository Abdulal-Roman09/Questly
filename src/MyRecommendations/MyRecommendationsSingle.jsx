import React from "react";
import { Link } from "react-router-dom";

const MyRecommendationsSingle = ({ recommendation }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        className="object-cover w-full h-56 sm:h-64"
        src={recommendation.recommendedProductImage}
        alt={recommendation.recommendationTitle || "Recommended Product"}
      />

      {/* Content */}
      <div className="p-5">
        {/* Product Name / Brand */}
        <span className="text-xs font-semibold text-blue-600 uppercase dark:text-blue-400">
          {recommendation.recommendedProductName || "Unknown Product"}
        </span>

        {/* Recommendation Title */}
        <h2 className="mt-1 text-xl font-bold text-gray-800 dark:text-white">
          {recommendation.recommendationTitle || "No Title"}
        </h2>

        {/* Reason */}
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {recommendation.recommendationReason || "No reason provided."}
        </p>

        {/* Recommender Info */}
        <div className="mt-5 flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover border border-gray-300 dark:border-gray-600"
            src={
              recommendation.photoURL ||
              "https://via.placeholder.com/40?text=User"
            }
            alt={recommendation.recommenderName || "User Avatar"}
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {recommendation.recommenderName || "Anonymous"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(recommendation.timestamp).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="flex justify-end p-4 border-t dark:border-gray-700">
        <Link to={`/AllQusetinDetails/${recommendation.queryId}`}>
          <button className="px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-md transition">
            View Original Query
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyRecommendationsSingle;
