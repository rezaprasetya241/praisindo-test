import { lazy } from "react";

const HomePage = lazy(() => import("../pages/homePage"));

const publicRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
];

export { publicRoutes };
