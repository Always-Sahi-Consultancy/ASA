import Banner from './Banner/Banner';
import Objective from './objective/objective';
import Highlights from './Highlights/Highlights';
import AccountingContent from './Accounting/accountingcontent';
import YourTeacher from './YourTeachers/YourTeachers';
import {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../App';

import * as CourseData from './CourseData.json';

const Course =() =>{

    const [courseData, setCoursedata] = useState("");
    const [isloaded,setloaded] = useState(false);

    const data = async () => {
        try {
            const res = await fetch('/coursedetails', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const course_details = await res.json();
            setCoursedata(course_details[0]);
            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
            setloaded(true);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        data();
    },[]);

    const Course =  <div>
                        <Banner courseData={courseData["courseBanner"]}/>
                        {console.log(courseData)}
                        <Objective objective={courseData["objective"]}/>
                        <Highlights highlights={courseData["highlights"]}/>
                        <div>
                            <AccountingContent contentData={courseData["accountingContent"]}/>
                        </div>
                        <YourTeacher teacher={courseData["courseTutor"]} />
                    </div>

    const {state, dispatch} = useContext(UserContext);
    return(
        <div>
            {isloaded? Course:null}
            {/* {Course} */}
        </div>
        
    );
}

export default Course;