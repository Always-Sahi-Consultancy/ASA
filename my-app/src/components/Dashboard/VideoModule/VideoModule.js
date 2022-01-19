import './VideoModule.css';
import VideoContent from './VideoContent';
import Desktop from '../../../image/play_Desktop.png';

import React, { useState } from "react";

const VideoModule = () => {
    const videoData = [
        {
            'id': '1',
            'name': 'Basics of Accounts',
            'details': [
                { 'info': "3 Golden Rules",
                'image' : Desktop,
             },
                { 'info': "Journal Entries",
                'image' : Desktop,
             },
                { 'info': "Financial Statements Study",
                'image' : Desktop,
             },
            ]
        },
        {
            'id': '2',
            'name': 'Intdoduction to Tally Erp 9 ',
            'details': [
                { 'info': "Everything About Tally  ",
                'image' : Desktop,
             },
                { 'info': "Ledger Creation ",
                'image' : Desktop,
             },
                { 'info': "Invoicing",
                'image' : Desktop,
             },
            ]
        },
        {
            'id': '3',
            'name': 'Advance Tally Erp 9 ',
            'details': [
                { 'info': "Payroll  ",
                'image' : Desktop,
             },
                { 'info': "Godown  ",
                'image' : Desktop,
             },
                { 'info': "Order Processing  ",
                'image' : Desktop,
            },
                { 'info': "Financial Reports",
                'image' : Desktop,
             },
                { 'info': "Export & Import",
                'image' : Desktop,
             },
                { 'info': "Advance Topics  ",
                'image' : Desktop,
            },
            ]
        },
        {
            'id': '4',
            'name': 'Taxation in Tally Erp 9  ',
            'details': [
                { 'info': "TDS Entries in Tally " ,
                  'image' : Desktop,
                },
                { 'info': "GST Entries in Tally ",
                'image' : Desktop,
             },
                { 'info': "Tax Management in Tally ",
                'image' : Desktop,
             },
                
            ]
        },
        {
            'id': '5',
            'name': 'Compliances ',
            'details': [
                { 'info': "PAN Registration ",
                'image' : Desktop, 
            },
                { 'info': "TAN Registration ",
                'image' : Desktop,
             },
                { 'info': "Shop Act Registration",
                'image' : Desktop,
             },
            ]
        }, 
        // {
        //     'id': '6',
        //     'name': 'ADDITIONAL Power Pack with the Course ',
        //     'details': [
        //         { 'info': "Digital Freelancing Tools" },
        //         { 'info': "All About Instagram Marketing" },
        //         { 'info': "How to Make your Linkedin Profile" },
        //         { 'info': "How to Use Google Drive & Google Forms" },
        //         { 'info': "How to Manage Database" },
        //     ]
        // },
    ];
    return (
        <div className='video-container'>
            {
                videoData.map((item) =>
                    <VideoContent name={item.name} id={item.id} details={item.details}  />
                )
            }
        </div>
    );
}

export default VideoModule;