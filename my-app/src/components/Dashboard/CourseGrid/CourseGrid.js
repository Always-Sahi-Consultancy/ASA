import CourseGridview from "./CourseGridview";
import CourseListview from "./CourseListview";
import Coding from '../../../image/work-g2261fc175_1920.jpg';
import gridBlack from '../../../image/courses/gridBlack.png';
import gridRed from '../../../image/courses/gridRed.png';
// import Link from "react-router-dom";
import listBlack from '../../../image/courses/listBlack.png';
import listRed from '../../../image/courses/listRed.png';
import React, { useState } from 'react';


const CourseGrid = () => {
    const data = [
        {
            'image': Coding,
            'title': "CODING AND WEB DEVELOPMENT",
            'percentage': "45%",
            'link': "#"
        },
        {
            'image': Coding,
            'title': "CERTIFIED COURSE IN ACCOUNTS AND COMPLIANCE",
            'percentage': "45%",
            'link': "#"
        },
        {
            'image': Coding,
            'title': "CODING AND WEB DEVELOPMENT",
            'percentage': "45%",
            'link': "#"
        },
        {
            'image': Coding,
            'title': "CODING AND WEB DEVELOPMENT",
            'percentage': "45%",
            'link': "#"
        }
    ];

    const [courseGrid, setCourseGrid] = useState(false);

    const GridHandler = () => {

        setCourseGrid(!courseGrid);

        const Gridview = document.querySelector(".Gridview__container");
        const Listview = document.querySelector(".Listview__container");
        if (courseGrid === false) {
            Gridview.style.display = "none";
            Listview.style.display = "block";
        }
        else if (courseGrid === true) {
            Gridview.style.display = "block";
            Listview.style.display = "none";
        }
    }

    return (
        <div className='ListGrid__container'>
            <div className="Gridview__container">
                <div className='Gridview__head'>
                    <div className='Gridview__icon' onClick={GridHandler}>
                        <img className='black' src={listBlack}></img>
                        <img className='red' src={listRed}></img>
                    </div>
                </div>
                <div className='Gridview__body'>
                    {data.map((item) => <CourseGridview image={item.image} title={item.title} percentage={item.percentage} />)}
                </div>
            </div>
            <div className='Listview__container'>
                <div className='Listview__head'>
                    <div className='Listview__icon' onClick={GridHandler}>
                        <img className='black' src={gridBlack}></img>
                        <img className='red' src={gridRed}></img>
                    </div>
                </div>
                <div className='Listview__body'>
                    {data.map((item) => <CourseListview image={item.image} title={item.title} percentage={item.percentage} />)}
                </div>
            </div>
            {/* <CourseGridview onChange={courseGrid} />
            <CourseListview onChange={courseGrid} /> */}

        </div>

    )
};
export default CourseGrid;