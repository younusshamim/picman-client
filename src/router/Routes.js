//@ts-check
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Services from "../pages/services//Services";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import AboutSection from "../shared/AboutSection";
import Layout from "../shared/layout/Layout";
import Service from "../pages/service/Service";
import Blog from "../pages/blog/Blog";
import PrivateRoute from "./PrivateRoute";
import AddService from "../pages/admin/add-service/AddService";
import MyReviews from "../pages/admin/my-reviews/MyReviews";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <AboutSection />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/services/:id",
        element: <Service />,
      },
      {
        path: "/add_service",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/my_reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
