import './Courses.css';
import Course_rate from './Course_rate';

const Course_box = (props) => {
    return (
        <div className="course_box">
            <div className="course_img"></div>
            <div className="course_details">
                <h2 className="course_title">{props.title}</h2>
                <Course_rate star={props.star} />
                <div className="Prof_name">{props.Prof_name}</div>
                <div className="cost_section">
                    <div className="course_cost">{props.course_cost}</div>
                    <div className="original_cost"><s>{props.ori_cost}</s></div>
                </div>
                <div className="Course_button">
                    <a href="#" className="Buy_button">BUY NOW</a>
                    <a href="#" className="Buy_button">ABOUT COURSE</a>
                </div>
            </div>
        </div>
    );
};

export default Course_box;