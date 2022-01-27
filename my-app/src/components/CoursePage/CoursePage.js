import CoursePage_Filter from './CoursePage_Filter';
import CoursePage_Courses from './CoursePage_Courses';
import './CoursePage.css';

const CoursePage = () => {
    return (
        <div className="CoursePage">
            <CoursePage_Filter />
            <CoursePage_Courses />
        </div>
    );
};

export default CoursePage;