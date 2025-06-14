import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-6 py-12">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-teal-600 dark:text-teal-400">404</h1>
        <h2 className="mt-4 md:text-3xl text-2xl font-semibold   text-red-600">
          Oops! Page not found
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow transition"
          >
            ← Go Back Home
          </Link>
        </div>

       
      </div>
    </div>
  );
};

export default ErrorPage;
