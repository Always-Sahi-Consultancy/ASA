
import './Courses.css';

const Course_rate = (props) => {
    return (
        <div className="course_star">
            {props.star.map((s) => {
                return (
                    <img className="course_star_element" src={s.star}></img>
                )
            })}
        </div>
    );
};

export default Course_rate;