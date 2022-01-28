import './Courses.css';
import Course_rate from './Course_rate';
import Account_Compliance from '../../image/Certified Course in Accounts & Compliance.jpg';
import taxation from '../../image/Certified Course in Taxation.jpg';
import Financial_Accounting from '../../image/Certified Course in Financial Accounting.png';
import Financial_intelligence from '../../image/Fundamentals of Financial Intelligence.png';
import Advance_financial from '../../image/Advance Course in Financial Intelligence.jpg';
import Web_image from '../../image/web development.jpg';

const CourseImage = {
    "Account_Compliance": Account_Compliance,
    "taxation": taxation,
    "Financial_Accounting": Financial_Accounting,
    "Financial_intelligence": Financial_intelligence,
    "Advance_financial": Advance_financial,
    "Web_image": Web_image
}

const Course_box = (props) => {
    // "Buy_button buy"
    return (
        <div className="course_box">
            <div className="course_img"><img className="course_main_img" src={CourseImage[props.courseImage]} alt={props.courseImage}></img></div>
            <div className="course_details">
                <h2 className="course_title">{props.courseName}</h2>
                {console.log(props.courseImage)}
                <div className="course_details_main">
                    <div className="course_details_upper">
                        <Course_rate star={props.courseStarRate} />
                        <div className="Prof_name">{props.courseTutor}</div>
                        <div className="cost_section">
                            <div className="course_cost">{props.courseDiscountPrice}</div>
                            <div className="original_cost"><s>{props.courseMRP}</s></div>
                        </div>
                    </div>
                    <div className="Course_button">
                        <a href="#" className={`Buy_button buy ${props.courseMRP < "0" ? "free_button" : ""}`}>Buy Now</a>
                        <a href="#" className="Buy_button">About Course</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course_box;