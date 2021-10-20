import { createContext, useReducer } from "react";
import reducers from "./Reducers";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {} };

  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
