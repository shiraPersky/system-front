import "./SideBar.css"

import FolderIcon from "@mui/icons-material/Folder";
import DashboardIcon from "@mui/icons-material/Insights";
import {NavLink} from "react-router-dom";

export default function SideBar(){
    return(
        <aside className = "sidebar">
            <div className="sidebar__logo">Job Tracker</div>

            <nav className="sidebar__nav">
                <NavLink to ="/" end className = {({ isActive}) => isActive? "active" : ""}>  
                <DashboardIcon style={{ marginRight: "8px", verticalAlign: "middle" }} />
                Dashboard </NavLink>
                <NavLink to ="/applications"  className = {({ isActive}) => isActive? "active" : ""}>
                <FolderIcon style={{ marginRight: "8px", verticalAlign: "middle" }} />

                  Applications </NavLink>

            </nav>
        </aside>
    );
}