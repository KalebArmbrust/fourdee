import React from 'react';
import './Header.scss';
import Logo from '../../assets/icons/AdidasLogo.svg';
import Hamburger from '../../assets/icons/Hamburger-Icon.svg';
import Flag from '../../assets/icons/Vector.svg'

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img className="header-logo__image" src={Logo} alt="Adidas Logo"/>
            </div>
            <div className="header-nav">
                <h2 className="header-nav__text">MEN</h2>
                <h2 className="header-nav__text">WOMEN</h2>
                <h2 className="header-nav__text">KIDS</h2>
            </div>
            <div className="header-login">
                <p className="header-login__text">creators club</p>
                <p className="header-login__text">log in</p>
            </div>
            <div className="header-icons">
                <img className="header-icons__hamburger" src={Hamburger} alt="Menu drop down"/>
                <img className="header-icons__flag" src={Flag} alt="Flag"/>
            </div>
        </div>
    )
}

export default Header;
