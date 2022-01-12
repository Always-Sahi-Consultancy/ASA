import './YourTeachers.css';

const YourTeacher=() =>{
    return (
        <div>
            <div className='teacher__heading'>Your teacher</div>
            <div className="teacher-container">
                <div className="teacher__imgContainer"><img className="teacher__img"></img></div>
                <div className="teacher__name">Name of Instructor</div>
                <div className="teacher__qualification">A published technical author, e-learning content writer and programming technologies trainer with 25+ years of experience.</div>
            </div>
        </div>
    );
}

export default YourTeacher;