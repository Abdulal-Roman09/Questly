import React, { useContext, useEffect, useState } from "react";
import Navber from "../Componenets/Navber";
import Fotter from "../Componenets/Fotter";
import { AuthContext } from "../Firebase/AuthProvider";
import MyRecommendationsSingle from "./MyRecommendationsSingle";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `http://localhost:3000/recommendations/recommenderemail/${user?.email}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    }
  }, [user]);

  return (
    <>
      <Navber />
      <div className="bg-gray-900 py-10">
        {" "}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {data.map((recommendation, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-2xl w-full"
            >
              <MyRecommendationsSingle recommendation={recommendation} />
            </div>
          ))}
        </div>
      </div>

      <Fotter />
    </>
  );
};

export default MyRecommendations;
