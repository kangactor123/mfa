import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { join, map } from "lodash";

import "./index.css";

import { NameProvider } from "shared-library";

import { ErrorBoundary } from "react-error-boundary";

const Button = React.lazy(() => import("component_app/Button"));

const App = () => {
  return (
    <NameProvider name="hell">
      <div className="container">
        <div>Name: main-app</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
        <div>{join(map(["1", "2"]), "-")}</div>
        <ErrorBoundary fallback={<div>Error1</div>}>
          <Suspense fallback={"loading1.."}>
            <Button>Button 1</Button>
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<div>Error2</div>}>
          <Suspense fallback={"loading2.."}>
            <Button onClick={() => alert("click!!")}>Button 2</Button>
          </Suspense>
        </ErrorBoundary>
      </div>
    </NameProvider>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
