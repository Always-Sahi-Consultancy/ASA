import { useEffect, useState } from 'react';
import ProfilePhoto from '../../../image/Always Sahi Letter Head.png';
import './Header.css';

const HeaderProfile = () => {

    const [userData, setuserData] = useState({});

    const userHeadProfile = async () => {
        try {
            const res = await fetch("/contact", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            // console.log(data);
            setuserData(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHeadProfile();
    }, []);

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

    return (
        <div className="Header_profile">
            <div onClick={dropdown1} className="Header_icon">
                <img className="profile_photo" src={ProfilePhoto} alt="PP"></img>
                <a href="#" id="profile_dropdown">&#9660;</a>
            </div>
            <div className="Profile_dropdown">
                <div className="Profile_upper">
                    <div className="profile_links username">{userData.userFirstName + " " + userData.userLastName}</div>
                    <div className="profile_links user_email">{userData.userEmail}</div>
                </div>
                <div className="Profile_middle">
                    <div className="profile_links My_Progress"><a href="#">My Progress</a></div>
                    <div className="profile_links Edit_Profile"><a href="#">Edit Profile</a></div>
                    <div className="profile_links View_Dashboard"><a href="#">View Dashboard</a></div>
                    <div className="profile_links Help_center"><a href="#">Help Center</a></div>
                </div>
                <div className="Profile_lower">
                    <div className="profile_links My_Progress"><a href="/logout">Log Out</a></div>
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
            </div>
        </div>
    );
};

export default HeaderProfile;