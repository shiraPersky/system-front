import { createBrowserRouter } from "react-router-dom";

import ApplicationsPage from "../features/Applications/ApplicationsPage";
import DashboardPage from "../features/Dashboard/DashboardPage";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "applications",
        element: <ApplicationsPage />
      },
    ],
    },
  ]);