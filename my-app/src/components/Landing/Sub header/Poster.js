import React, { useState, useEffect } from 'react';
import './Subheader.css';
import Search from '../../../image/MG.png';
import Image from '../../../image/Subheader_Poster1.jpg';
import {Link} from 'react-router-dom';

const Poster = () => {
    const [subheader_nav, setSubheader_nav] = useState("subheader_nav");
    const listenScrollEvent = () => {
        if (window.scrollY < 120) {
            return setSubheader_nav("subheader_nav");
        }
        else if (window.scrollY > 120) {
            return setSubheader_nav("subheader_fixed")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <div className="Poster">
            <img className="Poster_img" src={Image} />
            <div className={subheader_nav}>
                <div className="nav_tabs"><Link to="#">Account & Finance</Link></div>
                <div className="nav_tabs"><Link to="#">Coding & Web Development</Link></div>
                <div className="nav_tabs"><Link to="#">Business & Freelancing</Link></div>
                <div className="nav_tabs"><Link to="#">Video & Animation</Link></div>
                <div className="nav_tabs"><Link to="#">Profile Building & Development</Link></div>
            </div>
            <div className="Poster_Search">
                <div className="Search_heading">Find the perfect <span>course</span> for your resume</div>
                <form className="Search_section">
                    <div className="Search_left">
                        <img className="search_symbol" src={Search}></img>
                        <input className="Search_bar" type="text" placeholder='Try "graphic designing"' />
                    </div>
                    <Link className="Search" to="#">search</Link>
                </form>
            </div>
        </div>
    )
};

export default Poster;