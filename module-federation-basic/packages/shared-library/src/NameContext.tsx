import React from "react";

type NameProviderProps = React.PropsWithChildren<{ name: string }>;

const NameContext = React.createContext<string | null>(null);

const NameProvider: React.FC<NameProviderProps> = ({ name, children }) => {
  return <NameContext.Provider value={name}>{children}</NameContext.Provider>;
};

export { NameProvider, NameContext };
