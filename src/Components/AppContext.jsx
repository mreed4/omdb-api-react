import { createContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  function getClassName({ isActive }) {
    return isActive ? "active" : "";
  }

  const value = { getClassName };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
