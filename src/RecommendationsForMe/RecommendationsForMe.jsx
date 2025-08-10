import React, { useContext, useEffect, useState } from "react";
import Fotter from "../Componenets/Fotter";
import Navber from "../Componenets/Navber";
import { AuthContext } from "../Firebase/AuthProvider";
import MyRecommendationSingldata from "./RecommendationForMeSingldata";

const RecommendationsForMe = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://b11-a11-server.vercel.app/recommendations/queryUserEmail/${user.email}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <Navber />
      <div className="py-10">
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((recommendation, index) => (
            <MyRecommendationSingldata
              key={index}
              recommendation={recommendation}
            />
          ))}
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default RecommendationsForMe;
