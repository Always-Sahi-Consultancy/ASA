import './YourTeachers.css';

const data = {
    "teacher": "Atharv",
    "qualification": "A published technical author, e-learning content writer and programming technologies trainer with 25+ years of experience.",
    "image": "image"
}

const YourTeacher=(props) =>{
    return (
        <div>
            <div className='teacher__heading'>Your teacher</div>
            <div className="teacher-container">
                <div className="teacher__imgContainer"><img src={props.image} className="teacher__img"></img></div>
                <div className="teacher__name">{props.teacher}</div>
                <div className="teacher__qualification">{props.qualification}</div>
            </div>
        </div>
    );
}

export default YourTeacher;