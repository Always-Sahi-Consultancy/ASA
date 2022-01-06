import React, { useState } from "react";
import Company from '../../../image/AS_Logo_Transparent.png';
import Cart from '../../../image/cart.jpg'
import ProfilePhoto from '../../../image/Always Sahi Letter Head.png';
import './Header.css';

const Header_Dash = () => {
    const [hamActive, setHamActive] = useState(false);
    const showMenu = () => {
        setHamActive(!hamActive);
    }
    return (
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
                    <a className="header_main_tabs" href="#">Online Courses</a>
                    <div className="header_main_tabs offer">
                        <label for="offer_courses">OFFER</label>
                        <a href="#" id="offer_courses">&#9660;</a>
                    </div>
                    <a className="header_main_tabs cart_link" href="#"><img className="cart" src={Cart}></img></a>
                </div>
                <div className="Header_profile">
                    <img className="profile_photo" src={ProfilePhoto} alt="PP"></img>
                    <a href="#" id="profile_dropdown">&#9660;</a>
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
                            <div className="profile_links Manage_account">
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
        </header>
    );
};

export default Header_Dash;