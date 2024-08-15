import React, { useEffect } from "react";

import {
  matchRoutes,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

const RoutingManager: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function shellNavigateHandler(event: Event) {
      const pathname = (event as CustomEvent<string>).detail;

      if (location.pathname === pathname || !matchRoutes(routes, pathname)) {
        return;
      }

      navigate(pathname);
    }
    window.addEventListener("[app-shell] navigated", shellNavigateHandler);

    return () => {
      window.removeEventListener("[app-shell] navigated", shellNavigateHandler);
    };
  }, [location]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("[app-network] navigated", {
        detail: location.pathname,
      })
    );
  }, [location]);

  return <Outlet />;
};

export const routes = [
  {
    path: "/",
    element: <RoutingManager />,
    children: [
      { index: true, element: <Navigate to={`/a`} /> },
      {
        path: "a",
        element: <div>App Network Page a</div>,
      },
      {
        path: "b",
        element: <div>App Network Page b</div>,
      },
    ],
  },
];
