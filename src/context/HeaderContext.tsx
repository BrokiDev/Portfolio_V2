import React, { createContext, useContext } from "react";

const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error(
      "useHeaderContext debe ser usado dentro de un proveedor HeaderContext"
    );
  }
  return context;
};

interface HeaderProviderProps extends HeaderContextProps {
  children: React.ReactNode;
}

export const HeaderProvider: React.FC<HeaderProviderProps> = ({
  children,
  ...props
}) => <HeaderContext.Provider value={props}>{children}</HeaderContext.Provider>;
