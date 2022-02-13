import './Testimonial.css';
import Slider from 'react-slick';
import star from '../../image/Star 15.svg';
import star1 from '../../image/Star 14.svg';
import star15 from '../../image/Star 17.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Testimonial_Message = () => {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrowT nextT" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrowT prevT" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };
    const Testimonial_Content = [
        {
            content: "I understand what you have taught me. The notes you provide to us are very useful. You do not need to make any changes in the course. You teach perfectly. What I have learned is very useful in the CA firm internship you have given. I want to give you 5 out of 5 stars.",
            stars: [
                { star: star1 },
                { star: star1 },
                { star: star1 },
                { star: star1 },
                { star: star1 },
            ],
            icon: "B",
            name: "Bharat K."
        },
        {
            content: "I have done the Accounts & Finance Course and I'm happy to say that it was very useful in my day to day job as I'm working at a CA firm. I really liked the regularity in everyday lectures conducted and also the excess knowledge is given by the tutor outside the course syllabus. So overall I would like to give it 4.5 stars.",
            stars: [
                { star: star1 },
                { star: star1 },
                { star: star1 },
                { star: star1 },
                { star: star15 },
            ],
            icon: "S",
            name: "Sejal P."
        },
        {
            content: "The information I got was helpful for me... the way of teaching is good... and your notes are also good your course will help me for getting jobs and internships 4.5 stars.",
            stars: [
                { star: star1 },
                { star: star1 },
                { star: star1 },
                { star: star1 },
                { star: star15 },
            ],
            icon: "P",
            name: "Prashant"
        },
        {
            content: "It was really nice and all the examples you gave were really relatable. Those examples are situations that we youth face in our day to day lives. And the answer to the questions that were asked by the students was also really good and have a more clear understanding about how we should manage time in different situations.",
            stars: [
                { star: star1 },
                { star: star1 },
                { star: star1 },
                { star: star1 },
                { star: star1 },
            ],
            icon: "J",
            name: "Janhavi K."
        }
    ];
    let settings = {
        infinite: true,
        lazyload: true,
        autoplay:true,
        slidesToShow: 3,
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
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className="Testimonial_Message">
            <Slider {...settings}>
                {Testimonial_Content.map((Test) => {
                    return (
                        <div className="Testimonial_box">
                            <div className="Test_Msg">{Test.content}</div>
                            <div className="Test_stars">
                                {Test.stars.map((star) => {
                                    return (
                                        <img className="test_stars" src={star.star}></img>
                                    )
                                })}
                            </div>
                            <div className="Test_icon"><span>{Test.icon}</span></div>
                            <div className="Test_name">{Test.name}</div>
                        </div>
                    )
                })}
            </Slider>

        </div>
    );
};

export default Testimonial_Message;