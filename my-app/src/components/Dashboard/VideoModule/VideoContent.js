import React, { useState } from "react";
import desktop from '../../../image/play_Desktop.png';
import { Link } from "react-router-dom";
import './VideoModule.css';
const VideoContent = (props) => {
    const [contentV, setContentV] = useState(false);
    const dropdownV = () => {
        setContentV(!contentV);
        // console.log("hi");
    }
    return (
        <div className='video__info' id={props.id}>
            <div className={`name__row ${contentV === true ? 'name__new' : ""} `} onClick={dropdownV} >
                <div className='video__name'> {props.name}</div>
            </div>
            <div className='video__list' style={contentV ? { display: "block" } : { display: "none" }} onClick={dropdownV}>
                {props.details.map((sub) =>
                    <div className='video__list-element'>
                        <div className='video__list-icon'><img src={desktop} className="icon-image" alt="desktop"></img></div>
                        <Link className='video__list-link' to={"/Course/"+props.video+"/"+sub.info.split(" ").join("")} >
                        <div className='video__list-content'>{sub.info}</div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoContent;