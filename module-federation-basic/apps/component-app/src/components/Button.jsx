import React from "react";

import { join, map } from "lodash";

const style = {
  backgroundColor: "orange",
  padding: "8px 12px",
  border: "none",
  borderRadius: 4,
  color: "#fff",
};

const Button = ({ type, children, onClick }) => {
  return (
    <button onClick={onClick} style={style}>
      {children} {join(map(["1", "2"]), "-")}
    </button>
  );
};

export default Button;
