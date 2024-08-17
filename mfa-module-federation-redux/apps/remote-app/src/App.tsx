import React, { memo, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Reducer, Store } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector, useStore } from "react-redux";
import reducer, { remoteAppScopeName, setName } from "./redux/modules/name";

const App = () => {
  const name = useSelector<
    {
      [remoteAppScopeName]?: {
        value: string;
      };
    },
    string | undefined
  >((state) => state?.[remoteAppScopeName]?.value);
  const store = useStore();
  const dispatch = useDispatch();
  console.log(store.getState());
  return (
    <div className="container">
      {name && <span>{name}</span>}
      <button onClick={() => dispatch(setName({ name: "리모트 앱" }))}>
        click!!
      </button>
    </div>
  );
};

const RemoteAppWrapper: React.FC<
  React.PropsWithChildren<{
    store: Store;
    injectReducer: (key: string, reducer: Reducer) => void;
  }>
> = ({ store, injectReducer }) => {
  useEffect(() => {
    injectReducer(remoteAppScopeName, reducer);
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default memo(RemoteAppWrapper);
