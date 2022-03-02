import Testimonial_Image from './Testimonial_Image';
import Testimonial_Message from './Testimonial_Message';
import Testimonial_Video from './Testimonial_video';
import Rate_us from './Rate_us';
import Testimonial_UserInput from './Testimonial_UserInput';
import './Testimonial.css';

const Testimonials = () => {
    const VideoInfo = [
        {
            id: 'v1',
            name: 'Kajal Agarwal',
            text: 'It was during the second wave of COVID-19, when young students like Kajal were facing the issue of Managing their precious time, to invest in their College, skilling & other stuff. It was then, Always Sahi Academy introduced “Navratnas of Time Management”,  a free workshop for youngsters to manage their time, with the 9 best formulas. ',
            rating: '4.5/5 ⭐️',
        }
    ];
    return (
        <div className="Testimonials">
            <Testimonial_Image />
            <Testimonial_Message />
            <Testimonial_Video item={VideoInfo} />
            <Rate_us />
            <Testimonial_UserInput />
        </div>
    );
};

export default Testimonials;