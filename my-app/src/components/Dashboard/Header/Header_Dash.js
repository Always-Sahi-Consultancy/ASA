import React, { useEffect, useState } from "react";
import Company from '../../../image/AS_Logo_Transparent.png';
import Cart from '../../../image/cart.jpg'
import ProfilePhoto from '../../../image/Always Sahi Letter Head.png';
import './Header.css';
import MyProgress from "../My_progress/My_progress";
import VideoModule from "../VideoModule/VideoModule";
import DashLeft from "../dashboard/DashLeft";
import ChangePassword from "../dashboard/ChangePassword";
import Dash from "../dashboard/Dash";
import DashBoardMain from "../DashBoardMain";
import HeaderProfile from "./HeaderProfile";

const Header_Dash = () => {

    const [hamActive, setHamActive] = useState(false);
    const showMenu = () => {
        setHamActive(!hamActive);
        const dashslider = document.getElementById('header_dash_slider');
        const hamburger = document.getElementById('header_hamburger');
        // dashslider.classList.toggle('header_dash_sliderToggle');
        // hamburger.classList.toggle('header_dash_hamburgerActive');
        const ham_bar = document.getElementsByClassName('header_icon_bar');
        ham_bar[0].classList.toggle('header_icon_1');
        ham_bar[1].classList.toggle('header_icon_2');
        ham_bar[2].classList.toggle('header_icon_3');
    }

    let condition = false;
    const dropdown = () => {
        const inner_dropdown = document.querySelector('.profile-inner-dropdown');
        const arrow = document.getElementById("offer_courses");

        if (condition == false) {
            inner_dropdown.style.display = "block";
            condition = true;
            arrow.style.transform = "rotate(180deg)";
        }
        else if (condition == true) {
            inner_dropdown.style.display = "none";
            condition = false;
            arrow.style.transform = "rotate(0deg)";
        }
    }
    let condition1 = false;
    const dropdown1 = () => {
        const inner_dropdown1 = document.querySelector('.Profile_dropdown');
        const arrow1 = document.getElementById("profile_dropdown");

        if (condition1 == false) {
            inner_dropdown1.style.display = "block";
            condition1 = true;
            arrow1.style.transform = "rotate(180deg)";
        }
        else if (condition1 == true) {
            inner_dropdown1.style.display = "none";
            condition1 = false;
            arrow1.style.transform = "rotate(0deg)";
        }
    }
    let condition2 = false;
    const dropdown2 = () => {
        const inner_dropdown2 = document.querySelector('.offer_tab');
        const arrow2 = document.getElementById("offer_main_courses");

        if (condition2 == false) {
            inner_dropdown2.style.display = "block";
            condition2 = true;
            arrow2.style.transform = "rotate(180deg)";
        }
        else if (condition2 == true) {
            inner_dropdown2.style.display = "none";
            condition2 = false;
            arrow2.style.transform = "rotate(0deg)";
        }
    }
    let condition3 = false;

    const show = () => {
        const offerRight = document.querySelector('.offer_right');
        if (condition3 === true) {
            offerRight.style.display = "none";
            condition3 = true;
        }
        else if (condition3 == false) {
            offerRight.style.display = "block";
            condition3 = false;
        }
    }

    return (
        <div>
            <header className="Header">
                <button className={`header_hamburger ${hamActive === true ? "ham header_dash_hamburgerActive" : ""}`} onClick={showMenu}>
                    <div className="header_icon_bar" id="header_icon_1"></div>
                    <div className="header_icon_bar" id="header_icon_2"></div>
                    <div className="header_icon_bar" id="header_icon_3"></div>
                </button>
                <div className="header_com_name">
                    <img className="header_com_img" src={Company}></img>
                </div>
                <div className="header-right">
                    <div className="header_main">
                        <div className="header_main_tabs offer">
                            <div className="offer_main_tab" onClick={dropdown2}>
                                <a className="header_main_tabs" href="#">Online Courses</a>
                                <label for="offer_courses">OFFER</label>
                                <a href="#" id="offer_main_courses">&#9660;</a>
                            </div>
                            <div className="offer_tab">
                                <div className="offer_tab_box">
                                    <div className="offer_left">
                                        <div className="offer_left_options" id="program" onClick={show}><a href="#" className="offer_left_link">Programming</a></div>
                                        <div className="offer_left_options"><a href="#" className="offer_left_link">Design</a></div>
                                        <div className="offer_left_options"><a href="#" className="offer_left_link">Data Science</a></div>
                                        <div className="offer_left_options"><a href="#" className="offer_left_link">Business and Freelance</a></div>
                                        <div className="offer_left_options"><a href="#" className="offer_left_link">Accounts and Finance</a></div>
                                        <div className="offer_left_options"><a href="#" className="offer_left_link">Career Development</a></div>
                                    </div>
                                    <div className="offer_right">
                                        <div className="offer_left_options"><a href="#" className="offer_left_link">Programming with Python</a></div>
                                        <div className="offer_left_options"><a href="#" className="offer_left_link">ReactJs</a></div>
                                        <div className="offer_left_options"><a href="#" className="offer_left_link">Programming with C & C++</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="header_main_tabs cart_link" href="#"><img className="cart" src={Cart}></img></a>
                        <div className="Cart_box">
                            <div className="cart_msg">Your Cart is Empty.</div>
                            <a href="#" className="cart_button">Keep shopping</a>
                        </div>
                    </div>
                    <HeaderProfile/>
                </div>
                <div className={`header_dash_slider ${hamActive ? "header_dash_sliderToggle" : ""}`} id="header_dash_slider" onClick={showMenu}>
                    <div className="header_dash_sliderOption">
                        <div className="header_dash_option">Home</div>
                        <div className="header_dash_option">Courses</div>
                        <div className="header_dash_option">My Cart</div>
                        <div className="header_dash_option">User Profile</div>
                    </div>
                </div>
            </header >
            <DashBoardMain />
        </div>
    );
};

export default Header_Dash;