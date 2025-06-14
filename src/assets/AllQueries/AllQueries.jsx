import React from "react";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";
import { useLoaderData } from "react-router";
import SingleQuestion from "./SingleQuestion";

const AllQueries = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <>
      <Navber />
    <div className="flex justify-center bg-gray-900 py-10 px-4 dark:bg-gray-950">
  <div className="flex flex-wrap gap-6 max-w-7xl justify-center">
    {data.map((question, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-2xl w-full sm:w-80"
      >
        <SingleQuestion question={question} />
      </div>
    ))}
  </div>
</div>


      <Fotter />
    </>
  );
};

export default AllQueries;
