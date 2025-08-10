import { Link } from "react-router-dom";

const RecommendationCard = ({ recommendation }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-xs w-full h-[380px] mx-auto border border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Product Image */}
      <img
        className="w-full h-32 object-cover flex-shrink-0"
        src={
          recommendation?.recommendedProductImage ||
          "https://via.placeholder.com/400x150?text=No+Image"
        }
        alt={recommendation?.recommendationTitle || "Recommended Product"}
      />

      {/* Content */}
      <div className="p-4 flex-grow overflow-hidden">
        <span className="text-xs font-semibold text-blue-600 uppercase dark:text-blue-400">
          {recommendation?.recommendedProductName || "Unknown Product"}
        </span>

        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 mt-1">
          {recommendation?.recommendationTitle || "No Title"}
        </h2>

        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 line-clamp-3">
          {recommendation?.recommendationReason || "No reason provided."}
        </p>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 truncate">
          {recommendation?.recommenderName || "Anonymous"}
        </p>
      </div>

      {/* Action Button */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex-shrink-0">
        <Link to={`/AllQusetinDetails/${recommendation?.queryId}`}>
          <button className="w-full text-center px-4 py-2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-md text-white font-medium transition">
            View Original Query
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendationCard;
