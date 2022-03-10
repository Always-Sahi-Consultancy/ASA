import Banner from './Banner/Banner';
import Objective from './objective/objective';
import Highlights from './Highlights/Highlights';
import AccountingContent from './Accounting/accountingcontent';
import YourTeacher from './YourTeachers/YourTeachers';
import { useEffect, useState} from 'react';

const ACFI =() =>{

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
        "title":"Advance Course in Financial Intelligence",
        "image":"Financial",
        "subtitle": "From Earning to Wealth creation, this Course is a Complete power booster for your Finance Journey.",
        "rating": "4.9",
        "price": "999",
        "priceMRP": "2000",
        "purchaseURL": "",
        "video": "#",
        "link": "#"
      },
      "objective":[
        "Anyone who needs to understand the Savings concept of money, and Plan an Investment out of it.",
        "Anyone who is new to Trading or Investments in Securities Market.",
        "Anyone who Wants to Understand the fundas of Investment & Returns from Stock Market."
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
          "name": "Concept of Savings",
          "details": [
            "Managing Primary Income",
            "Source from Secondary Income",
            "Returns on Savings"
          ]
        },
        {
          "name": "Baseline to Investment",
          "details": [
            "Multiple Options to Invest",
            "Returns on Multiple Investments",
            " Taxes on Multiple Investments",
            "Investment in Securities Market"
          ]
        },
        {
          "name": "Basics of Investment",
          "details": [
            "Opening a Demat Account",
            "Creating a Watch List",
            "Placing Orders in Securities Market"
          ]
        },
        {
          "name": "Analysis",
          "details": [
            "Types of Analysis",
            "Technical Analysis",
            "Topics under Fundamental Analysis",
            "Everything about candle Stick"
          ]
        },
        {
          "name": "All About IPO",
          "details": [
            "What is IPO",
            "How to Research for an IPO",
            "How to Apply for an IPO"
          ]
        },
        {
          "name": "Everything about Taxes & Returns",
          "details": [
            "Everything about TDS",
            "Trainings on Deductions",
            "Filing ITR 1 & ITR 4",
            "Replies & Queries."
          ]
        },
        {
          "name": "Concept of Goods & Service Tax",
          "details": [
            "What is GST ?",
            " Who is GST for ?",
            "How to get GST Registration?",
            " How to Calculate GST?"
          ]
        },
        {
          "name": "GST Challans and Payment",
          "details": [
            "How to Pay GST",
            "Introduction to Investment",
            "Introduction to Securities Market."
          ]
        },
        {
          "name": "Basics of Trading & Investment",
          "details": [
            "Opening a Demat Account",
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

export default ACFI;