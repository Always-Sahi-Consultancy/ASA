import React from 'react';
import Slider from 'react-slick';
import image1 from '../../../image/1.png';
import image2 from '../../../image/2.png';
import image3 from '../../../image/3.png';
import image4 from '../../../image/4.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../Landing.css';

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
    let setting = {
        infinite: true,
        lazyload: true,
        slidesToShow: 4,
        speed: 300,
        centerPadding: 0,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        SlidesToScroll: 1
    };
    // const [active, setActive] = useState(0);
    // const length = Popular_Courses.length;
    // const prevSlide = () => {
    //     setActive(active === 0 ? length - 1 : active - 1)
    // }
    // const nextSlide = () => {
    //     setActive(active === length - 1 ? 0 : active + 1)
    // }
    // className = "Popular_main_box"
    // className = "Popular_Box"
    return (
        <div className="Popular">
            <h2 className="Popular_heading">POPULAR TRAINING</h2>
            <Slider {...setting}>
                {Popular_Courses.map((course) => {
                    return (
                        <div className="Popular_Box">
                            <img src={course.Image} alt="courses" ></img>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default Popular_main;

