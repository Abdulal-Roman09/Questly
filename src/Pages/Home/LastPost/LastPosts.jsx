import React, { useEffect, useState } from "react";
import SingleLastPost from "./SingleLastPost";

const LastPosts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://b11-a11-server.vercel.app/all-Question")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-xl text-gray-600"></div>;
  }

  return (
    <>
    <p className="text-center bg-gray-900 text-emerald-400 text-3xl md:4xl lg:5xl font-semibold">Recent Queries:</p>
      <div className="flex justify-center bg-gray-900 py-10 px-4 dark:bg-gray-900 ">
        <div className="flex flex-wrap gap-6  justify-center">
          {data.map((question, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-2xl w-full sm:w-80 px-1"
            >
              <SingleLastPost question={question} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LastPosts;
