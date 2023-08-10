import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import {
  channelsRoute,
  dmsRoute,
  homeRoute,
  loginRoute,
} from "./constants/routs";
const router = createBrowserRouter([
  {
    path: homeRoute,
    element: <App />,
  },
  {
    path: loginRoute,
    element: (
      <div>
        <Link to={homeRoute}>Home</Link>Login
      </div>
    ),
  },
  {
    path: channelsRoute,
    element: <App />,
  },
  {
    path: dmsRoute,
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
