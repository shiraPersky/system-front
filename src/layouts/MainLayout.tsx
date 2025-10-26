import "./MainLayout.css";

import { Outlet} from "react-router-dom";

import SideBar from "./Sidebar";

export default function MainLayout(){
    return(
        <div className="layout">
            <SideBar/>
                <main className="layout__content">
                    <Outlet/>
                </main>
        </div>
    );
}