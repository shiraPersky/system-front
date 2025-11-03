import "./MainLayout.css";

import { Outlet} from "react-router-dom";

import SideBar from "./Sidebar";

export default function MainLayout(){
    return(
        <div className="layout">
            <SideBar/>
            <div className="layout__content-wrapper">
                <main className="layout__content">
                    <Outlet/>
                </main>
                <footer className="footer">
                    © 2025 Job Search Management System – MVP Release
                </footer>
        </div>
        </div>

    );
}