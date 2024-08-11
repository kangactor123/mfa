import React, { useContext } from "react";

import { NameContext } from "shared-library";

const style = {
  backgroundColor: "orange",
  padding: "8px 12px",
  border: "none",
  borderRadius: 4,
  color: "#fff",
};

const Button = ({ type, children, onClick }) => {
  const name = useContext(NameContext);
  return (
    <button onClick={onClick} style={style}>
      {children} {name}
    </button>
  );
};

export default Button;
