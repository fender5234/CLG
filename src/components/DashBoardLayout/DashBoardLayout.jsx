import "./dashboard-layout.scss";

import { Outlet } from "react-router-dom";
import { useState } from "react";

import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
import UserProfile from "../UserProfile/UserProfile";
import LogoLink from "../LogoLink/LogoLink";

import useDeviceDetect from "../../customHooks/useDeviceDetect";


function DashBoardLayout() {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useDeviceDetect();

  return (
    <div className="dashboard-layout">
      <div className={openMenu ? 'navbar-area navbar-area--active' : 'navbar-area'}>
        <NavBar openMenu={openMenu} />
      </div>
      <div className="header-area">
        <div className="header-wrapper">
          {
            isMobile ? <>
              <LogoLink />
              <UserProfile setOpenMenu={setOpenMenu} />
            </>
              :
              <>
                <Pagination />
                <UserProfile />
              </>
          }

        </div>
      </div>
      <div className="page-area">
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoardLayout;
