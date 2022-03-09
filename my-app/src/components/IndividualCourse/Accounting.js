import Banner from './Banner/Banner';
import Objective from './objective/objective';
import Highlights from './Highlights/Highlights';
import AccountingContent from './Accounting/accountingcontent';
import YourTeacher from './YourTeachers/YourTeachers';
import { useEffect, useState} from 'react';

const Course =() =>{

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
        "title":"Certified Course in Accounts & Compliance",
        "image":"Financial",
        "subtitle": "This Course will guide you through all the Aspects of Accounting & Basics of Compliances like PAN to TAN, along with Tally Erp 9 & Tally Prime.",
        "rating": "4.9",
        "price": "",
        "priceMRP": "",
        "purchaseURL": "",
        "video": "#",
        "link": "#"
      },
      "objective":[
        "Any student, aims to make his career in Consultancy sector, & grow his profile in Commerce field.",
        "Any Individual who wants an Escape from his 9-5 job in future, and want to start his/her own Freelancing & Side Hustle.",
        "Any Individual, who Aims to Manage Taxes of their own Family members, and utilize this Course for Self Help. "
      ],
      "highlights": [
        "Quality Online Training",
        "Life Long Course Access",
        "4 Assignments",
        "Regular Notes & Study Materials",
        "ISO 9001: 2015 Reputed Certification",
        "Letter of Recommendation post Assignments"
      ],
      "courseTutor": {
        "tutor": "Atharv Laxman Sawant",
        "qualification": "A published technical author, e-learning content writer and programming technologies trainer with 25+ years of experience.",
        "image": "tutorAtharv"
      },
      "content": [
        {
          "name": "Basics of Accounts",
          "details": [
            "3 Golden Rules",
            "Journal Entries",
            "Financial Statements Study"
          ]
        },
        {
          "name": "Intdoduction to Tally Erp 9",
          "details": [
            "Everything About Tally",
            "Ledger Creation",
            "Invoicing"
          ]
        },
        {
          "name": "Advance Tally Erp 9",
          "details": [
            "Payroll",
            "Godown",
            "Order Processing",
            "Financial Reports",
            "Export & Import",
            "Advance Topics"
          ]
        },
        {
          "name": "Taxation in Tally Erp 9",
          "details": [
            "TDS Entries in Tally",
            "GST Entries in Tally",
            "Tax Management in Tally"
          ]
        },
        {
          "name": "Compliances",
          "details": [
            "PAN Registration",
            "TAN Registration",
            "Shop Act Registration"
          ]
        },
        {
          "name": "ADDITIONAL Power Pack with the Course",
          "details": [
            "ADDITIONAL Power Pack with the Course",
            "How to Make your Linkedin Profile",
            "How to Use Google Drive & Google Forms",
            "How to Manage Database. "
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

export default Course;