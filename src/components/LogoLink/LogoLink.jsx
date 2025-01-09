import './logo-link.scss';

import { Link } from "react-router-dom";
import logo from '../../assets/svg/logo.svg';

function LogoLink() {
  return (
    <Link className="logo-link" to="/">
      <img src={logo} alt="Логотип CloverChat" />
    </Link>
  )
}

export default LogoLink;