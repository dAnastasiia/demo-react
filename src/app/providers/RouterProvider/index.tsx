import { Navigate, useRoutes } from "react-router-dom";

import { AppRoutes } from "@/constants";
import { MainLayout } from "@/layouts";

import NotFoundPage from "@/pages/NotFoundPage";

export default function RouterProvider() {
  const { home, dashboard, companies } = AppRoutes;

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
          element: <p>dashboard</p>,
        },
        {
          path: companies,
          element: <p>companies</p>,
        },
      ],
    },

    { path: "*", element: <NotFoundPage /> },
  ]);
}
