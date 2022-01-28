import './Courses.css';
import {useEffect, useState} from 'react';
import Search from '../../image/MG.png';
import Filter from '../../image/oil-funnel.png';
import Course_box from './Course_box';
import atharv from '../../image/3 Athu.png';
import tootkit from '../../image/18+ Toolkit.jpg';
import Advance_financial from '../../image/Advance Course in Financial Intelligence.jpg';
import Financial_Accounting from '../../image/Certified Course in Financial Accounting.png';
import Account_Compliance from '../../image/Certified Course in Accounts & Compliance.jpg'
import taxation from '../../image/Certified Course in Taxation.jpg';
import Financial_intelligence from '../../image/Fundamentals of Financial Intelligence.png';
import Passion from '../../image/How to Choose your Passion.jpg';
import Navratnas from '../../image/Navratnas of Time Management.jpg';
import webDevelopment from '../../image/web development.jpg';

const CoursePage_Courses = () => {

    const [userData, setuserData] = useState({});

    const courses = async () => {
        try {
            const res = await fetch("/course", { 
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            // console.log(data);
            setuserData(data);
            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        courses();
    }, []);

    
    let filter_condition = false;
    const onFilterClick = () => {
        const course_filter = document.querySelector('.Course_Filter');

        if (filter_condition == false) {
            course_filter.style.left = "0";
            filter_condition = true;
        }
        else if (filter_condition == true) {
            course_filter.style.left = "-100%";
            filter_condition = false;
        }

    }

    return (
        <div className="Course_Section">
            <div className="course_heading">
                <div className="course_name_section">
                    <div className="course_name">COURSE FOR YOU</div>
                    <img src={Filter} onClick={onFilterClick} className="filter_img"></img>
                </div>
                <div className="course_Search_section">
                    <div className="course_Search_left">
                        <img className="course_search_symbol" src={Search}></img>
                        <input className="course_Search_bar" type="text" placeholder='Try "graphic designing"' />
                    </div>
                    <a className="course_Search" href="#">search</a>
                </div>
            </div>
            <div className="Course_Section_box">
                <div className="Course_section_main">
                    {userData.map((course) => {
                        return(
                            <Course_box courseDiscountPrice={course.courseDiscountPrice} courseGroup={course.courseGroup} courseImage={course.courseImage} courseMRP={course.courseMRP} courseName={course.courseName} courseStarRate={course.courseStarRate} courseTutor={course.courseTutor} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default CoursePage_Courses;