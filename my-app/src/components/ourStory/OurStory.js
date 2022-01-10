import './ourStory.css';
import './ourStory_tab.css';
import './ourStory_mobile.css';
import our_story from "../../image/OurStroy.jpg";
import OurStoryContent from './OurStoryContent';
import { useEffect } from 'react';

const OurStroy = () => {

    useEffect(() => {
        document.title = "Always Sahi Academy | Our Story";
    })

    const data = [
        "In the Middle of this Pandemic, when everything had shut down, Atharv was struck by the idea of building something online.",
        "He Started doing a Survey with the Corporates, House Makers & Students, to understand Who was affected the most due to this Pandemic?",
        "It was a time when many of the corporates who had been working hard to climb the corporate ladders, either lost their jobs or were working under tremendous work pressure to earn their living, which was affecting their Mental Health. This is when Corporates understood the necessity of a Passive Income, which could be a Milestone in the coming future, much better than a Mainstream Job.",
        "Atharv has been working Since 2016 in this Business & Side Hustle line, even when he was a student he used to take up various clients & earn his Pocket Money. He gathered all his old knowledge and updated it with a touch of new & Upcoming digital Skills in the market, that are necessary to build a Successful Side Hustle.",
        "He started with the dream of making more such Leaders, and Young Entrepreneurs who could serve the Nation, by creating more Jobs & building a healthy Income Source, so they don’t have to depend on a Mainstream Income Only.",
        "And there came an Idea of a Training Platform to create Young Leaders, in form of “Always Sahi Academy”, an Academic setup of “Always Sahi Solutions Pvt Ltd”, an ISO 9001: 2015 certified & MCA Registered Company, helping people to become successful Entrepreneurs.",
        "@ Always Sahi Academy, you get more than you need, with all the Certifications, good Exposure & Career guidance from Atharv Having Corporate Experience of more than 5 Years."
    ];
    const points = [
        "Free courses, Initially to clear your Niche & set your boundaries to start a Side Hustle.",
        "A set of Courses specially designed by the experts, most of them Personally designed by Atharv.",
        "Several Monthly Courses, to grow your skills on a Constant basis, with reputed Certifications.",
        "Free Internship Programs, & Placement Opportunities for the Job Searching Individuals.",
        "Free Startup Consultancies for Individuals to start their Side Hustles.",
        "Certifications from an ISo 9001:2015 certified, & MCA Registered Organization.",
        "Weekly Live Group Calls & Meetings to clear all your queries, and solve your problems.",
        "Constant Calls & support from experts and trainers on a Recurring Basis+.",
        "Freebies in the form of PDFs, Resource papers, & Several Free Toolkits, helpful for you to grow in Corporate as well as Build your Side Hustle."
    ]
    return (
        <div className="story">
            <div className='story_photo'>
                <img src={our_story} className="story__image" alt="Our Story Cover"></img>
                <h1 className="Our_story_title">OUR STORY</h1>
            </div>
            <div className="story__container">
                {data.map((detail) =>
                    <OurStoryContent info={detail} />
                )}

                <p>Always Sahi Academy has helped more than 400+ Individuals to grow from where they started,<a className="story__link"> do you want to be the next?</a></p>
            </div>
            <div className="story_9points">
                {points.map((point) => {
                    return (
                        <div className="story_point">{point}</div>
                    )
                })}
            </div>
        </div>

    );
}

export default OurStroy;