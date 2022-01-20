
import './DashBoardMain.css';
import MyProgress from './My_progress/My_progress';
import CourseGrid from './CourseGrid/CourseGrid';
const DashBoardMain = () =>{
    return(
        <div className='dash-container'>
            <MyProgress/>
            <CourseGrid/>
        </div>
    );
}

export default DashBoardMain;