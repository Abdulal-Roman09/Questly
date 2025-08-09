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
    return (
      <div className="text-center py-10 text-xl text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-emerald-400 text-3xl md:text-4xl lg:text-5xl font-semibold mb-10">
          Recent Queries:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
          {data.map((question, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg  transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <SingleLastPost question={question} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastPosts;
