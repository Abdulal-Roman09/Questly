import React, { useContext, useEffect, useState } from "react";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";
import { Link } from "react-router";
import SingleMyQuestion from "./SingleMyQuestion";
import { AuthContext } from "../../Firebase/AuthProvider";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://b11-a11-server.vercel.app/allQuestion/email/${user.email}`)
        .then((res) => res.json())
        .then((result) => setData(result));
    }
  }, [user]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navber />

      <Link
        to={"/addQuerie"}
        className="flex justify-center bg-gray-100 dark:bg-gray-900 pt-5"
      >
        <button className="bg-teal-600 text-white rounded-sm px-5 py-2 hover:bg-teal-700 transition">
          ← Add Queries
        </button>
      </Link>

      <div className="flex justify-center bg-gray-100 dark:bg-gray-900 py-10 px-4">
        <div className="flex flex-wrap gap-6 justify-center">
          {data.length > 0 ? (
            data.map((question, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-2xl w-full sm:w-80"
              >
                <SingleMyQuestion question={question} />
              </div>
            ))
          ) : (
            <p className="text-gray-700 dark:text-gray-300 text-center w-full">
              No queries found.
            </p>
          )}
        </div>
      </div>

      <Fotter />
    </div>
  );
};

export default MyQueries;
