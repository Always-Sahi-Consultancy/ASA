import React, { useState } from 'react';
// import Slider from 'react-slider';
import image1 from '../../../image/1.png';
import image2 from '../../../image/2.png';
import image3 from '../../../image/3.png';
import image4 from '../../../image/4.png';
import '../Landing.css';
const Popular_main = () => {
    // let setting={
    //     infinite:true,
    //     slidesToShow:4,
    //     SlidesToScroll:1
    // }
    const Popular_Courses = [
        {
            Image: image1
        },
        {
            Image: image2
        },
        {
            Image: image3
        },
        {
            Image: image2
        },
        {
            Image: image4
        }
    ];
    const [active, setActive] = useState(0);
    const length = Popular_Courses.length;
    const prevSlide = () => {
        setActive(active === 0 ? length - 1 : active - 1)
    }
    const nextSlide = () => {
        setActive(active === length - 1 ? 0 : active + 1)
    }

    return (
        <div className="Popular">
            <h2 className="Popular_heading">POPULAR TRAINING</h2>
            <div className="Popular_main_box">
                <div className="Left_arrow">
                    <button onClick={prevSlide} className="left_move">&lt;</button>
                </div>
                {Popular_Courses.map((course, index) => {
                    return (
                        <div >
                            <div className={index === active ? "Popular_Box active" : "Popular_Box"} key={index}>
                                {index === active && (<img src={course.Image} alt="courses" ></img>)}
                            </div>
                        </div>
                    )
                })}
                <div className="Right_arrow">
                    <button onClick={nextSlide} className="right_move">&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default Popular_main;