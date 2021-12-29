import React from 'react';
import Popular_Box from './Popular_Box';
import image1 from '../../../image/1.png';
import image2 from '../../../image/1.png';
import image3 from '../../../image/1.png';
import image4 from '../../../image/1.png';
import './Landing.css';
const Popular_main = () => {
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
            Image: image3
        },
        {
            Image: image3
        },
        {
            Image: image4
        }
    ];
    return (
        <div className="Popular">
            <h2 className="Popular_heading">POPULAR TRAINING</h2>
            <div className="Popular_main_box">
                <button className="left_move"></button>
                {Popular_Courses.map((course) => (
                    <Popular_Box image={course.Image} />
                ))}
                <button className="right_move"></button>
            </div>
        </div>
    );
};

export default Popular_main;