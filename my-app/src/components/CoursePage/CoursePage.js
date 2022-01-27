import CoursePage_Filter from './CoursePage_Filter';
import CoursePage_Courses from './CoursePage_Courses';
import './CoursePage.css';
import {useContext} from 'react';
import {UserContext} from '../../App';

const CoursePage = () => {
    const {state, dispatch} = useContext(UserContext);
    return (
        <div className="CoursePage">
            <CoursePage_Filter />
            <CoursePage_Courses />
        </div>
    );
};

export default CoursePage;