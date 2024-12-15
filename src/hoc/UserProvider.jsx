import { useState } from "react";
import UserContext from "../context/userContext";

function UserProvider({ children }) {
  const [auth, setAuth] = useState(false);

  return <UserContext.Provider value={{auth,setAuth}}>{children}</UserContext.Provider>;
}

export default UserProvider;
