import './Courses.css';
import Course_rate from './Course_rate';
import Search from '../../image/MG.png';
import Filter from '../../image/oil-funnel.png';

const CoursePage_Courses = () => {
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
                <div className="courses_name">Accounts and Finance</div>
                <div className="Course_section_main">
                    <div className="course_box">
                        <div className="course_img"></div>
                        <div className="course_details">
                            <h2 className="course_title">Basics of Stock Market</h2>
                            <Course_rate />
                            <div className="Prof_name">Atharv Sawant</div>
                            <div className="cost_section">
                                <div className="course_cost">Rs. 499/-</div>
                                <div className="original_cost"><s>Rs. 1000/-</s></div>
                            </div>
                            <div className="Course_button">
                                <a href="#" className="Buy_button">BUY NOW</a>
                                <a href="#" className="Buy_button">ABOUT COURSE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePage_Courses;