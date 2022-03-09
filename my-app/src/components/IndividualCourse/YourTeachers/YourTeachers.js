import './YourTeachers.css';
import tutorAtharv from '../../../image/Atharv_Sawant_Transparent.png';

const CourseImage = {
    "tutorAtharv": tutorAtharv
}

const YourTeacher=(props) =>{

    const data = props.teacher;
    console.log(data);

    return (
        <div>
            <div className='teacher__heading'>Your teacher</div>
            <div className="teacher-container">
                <div className="teacher__imgContainer"><img src={CourseImage[data["image"]]} alt={data["tutor"]+" Profile Image"} className="teacher__img"></img></div>
                <div className="teacher__name">{data["tutor"]}</div>
                <div className="teacher__qualification">{data["qualification"]}</div>
            </div>
        </div>
    );
}

export default YourTeacher;