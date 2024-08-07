import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/HomePage.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import Rootlayout from "./pages/Rootlayout.jsx";

const router = createBrowserRouter([
  {
    element: <Rootlayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "movie/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
