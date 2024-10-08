import * as React from "react";
import './MainMenu.css'

export const MainMenu: React.FC = () => {
    return <div className="menu-container">
        <a href="#">Apps
            <span className="has-children"/>
        </a>
        <a className="has-children" href="#">Data</a>
        <a href="#">Identities</a>
        <a href="#">Alerts</a>
        <a href="#">Investigation Center</a>
        <a className="has-children" href="#">Configuration</a>
    </div>
}