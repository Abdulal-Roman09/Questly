import React from "react";
import { createBrowserRouter } from "react-router-dom"; // use 'react-router-dom'
import Roots from "../Roots/Roots";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import Home from "../Pages/Home/Home";
import AddMyQueries from "../assets/MyQueries/AddMyQueries";
import AllQueries from "../assets/AllQueries/AllQueries";
import MyQueries from "../assets/MyQueries/MyQueries";
import PrivateRoutes from "../Firebase/PrivateRoutes/PrivateRoutes";
import AllQuestionDetails from "../assets/AllQueries/AllQuestionDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <>This is errorPage</>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "register",
    Component: Register,
  },
  {
    path: "AllQueries",
    loader:()=>fetch(`http://localhost:3000/allQuestion`),
    Component:AllQueries,

  },
 {
  path: "AllQusetinDetails/:id",
  loader: ({ params }) => fetch(`http://localhost:3000/allQuestion/singleQuestion/${params.id}`),
  element:(<PrivateRoutes>
     <AllQuestionDetails />
  </PrivateRoutes>),
}
,
  {
    path: "myQueries",
    Component:MyQueries
  },
  {
  path: "addQuerie",
  element: (
    <PrivateRoutes>
      <AddMyQueries />
    </PrivateRoutes>
  )
}

]);
