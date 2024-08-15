import React from "react";

import { Link, Outlet } from "react-router-dom";
import { appJobsPrefix, appNetworksPrefix } from "../constants/prefix";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`${appJobsPrefix}/1`}>App Jobs Page 1</Link>
          </li>
          <li>
            <Link to={`${appJobsPrefix}/2`}>App Jobs Page 2</Link>
          </li>
          <li>
            <Link to={`${appNetworksPrefix}/a`}>App Network Page a</Link>
          </li>
          <li>
            <Link to={`${appNetworksPrefix}/b`}>App Network Page b</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
