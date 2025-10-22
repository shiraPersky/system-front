import "./SideBar.css"

import {NavLink} from "react-router-dom";

export default function SideBar(){
    return(
        <aside className = "sidebar">
            <div className="sidebar__logo">Job Tracker</div>

            <nav className="sidebar__nav">
                <NavLink to ="/" end className = {({ isActive}) => isActive? "active" : ""}>  Dashboard </NavLink>
                <NavLink to ="/applications"  className = {({ isActive}) => isActive? "active" : ""}>  Applications </NavLink>

            </nav>
        </aside>
    );
}