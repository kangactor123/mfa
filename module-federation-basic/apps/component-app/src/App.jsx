import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Button from "./components/Button";

const App = () => (
  <div className="container">
    <div>Name: component-app</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Button>Sample</Button>
  </div>
);

createRoot(document.getElementById("app")).render(<App />);
