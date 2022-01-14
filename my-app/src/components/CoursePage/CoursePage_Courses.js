import './Courses.css';
import Search from '../../image/MG.png';
import Filter from '../../image/oil-funnel.png';
import star from '../../image/star.png';
import star1 from '../../image/star1.png';
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
    const course_details = [
        {
            image: webDevelopment,
            title: "Web Development For Everyone",
            stars: [
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                }
            ],
            index: "0",
            Prof_name: "Atharv",
            course_cost: "Rs. 2999",
            Original_cost: "Rs. 5000",
            buy_now: "Buy Now",
            about_course: "About Course"
        },
        {
            image: Financial_Accounting,
            title: "Certified Course in Financial Accounting",
            stars: [
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                }
            ],
            index: "0",
            Prof_name: "Atharv",
            course_cost: "Rs. 2999",
            Original_cost: "Rs. 8000",
            buy_now: "Buy Now",
            about_course: "About Course"
        },
        {
            image: tootkit,
            title: "A Free toolkit for 18+",
            stars: [
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star
                }
            ],
            index: "1",
            Prof_name: "Atharv",
            course_cost: "",
            Original_cost: "",
            buy_now: "Free",
            about_course: "Get it"
        },
        {
            image: Financial_intelligence,
            title: "Fundamentals of Financial Intelligence",
            stars: [
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star
                }
            ],
            index: "0",
            Prof_name: "Atharv",
            course_cost: "Rs. 599",
            Original_cost: "Rs. 2000",
            buy_now: "Buy Now",
            about_course: "About Course"
        },
        {
            image: Navratnas,
            title: "Navratnas of Time Management",
            stars: [
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star
                }
            ],
            index: "1",
            Prof_name: "Atharv",
            course_cost: "",
            Original_cost: "",
            buy_now: "Free",
            about_course: "About Course"
        },
        {
            image: Passion,
            title: "How to Find Your Passion",
            stars: [
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star
                }
            ],
            index: "1",
            Prof_name: "Atharv",
            course_cost: "",
            Original_cost: "",
            buy_now: "Free",
            about_course: "About Course"
        },
        {
            image: Passion,
            title: "Create your LindedIn Profile",
            stars: [
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star
                }
            ],
            index: "1",
            Prof_name: "Atharv",
            course_cost: "",
            Original_cost: "",
            buy_now: "Free",
            about_course: "About Course"
        },
        {
            image: Advance_financial,
            title: "Advance Course in Financial Intelligence",
            stars: [
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star
                }
            ],
            index: "0",
            Prof_name: "Atharv",
            course_cost: "Rs. 999",
            Original_cost: "Rs. 1000",
            buy_now: "Buy Now",
            about_course: "About Course"
        },
        {
            image: Account_Compliance,
            title: "Certified Course in Accounts & Compliance",
            stars: [
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star
                }
            ],
            index: "0",
            Prof_name: "Atharv",
            course_cost: "Rs. 999",
            Original_cost: "Rs. 2000",
            buy_now: "Buy Now",
            about_course: "About Course"
        },
        {
            image: taxation,
            title: "Certified Course in Taxation",
            stars: [
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star1
                },
                {
                    star: star
                }
            ],
            index: "0",
            Prof_name: "Atharv",
            course_cost: "Rs. 1999",
            Original_cost: "Rs. 4000",
            buy_now: "Buy Now",
            about_course: "About Course"
        },
    ];

    return (
        <div className="Course_Section">
            <div className="course_heading">
                <div className="course_name_section">
                    <div className="course_name">COURSE FOR YOU</div>
                    <img src={Filter} className="filter_img"></img>
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
                {/* <div className="courses_name">Accounts and Finance</div> */}
                <div className="Course_section_main">
                    {course_details.map((course) => {
                        return (
                            <Course_box title={course.title} star={course.stars} Prof_name={course.Prof_name} ori_cost={course.Original_cost} course_cost={course.course_cost} buy_now={course.buy_now} about_course={course.about_course} index={course.index} image={course.image} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default CoursePage_Courses;