import React from 'react'
// Component
import SidebarButton from '../SidebarButton/SidebarButton'
// Images
import logo from '../../images/Logo.png'
// Style
import './style/Header.css'

const Header = props => (
<header className="header">
    <nav className="header__navigation">
        <div className="header__logo">
            <a href="https://github.com/davesheinbein/mountain-template"><img src={logo} alt="logo"/></a>
        </div>
        <div className="header__navigationItems">
            <ul>
                <li>
                    <a href="#history">01. HISTORY</a>
                </li>
                <li>
                    <a href="#team">02. TEAM</a>
                </li>
            </ul>
        </div>
        <div className="header__toggleButton">
            <SidebarButton sidebarClickHandler={props.sidebarClickHandler} />
        </div>
    </nav>
</header>
)

export default Header