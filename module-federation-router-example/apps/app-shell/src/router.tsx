import React, { Suspense } from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import { appJobsPrefix, appNetworksPrefix } from "./constants/prefix";

const AppJobsLazy = React.lazy(() => import("./components/AppJobs"));
const AppNetworksLazy = React.lazy(() => import("./components/AppNetwork"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to={`/${appJobsPrefix}`} /> },
      {
        path: `/${appJobsPrefix}/*`,
        element: (
          <Suspense fallback={<div>loading app jobs...</div>}>
            <AppJobsLazy />
          </Suspense>
        ),
      },
      {
        path: `/${appNetworksPrefix}/*`,
        element: (
          <Suspense fallback={<div>loading app networks...</div>}>
            <AppNetworksLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
