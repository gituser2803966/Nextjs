import { createContext, useReducer,useEffect } from "react";
import { getData } from "../utils/fetchData";
import reducers from "./Reducers";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {} };

  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(()=>{
  
    const firstLogin = localStorage.getItem("firstLogin");
    if(firstLogin){
      getData('auth/accessToken').then(res=>{

        if(res.err){
          return localStorage.removeItem("firstLogin");
        }

        dispatch({type:"AUTH",payload:{
          user:res.user,
          token: res.access_token
        }})
      })
    }

  },[])

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
