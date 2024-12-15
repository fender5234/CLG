import { createContext } from "react";

const UserContext = createContext({
  auth: false,
  id: "",
  permission: "",
  name: "",
});

export default UserContext;