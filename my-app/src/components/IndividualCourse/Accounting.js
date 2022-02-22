import Banner from './Banner/Banner';
import Objective from './objective/objective';
import Highlights from './Highlights/Highlights';
import AccountingContent from './Accounting/accountingcontent';
import YourTeacher from './YourTeachers/YourTeachers';
import { useEffect, useState} from 'react';

const Course =() =>{

    const [courseData, setCoursedata] = useState("");
    const [isloaded,setloaded] = useState(false);

    const data = async (course_id) => {
        console.log(course_id);
        try {
            const res = await fetch(`/coursedetails/${course_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const course_details = await res.json();
            // console.log(course_details);
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
        data(window.location.pathname.split('/').pop());
    },[]);

    const Course =  <div>
                        <Banner BannerData={courseData["courseBanner"]}/>
                        <Objective objective={courseData["objective"]}/>
                        <Highlights highlights={courseData["highlights"]}/>
                        <div>
                            <AccountingContent contentData={courseData["content"]}/>
                        </div>
                        <YourTeacher teacher={courseData["courseTutor"]} />
                    </div>

    return(
        <div>
            {isloaded? Course:null}
            {/* {Course} */}
        </div>
        
    );
}

export default Course;