import React, { useState } from "react";
import '../content/content.css';
import Course_Content_Individual from './Course_Content_Individual';

const AccountingContent = () => {
    const contentData = [
        {
            'id': '1',
            'name': 'Basics of Accounts',
            'details': [
                { 'info': "3 Golden Rules" },
                { 'info': "Journal Entries" },
                { 'info': "Financial Statements Study" },
            ]
        },
        {
            'id': '2',
            'name': 'Intdoduction to Tally Erp 9 ',
            'details': [
                { 'info': "Everything About Tally  " },
                { 'info': "Ledger Creation " },
                { 'info': "Invoicing" },
            ]
        },
        {
            'id': '3',
            'name': 'Advance Tally Erp 9 ',
            'details': [
                { 'info': "Payroll  " },
                { 'info': "Godown  " },
                { 'info': "Order Processing  " },
                { 'info': "Financial Reports" },
                { 'info': "Export & Import" },
                { 'info': "Advance Topics  " },
            ]
        },
        {
            'id': '4',
            'name': 'Taxation in Tally Erp 9  ',
            'details': [
                { 'info': "TDS Entries in Tally " },
                { 'info': "GST Entries in Tally " },
                { 'info': "Tax Management in Tally " },
            ]
        },
        {
            'id': '5',
            'name': 'Compliances ',
            'details': [
                { 'info': "PAN Registration " },
                { 'info': "TAN Registration " },
                { 'info': "Shop Act Registration" },
            ]
        }, {
            'id': '6',
            'name': 'ADDITIONAL Power Pack with the Course ',
            'details': [
                { 'info': "Digital Freelancing Tools" },
                { 'info': "All About Instagram Marketing" },
                { 'info': "How to Make your Linkedin Profile" },
                { 'info': "How to Use Google Drive & Google Forms" },
                { 'info': "How to Manage Database" },
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

    

    return (
        <div className='content-container'>
            <div className='content__heading'>Course content</div>
            {
                contentData.map((item) =>
                    <Course_Content_Individual name={item.name} id={item.id} details={item.details} />
                )
            }
        </div>
    );
}

export default AccountingContent;