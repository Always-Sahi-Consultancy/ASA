import './YourTeachers.css';

const YourTeacher=(props) =>{

    const data = props.teacher;

    return (
        <div>
            {console.log(data)}
            <div className='teacher__heading'>Your teacher</div>
            <div className="teacher-container">
                <div className="teacher__imgContainer"><img src={data["image"]} className="teacher__img"></img></div>
                <div className="teacher__name">{data["tutor"]}</div>
                <div className="teacher__qualification">{data["qualification"]}</div>
            </div>
        </div>
    );
}

export default YourTeacher;