import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [state, setState] = useState({});

  return <AppContext.Provider value={{ state, setState }}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
