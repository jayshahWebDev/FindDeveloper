import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Candidate from "./components/Authentication/Candidate";
import Recruiter from "./components/Authentication/Recruiter";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/candidate",
    element: <Candidate />,
  },
  {
    path: "/recruiter",
    element: <Recruiter />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
