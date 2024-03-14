import { createContext, useState } from "react";
import { getData } from "../persistence";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLogin: getData("isLogin") || false,
    ...getData("user"),
  });

  const [users, setUsers] = useState(getData("users") || []);

  return (
    <Context.Provider value={{ user, setUser, users, setUsers }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
