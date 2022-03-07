import './Courses.css';
import {useEffect, useState} from 'react';
import Search from '../../image/MG.png';
import Filter from '../../image/oil-funnel.png';
import Course_box from './Course_box';

const CoursePage_Courses = () => {

    const [userData, setuserData] = useState({});
    const [filter, setfilter] = useState('');

    const [isloaded, setloaded] = useState(true);// set true for static useage

    const searchText = (e) => {
        setfilter(e.target.value);
    }

    const courses = async () => {
        try {
            const res = await fetch("/course", { 
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            setuserData(data);
            console.log(data);
            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
            setloaded(true);
        } catch (err) {
            console.log(err);
        }
    }

    // useEffect(() => {
    //     courses();
    // }, []);

    // It's just to load the page until Data is ready. 
    const course_details = [
        {
            courseImage: "Account_Compliance",
            courseName: "Certified Course in Accounts & Compliance",
            courseStarRate: 4.0,
            courseType: "Paid",
            courseTutor: "Atharv Laxman Sawant",
            courseDiscountPrice: "999.0",
            courseMRP: "3000.0",
            courseGroup: "Accounts & Finance ",
            about_course: "About Course"
        },
        {
            courseImage: "taxation",
            courseName: "Certified Course in Taxation",
            courseStarRate: 4.0,
            courseType: "Paid",
            courseTutor: "Atharv Laxman Sawant",
            courseDiscountPrice: "1999.0",
            courseMRP: "6000.0",
            courseGroup: "Accounts & Finance  ",
            about_course: "About Course"
        },
        {
            courseImage: "Financial_Accounting",
            courseName: "Certified Course in Financial Accounting",
            courseStarRate: 4.0,
            courseType: "Paid",
            courseTutor: "Atharv Laxman Sawant",
            courseDiscountPrice: "2999.0",
            courseMRP: "8000.0",
            courseGroup: "Accounts & Finance ",
            about_course: "About Course"
        },
        {
            courseImage: "Financial_intelligence",
            courseName: "Fundamentals of Financial Intelligence",
            courseStarRate: 4.0,
            courseType: "Paid",
            courseTutor: "Atharv Laxman Sawant",
            courseDiscountPrice: "599.0",
            courseMRP: "2000.0",
            courseGroup: "Accounts & Finance  ",
            about_course: "About Course"
        },
        {
            courseImage: "Advance_financial",
            courseName: "Advance Course in Financial Intelligence",
            courseStarRate: 4.5,
            courseType: "Paid",
            courseTutor: "Atharv Laxman Sawant",
            courseDiscountPrice: "999.0",
            courseMRP: "2000.0",
            courseGroup: "Accounts & Finance  ",
            about_course: "About Course"
        },
        {
            courseImage: "webDevelopment",
            courseName: "Web Development For Everyone",
            courseStarRate: 5.0,
            courseType: "Paid",
            courseTutor: "Akhil A",
            courseDiscountPrice: "2999.0",
            courseMRP: "5000.0",
            courseGroup: "Programming & Tech",
            about_course: "About Course"
        }
    ];

    // Once page is loaded, change, course_details.filter to userData.filter
    // let dataSearch = course_details.filter(course => {
    //     return course.courseName.toString().toLowerCase().includes(filter.toString().toLowerCase());
    // });
    
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
                        <input className="course_Search_bar" value={filter} onChange={searchText.bind(this)} type="text" placeholder='Try "graphic designing"' />
                    </div>
                    <a className="course_Search" href="#">search</a>
                </div>
            </div>
            <div className="Course_Section_box">
                <div className="Course_section_main">
                    {isloaded?
                    course_details.map((course) => {
                        return(
                            <Course_box courseDiscountPrice={course.courseDiscountPrice} courseGroup={course.courseGroup} courseImage={course.courseImage} courseMRP={course.courseMRP} courseName={course.courseName} courseStarRate={course.courseStarRate} courseTutor={course.courseTutor} courseType={course.courseType} key={course._id}/>
                        )
                    }): null }
                </div>
            </div>
        </div>
    );
};

export default CoursePage_Courses;