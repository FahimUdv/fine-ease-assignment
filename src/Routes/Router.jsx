import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyTransactions from "../Pages/MyTransactions";
import AddTransactions from "../Pages/AddTransactions";
import UpdateTransaction from "../Pages/UpdateTransaction";
import TransactionDetails from "../Pages/TransactionDetails";
import PrivateRoute from "../Provider/PrivateRoute";

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
                    element: <PrivateRoute>
                        <MyTransactions></MyTransactions>
                    </PrivateRoute> ,
                    loader: () => fetch('http://localhost:3000/transactions'),
                },
                {
                    path: "/add-transactions",
                    element: <PrivateRoute>
                        <AddTransactions></AddTransactions>
                    </PrivateRoute> ,
                },
                {
                    path: "/update-transaction/:id",
                    element: <PrivateRoute>
                        <UpdateTransaction></UpdateTransaction>
                    </PrivateRoute> ,
                    loader: ({params}) => fetch(`http://localhost:3000/transactions/${params.id}`)
                },
                {
                    path: "/transaction-details/:id",
                    element: <PrivateRoute>
                        <TransactionDetails></TransactionDetails>
                    </PrivateRoute> ,
                    loader: ({params}) => fetch(`http://localhost:3000/transactions/${params.id}`)
                },
                
            ]
        },
        {

        }
    ]
);

export default router