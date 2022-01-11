import React, { useState } from "react";
import '../content/content.css';

const ContentFinance=() =>{
    const financeData=[
        {
            'id':'1',
            'name':'Basics of Accounts',
            'details':[
                {'info':"3 Golden Rules"},  
                {'info':"Journal Entries"},  
                {'info':"Financial Statements Study"},
            ]
        },
        {
            'id':'2',
            'name':'Intdoduction to Tally Erp 9 ',
            'details':[
                {'info':"Everything About Tally  "},  
                {'info':"Ledger Creation "},  
                {'info':"Invoicing"},
            ]
        },
        {
            'id':'3',
            'name':'Advance Tally Erp 9 ',
            'details':[
                {'info':"Payroll  "},  
                {'info':"Godown  "},  
                {'info':"Order Processing  "},
                {'info':"Financial Reports"},
                {'info':"Export & Import"},  
                {'info':"Advance Topics  "},
            ]
        },
        {
            'id':'4',
            'name':'Taxation in Tally Erp 9  ',
            'details':[
                {'info':"TDS Entries in Tally "},  
                {'info':"GST Entries in Tally "},  
                {'info':"Tax Management in Tally "},
            ]
        },
        {
            'id':'5',
            'name':'Compliances ',
            'details':[
                {'info':"PAN Registration "},  
                {'info':"TAN Registration "},  
                {'info':"Shop Act Registration"},
            ]
        },
        {
            'id':'6',
            'name':'Direct Taxes  ',
            'details':[
                {'info':"Introduction to TDS "},  
                {'info':"Calculation & Payment of TDS "},  
                {'info':"TDS Challan & Form 16   "}
            ]
        },
        {
            'id':'7',
            'name':'Income Tax Returns ',
            'details':[
                {'info':"Forms of Income Tax returns  "},  
                {'info':"Deductions in ITR "},  
                {'info':"Individual & professional Tax Filing"}
            ]
        },
        {
            'id':'8',
            'name':'Corporate Tax Management ',
            'details':[
                {'info':"Goods & Service Tax Registration "},  
                {'info':"GST Compliance & GST Sales Filing  "},  
                {'info':"GST Report & GST Payment "},
                {'info':"GST Challan & GST Replies  "}
            ]
        },
        
        {
            'id':'9',
            'name':'ADDITIONAL Power Pack with the Course ',
            'details':[
                {'info':"Digital Freelancing Tools"},  
                {'info':"All About Instagram Marketing"},  
                {'info':"How to Make your Linkedin Profile"},
                {'info':"How to Use Google Drive & Google Forms"},  
                {'info':"How to Manage Database"},  
            ]
        },
    ];

    // let cond = false;
    // const dropdown = () => {
    //     const list_dropdown = document.querySelector('.content__list');
    //     const arrowC = document.getElementById("arrow");

    //     if (cond == false) {
    //         list_dropdown.style.display = "block";
    //         cond = true;
    //         arrowC.style.transform = "rotate(180deg)";
    //     }
    //     else if (cond == true) {
    //         list_dropdown.style.display = "none";
    //         cond = false;
    //         arrowC.style.transform = "rotate(0deg)";
    //     }
    // }

    const [contentC,setContentC] = useState(false);

    const dropdownC = () =>{
        setContentC(!contentC);
    }

    return(
        <div className='content-container'>
            <div className='content__heading'>Course content</div>
            {
                financeData.map((item)=>
                <div className='content__info' id={item.id}>
                    <div className={`name__row ${contentC === true ? 'name__new' : ""}`} onClick={dropdownC} >
                        <div className='arrow'>&#x25B6;</div>
                        <div className='content__name'> {item.name}</div>
                    </div>
                    <div className='content__list' style={contentC ? { display: "block" } : { display: "none" }}>
                        {item.details.map((sub)=>
                            <div className='content__list-element'>
                                <div className='content__list-icon'>&#x25B6;</div>
                                <div className='content__list-content'>{sub.info}</div>
                            </div>
                        )}
                    </div> 
                </div>
                )
            }
        </div>
    );
}

export default ContentFinance;