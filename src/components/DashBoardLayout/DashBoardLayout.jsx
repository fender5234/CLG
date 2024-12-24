import "./dashboard-layout.scss";

function DashBoardLayout({ nav, header, children, userProfile }) {
  return (
    <div className="dashboard-layout">
      <div className="navbar-area">{nav}</div>
      <div className="header-area">
        <div className="header-wrapper">
          {header}
          {userProfile}
        </div>
      </div>
      <div className="page-area">{children}</div>
    </div>
  );
}

export default DashBoardLayout;
