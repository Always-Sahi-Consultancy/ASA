import Banner from './Banner/Banner';
import Objective from './objective/objective';
import Highlights from './Highlights/Highlights';
import AccountingContent from './Accounting/accountingcontent';
import YourTeacher from './YourTeachers/YourTeachers';
import { useEffect, useState} from 'react';

const WDE =() =>{

    const [courseData, setCoursedata] = useState("");
    const [isloaded,setloaded] = useState(true);

    // const data = async (course_id) => {
    //     console.log(course_id);
    //     try {
    //         const res = await fetch(`/coursedetails/${course_id}`, {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         });

    //         const course_details = await res.json();
    //         // console.log(course_details);
    //         setCoursedata(course_details);
    //         if(!res.status === 200) {
    //             const error = new Error(res.error);
    //             throw error;
    //         }
    //         setloaded(true);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // useEffect(() => {
    //     data(window.location.pathname.split('/').pop());
    // },[]);

    const accounts = {
      "courseBanner":{
        "title":"Web Development for Everyone",
        "image":"Financial",
        "subtitle": "Anyone who want to get started in web development and learn the basics to advance of Html, CSS, and JavaScript.",
        "rating": "4.9",
        "price": "2999",
        "priceMRP": "3000",
        "purchaseURL": "",
        "video": "#",
        "link": "#"
      },
      "objective":[
        "Easy to Learn: Anyone can get started in web development from any background. It’s quite easy.",
        "Its creative: You can create whatever you want using the web to display your talent to put forward a business idea.",
        "Demand for developers: Web development is one of the most required fields in the market now. "
      ],
      "highlights": [
        "90+ video lectures",
        "Life time access to material",
        "Assignments",
        "Min-Projects 2+",
        "Certificate of completion",
        "ISO 9001: 2015 Reputed certification",
        "Self-paced course."
      ],
      "courseTutor": {
        "tutor": "Akhil A",
        "qualification": "A published technical author, e-learning content writer and programming technologies trainer with years of experience.",
        "image": "tutorAkhil"
      },
      "content": [
        {
          "name": "Environment setup",
          "details": [
            "Introduction to GitHub",
            "Installation of required software",
            "Installation of extensions"
          ]
        },
        {
          "name": "HTML",
          "details": [
            "Basic structure of the HTML document",
            "Text formatting",
            "Class and Id",
            "Forms",
            "Meta"
          ]
        },
        {
          "name": "CSS",
          "details": [
            "Introduction to CSS",
            "Typography",
            "Class and Id",
            "Flex",
            "Grid",
            "RWD"
          ]
        },
        {
          "name": "JavaScript",
          "details": [
            "Basic of JavaScript",
            "Introduction to basic programming",
            "Variables in JavaScript",
            "Loops",
            "Functions",
            "Classes",
            "Async and Await",
            "Promise",
            "Session storage",
            "Cookies"
          ]
        }
      ]
    };

    // console.log(data["courseBanner"])
    const Course =  <div>
                        <Banner BannerData={accounts["courseBanner"]}/>
                        <Objective objective={accounts["objective"]}/>
                        <Highlights highlights={accounts["highlights"]}/>
                        <div>
                            <AccountingContent contentData={accounts["content"]}/>
                        </div>
                        <YourTeacher teacher={accounts["courseTutor"]} />
                    </div>

    return(
        <div>
            {isloaded? Course:null}
            {/* {Course} */}
        </div>
        
    );
}

export default WDE;