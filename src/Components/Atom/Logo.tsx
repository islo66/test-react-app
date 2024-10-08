import * as React from "react";
import LogoSVG from "../../assets/logo.svg"
import './Logo.css'

export const Logo: React.FC = () => {
    return <div className="logo-container">
        <img src={LogoSVG} alt="logo"/>
    </div>
}