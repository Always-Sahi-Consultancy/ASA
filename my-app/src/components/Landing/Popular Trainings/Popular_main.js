import React from 'react';
import Slider from 'react-slick';
import image1 from '../../../image/coding1.jpg';
import image2 from '../../../image/prehistoric1.png';
import image3 from '../../../image/account1.png';
import image4 from '../../../image/taxation2.jpg';
import image5 from '../../../image/video-editing-services.png';
import image6 from '../../../image/entrepreneur.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../Landing.css';
import {Link} from 'react-router-dom';

const Popular_main = () => {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const Popular_Courses = [
        {
            Image: image1,
            Name: "CODING AND WEB DEVELOPOMENT",
            SubName: "Gain Problem solving skills"
        },
        {
            Image: image2,
            Name: "ANIMATION",
            SubName: "Showcase your Imagination"
        },
        {
            Image: image3,
            Name: "ACCOUNTS AND FINANCE",
            SubName: "Manage your Expenses"
        },
        {
            Image: image4,
            Name: "PROFILE BUILDING & DEVELOPMENT",
            SubName: "Prepare for Financial Years"
        },
        {
            Image: image5,
            Name: "VIDEO EDITING",
            SubName: "Gain Problem solving skills"
        },
        {
            Image: image6,
            Name: "BUSINESS AND FREELANCING",
            SubName: "Gain Problem solving skills"
        }
    ];
    let settings = {
        infinite: true,
        lazyload: true,
        autoplay:true,
        slidesToShow: 4,
        speed: 2000,
        autoplaySpeed:2000,
        pauseOnHover:true,
        centerPadding: 0,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        SlidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className="Popular">
            <h2 className="Popular_heading">POPULAR TRAINING</h2>
            <Slider {...settings}>
                {Popular_Courses.map((course) => {
                    return (
                        <Link to="/CoursePage">
                            <div className="Popular_Box">
                                <img src={course.Image} alt="courses" ></img>
                                <div className="details">
                                    <div className="Popular_course_name">{course.Name}</div>
                                    <div className="Popular_course_sub">{course.SubName}</div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </Slider>
        </div>
    );
};

export default Popular_main;

