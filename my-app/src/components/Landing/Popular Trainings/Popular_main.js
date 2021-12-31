import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../../image/1.png';
import image2 from '../../../image/2.png';
import image3 from '../../../image/3.png';
import image4 from '../../../image/4.png';
// import '../Landing.css';
export default class MultipleItems extends Component {

    render() {
        let setting = {
            infinite: true,
            slidesToShow: 4,
            SlidesToScroll: 1
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
        return (
            <div className="Popular">
                <h2 className="Popular_heading">POPULAR TRAINING</h2>
                <div className="Popular_main_box">
                    {/* <div className="Left_arrow">
                        <button className="left_move">&lt;</button>
                    </div> */}
                    {Popular_Courses.map((course) => {
                        return (
                            <div >
                                <Slider {...setting}>
                                    <img src={course.Image} alt="courses" ></img>
                                </Slider>
                            </div>
                        )
                    })}
                    {/* <div className="Right_arrow">
                        <button className="right_move">&gt;</button>
                    </div> */}
                </div>
            </div>
        )
    }
};
// const Popular_main = () => {


//     const [active, setActive] = useState(0);
//     const length = Popular_Courses.length;
//     const prevSlide = () => {
//         setActive(active === 0 ? length - 1 : active - 1)
//     }
//     const nextSlide = () => {
//         setActive(active === length - 1 ? 0 : active + 1)
//     }

//     return (
        
//     );
// };

