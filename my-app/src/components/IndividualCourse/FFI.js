import Banner from './Banner/Banner';
import Objective from './objective/objective';
import Highlights from './Highlights/Highlights';
import AccountingContent from './Accounting/accountingcontent';
import YourTeacher from './YourTeachers/YourTeachers';
import { useEffect, useState} from 'react';

const FFI =() =>{

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
        "title":"Fundamentals of Financial Intelligence",
        "image":"Financial",
        "subtitle": "Creating a Strong base for your journey towards wealth creation at an Early stage.",
        "rating": "4.9",
        "price": "2000",
        "priceMRP": "599",
        "purchaseURL": "",
        "video": "#",
        "link": "#"
      },
      "objective":[
        "Anyone who has just turned 18 or is about to turn 18, and is looking forward for a proper guidance to work on yourself.",
        "Anyone who aims to do wonders in life, and not only live a minimum lifestyle, who is ready to take challenges.",
        "Anyone who wants to know how to master the concept of Finance, Investment, Tax & Family Budget Planning."
      ],
      "highlights": [
        "Quality Online Training",
        "Life Long Course Access",
        "Industry based Assignments",
        "Regular Notes & Study Materials",
        "ISO 9001: 2015 Reputed Certification",
        "Free Booklet post Completion of Course."
      ],
      "courseTutor": {
        "tutor": "Atharv Laxman Sawant",
        "qualification": "A published technical author, e-learning content writer and programming technologies trainer with 25+ years of experience.",
        "image": "tutorAtharv"
      },
      "content": [
        {
          "name": "Necessary things post 18",
          "details": [
            "Updating Aadhar Card",
            "Getting an Email & Phone",
            "Getting a PAN Card",
            "Making an Efiling Profile"
          ]
        },
        {
          "name": "Individual Compliances",
          "details": [
            "What is a Shop Act",
            "What is a DSC",
            "How to Open a Bank Account.",
            "How to Open Independent Payment Services (UPI)"
          ]
        },
        {
          "name": "Earning Opportunities for a Student",
          "details": [
            "Freelancing",
            "Sole Propriotership",
            "Becoming a Virtual Assistant"
          ]
        },
        {
          "name": "Developing Independent Profiles",
          "details": [
            "Resume Writing",
            "Creating LinkedIn Profile",
            "Using Instagram for Business",
            "How to stand different from Others"
          ]
        },
        {
          "name": "All about Earning",
          "details": [
            "Earning Primary Income",
            "Savings Concept",
            "Expenditure Concept"
          ]
        },
        {
          "name": "All about Banking Sector",
          "details": [
            "Bank Accounts (Savings & Current)",
            "Deposits with Banks",
            "Returns & Features of Deposits",
            "Loan facilities with Banks"
          ]
        },
        {
          "name": "Concept of Tax Management",
          "details": [
            "What is a Direct Tax",
            "How much Tax do we pay ?",
            "When do we pay Tax ?",
            "How do we pay Tax? "
          ]
        },
        {
          "name": "Concept of Income Tax Returns",
          "details": [
            "What is ITR ?",
            "Who files an ITR ?",
            "When do we file ITR ?",
            "NIL return to Family Income Tax Returns"
          ]
        },
        {
          "name": "Concept of Finance Management",
          "details": [
            "Introducing the Concept of Secondary Income",
            "Introduction to Investment",
            "Introduction to Securities Market."
          ]
        },
        {
          "name": "Basics of Trading & Investment",
          "details": [
            "Opening a Demat Account ",
            "Funds Management to Investment",
            "Basics of Securities Market",
            "Tracking Returns & Inflation"
          ]
        },
        {
          "name": "Reducing Hidden Expenditure",
          "details": [
            "How to Save Taxes",
            "How to Raise returns. "
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

export default FFI;