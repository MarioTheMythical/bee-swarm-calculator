import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PlannerMain from "components/Interface/PlannerMain";
import CalcMain from "components/Interface/CalcMain";
import BondMain from "components/Interface/BondMain";

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
    element: <BondMain />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
