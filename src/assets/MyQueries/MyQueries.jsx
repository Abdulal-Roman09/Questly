import React, { useContext, useEffect, useState } from "react";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";
import { useLoaderData } from "react-router";
import SingleMyQuestion from "./SingleMyQuestion";
import { AuthContext } from "../../Firebase/AuthProvider";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/allQuestion/email/${user.email}`)
        .then((res) => res.json())
        .then((result) => setData(result));
    }
  }, [user]);

  return (
    <div>
      <Navber></Navber>
      <div className="flex justify-center bg-gray-900 py-10 px-4 dark:bg-gray-900">
        <div className="flex flex-wrap gap-6 justify-center">
          {data.map((question, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-2xl w-full sm:w-80"
            >
              <SingleMyQuestion question={question} />
            </div>
          ))}
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default MyQueries;
