import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Preloader from "../components/Preloader/Preloader";
import authMe from "../API/authMe";


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
