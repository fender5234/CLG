import "./dashboard-layout.scss";

function DashBoardLayout({ nav, header, children }) {
  return (
    <div className="dashboard-layout">
      <div className="navbar-area">{nav}</div>
      <div className="header-area">
        <div className="header-wrapper">{header}</div>
      </div>
      <div className="page-area">{children}</div>
    </div>
  );
}

export default DashBoardLayout;
