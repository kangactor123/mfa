import React from "react";

export type Props = React.PropsWithChildren<{
  onClick: () => void;
}>;

const Button: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
