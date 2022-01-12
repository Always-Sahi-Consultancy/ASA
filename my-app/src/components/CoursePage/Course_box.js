import './Courses.css';
import Course_rate from './Course_rate';

const Course_box = (props) => {
    // "Buy_button buy"
    return (
        <div className="course_box">
            <div className="course_img"></div>
            <div className="course_details">
                <h2 className="course_title">{props.title}</h2>
                <Course_rate star={props.star} />
                <div className="course_details_main">
                    <div className="course_details_upper">
                        <div className="Prof_name">{props.Prof_name}</div>
                        <div className="cost_section">
                            <div className="course_cost">{props.course_cost}</div>
                            <div className="original_cost"><s>{props.ori_cost}</s></div>
                        </div>
                    </div>
                    <div className="Course_button">
                        <a href="#" className={`Buy_button buy ${props.index === "1" ? "free_button" : ""}`}>{props.buy_now}</a>
                        <a href="#" className="Buy_button">{props.about_course}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course_box;