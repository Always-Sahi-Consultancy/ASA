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
            console.log(course_details);
            setCoursedata(course_details);
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
        if(isloaded){

        }
    },[]);

    const Course =  <div>
                        <Banner />
                        {/* {console.log(data)} */}
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
            {/* {Course} */}
        </div>
        
    );
}

export default Course;