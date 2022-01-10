import './Courses.css';
import Course_rate from './Course_rate';
import Search from '../../image/MG.png';
import Filter from '../../image/oil-funnel.png';

const CoursePage_Courses = () => {
    return (
        <div className="Course_Section">
            <div className="course_heading">
                <div className="course_name_sction">
                    <div className="course_name">COURSE FOR YOU</div>
                    <img src={Filter} className="filter_img"></img>
                </div>
                <form className="Search_section">
                    <div className="Search_left">
                        <img className="search_symbol" src={Search}></img>
                        <input className="Search_bar" type="text" placeholder='Try "graphic designing"' />
                    </div>
                    <a className="Search" href="#">search</a>
                </form>
            </div>
            <div className="Course_Section_box">
                <div className="courses_name">Accounts and Finance</div>
                <div className="Course_section_main">
                    <div className="course_box">
                        <div className="course_img"></div>
                        <div className="course_details">
                            <h2>Basics of Stock Market</h2>
                            <Course_rate />
                            <div className="Prof_name">Atharv Sawant</div>
                            <div className="cost_section">
                                <div className="course_cost">Rs. 499/-</div>
                                <div className="original_cost">Rs. 1000/-</div>
                            </div>
                            <div className="Course_button">
                                <a href="#" className="Buy_now">Buy Now</a>
                                <a href="#" className="About Course">About Course</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePage_Courses;