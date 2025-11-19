import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyTransactions from "../Pages/MyTransactions";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                },
                {
                    path: "/login",
                    element: <Login></Login> ,
                },
                {
                    path: "/register",
                    element: <Register></Register> ,
                },
                {
                    path: "/my-transactions",
                    element: <MyTransactions></MyTransactions> ,
                },
                
            ]
        },
        {

        }
    ]
);

export default router