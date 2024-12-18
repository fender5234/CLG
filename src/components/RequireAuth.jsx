import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import authMe from "../API/authMe";
import { Navigate, useNavigate } from "react-router-dom";

function RequireAuth({ children }) {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    (async function () {
      const authResponse = await authMe();
      if (authResponse) {
        setAuth(true);
      } else {
        navigate('/login');
      }
    })();
  }, []);

  return auth ? children : <Preloader />;
}

export default RequireAuth;
