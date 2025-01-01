import "./dashboard-layout.scss";
import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
import UserProfile from "../UserProfile/UserProfile";

function DashBoardLayout() {
  return (
    <div className="dashboard-layout">
      <div className="navbar-area">
        <NavBar />
      </div>
      <div className="header-area">
        <div className="header-wrapper">
          <Pagination />
          <UserProfile />
        </div>
      </div>
      <div className="page-area">
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoardLayout;
