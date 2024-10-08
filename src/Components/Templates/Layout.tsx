import * as React from "react";
import {InfoSuggestion, Logo, MainMenu, UserDropDown} from "../../Components";
import './Layout.css'

export const Layout: React.FC = ({children}) => {
    return <div className="layout">
        <div className="top-menu">
            <Logo/>
            <MainMenu/>
            <UserDropDown/>
            <InfoSuggestion/>
        </div>
        {children}
    </div>
}