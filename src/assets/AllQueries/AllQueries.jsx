import React, { useState } from "react";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";
import { useLoaderData } from "react-router";
import SingleQuestion from "./SingleQuestion";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TbGrid3X3 } from "react-icons/tb";
import { BsGrid1X2Fill } from "react-icons/bs";
import { CiGrid2V } from "react-icons/ci";

const AllQueries = () => {
  const data = useLoaderData();
  const [gridCols, setGridCols] = useState(3);
  const [searchText, setSearchText] = useState("");

  // Filter the data based on search input
  const filteredData = data.filter((item) =>
    item.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Navber />

      {/* Top control panel */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-20 pt-6 bg-gray-900">
        {/* Search Bar */}
        <div className="relative w-full max-w-sm ">
          <input
            type="text"
            placeholder="Search data based on Titel..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full rounded border border-teal-300 shadow-sm pl-3 pr-10 py-2 text-sm text-teal-900 placeholder-teal-400 focus:border-teal-500 focus:ring-teal-500 dark:border-teal-700 dark:bg-gray-900 dark:text-white dark:placeholder-teal-500"
          />

          <button
            type="button"
            aria-label="Search"
            className="absolute inset-y-0 right-2 flex items-center justify-center text-teal-700 dark:text-teal-200 hover:bg-teal-100 dark:hover:bg-teal-800 rounded-full p-1.5"
          >
            <HiMagnifyingGlass className="w-4 h-4" />
          </button>
        </div>

        {/* Grid layout toggle buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setGridCols(1)}
            className={`px-4 py-2 rounded ${
              gridCols === 1
                ? "bg-teal-600 text-white"
                : "border border-teal-600 text-teal-600"
            }`}
          >
            <TbGrid3X3 />
          </button>

          <button
            onClick={() => setGridCols(2)}
            className={`px-4 py-2 rounded ${
              gridCols === 2
                ? "bg-teal-600 text-white"
                : "border border-teal-600 text-teal-600"
            }`}
          >
            <CiGrid2V />
          </button>

          <button
            onClick={() => setGridCols(3)}
            className={`px-4 py-2 rounded ${
              gridCols === 3
                ? "bg-teal-600 text-white"
                : "border border-teal-600 text-teal-600"
            }`}
          >
            <BsGrid1X2Fill />
          </button>
        </div>
      </div>

      {/* Questions grid */}
      <div className="flex justify-center bg-gray-900 py-10 px-4 dark:bg-gray-900">
        <div
          className={`grid gap-6 justify-center w-full max-w-7xl ${
            gridCols === 1
              ? "grid-cols-1"
              : gridCols === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }`}
        >
          {filteredData.length > 0 ? (
            filteredData.map((question, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl  p-6 transition-transform hover:scale-105 "
              >
                <SingleQuestion question={question} />
              </div>
            ))
          ) : (
            <p className="text-white col-span-full text-center">
              No questions found
            </p>
          )}
        </div>
      </div>

      <Fotter />
    </>
  );
};

export default AllQueries;
