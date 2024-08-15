import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { appNetworksBasename } from "../constants/prefix";

import { inject } from "app_network/injector";

export default function AppNetwork() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navigate = useNavigate();

  const unmountRef = useRef(() => {});
  const isFirstRunRef = useRef(true);

  // network app navigation event effects
  useEffect(() => {
    const appNetworkNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;

      const newPathname = `${appNetworksBasename}${pathname}`;

      // 현재 경로인지 체크
      if (newPathname === location.pathname) return;

      navigate(newPathname);
    };

    window.addEventListener(
      "[app-network] navigated",
      appNetworkNavigationEventHandler
    );

    return () =>
      window.removeEventListener(
        "[app-network] navigated",
        appNetworkNavigationEventHandler
      );
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith(appNetworksBasename)) {
      window.dispatchEvent(
        new CustomEvent("[app-shell] navigated", {
          detail: location.pathname.replace(appNetworksBasename, ""),
        })
      );
    }
  }, [location]);

  useEffect(() => {
    if (!isFirstRunRef.current) return;

    unmountRef.current = inject({
      routerType: "memory",
      rootElement: document.getElementById("app-network")!,
      basePath: location.pathname.replace(appNetworksBasename, ""),
    });

    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => {
    return () => unmountRef.current();
  }, []);

  return <div id="app-network" ref={wrapperRef} />;
}
