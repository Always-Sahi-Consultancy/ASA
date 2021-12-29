import React from "react";
import AsLogo from '../../image/AS_Logo_Transparent.png';
import './header2.css';

const Header2 = () => {
    return (
    <header>
        <button className="header__hamburger">
            <div className="header__bar"></div>
            <div className="header__bar"></div>
            <div className="header__bar"></div>
        </button>
        <div className="header__brand">
            <img src={AsLogo} alt="AS LOGO" className="header__brandLogo"></img>
        </div>
        <div className="header__navigate">
            <div className="header__options">Home</div>
            <div className="header__options">Freebies</div>
            <div className="header__options">Testimonials</div>
            <div className="header__options">About Us</div>
        </div>
        <div className="header__Login">
            <div className="header__LoginButton">
                Login
            </div>
        </div>
        <div className="header__slider">
            <div className="header__joinUs">Join Always Sahi</div>
            <div className="header__sliderOption">
                <div className="header__option">Home</div>
                <div className="header__option">Freebies</div>
                <div className="header__option">Testimonials</div>
                <div className="header__option">Gallery</div>
                <div className="header__option">Contact Us</div>
                <div className="header__option">About Us</div>
            </div>
        </div>
    </header>
    );
}

export default Header2;