import React from "react";
import ReactDOM from "react-dom/client";
import { join, map } from "lodash";

import "./index.css";

import Button from "component_app/Button";

const App = () => (
  <div className="container">
    <div>Name: main-app</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <div>{join(map(["1", "2"]), "-")}</div>
    <Button>Button 1</Button>
    <Button onClick={() => alert("click!!")}>Button 2</Button>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
