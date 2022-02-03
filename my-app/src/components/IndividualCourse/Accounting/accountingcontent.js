import React, { useState } from "react";
import '../content/content.css';
import Course_Content_Individual from './Course_Content_Individual';

const AccountingContent = (props) => {
    const contentData = props.contentData;

    console.log(contentData);

    // let cond = false;
    // const dropdown = () => {
    //     const list_dropdown = document.querySelector('.content__list');
    //     const arrowC = document.getElementById("arrow");

    //     if (cond == false) {
    //         list_dropdown.style.display = "block";
    //         cond = true;
    //         arrowC.style.transform = "rotate(180deg)";
    //     }
    //     else if (cond == true) {
    //         list_dropdown.style.display = "none";
    //         cond = false;
    //         arrowC.style.transform = "rotate(0deg)";
    //     }
    // }

    

    return (
        <div className='content-container'>
            <div className='content__heading'>Course content</div>
            {
                contentData.map((item) =>
                    <Course_Content_Individual name={item.name} id={item.id} details={item.details} />
                )
            }
        </div>
    );
}

export default AccountingContent;