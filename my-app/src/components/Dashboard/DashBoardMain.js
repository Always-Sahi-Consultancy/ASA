
import './DashBoardMain.css';
import MyProgress from './My_progress/My_progress';
import CourseGrid from './CourseGrid/CourseGrid';
import { useContext } from 'react';
import {UserContext} from '../../App';

const DashBoardMain = () =>{
    const {state, dispatch} = useContext(UserContext);
    return(
        <div className='dashs-container'>
            <MyProgress/>
            <CourseGrid/>
        </div>
    );
}

export default DashBoardMain;