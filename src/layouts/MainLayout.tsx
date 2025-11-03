import "./MainLayout.css";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Outlet } from "react-router-dom";

import SideBar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <WorkOutlineIcon className="header-icon" />
          <h1>Job Search Management System</h1>
        </div>
      </header>

      <div className="layout__body">
        <SideBar />
        <div className="layout__content-wrapper">
          <main className="layout__content">
            <Outlet />
          </main>
          <footer className="footer">
            © 2025 Job Search Management System – MVP Release
          </footer>
        </div>
      </div>
    </div>
  );
}
