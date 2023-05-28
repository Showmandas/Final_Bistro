import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import Order from "./pages/Order/Order.jsx";
import Login from "./pages/Login/Login.jsx";
import AuthProvider from "./AuthProvider.jsx";
import SignUp from "./Register/SignUp.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from "./Dashboard.jsx";
import Mycart from "./pages/Dashboard/MyCart/Mycart.jsx";


const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path:'dashboard',
    element:<Dashboard/>,
    children:[
      {
        path:'mycart',
        element:<Mycart/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
      </AuthProvider>
  </React.StrictMode>
);
