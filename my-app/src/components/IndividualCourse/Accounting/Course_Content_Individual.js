import React, { useState } from "react";
import '../content/content.css';
const Course_Content_Individual = (props) => {
    const [contentC, setContentC] = useState(false);
    const dropdownC = () => {
        setContentC(!contentC);
        console.log("hi");
    }
    return (
        <div className='content__info' id={props.id}>
            <div className={`name__row ${contentC === true ? 'name__new' : ""} ${props.id === "6" ? "Addition_power" : ""}`} onClick={dropdownC} >
                <div className='arrowC'>&#x25B6;</div>
                <div className='content__name'> {props.name}</div>
            </div>
            <div className='content__list' style={contentC ? { display: "block" } : { display: "none" }}>
                {props.details.map((sub) =>
                    <div className='content__list-element'>
                        <div className='content__list-icon'>&#x25B6;</div>
                        <div className='content__list-content'>{sub.info}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Course_Content_Individual;