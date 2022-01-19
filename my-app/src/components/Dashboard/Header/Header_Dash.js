import React, { useState } from "react";
import Company from '../../../image/AS_Logo_Transparent.png';
import Cart from '../../../image/cart.jpg'
import ProfilePhoto from '../../../image/Always Sahi Letter Head.png';
import './Header.css';
import MyProgress from "../My_progress/My_progress";
import VideoModule from "../VideoModule/VideoModule";
import DashLeft from "../dashboard/DashLeft";
import ChangePassword from "../dashboard/ChangePassword";
import Dash from "../dashboard/Dash";

const Header_Dash = () => {
    const [hamActive, setHamActive] = useState(false);
    const showMenu = () => {
        setHamActive(!hamActive);
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

    return (
        <div>
            <header className="Header">
            <button className={`header_hamburger ${hamActive === true ? "ham" : ""}`} onClick={showMenu}>
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
                                    <div className="offer_left_options"><a href="#" className="offer_left_link">Programming</a></div>
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
                <div className="Header_profile">
                    <div onClick={dropdown1} className="Header_icon">
                        <img className="profile_photo" src={ProfilePhoto} alt="PP"></img>
                        <a href="#" id="profile_dropdown">&#9660;</a>
                    </div>
                    <div className="Profile_dropdown">
                        <div className="Profile_upper">
                            <div className="profile_links username">USERNAME</div>
                            <div className="profile_links user_email">user@abc.com</div>
                        </div>
                        <div className="Profile_middle">
                            <div className="profile_links My_Progress"><a href="#">My Progress</a></div>
                            <div className="profile_links Edit_Profile"><a href="#">Edit Profile</a></div>
                            <div className="profile_links View_Dashboard"><a href="#">View Dashboard</a></div>
                            <div className="profile_links Help_center"><a href="#">Help Center</a></div>
                        </div>
                        <div className="Profile_lower">
                            <div className="profile_links My_Progress"><a href="#">Log Out</a></div>
                            <div className="profile_links Manage_account" onClick={dropdown}>
                                <a href="#">Manage Account</a>
                                <a href="#" id="offer_courses">&#9660;</a></div>
                            <ul className="profile-inner-dropdown">
                                <li><a className="manage_dropdown" href="#">Change Password</a></li>
                                <li><a className="manage_dropdown" href="#">Change Email Address</a></li>
                                <li><a className="manage_dropdown" href="#">Switch Account</a></li>
                                <li><a className="manage_dropdown" href="#">Delete Account</a></li>
                            </ul>
                        </div>

                    </div >
                </div>
            </div>
        </header >
        <Dash/>
        </div>
    );
};

export default Header_Dash;