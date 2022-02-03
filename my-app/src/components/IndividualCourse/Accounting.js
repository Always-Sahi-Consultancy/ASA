import Banner from './Banner/Banner';
import Objective from './objective/objective';
import Highlights from './Highlights/Highlights';
import AccountingContent from './Accounting/accountingcontent';
import YourTeacher from './YourTeachers/YourTeachers';
import {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../App';

import * as CourseData from './CourseData.json';

const Course =() =>{

    const [isloaded,setloaded] = useState(false);

    let courseInfo;
    console.log(courseInfo);

    let courseName, courseData;
    const data = async (pathname) => {
        courseInfo= CourseData.default[pathname];
        console.log(courseInfo);
        courseName= courseInfo["courseName"];
        console.log(courseName);
        courseData = courseInfo["courseData"];
        console.log(courseData);
        if(courseData != undefined){
            setloaded(true);
            // console.log(isloaded);
        }
    }

    useEffect(() => {
        data(window.location.pathname)
    },[]);

    const Course =  <div>
                        <Banner />
                        {console.log(courseName)}
                        <Objective/>
                        <Highlights/>
                        <div>
                            <AccountingContent/>
                        </div>
                        <YourTeacher/>
                    </div>

    const {state, dispatch} = useContext(UserContext);
    return(
        <div>
            {isloaded? Course:null}
        </div>
        
    );
}

export default Course;