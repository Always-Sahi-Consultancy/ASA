import React, { useState } from "react";
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
            <div className='video__list' style={contentV ? { display: "block" } : { display: "non" }} onClick={dropdownV}>
                {props.details.map((sub) =>
                    <div className='video__list-element'>
                        <div className='video__list-icon'></div>
                        <div className='video__list-content'><img src={sub.image} className="icon-image" alt="desktop"></img>{sub.info}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoContent;