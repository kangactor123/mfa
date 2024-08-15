import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { ErrorBoundary } from "react-error-boundary";

const Button = lazy(() => import("component_app/Button"));
const App = () => (
  <div className="container">
    <div>Name: main-app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <ErrorBoundary fallback={<div>error</div>}>
      <Suspense fallback={"loading.."}>
        <Button onClick={() => alert("click")}>click</Button>
      </Suspense>
    </ErrorBoundary>
    <ErrorBoundary fallback={<div>error</div>}>
      <Suspense fallback={"loading.."}>
        <Button type="warning" onClick={() => alert("warning")}>
          warning
        </Button>
      </Suspense>
    </ErrorBoundary>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
