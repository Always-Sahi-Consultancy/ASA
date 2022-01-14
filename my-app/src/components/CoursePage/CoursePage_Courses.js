import './Courses.css';
import Search from '../../image/MG.png';
import Filter from '../../image/oil-funnel.png';
import star from '../../image/star.png';
import star1 from '../../image/star1.png';
import Course_box from './Course_box';


const CoursePage_Courses = () => {
    const course_details = [
        {
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
                            <Course_box title={course.title} star={course.stars} Prof_name={course.Prof_name} ori_cost={course.Original_cost} course_cost={course.course_cost} buy_now={course.buy_now} about_course={course.about_course} index={course.index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default CoursePage_Courses;