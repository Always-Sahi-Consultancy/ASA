import React from "react";
import AsLogo from '../../image/AS_Logo_Transparent.png';
import './header2.css';

const Header2 = () => {
    const displayMenu = () => {
        const slider = document.getElementById('header__slider');
        const hamburger = document.getElementById('header__hamburger');
        slider.classList.toggle('header__sliderToggle');
        hamburger.classList.toggle('header__hamburgerActive');
        const ham_bar = document.getElementsByClassName('header__bar');
        ham_bar[0].classList.toggle('header__bar1');
        ham_bar[1].classList.toggle('header__bar2');
        ham_bar[2].classList.toggle('header__bar3');
    }

    const display = () => {
        const signup = document.getElementsByClassName("signup__blur");
        signup[0].classList.toggle("signup__hide");
    }
    
    return (
    <header>
        <div className="header__section">
        <button className="header__hamburger" id='header__hamburger' onClick={displayMenu}>
            <div className="header__bar" id="header__bar1"></div>
            <div className="header__bar" id="header__bar2"></div>
            <div className="header__bar" id="header__bar3"></div>
        </button>
        <div className="header__brand">
            <img src={AsLogo} alt="AS LOGO" className="header__brandLogo"></img>
        </div>
        <div className="header__navigate">
            <a href="/" className="header__link"><div className="header__options">Home</div></a>
            <a href="/testimonials" className="header__link"><div className="header__options">Testimonials</div></a>
            <a href="/contact_us" className="header__link"><div className="header__options">Contact Us</div></a>
            <a href="/about_us" className="header__link"><div className="header__options">About Us</div></a>
        </div>
        <div className="header__Login">
            <a href="#" className="signup__link">
                <div className="header__LoginButton" onClick={display}>
                    Login
                </div>
            </a>
        </div>
        </div>
        <div className="header__slider" id="header__slider">
            <span onClick={displayMenu}><div className="header__joinUs"><a href="/RegisterNow">Join Always Sahi</a></div></span>
            <div className="header__sliderOption" onClick={displayMenu}>
                <div className="header__option"><a href="/" className="header__link">Home</a></div>
                {/* <div className="header__option"><a href="/freebies">Freebies</a></div> */}
                <div className="header__option"><a href="/testimonials" className="header__link">Testimonials</a></div>
                <div className="header__option"><a href="/contact_us" className="header__link">Contact Us</a></div>
                <div className="header__option"><a href="/about_us" className="header__link">About Us</a></div>
            </div>
        </div>
    </header>
    );
}

export default Header2;