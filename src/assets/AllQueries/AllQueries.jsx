import React from "react";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";
import { useLoaderData } from "react-router";
import SingleQuestion from "./SingleQuestion";

const AllQueries = () => {
  const data = useLoaderData();

  return (
    <>
      <Navber />

      <div className="bg-gray-50 dark:bg-gray-900 py-10">
        {/* Container to align with page content */}
        <div className="container mx-auto sm:px-2 py-10">
          <div
            className="grid gap-6
              grid-cols-1     
              sm:grid-cols-2  
              md:grid-cols-3   
              lg:grid-cols-5  
            "
          >
            {data.length > 0 ? (
              data.map((question, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 transition-transform hover:scale-105 shadow-md dark:shadow-gray-700"
                >
                  <SingleQuestion question={question} />
                </div>
              ))
            ) : (
              <p className="text-gray-900 dark:text-gray-300 col-span-full text-center">
                No questions found
              </p>
            )}
          </div>
        </div>
      </div>

      <Fotter />
    </>
  );
};

export default AllQueries;
