import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Treat from "components/TreatCalc/Treat";
import PlannerMain from "components/Interface/PlannerMain";
import CalcMain from "components/Interface/CalcMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/calculator",
    element: <CalcMain />,
  },
  {
    path: "/planner",
    element: <PlannerMain />,
  },
  {
    path: "/bond",
    element: <Treat />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
