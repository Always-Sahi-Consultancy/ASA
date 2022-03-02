
import './DashBoardMain.css';
import MyProgress from './My_progress/My_progress';
import CourseGrid from './CourseGrid/CourseGrid';
import { BrowserRouter, Router, Route, Link} from 'react-router-dom';
import Accounting from '../IndividualCourse/Accounting';

// const DashBoardMain = () =>{
    // const {state, dispatch} = useContext(UserContext);
    // return(
    //     <div className='dashs-container'>
    //         <MyProgress/>
    //         <CourseGrid/>

const DashBoardMain = () =>{
    const data = [{'courseName': 'Web Developement for Everyone','path': 'web_developement_for_everyone', 'page':<Accounting />}]

        return(
        <div>
            <BrowserRouter>
                <Router>
                {data.map(elements => (<Link to={'Dashboard/'+elements.path} />))}

                </Router>
            </BrowserRouter>

            <div className='dashs-container'>
                <MyProgress/>
                <CourseGrid/>
            </div>
        </div>
    );
}

export default DashBoardMain;