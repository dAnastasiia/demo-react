import { Navigate, useRoutes } from "react-router-dom";

import { AppRoutes } from "@/constants";
import { MainLayout } from "@/layouts";

import DashboardPage from "@/pages/DashboardPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function RouterProvider() {
  const { home, dashboard, users } = AppRoutes;

  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: home,
          element: <Navigate to={dashboard} replace />,
        },
        {
          path: dashboard,
          element: <DashboardPage />,
        },
        {
          path: users,
          element: <p>users</p>,
        },
      ],
    },

    { path: "*", element: <NotFoundPage /> },
  ]);
}
